import { useState } from "react";
import { NavLink } from "react-router-dom";

import SettingsDialog from "./SettingsDialog";

type NavBarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ darkMode, setDarkMode }: NavBarProps) {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const handleToggleOverlay = (): void => {
    setShowOverlay((prev) => !prev);
  };

  return (
    <nav className="flex justify-center gap-5">
      <NavLink
        className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white dark:bg-blue-800" 
        to={"/"}
      >
        All Entries
      </NavLink>
      <NavLink
        className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white"
        to={"/create"}
      >
        New Entry
      </NavLink>
      <button
        className="m-3 p-4 font-semibold rounded-md bg-blue-400 hover:bg-blue-500"
        onClick={handleToggleOverlay}
      >
        ⚙️
      </button>

      {showOverlay && (
        <SettingsDialog
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleToggleOverlay={handleToggleOverlay}
        />
      )}
    </nav>
  );
}
