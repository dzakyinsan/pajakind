import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { keepLogin,onGetColor } from "./redux/action";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    var email = localStorage.getItem("email");
    var pass = localStorage.getItem("password");
    if (email) {
      dispatch(keepLogin(email, pass));
      dispatch(onGetColor())
    }
  }, []);
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"/register"} exact component={Register} />
        <Route path={"/dashboard"} exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
