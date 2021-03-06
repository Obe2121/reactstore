import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
                
                <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom:"20px"}}>
                    <Container>
                        <Navbar.Brand as={Link} to="/">FakeShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {this.props.token ?
                            <>
                            <Nav.Link as={Link} to="/shop">shop</Nav.Link>
                            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                            <Nav.Link as={Link} to="/Logout">Logout</Nav.Link>
                            <Nav.Link> {this.props.username} </Nav.Link>
                            
                            </>
                            :
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
          
        )
    }
}