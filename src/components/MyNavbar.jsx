import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export class MyNavbar extends Component {
  
  render() {
    return (
      <div>
        {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
        <Navbar className={`bg-${this.props.mode}`} data-bs-theme={this.props.mode} expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#">Newsly</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Category" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/business">Business</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/entertainment">Entertainment</NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} to="/general">General</NavDropdown.Item> */}
                  <NavDropdown.Item as={Link} to="/health">Health</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/science">Science</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sports">Sports</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/technology">Technology</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
                </NavDropdown>
                {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
              </Nav>
              <Button onClick={this.props.toggleMode} variant="outline-secondary mx-3">{this.props.btnText}</Button>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default MyNavbar
