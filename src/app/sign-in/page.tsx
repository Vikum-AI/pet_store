"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();

  const getAccessToken = () => {
    // Get the hash part of the URL
    const hash = window.location.hash;

    // Check if the hash contains the "id_token" parameter
    if (hash.includes("id_token=")) {
      // Split the hash using "&" as a delimiter to get individual parameters
      const params = hash.split("&");

      // Loop through the parameters to find the "id_token" parameter
      for (const param of params) {
        if (param.startsWith("id_token=")) {
          // Extract the value of the "id_token" parameter
          const idToken = param.split("=")[1];

          // Now you have the id_token value
          console.log("id_token:", idToken);
          return idToken;
        }
      }
    } else return null;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) router.push("/home");
    else {
      const hash = window.location.hash;

      if (hash) {
        const token = getAccessToken();
        if (token) {
          localStorage.setItem("token", token);
          router.push("/home");
        } else {
          router.replace(
            "https://awesome-pets.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=16e6ui6h759r8gr1m7hmhsqirg&response_type=token&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsign-in%2F"
          );
        }
      } else {
        router.replace(
          "https://awesome-pets.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=16e6ui6h759r8gr1m7hmhsqirg&response_type=token&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsign-in%2F"
        );
      }
    }
  }, [router]);

  return <div>Authenticating...</div>;
}
