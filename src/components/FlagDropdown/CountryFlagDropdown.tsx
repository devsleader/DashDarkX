import React, { useState } from "react";
import {
  IconButton,
  Popover,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import USFlag from "../../assets/us-flag.png";
import UKFlag from "../../assets/uk-flag.png";
import BangFlag from "../../assets/bangladesh-flag.png";
import ChinaFlag from "../../assets/china-flag.png";
import TurkeyFlag from "../../assets/turkey-flag.png";

// Define types for country data
interface Country {
  code: string;
  name: string;
  flag: string;
}

const CountryFlagDropdown: React.FC = () => {
  const countries: Country[] = [
    { code: "en-US", name: "English(US)", flag: USFlag },
    { code: "eng", name: "English", flag: UKFlag },
    { code: "bang", name: "বাংলা", flag: BangFlag },
    { code: "zh", name: "中文", flag: ChinaFlag },
    { code: "tr", name: "Türkçe", flag: TurkeyFlag },
  ];

  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setAnchorEl(null); // Close the dropdown
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} aria-haspopup="true">
        {selectedCountry ? (
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            style={{ width: 30, height: 30 }}
          />
        ) : (
          <Typography>Select Country</Typography>
        )}
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {countries.map((country) => (
          <MenuItem
            key={country.code}
            onClick={() => handleSelectCountry(country)}
            style={{
              backgroundColor: "#0a1739",
              color: "white",
            }}
          >
            <ListItemIcon>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: 34, height: 30, marginRight: 10 }}
              />
            </ListItemIcon>
            {country.name}
          </MenuItem>
        ))}
      </Popover>
    </div>
  );
};

export default CountryFlagDropdown;
