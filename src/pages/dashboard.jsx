import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fade from "react-reveal";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "600px",
      height: "46px",
      marginTop: "-1px",
      marginLeft: "-2px",
      fontFamily: "Source Sans Pro",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  // ========================== globat state ===============
  const loginOk = useSelector((state) => state.loginReducer.login);
  const color = useSelector((state) => state.dbReducer.color);

  // ============================= local state =============
  const [search, setSearch] = useState("");
  const [filterColor, setFilterColor] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setFilterColor(color.filter((color) => color.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, color]);

  const renderColor = () => {
    return filterColor.map((val, index) => {
      return (
        <Fade bottom>
          <div
            className="db-table-1"
            style={{
              backgroundColor: val.color,
            }}
          >
            <p style={{ marginRight: "auto" }}>{val.name}</p>
            <p>{val.color}</p>
          </div>
        </Fade>
      );
    });
  };

  if (token && !loginOk) {
    return <h1>Loading</h1>;
  } else if (!loginOk) {
    return (
      <div className="dashboard-no-login">
        <Pulse>
          <img className="img-dashboard" src={require("./../assets/images/pick2.png")} alt="first slide" />
          <h1>You are not login yet</h1>
          <div className="center-btn">
            <div className="db-button">
              <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
                Go to login
              </Link>
            </div>
          </div>
        </Pulse>
      </div>
    );
  } else if (loginOk) {
    return (
      <div>
        <div className="dashboard-header">
          <h2>Color Table </h2>
        </div>
        <div className="main-searchBar">
          <div style={{ marginRight: "auto" }} />
          <div className="searchbar-1">
            <TextField
              className={classes.root}
              id="outlined-basic"
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="db-main">{renderColor()}</div>
      </div>
    );
  }
};
export default Dashboard;
