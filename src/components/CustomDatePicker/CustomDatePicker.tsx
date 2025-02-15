import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cc3cfe', 
    },
    background: {
      paper: '#0a1739', 
    },
    text: {
      primary: '#ffffff', 
      secondary: '#9e9e9e', 
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#0a1739', 
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
                '.MuiInputBase-input': {
                  color: '#aeb9e1', 
                  padding:"8px", 
                },
                '.MuiOutlinedInput-root': {
                  backgroundColor: '#0a1330', 
                  borderRadius: '8px', 
                },
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none', 
                },
                '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none', 
                },
                '.MuiSvgIcon-root': {
                  color: '#aeb9e1', 
                  backgroundColor: '#0a1330', 
                  borderRadius: '50%', 
                  padding: '3px', 
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}
