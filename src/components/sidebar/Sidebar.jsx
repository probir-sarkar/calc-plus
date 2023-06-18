"use client";
import { useState } from "react";
import "./Sidebar.scss";
import React from "react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarData = [
    {
      title: "Getting Started",
      links: [
        { label: "Installation", href: "#" },
        { label: "Plugins", href: "#" },
        { label: "Migrations", href: "#" },
        { label: "Appearance", href: "#" },
        { label: "Mamba UI", href: "#" },
      ],
    },
    {
      title: "Dashboard",
      links: [
        { label: "Header", href: "#" },
        { label: "Drawer", href: "#" },
        { label: "Page Title", href: "#" },
        { label: "Menus", href: "#" },
        { label: "Sidebar", href: "#" },
        { label: "Footer", href: "#" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Homepage", href: "#" },
        { label: "Users", href: "#" },
        { label: "Tools", href: "#" },
        { label: "Settings", href: "#" },
      ],
    },
    {
      title: "Misc",
      links: [
        { label: "Tutorials", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Getting Started",
      links: [
        { label: "Installation", href: "#" },
        { label: "Plugins", href: "#" },
        { label: "Migrations", href: "#" },
        { label: "Appearance", href: "#" },
        { label: "Mamba UI", href: "#" },
      ],
    },
    {
      title: "Dashboard",
      links: [
        { label: "Header", href: "#" },
        { label: "Drawer", href: "#" },
        { label: "Page Title", href: "#" },
        { label: "Menus", href: "#" },
        { label: "Sidebar", href: "#" },
        { label: "Footer", href: "#" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Homepage", href: "#" },
        { label: "Users", href: "#" },
        { label: "Tools", href: "#" },
        { label: "Settings", href: "#" },
      ],
    },
    {
      title: "Misc",
      links: [
        { label: "Tutorials", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
  ];
  return (
    <>
      {/* Top Nav Bar */}
      <div className="flex justify-between items-center h-16 fixed top-0 left-0 w-full bg-purple-700 text-white px-5">
        <h1 className="text-2xl font-bold tracking-widest uppercase">CalcPlus</h1>
        <button
          className="text-4xl font-bold tracking-widest uppercase d-none sm:hidden block "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <HiOutlineXMark /> : <HiBars3 />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`h-[calc(100vh-4rem)] ${
          isSidebarOpen ? " inset-y-0 w-full opacity-100" : " w-0 opacity-0"
        } overflow-y-auto fixed top-16 left-0 sm:w-80 scroll-bar bg-white ease-liner duration-300 sm:opacity-100`}
      >
        {sidebarData.map((section, index) => (
          <div className="space-y-2 p-5 " key={index}>
            <h2 className="text-sm text-gray-500 font-extrabold uppercase ">{section.title}</h2>
            <div className="flex flex-col ">
              {section.links.map((link, index) => (
                <a
                  rel="noopener noreferrer"
                  className="text-lg font-medium py-3"
                  href={link.href}
                  key={index}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
