import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const regisHandle = (e) => {
    const { name, value } = e.target;
    setDataRegister({ ...dataRegister, [name]: value });
  };
  return (
    <div style={{ display: "flex" }}>
      <Container component="main" maxWidth="xs" className="login-container">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={regisHandle} />
            <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={regisHandle} />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPass"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={regisHandle}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button fullWidth variant="contained" color="primary" className={classes.submit} disabled>
              Register
            </Button>
            <Alert severity="error" style={{ marginBottom: "15px" }}>
              this page under maintenance{" "}
            </Alert>

            <Link href={"/login"} variant="body2">
              {"Already have an account? Login"}
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
}
