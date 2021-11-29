import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'



export default function NavbarComponent() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <Navbar style={{/*{ backgroundColor: 'red' }*/ }} bg="primary" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <div className="Logo ms-5"></div>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link ><NavLink className="nav-link nav-hover" to="/">Login</NavLink> </Nav.Link>
                    <Nav.Link><NavLink className="nav-link nav-hover" to="/suggestEvent">SuggestEvent</NavLink> </Nav.Link>
                    <Nav.Link><div className="nav-link nav-hover" onClick={logout}>Logout</div> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
