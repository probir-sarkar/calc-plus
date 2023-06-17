"use client";
import { useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { useThemeContext } from "../context/theme";

export default function Home() {
  const { isSidebarOpen, toggleSidebar, setSidebarOpen } = useThemeContext();
  return <div className="main w-full"></div>;
}
