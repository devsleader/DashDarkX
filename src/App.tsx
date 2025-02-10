import { Grid } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Grid container bgcolor={"#081025"}>
      <Grid item xs={2} display={{lg: "block", xs: "none"}}>
        <Sidebar />
      </Grid>
      <Grid item lg={10} xs={12}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;
