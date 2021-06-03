import React from "react";
import "../styles.css";
import {
  Grid,
  Paper,
  TextField,
  InputAdornment,
  Button,
  Typography
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const SignUp = () => {
  const paperStyle = {
    background: "black",
    color: "white",
    padding: "30px 20px",
    width: 500,
    margin: "20px auto"
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <h3>Welcome to SEYTECH!</h3>
        <p>
          In order to register you need a code. Please ask your admin if you
          don't have it.
        </p>
        <div className="form">
          <h4>CREATE AN ACCOUNT</h4>
          <form>
            <TextField
              className="outlined-basic"
              label="Name"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Phone"
              variant="outlined"
              type="number"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Password"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VpnKeyIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VpnKeyIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Register Code"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VpnKeyIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="State"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AddIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="outlined-basic"
              label="Avatar"
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CropOriginalIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button className="btn" type="submit" variant="contained">
              Register
            </Button>
          </form>
          <Typography>
            <span>Already have an account?</span>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};
export default SignUp;
