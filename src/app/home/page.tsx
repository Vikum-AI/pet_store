"use client";

import NavigationBar from "@/components/nav-bar/NavigationBar";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[url('/images/bg-1.jpg')] w-screen h-screen bg-cover max-h-screen">
      <NavigationBar isHome />
      <div className="flex items-center justify-center mt-20">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-9xl font-semibold opacity-30 text-gray-900">
            Adopt A Pet!
          </h1>
          <h3 className="text-3xl text-gray-900 opacity-60 font-medium">
            Discover a World of Pet Love at OwnAPet!
          </h3>
          <Link href='/view_pets' className="px-4 py-2 bg-blue-600 bg-opacity-60 rounded-md">
            View Store
          </Link>
        </div>
      </div>

      <footer className="flex items-end h-[60vh]">
        <div className="w-full flex justify-between px-10">
          <section>
            <h4>Store Location: </h4>
            <p>1234 Pet Street, Your City, ST 12345</p>
          </section>

          <section>
            <h4>Business Hours: </h4>
            <p>Mon-Fri 9:00am - 6:00pm Sat-Sun 10:00am - 4:00pm</p>
          </section>

          <section>
            <h4>Telephone Number: </h4>
            <p>123-456-7890</p>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default page;
