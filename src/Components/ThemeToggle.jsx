import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

import { useGlobalContext } from "./contect";

const ThemeToggle = () => {
  const { toggleDarkTheme, isDark } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDark ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <IoSunny className="toggle-icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
