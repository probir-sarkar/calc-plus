"use client";
import { useState } from "react";
import "./Sidebar.scss";
import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
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
  const hideSidebarClass = isSidebarOpen ? "w-full sm:w-60" : "w-0";
  return (
    <>
      <aside
        id="style-8"
        className={`  bg-amber-50 text-black h-screen overflow-y-auto sidebar absolute top-0 left-0 ease-liner duration-300 ${hideSidebarClass}`}
      >
        <nav className="text-sm">
          <div className="flex justify-between items-center p-5 sticky bg-amber-50 border-b border-black">
            <h1 className="text-2xl font-bold tracking-widest uppercase text-black">Mamba</h1>

            <button
              className="text-2xl font-bold tracking-widest uppercase text-black"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <HiOutlineXMark />
            </button>
          </div>
          {sidebarData.map((section, index) => (
            <div className="space-y-2 p-5 border-b border-black" key={index}>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-black">
                {section.title}
              </h2>
              <div className="flex flex-col space-y-2 pl-5 ">
                {section.links.map((link, index) => (
                  <a rel="noopener noreferrer" href={link.href} key={index}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
