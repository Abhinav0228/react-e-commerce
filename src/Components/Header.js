import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">My E-Commerce</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-white rounded-full text-black py-1 px-4">Log In</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
