// Login page
import { FormControl, TextField, Button } from "@mui/material";
import Navbar from "../shared/Navbar";

function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Login</h1>
        <FormControl>
          <TextField required label="Berkeley Email" margin="normal"></TextField>
          <TextField required label="Berkeley Password" margin="normal"></TextField>
          <Button variant="contained" margin="normal">Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
