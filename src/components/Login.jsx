import React from "react";
import "../styles.css";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  InputAdornment
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "20px auto"
  };
  const btnStyle = { margin: "8px 10px", background: "lightgrey" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h3>login to your account</h3>
        </Grid>
        <TextField
          className="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
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
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            )
          }}
        />
        <Button
          type="submit"
          style={btnStyle}
          color="primary"
          variant="contained"
          fullWidth
        >
          Log in
        </Button>
        <Typography>
          <span>Don't have an account?</span>
          <div>
            <Link to="/">create an account</Link>
          </div>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
