"use client";
import { useState } from "react";
import "./Sidebar.scss";
import React from "react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarData = [
    {
      title: "Health and Fitness",
      links: [{ label: "BMI Calculator", href: "/health-and-fitness/bmi-calculator" }],
    },
    {
      title: "Unit Converters",
      links: [
        { label: "Length", href: "/unit-converters/length" },
        { label: "Area", href: "/unit-converters/area" },
      ],
    },
    {
      title: "Finance",
      links: [
        { label: "EMI Calculator", href: "/finance/emi-calculator" },
        { label: "GST Calculator", href: "/finance/gst-calculator" },
        { label: "FD Calculator", href: "/finance/fd-calculator" },
      ],
    },
    {
      title: "Mathematics",
      links: [
        { label: "Percentage Calculator", href: "/mathematics/percentage-calculator" },
        { label: "Age Calculator", href: "/mathematics/age-calculator" },
        { label: "Factorial Calculator", href: "/mathematics/factorial-calculator" },
      ],
    },
  ];
  return (
    <div className="z-20">
      <div
        className={`sm:hidden ${
          isSidebarOpen ? "fixed top-0 left-0 right-0 bottom-0 bg-purple-700 opacity-10" : " "
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      {/* Top Nav Bar */}
      <div className="h-20  fixed top-0 left-0 w-full flex items-center px-5">
        <div className="flex justify-between items-center h-16 w-full bg-purple-700 text-white px-5 rounded-2xl drop-shadow-xl border border-gray-500  ">
          <p className="text-2xl font-bold tracking-widest uppercase">CalcPlus</p>
          <button
            className="text-4xl font-bold tracking-widest uppercase d-none sm:hidden block "
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <HiOutlineXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`py-5 sm:px-5 h-[calc(100vh-5rem)] fixed top-20 sm:left-0 sm:w-auto ease-liner duration-500 overflow-hidden ${
          isSidebarOpen ? "w-full px-5 left-0" : "left-[-100%]"
        }`}
      >
        <div
          className={`h-full sm:w-80 scroll-bar sm:opacity-100 p-5 pr-2 rounded-2xl drop-shadow-xl border-2 border-black bg-white `}
        >
          <div className="h-full overflow-y-auto scroll-bar">
            {sidebarData.map((section, index) => (
              <div className="space-y-2 p-5" key={index}>
                <h2 className="text-sm text-gray-500 font-extrabold uppercase">{section.title}</h2>
                <div className="flex flex-col">
                  {section.links.map((link, index) => (
                    <a
                      rel="noopener noreferrer"
                      className="text-lg font-medium py-3 display-block text-gray-700 hover:text-purple-700"
                      href={link.href}
                      key={index}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
