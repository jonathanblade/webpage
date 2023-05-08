import { type FC, useState, useEffect } from "react";

import SunIcon from "@components/icons/Sun";
import MoonIcon from "@components/icons/Moon";

const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme : "dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!isMounted) return null;

  return (
    <button
      className="inline-block p-5 align-middle opacity-50 transition duration-300 hover:opacity-100"
      onClick={onClick}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
