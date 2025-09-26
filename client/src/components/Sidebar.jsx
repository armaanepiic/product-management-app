import clsx from "clsx";
import { useNavigate } from "react-router";

import useTheme from "../hooks/useTheme";

function MenuItem({ item, theme }) {
  const navigate = useNavigate();

  return (
    <li>
      <button
        onClick={() => navigate(`/${item.toLowerCase()}`)}
        className={clsx(
          "w-full text-left p-2 rounded hover:bg-opacity-80 transition-colors ",
          theme === "light" && "hover:bg-gray-200",
          theme === "dark" && "hover:bg-gray-600"
        )}
      >
        {item}
      </button>
    </li>
  );
}

export default function Sidebar() {
  const { theme } = useTheme();
  const menuItems = ["Dashboard", "Products", "Profile", "Settings", "Help"];

  return (
    <aside
      className={clsx(
        "w-64 p-4 transition-colors duration-300",
        theme === "light" && "bg-gray-50 text-gray-800",
        theme === "dark" && "bg-gray-700 text-white"
      )}
    >
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItem key={item} item={item} theme={theme} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
