import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MenuItem, Select, Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  MdDelete,
  MdEvent,
  MdLocationOn,
  MdModeEdit,
  MdSave,
} from "react-icons/md";
import { FaCheckSquare, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

interface Order {
  id: number;
  order: string;
  client: string;
  email: string;
  date: string;
  status: string;
  country: string;
  total: number;
}

export default function OrdersTable(): React.JSX.Element {
  const [editRowId, setEditRowId] = useState<number | null>(null);
  const [rowsData, setRowsData] = useState(rows);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (id: number, field: string, value: string) => {
    const updatedRows = rowsData.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRowsData(updatedRows);
  };

  const handleSave = () => {
    setEditRowId(null);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };


  const filteredRows = rowsData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery)
    )
  );

  const handleDelete = (id: number) => {
    const updatedRows = rowsData.filter((row) => row.id !== id);
    setRowsData(updatedRows);
  };

  const columns: GridColDef[] = [
    {
      field: "order",
      headerName: "Order",
      width: 80,
      renderCell: (params: GridRenderCellParams<Order>) => {
        const isEditing = editRowId === params.row.id;
        return isEditing ? (
          <input
            className="border-none bg-transparent text-[#aeb9e1] focus:outline-none"
            value={params.row.order}
            onChange={(e) =>
              handleInputChange(params.row.id, "order", e.target.value)
            }
          />
        ) : (
          <Typography variant="caption">{params.row.order}</Typography>
        );
      },
    },
    {
      field: "client",
      renderHeader: () => (
        <Box display="flex" alignItems="center">
          <FaUser style={{ marginRight: "8px" }} />
          Client
        </Box>
      ),
      width: 200,
      renderCell: (params: GridRenderCellParams<Order>) => {
        const isEditing = editRowId === params.row.id;
        return isEditing ? (
          <>
            <input
              className="border-none bg-transparent text-[#aeb9e1] focus:outline-none"
              value={params.row.client}
              onChange={(e) =>
                handleInputChange(params.row.id, "client", e.target.value)
              }
            />
            <input
              className="border-none bg-transparent text-[#aeb9e1] focus:outline-none"
              value={params.row.email}
              onChange={(e) =>
                handleInputChange(params.row.id, "email", e.target.value)
              }
            />
          </>
        ) : (
          <Box className="flex flex-col mt-1">
            <Typography variant="caption">{params.row.client}</Typography>
            <Typography variant="caption" color="#aeb9e1">
              {params.row.email}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "date",
      renderHeader: () => (
        <Box display="flex" alignItems="center">
          <MdEvent style={{ marginRight: "8px" }} />
          Date
        </Box>
      ),
      width: 130,
      renderCell: (params: GridRenderCellParams<Order>) => {
        const isEditing = editRowId === params.row.id;
        return isEditing ? (
          <input
            className="border-none bg-transparent text-[#aeb9e1] focus:outline-none"
            value={params.row.date}
            onChange={(e) =>
              handleInputChange(params.row.id, "date", e.target.value)
            }
            type="date"
          />
        ) : (
          <Typography variant="caption">{params.row.date}</Typography>
        );
      },
    },
    {
      field: "status",
      renderHeader: () => (
        <Box display="flex" alignItems="center">
          <FaCheckSquare style={{ marginRight: "8px" }} />
          Status
        </Box>
      ),
      width: 150,
      renderCell: (params: GridRenderCellParams<Order>) => {
        const isEditing = editRowId === params.row.id;
        return isEditing ? (
          <Select
            value={params.row.status}
            variant="outlined"
            size="small"
            onChange={(e) =>
              handleInputChange(params.row.id, "status", e.target.value)
            }
            fullWidth
            sx={{ "& .MuiSelect-select": { color: "#aeb9e1" } }}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Canceled">Canceled</MenuItem>
          </Select>
        ) : (
          <Typography
            variant="caption"
            className={`${
              params.row.status === "Pending"
                ? "text-yellow-500 bg-yellow-300/20"
                : params.row.status === "Delivered"
                ? "text-green-500 bg-green-300/20"
                : "text-red-500 bg-red-300/20"
            }  px-1 border w-[80px] rounded-sm flex gap-1 items-center`}
          >
            <Box
              className={`h-1 w-1 ${
                params.row.status === "Pending"
                  ? "bg-yellow-500"
                  : params.row.status === "Delivered"
                  ? "bg-green-500"
                  : "bg-red-500"
              }  rounded-full`}
            ></Box>{" "}
            {params.row.status}
          </Typography>
        );
      },
    },
    {
      field: "country",
      renderHeader: () => (
        <Box display="flex" alignItems="center">
          <MdLocationOn style={{ marginRight: "8px" }} />
          Country
        </Box>
      ),
      width: 180,
      renderCell: (params: GridRenderCellParams<Order>) => {
        const isEditing = editRowId === params.row.id;
        return isEditing ? (
          <input
            className="border-none bg-transparent text-[#aeb9e1] focus:outline-none"
            value={params.row.country}
            onChange={(e) =>
              handleInputChange(params.row.id, "country", e.target.value)
            }
          />
        ) : (
          <Typography variant="caption">{params.row.country}</Typography>
        );
      },
    },
    {
      field: "total",
      headerName: "Total",
      width: 150,
      renderCell: (params: GridRenderCellParams<Order>) => (
        <Typography variant="caption">{`$${params.row.total.toLocaleString()}`}</Typography>
      ),
    },
    {
      field: "actions",
      headerName: "",
      width: 241,
      renderCell: (params: GridRenderCellParams<Order>) => {
        const isEditing = editRowId === params.row.id;
        return (
          <Box>
            {isEditing ? (
              <IconButton onClick={handleSave}>
                <MdSave style={{ color: "#cc3cfe" }} size={16} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setEditRowId(params.row.id)}>
                <MdModeEdit style={{ color: "#aeb9e1" }} size={16} />
              </IconButton>
            )}
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <MdDelete style={{ color: "#aeb9e1" }} size={16} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box className="flex items-center justify-between gap-3 sm:flex-row flex-col sm:p-6 p-4">
        <Typography variant="body1" color="#aeb9e1">
          Orders Status
        </Typography>
        <Box className="flex items-center sm:flex-row flex-col gap-3">
          <Box className="border border-[#374159] rounded-md p-2 text-white flex items-center">
            <input
              placeholder="Search for..."
              value={searchQuery}
              onChange={handleSearch}
              className="focus:outline-none text-sm"
            />
            <IoSearch className="text-neutral-400 h-5 w-5" />
          </Box>
          <button className="bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB] text-white px-4 py-2 rounded-md cursor-pointer text-sm font-bold">
            Create order
          </button>
        </Box>
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        style={{
          border: "none",
          borderWidth: " 0px !important",
        }}
        sx={{
          "& .MuiDataGrid-root": {
            borderWidth: "0px !important",
            borderColor: "transparent !important",
          },
          "& .css-1m3c45m-MuiDataGrid-root": {
            borderWidth: "0px !important",
            border: "none",
          },
          "& .MuiDataGrid-withBorderColor": {
            borderWidth: "0px !important",
          },
          "& .MuiDataGrid-menuIcon": {
            display: "none !important",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            display: "none !important",
          },
          "& .MuiDataGrid-cell": {
            color: "#ffffff",
            border: "none !important",
          },
          "& .MuiDataGrid-row--borderBottom": {
            backgroundColor: "transparent !important",
            borderWidth: "0px !important",
            border: "none !important",
            color: "#ffffff",
          },
          "& .MuiDataGrid-row": {
            "&:nth-of-type(odd)": {
              backgroundColor: "#0a1330",
            },
            "&:nth-of-type(even)": {
              backgroundColor: "#0a1739",
            },
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#0a1739",
            border: "none",
          },
          "& .MuiTablePagination-root": {
            color: "#ffffff",
          },
          "& .MuiSvgIcon-root": {
            color: "#ffffff",
          },
          "& .MuiTablePagination-actions .MuiButtonBase-root": {
            color: "#ffffff",
            backgroundColor: "#c300ff",
            borderRadius: "50%",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none !important",
          },
          "& .MuiDataGrid-scrollbar": {
            display: "none !important",
          },
          "& .MuiDataGrid-filler": {
            display: "none !important",
          },
        }}
      />
    </Box>
  );
}

const rows: Order[] = [
  {
    id: 1,
    order: "#1532",
    client: "John Carter",
    email: "hello@johncarter.com",
    date: "01/30/2024",
    status: "Cancelled",
    country: "United States",
    total: 1099.24,
  },
  {
    id: 2,
    order: "#1531",
    client: "Sophie Moore",
    email: "contact@sophiemoore.com",
    date: "01/27/2024",
    status: "Pending",
    country: "United Kingdom",
    total: 5870.32,
  },
  {
    id: 3,
    order: "#1530",
    client: "Matt Cannon",
    email: "info@mattcannon.com",
    date: "01/24/2024",
    status: "Delivered",
    country: "Australia",
    total: 13899.48,
  },
  {
    id: 4,
    order: "#1529",
    client: "Graham Hills",
    email: "hi@grahamhills.com",
    date: "01/21/2024",
    status: "Pending",
    country: "India",
    total: 1569.12,
  },
  {
    id: 5,
    order: "#1528",
    client: "Sandy Houston",
    email: "contact@sandyhouston.com",
    date: "01/18/2024",
    status: "Delivered",
    country: "Canada",
    total: 899.16,
  },
  {
    id: 6,
    order: "#1527",
    client: "Andy Smith",
    email: "hello@andysmith.com",
    date: "01/15/2024",
    status: "Pending",
    country: "United States",
    total: 2449.64,
  },
];
