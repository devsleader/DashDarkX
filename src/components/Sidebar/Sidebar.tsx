import { Box, Typography } from "@mui/material";
import {
  FaHome,
  FaUsers,
  FaDollarSign,
  FaCog,
  FaLayerGroup,
  FaShieldAlt,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SidebarItem {
  text: string;
  icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  { text: "Dashboard", icon: <FaHome /> },
  { text: "Features", icon: <FaLayerGroup /> },
  { text: "Users", icon: <FaUsers /> },
  { text: "Pricing", icon: <FaDollarSign /> },
  { text: "Integrations", icon: <FaCog /> },
  { text: "Authentication", icon: <FaShieldAlt /> },
  { text: "Settings", icon: <FaCog /> },
];

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<string>("Dashboard");

  const handleClick = (text: string) => {
    setActive(text);
  };
  return (
    <Box
      sx={{ display: { lg: "flex", xs: "none" } }}
      className="bg-[#081027] h-screen p-5 flex flex-col gap-7 border-r border-[#1e1e40] fixed"
    >
      <Box className="flex items-center p-4 gap-2">
        <img src={Logo} alt="" className="h-7 w-7" />
        <h2 className="text-xl font-semibold text-white">Dashdark X</h2>
      </Box>
      <Box className="bg-[#0a1739] text-white border border-[#1a2541] rounded gap-2 flex items-center p-2">
        <IoSearch className="text-neutral-400 h-5 w-5" />
        <input
          type="text"
          className="focus:outline-none"
          placeholder="Search for..."
        />
      </Box>
      <Box>
        {sidebarItems.map((item) => (
          <Typography
            onClick={() => handleClick(item.text)}
            key={item.text}
            variant="body1"
            className={` ${
              active === item.text ? "text-[#cc3cfe]" : "text-white"
            }  text-lg flex items-center gap-2 p-2 cursor-pointer`}
          >
            {item.icon}
            {item.text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
