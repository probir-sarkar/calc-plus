"use client";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div onClick={toggleTheme} className="cursor-pointer flex">
      <MdOutlineWbSunny className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" size={"22px"} />
      <RiMoonClearFill
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={"22px"}
      />
    </div>
  );
};

export default ThemeSwitcher;
