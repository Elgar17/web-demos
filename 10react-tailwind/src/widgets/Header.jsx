import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="flex justify-between items-center h-16 border-b border-gray-200">
      <img src={logo} alt="" className="w-8 h8" />
      <nav className="flex items-center">
        <a href="#">登录</a>
        <a className="ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center" >注册</a>
      </nav>
    </header>
  );
}

export default Header;
