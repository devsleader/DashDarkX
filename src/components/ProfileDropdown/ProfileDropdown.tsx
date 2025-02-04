import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  ListItemIcon,
  Divider,
  Box,
} from "@mui/material";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { MdHelpCenter, MdLogout, MdSwitchAccount } from "react-icons/md";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Define types for profile data
interface UserProfile {
  name: string;
  email: string; // Replace with actual email address
  avatarUrl: string;
}

const ProfileDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user] = useState<UserProfile>({
    name: "Mr.John",
    email: "john.doe@example.com", // Replace with actual email address
    avatarUrl:
      "https://themewagon.github.io/dashdarkX/assets/avater-CnKdNFHs.png", // Replace with actual avatar URL
  });

  // Handle click to open the dropdown
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="rounded-lg">
      <IconButton
        onClick={handleClick}
        aria-haspopup="true"
        className="flex gap-2 items-center"
      >
        <Avatar
          alt={user.name}
          src={user.avatarUrl}
          className="bg-[#cc3cfe]"
          style={{ width: 30, height: 30 }}
        />
        <Typography className="text-white">{user.name}</Typography>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiMenu-list": {
            padding: 0,
          },
        }}
      >
        <Box className="bg-[#1e1e40] p-2 text-neutral-300">
          <Box className="p-2 flex items-center gap-2">
            <Avatar
              alt={user.name}
              src={user.avatarUrl}
              style={{ width: 40, height: 40,}}
              className="bg-[#cc3cfe]"
            />
            <Box className="flex flex-col">
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="subtitle2" className="text-neutral-400">
                {user.email}
              </Typography>
            </Box>
          </Box>

          <Divider />

          {/* Dropdown options */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <FaUser color="white" />
            </ListItemIcon>
            View Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <IoSettingsSharp color="white" />
            </ListItemIcon>
            Account Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <BsBellFill color="white" />
            </ListItemIcon>
            Notifications
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MdSwitchAccount color="white" />
            </ListItemIcon>
            Switch Account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MdHelpCenter color="white" />
            </ListItemIcon>
            Help Center
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MdLogout color="white" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
