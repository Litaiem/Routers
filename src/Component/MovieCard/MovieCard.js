import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Navigate } from "react-router";

const MovieCard = ({ movie }) => {
  return (
    <Card
      className="carti"
      style={{
        width: "22.5%",
        backgroundColor: "#ffb6c1",
        height: "100% ",
        marginLeft: "1.2em",
        marginTop: "1.2em",
      }}
    >
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button
          variant="outline-info"
          className="boutn"
          onClick={() => Navigate(`/movie/${movie.id}`)}
        >
          discription
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
