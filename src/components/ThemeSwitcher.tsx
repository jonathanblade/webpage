import { type FC, useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

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
      className="p-5 align-middle opacity-50 transition duration-500 hover:opacity-100"
      onClick={onClick}
    >
      {theme === "light" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
    </button>
  );
};

export default ThemeSwitcher;
