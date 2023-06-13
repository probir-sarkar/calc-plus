"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import { HiBars3 } from "react-icons/hi2";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className="bg-amber-50 container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="text-amber-500 text-2xl"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <HiBars3 />
            </button>
          </div>
        </div>

        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </>
  );
}
