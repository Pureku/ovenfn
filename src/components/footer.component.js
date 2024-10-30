import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100vw", // ใช้ viewport width
          backgroundColor: "white",
        }}
        className="bg-white rounded-lg shadow m-4 dark:bg-gray-800"
      >
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
