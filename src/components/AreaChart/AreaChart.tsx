import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import { Typography } from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMiniClock } from "react-icons/hi2";

const data = [
  { date: "Jan1", tasks: 20 },
  { date: "Jan8", tasks: 50 },
  { date: "Jan16", tasks: 100 },
  { date: "Jan24", tasks: 70 },
  { date: "Jan31", tasks: 150 },
  { date: "Feb1", tasks: 120 },
  { date: "Feb8", tasks: 50 },
  { date: "Feb16", tasks: 90 },
  { date: "Feb24", tasks: 140 },
];

const CustomAreaChart = () => {
  return (
    <Box className="rounded-md">
      <Box className="flex justify-between items-center">
        <Typography variant="h6" className="text-[#aeb9e1] flex gap-2 items-center">
        <HiMiniClock />
          Completed tasks over time
        </Typography>
        <CustomDatePicker />
      </Box>
      <Box className="flex items-center gap-2">
        <Typography variant="h4" className="text-white mt-2">
          257
        </Typography>
        <Typography
          variant="body2"
          className={`text-green-500 bg-green-300/20 px-1 border text-xs rounded-xs flex items-center gap-1`}
        >
          16.8%
          <BsArrowUpRight />
        </Typography>
      </Box>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* Remove CartesianGrid */}
          {/* Customizing the XAxis and YAxis */}
          <XAxis
            dataKey="date"
            tick={{ fill: "#aeb9e1" }}
            axisLine={false} // Remove the axis line
            tickLine={false} // Remove the tick lines
          />
          <YAxis
            tick={{ fill: "#aeb9e1" }}
            axisLine={false} // Remove the axis line
            tickLine={false} // Remove the tick lines
          />
          <Tooltip cursor={{ stroke: "#aeb9e1", strokeWidth: 1 }} />
          <Area
            type="linear"
            dataKey="tasks"
            stroke="#00f0ff"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomAreaChart;
