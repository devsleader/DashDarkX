import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import StatCard from "../StatCard/StatCard";
import CountryFlagDropdown from "../FlagDropdown/CountryFlagDropdown";
import { BsArrowUpRight, BsBellFill } from "react-icons/bs";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { FaHeart } from "react-icons/fa";
import { IoBagSharp, IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import Logo from "../../assets/logo.png";
import MyResponsiveRadialBar from "../RadialChart/RadialBarChart";
import CustomDrawer from "../Drawer/Drawer";
import { HiArrowNarrowDown } from "react-icons/hi";
import MyResponsiveBar from "../BarChart/BarChart";

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
        <Box className="grid sm:grid-cols-2 gap-8 lg:grid-cols-4 px-4">
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
        <Box className="grid gap-8 lg:grid-cols-3 px-4 mt-4">
          <Box className=" bg-[#0a1739] rounded-lg p-8 mt-4">
            <Box className="flex items-center justify-between">
              <Typography variant="h6" className="text-white ">
                Website Visitors
              </Typography>
              <button className="flex items-center gap-2 bg-[#0a1330] px-4 py-2 rounded-lg text-white">
                Export
                <HiArrowNarrowDown />
              </button>
            </Box>
            <Box className="h-[300px]">
              <MyResponsiveRadialBar />
            </Box>
            <Box className="flex justify-between text-white">
              <Box className="flex items-center gap-4">
                <Box className="h-3 w-3 bg-[#cc3cfe] rounded-full"></Box>
                <Typography>Organic</Typography>
              </Box>
              <Typography>80%</Typography>
            </Box>
            <Box className="flex justify-between text-white mt-4">
              <Box className="flex items-center gap-4">
                <Box className="h-3 w-3 bg-[#0f43fb] rounded-full"></Box>
                <Typography>Social</Typography>
              </Box>
              <Typography>60%</Typography>
            </Box>
            <Box className="flex justify-between text-white mt-4">
              <Box className="flex items-center gap-4">
                <Box className="h-3 w-3 bg-[#00c2ff] rounded-full"></Box>
                <Typography>Direct</Typography>
              </Box>
              <Typography>50%</Typography>
            </Box>
          </Box>
          <Box className="bg-[#0a1739] rounded-lg mt-4 col-span-2 p-8">
            <Typography variant="h6" className="text-white">
              Revenue by customer type
            </Typography>
            <Box className="flex items-center gap-8 mt-2">
              <Box className="flex items-center gap-2">
                <Typography variant="h4" className="text-white mt-2">
                  $240.8K
                </Typography>
                <Typography
                  variant="body2"
                  className={`text-green-500 bg-green-300/20 px-1 border text-xs rounded-xs flex items-center gap-1`}
                >
                  14.8%
                  <BsArrowUpRight />
                </Typography>
              </Box>
              <Box className="flex text-white gap-4">
                <Box className="flex items-center gap-2">
                  <Box className="h-3 w-3 bg-[#cc3cfe] rounded-full"></Box>
                  <Typography>Current Client</Typography>
                </Box>
                <Box className="flex items-center gap-2">
                  <Box className="h-3 w-3 bg-[#0f43fb] rounded-full"></Box>
                  <Typography>Subscribe</Typography>
                </Box>
                <Box className="flex items-center gap-2">
                  <Box className="h-3 w-3 bg-[#00c2ff] rounded-full"></Box>
                  <Typography>New Customer</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="h-[450px]">
              <MyResponsiveBar />
            </Box>
          </Box>
        </Box>
      </Box>
      <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Dashboard;
