import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const linkStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: '5%',
  background: '#BCE5F9',
  textDecoration: 'none',
  border: '1px solid white',
  color: 'black'
};

const activeStyles = { background: '#00B3F8', color: 'white' };

const Navbar = () => (
  <nav>
    <Container>
      <Row>
        <Col>
          <NavLink
            exact
            to="/"
            style={linkStyles}
            activeStyle={activeStyles}
          >Home</NavLink>        
        </Col>
        
        <Col>
          <NavLink
            exact
            to="/beaches"
            style={linkStyles}
            activeStyle={activeStyles}
          >Your Saved Beaches</NavLink>
        </Col>

        <Col>
          <NavLink
            exact
            to="/beaches/new"
            style={linkStyles}
            activeStyle={activeStyles}
          >New Beach</NavLink>
        </Col>
      </Row>
    </Container>
  </nav>
);

export default Navbar;