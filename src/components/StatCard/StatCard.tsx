import React from "react";
import { Box, Typography } from "@mui/material";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string | number;
  positive?: boolean;
  negative?: boolean;
  icon: JSX.Element; 
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  positive,
  icon,
}) => {
  return (
    <Box className="p-6 bg-[#0a1739] rounded-lg shadow-md flex flex-col gap-4">
      <Box className="flex items-center gap-2">
        {icon}
        <Typography variant="body2" className="text-[#aeb9e1]">
          {title}
        </Typography>
      </Box>
      <Box className="flex items-center gap-2">
        <Typography variant="h5" className="text-white mt-2">
          {value}
        </Typography>
        <Typography
          variant="caption"
          className={`${
            positive
              ? "text-green-500 bg-green-300/20 "
              : "text-red-500 bg-red-300/20 "
          } px-1 border text-xs rounded-xs flex items-center gap-1`}
        >
          {change} {positive ? <BsArrowUpRight /> : <BsArrowDownRight />}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatCard;
