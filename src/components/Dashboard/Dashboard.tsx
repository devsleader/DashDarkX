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
import IPhone from "../../assets/iphone.png";
import Watch from "../../assets/watch.png";
import CustomAreaChart from "../AreaChart/AreaChart";
import OrdersTable from "../OrderTable/OrderTable";

const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        paddingRight: {sm:4, xs:2},
        paddingLeft: {lg: 38 ,sm:4, xs:2},
      }}
      className="bg-[#081025] pb-8"
    >
      <Box className="flex items-center justify-between py-4">
        <Typography
          variant="h5"
          sx={{ display: { lg: "block", xs: "none" } }}
          className="text-white font-bold "
        >
          Analytics
        </Typography>
        <Box
          sx={{ display: { lg: "none", xs: "flex" } }}
          className="gap-2 items-center"
        >
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
      <Box className="grid sm:grid-cols-2 gap-8 lg:grid-cols-4">
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
      <Box className="grid gap-8 lg:grid-cols-3 grid-cols-1 mt-4">
        <Box className=" bg-[#0a1739] rounded-lg sm:p-8 p-4 mt-4 ">
          <Box className="flex items-center justify-between">
            <Typography variant="body1" className="text-white ">
              Website Visitors
            </Typography>
            <button className="flex items-center gap-2 bg-[#0a1330] px-4 py-1 text-base rounded-md text-white cursor-pointer">
              Export
              <HiArrowNarrowDown />
            </button>
          </Box>
          <Box className="h-[280px]">
            <MyResponsiveRadialBar />
          </Box>
          <Box className="flex justify-between text-white">
            <Box className="flex items-center gap-4">
              <Box className="h-2 w-2 bg-[#cc3cfe] rounded-full"></Box>
              <Typography variant="body2">Organic</Typography>
            </Box>
            <Typography variant="body2">80%</Typography>
          </Box>
          <Box className="flex justify-between text-white mt-6">
            <Box className="flex items-center gap-4">
              <Box className="h-2 w-2 bg-[#0f43fb] rounded-full"></Box>
              <Typography variant="body2">Social</Typography>
            </Box>
            <Typography variant="body2">60%</Typography>
          </Box>
          <Box className="flex justify-between text-white mt-6">
            <Box className="flex items-center gap-4">
              <Box className="h-2 w-2 bg-[#00c2ff] rounded-full"></Box>
              <Typography variant="body2">Direct</Typography>
            </Box>
            <Typography variant="body2">50%</Typography>
          </Box>
        </Box>
        <Box className="bg-[#0a1739] rounded-lg mt-4 lg:col-span-2 sm:p-8 p-4">
          <Typography variant="body1" className="text-[#aeb9e1]">
            Revenue by customer type
          </Typography>
          <Box className="flex items-center gap-4 mt-2 md:flex-row flex-col">
            <Box className="flex items-center gap-2 ">
              <Typography variant="h5" className="text-white mt-2">
                $240.8K
              </Typography>
              <Typography
                variant="caption"
                className={`text-green-500 bg-green-300/20 px-1 border text-xs rounded-xs flex items-center gap-1`}
              >
                14.8%
                <BsArrowUpRight />
              </Typography>
            </Box>
            <Box className="flex text-white gap-4 sm:flex-row flex-col justify-center items-center w-full">
              <Box className="flex items-center gap-2">
                <Box className="h-2 w-2 bg-[#cc3cfe] rounded-full"></Box>
                <Typography variant="caption" className="text-[#aeb9e1]">
                  Current Client
                </Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <Box className="h-2 w-2 bg-[#0f43fb] rounded-full"></Box>
                <Typography variant="caption" className="text-[#aeb9e1]">
                  Subscribe
                </Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <Box className="h-2 w-2 bg-[#00c2ff] rounded-full"></Box>
                <Typography variant="caption" className="text-[#aeb9e1]">
                  New Customer
                </Typography>
              </Box>
            </Box>
            {/* <Box className="">
              <CustomDatePicker />
            </Box> */}
          </Box>
          <Box className="h-[360px]">
            <MyResponsiveBar />
          </Box>
        </Box>
      </Box>

      <Box className="grid gap-8 lg:grid-cols-3 grid-cols-1 mt-4">
        <Box className="bg-[#0a1739] rounded-lg sm:p-8 p-4 mt-4 w-full flex flex-col gap-8">
          <Typography variant="h6" className="text-white">
            Products
          </Typography>
          <Box className="flex items-center justify-between">
            <Typography variant="caption" className="text-white">
              Products
            </Typography>
            <Typography variant="caption" className="text-white">
              Price
            </Typography>
          </Box>
          <Box className="flex items-center justify-between">
            <Box className="flex items-center gap-4">
              <img src={IPhone} alt="" className="object-contain h-12 w-12" />
              <Typography variant="body2" className="text-white">
                iPhone 14 Pro Max <br />
                <span className="text-[#aeb9e1] text-xs">524 in stock</span>
              </Typography>
            </Box>
            <Typography variant="caption" className="text-white">
              $ 1,099.00
            </Typography>
          </Box>
          <Box className="flex items-center justify-between">
            <Box className="flex items-center gap-4">
              <img src={Watch} alt="" className="object-contain h-12 w-12" />
              <Typography variant="body2" className="text-white">
                Apple Watch S8 <br />
                <span className="text-[#aeb9e1] text-xs">320 in stock</span>
              </Typography>
            </Box>
            <Typography variant="caption" className="text-white">
              $ 799.00
            </Typography>
          </Box>
        </Box>
        <Box className="bg-[#0a1739] rounded-lg mt-4 lg:col-span-2 sm:p-8 p-4">
          <CustomAreaChart />
        </Box>
      </Box>
      <Box className="bg-[#0a1739] rounded-lg mt-8 ">
        <OrdersTable />
      </Box>
      <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Dashboard;
