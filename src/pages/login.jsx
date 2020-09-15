import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onUserLogin } from "./../redux/action";
import { Redirect } from "react-router-dom";
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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loginOk = useSelector((state) => state.loginReducer.login);
  const messageRdx = useSelector((state) => state.loginReducer.message);

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const loginHandle = (e) => {
    const { name, value } = e.target;
    setDataLogin({ ...dataLogin, [name]: value });
  };

  if (loginOk) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <Container component="main" maxWidth="xs" className="login-container">
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField variant="outlined" margin="normal" fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={loginHandle} />
              <TextField variant="outlined" margin="normal" fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={loginHandle} />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button fullWidth style={{ backgroundColor: "#5b86e5", color: "white" }} className={classes.submit} onClick={() => dispatch(onUserLogin(dataLogin.email, dataLogin.password))}>
                log In
              </Button>
              {messageRdx ? <Alert severity="warning" style={{marginBottom:'15px'}}>{messageRdx} </Alert> : null}
              <Link href={"/register"} variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
