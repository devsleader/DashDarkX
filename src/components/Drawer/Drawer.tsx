import { Box,Drawer, Typography } from '@mui/material';
import React, { useState } from 'react'
import { FaCog, FaDollarSign, FaHome, FaLayerGroup, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import Logo from "../../assets/logo.png";

interface SidebarItem {
  text: string;
  icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  { text: "Dashboard", icon: <FaHome /> },
  { text: "Features", icon: <FaLayerGroup /> },
  { text: "Users", icon: <FaUsers /> },
  { text: "Pricing", icon: <FaDollarSign /> },
  { text: "Integrations", icon: <FaCog  /> },
  { text: "Authentication", icon: <FaShieldAlt /> },
  { text: "Settings", icon: <FaCog /> },
];


interface CustomDrawerProps {
    open: boolean;
    toggleDrawer: (newOpen: boolean) => void;
  }
  
const CustomDrawer :React.FC<CustomDrawerProps> = ({open, toggleDrawer}) => {
    const [active, setActive] = useState<string>("Dashboard");
  
    const handleClick = (text: string) => {
      setActive(text);
    };
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} sx={{display: {lg: "none", xs: "block"}}}>
    <Box className="bg-[#081027] h-screen p-5 flex flex-col gap-7 border-r border-[#1e1e40]">
      <Box className="flex items-center p-4 gap-2">
        <img src={Logo} alt="" className="h-7 w-7" />
        <h2 className="text-2xl font-semibold text-white">Dashdark X</h2>
      </Box>
      <Box className="bg-[#0a1739] text-white border border-[#1a2541] rounded gap-2 flex items-center p-2">
        <IoSearch className="text-neutral-400 h-6 w-7" />
        <input
          type="text"
          className="focus:outline-none w-full"
          placeholder="Search for.."
        />
      </Box>
      <Box>
        {sidebarItems.map((item) => (
          <Typography
          onClick={() => {
            handleClick(item.text); 
            toggleDrawer(false);
          }}
            key={item.text}
            variant="h6"
            className={` ${
              active === item.text ? "text-[#cc3cfe]" : "text-white"
            }  text-2xl flex items-center gap-4 p-3 cursor-pointer`}
          >
            {item.icon}
            {item.text}
          </Typography>
        ))}
      </Box>
    </Box>
  </Drawer>
  )
}

export default CustomDrawer