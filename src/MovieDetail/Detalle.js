import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const Detalle = () => {
  let token = sessionStorage.getItem("miToken");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=15f48dbdec89fc10206ad7433288064d&language=es-ES&language=en-EN`;
    axios
      .get(endPoint)
      .then((res) => {
        const movieData = res.data;
        console.log(movieData);
        setMovie(movieData);
      })
      .catch((err) => {
        Swal.fire("no se pudo conectar con la api");
      });
  }, [movieID]);

  return (
    <div classname="col-3">
      <Card
        style={{
          width: "20rem",
          margin: "3rem",
          backgroundColor: "black",
        }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        />
        <Card.Body
          style={{
            backgroundColor: "black",
          }}
        >
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Presupuesto: {movie.budget}</ListGroupItem>
          <ListGroupItem>votación: {movie.vote_average}</ListGroupItem>
          <ListGroupItem>minutos: {movie.runtime} m</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#"></Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detalle;
