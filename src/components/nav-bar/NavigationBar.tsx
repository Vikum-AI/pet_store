"use-client";

import { useEffect, useState } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const NavigationBar = ({ setTrigger, isHome }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logOutTrigger, setLogOutTrigger] = useState(false);
  const [pets, setPets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [logOutTrigger]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://lcbv4eko7hewypbhllatabxcku0tibwl.lambda-url.us-east-1.on.aws/"
      );

      setPets(data.data);
      console.log(data.data);
    })();
  }, []);

  return (
    <Navbar className={isHome ? "bg-gray-900 bg-opacity-20" : "bg-blue-600"}>
      <Navbar.Brand>
        <span className="self-center text-white whitespace-nowrap text-xl font-semibold">
          OwnAPet
        </span>
      </Navbar.Brand>
      <div className="flex order-2">
        <Dropdown
          color="transparent"
          arrowIcon={false}
          label={
            <Avatar alt="User settings" img="/images/avatar.jpg" rounded />
          }
        >
          {isAuthenticated ? (
            <Dropdown.Item
              onClick={() => {
                localStorage.removeItem("token");
                setLogOutTrigger((initValue) => !initValue);
                if (setTrigger) setTrigger((initValue: any) => !initValue);
              }}
            >
              Logout
            </Dropdown.Item>
          ) : (
            <Dropdown.Item onClick={() => router.push("/sign-in")}>
              Login
            </Dropdown.Item>
          )}
        </Dropdown>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="/home">
          <p className="text-white text-md">Home</p>
        </Navbar.Link>
        <Navbar.Link active href="/view_pets">
          <p className="text-white text-md">View Store</p>
        </Navbar.Link>
        {isAuthenticated ? (
          <Navbar.Link active href="/view_store">
            <p className="text-white text-md">Inventory</p>
          </Navbar.Link>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
