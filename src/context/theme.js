// app/context/theme.js

"use client";
import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ThemeContext.Provider value={{ isSidebarOpen, setSidebarOpen, toggleSidebar }}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
