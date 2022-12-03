//Navbar component
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "mui-image";
import Logo from "../../assets/logo.png";
import Searchbar from "./Searchbar";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Button
            className="logo-button"
            title="Click here to learn more!"
            variant="text"
            component={Link}
            to="/about"
          >
            <Image src={Logo} height="4em" />
          </Button>
          <Searchbar></Searchbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button
            className="submit-button"
            variant="outlined"
            component={Link}
            to="/submit"
          >
            Submit a GSI
          </Button>
          <Box sx={{ flexGrow: 0.02 }}></Box>
          <Button
            className="login-button"
            variant="text"
            component={Link}
            to="/login"
          >
            Log In
          </Button>
          <Button className="sign-up" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
