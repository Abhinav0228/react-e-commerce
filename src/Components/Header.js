import React, { useState } from "react";

const Header = () => {
  const [ search, setSearch ] = useState("")

  const changeInput = (event)=> {
    setSearch(event.target.value)

  }
  return (
    <header className="bg-blue-500 text-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">My E-Commerce</h1>
        <nav className="flex items-center space-x-4">
          <input type="text" className="rounded-xl border-0" onChange={changeInput} />
          {search}
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
