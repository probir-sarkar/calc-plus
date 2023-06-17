"use client";
import { useState } from "react";
import "./Sidebar.scss";
import React from "react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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

  const hideSidebarClass = isSidebarOpen ? "border-x border-green-500" : "w-0";
  return (
    <>
      <aside
        id="style-8"
        className={`bg-zinc-950 h-screen sm:static absolute  top-0 left-0 w-full sm:w-60`}
      >
        <nav className="text-sm">
          <div className="flex justify-between items-center p-5 sticky top-0 text-zinc-950 bg-green-500 border-b border-green-500">
            <h1 className="text-2xl font-bold tracking-widest uppercase">CalcPlus</h1>
            <button
              className="text-2xl font-bold tracking-widest uppercase d-none sm:hidden block "
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <HiOutlineXMark /> : <HiBars3 />}
            </button>
          </div>
          <div className={`ease-liner duration-300 overflow-y-auto ${hideSidebarClass} w-full `}>
            {sidebarData.map((section, index) => (
              <div className="space-y-2 p-5 border-b border-green-500" key={index}>
                <h2 className="text-sm font-semibold tracking-widest uppercase ">
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
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
