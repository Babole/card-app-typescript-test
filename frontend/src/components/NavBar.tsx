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
    <nav className="grid-cols-2 sm:grid grid-cols-3 justify-items-center items-center">
      <div className="col-start-1 sm:col-start-2 flex justify-center">
        <NavLink
          className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white"
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
      </div>

      <button
        className="m-3 p-4 font-semibold rounded-md bg-blue-400 hover:bg-blue-500 ml-auto"
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
