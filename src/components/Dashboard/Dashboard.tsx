import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import StatCard from "../StatCard/StatCard";
import CountryFlagDropdown from "../FlagDropdown/CountryFlagDropdown";
import { BsBellFill } from "react-icons/bs";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { FaHeart } from "react-icons/fa";
import { IoBagSharp, IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import Logo from "../../assets/logo.png";
import MyResponsiveRadialBar from "../RadialChart/RadialBarChart";
import CustomDrawer from "../Drawer/Drawer";
import { HiArrowNarrowDown } from "react-icons/hi";

const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box className="flex flex-col md:flex-row">
      <Box className="flex-1 p-4">
        <Box className="flex items-center justify-between md:p-4">
          <Typography
            variant="h5"
            className="text-white font-bold lg:block hidden"
          >
            Analytics
          </Typography>
          <Box className="lg:hidden flex gap-2 items-center">
            <IconButton onClick={toggleDrawer(true)}>
              <IoMenu className="text-neutral-300" />
            </IconButton>
            <img src={Logo} alt="" className="h-5 w-5" />
          </Box>
          <Box className="flex items-center sm:gap-4 ">
            <CountryFlagDropdown />
            <Tooltip title="Notifications">
              <span>
                <BsBellFill className="text-neutral-400 h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip title="Profile">
              <span>
                <ProfileDropdown />
              </span>
            </Tooltip>
          </Box>
        </Box>

        {/* Save Products, Stock Products, etc. */}
        <Box className="grid sm:grid-cols-2 gap-4 mt-4 lg:grid-cols-4">
          <StatCard
            title="Save Products"
            value="50.8K"
            change="28.4%"
            icon={<FaHeart color="#cc3cfe" />}
            positive
          />
          <StatCard
            title="Stock Products"
            value="23.6K"
            change="12.6%"
            icon={<GiShoppingBag color="#cc3cfe" />}
            positive
          />
          <StatCard
            title="Sale Products"
            value="756"
            change="3.1%"
            icon={<IoBagSharp color="#cc3cfe" />}
            negative
          />
          <StatCard
            title="Average Revenue"
            value="2.3K"
            change="11.3%"
            icon={<PiCurrencyDollarSimpleBold color="#cc3cfe" />}
            positive
          />
        </Box>

        {/* Chart Section */}
        <Box className=" bg-[#1e1e40] rounded-lg mt-4">
          <Box className="flex items-center justify-between p-4">
            <Typography variant="h6" className="text-white p-4">
              Website Visitors
            </Typography>
            <button className="flex items-center gap-2 bg-[#0a1330] p-2 rounded-br-lg rounded-bl-lg text-white">
              Export
              <HiArrowNarrowDown />
            </button>
          </Box>
          <Box className="h-[350px]">
            <MyResponsiveRadialBar />
          </Box>
        </Box>
      </Box>
      <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Dashboard;
