import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onUserLogout } from "./../redux/action";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const Header = () => {
  const dispatch = useDispatch();
  const loginOk = useSelector((state) => state.loginReducer.login);
  const token=localStorage.getItem('token')

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ paddingLeft: "15%", paddingRight: "15%" }}>
      <Navbar.Brand href={"./"}>
        <img src={require("./../assets/images/download.png")} width="35" height="35" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={"/"}>Home</Nav.Link>
          <Nav.Link href={"/dashboard"}>Dashboard</Nav.Link>
          {token ? (
            <Nav.Link onClick={() => dispatch(onUserLogout())}>Logout</Nav.Link>
          ) : (
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/login"}>Login</NavDropdown.Item>
              <NavDropdown.Item href={"/register"}>Register</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
        <Nav>{token ? <Navbar.Text>Welcome, your loged in</Navbar.Text> : <Navbar.Text>Not login</Navbar.Text>}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
