"use client";

import React, { useState } from "react";
import { Menu, ShoppingBag, User, X } from "lucide-react";

const Header = () => {
  const [cartCount, setCartCount] = useState(1);
  const [isOpen, setisOpen] = useState(false);

  const togleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b bg-white shadow-sm">
      {/* desktop */}
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Kiri */}
        <nav className="hidden md:flex gap-4 font-semibold text-base text-gray-800">
          <a href="#" className="hover:text-blue-600">
            Beranda
          </a>
          <div className="relative">
            <a href="#" className="hover:text-blue-600">
              Katalog
            </a>
            <div className="absolute left-0 top-full  h-[1px] w-full bg-gray-800 " />
          </div>
          <a href="#" className="hover:text-blue-600">
            Kontak
          </a>
        </nav>
        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={togleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/* Tengah */}
        <div className="text-xl font-bold text-gray-900">Nimbus</div>
        {/* Kanan */}
        <div className="flex gap-4 font-medium text-base items-center ">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-gray-800">John Alaska</span>
            <User size={20} />
          </div>
          <div className={`relative ${isOpen ? "hidden" : "block"} md:block`}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <p className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] h-[14px] w-[14px] flex items-center justify-center rounded-full ">
                {cartCount}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full  bg-white shadow-md z-10">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <button>
              <X size={20} onClick={togleMenu} />
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-gray-900">
              Nimbus
            </div>
          </div>

          <div className="flex flex-col h-[calc(100vh-53px)] px-4 ">
            {/* Menu */}
            <div className="flex-1 overflow-auto">
              <ul className="flex flex-col font-semibold text-base">
                <a href="#">
                  <li className="bg-[#F1F5F9] px-3 py-2">Beranda</li>
                </a>
                <a href="#">
                  <li className="px-3 py-2">Katalog</li>
                </a>
                <a href="#">
                  <li className="px-3 py-2">Kontak</li>
                </a>
              </ul>
            </div>

            {/* Pengguna */}
            <button className="flex items-center gap-2 py-6">
              <User size={20} />
              <span className="text-gray-800">John Alaska</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
