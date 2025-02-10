import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cc3cfe', // Similar magenta color for highlighting
    },
    background: {
      paper: '#0a1739', // Dark background for the calendar dropdown
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#9e9e9e', // Lighter text for unselected items
    },
  },
  components: {
    MuiDayCalendar: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#cc3cfe',
            color: '#fff',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#b134d9',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#0a1739', // Calendar dropdown background color
        },
      },
    },
    MuiPickersMonth: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#cc3cfe',
            color: '#fff',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#b134d9',
          },
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#cc3cfe',
            color: '#fff',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#b134d9',
          },
        },
      },
    },
  },
});

export default function CustomDatePicker() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              views={['year', 'month']}
              sx={{
                // width: '100px', // Set width for the date picker
                '.MuiInputBase-input': {
                  color: '#aeb9e1', // Text color for input
                  padding:"8px", //
                },
                '.MuiOutlinedInput-root': {
                  backgroundColor: '#0a1330', // Input background color
                  borderRadius: '8px', // Rounded corners for input
                },
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Remove border for input
                },
                '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // No border on hover
                },
                '.MuiSvgIcon-root': {
                  color: '#aeb9e1', // Calendar icon color
                  backgroundColor: '#0a1330', // Icon button background color
                  borderRadius: '50%', // Round icon button
                  padding: '3px', // Add padding for the icon button
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}
