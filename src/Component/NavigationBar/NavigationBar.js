import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";
import { Rating } from "react-simple-star-rating";
const NavigationBar = ({
  setSearchCondition,
  selectRating,
  setSelectRating,
}) => {
  const Navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "2rem" }}>
      <Container>
        <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => Navigate("/home")}>Home</Nav.Link>
          <Nav.Link onClick={() => Navigate("/movies")}>Movies</Nav.Link>
          <Nav.Link>Subscription</Nav.Link>
        </Nav>

        <Form.Control
          type="text"
          placeholder="Search movie"
          style={{ width: "30%" }}
          onChange={(e) => setSearchCondition(e.target.value)}
        />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
