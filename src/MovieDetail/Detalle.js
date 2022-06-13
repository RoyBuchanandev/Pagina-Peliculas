import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import Nav from "../Nav/Nav";

const Detalle = () => {
  let token = sessionStorage.getItem("miToken");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=15f48dbdec89fc10206ad7433288064d&language=es-ES&language=es-ES`;
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
    <> 
    <Nav/>
    <div classname="col-12" style={{
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
    }}
  >
      <Card
        style={{
          width: "30rem",
          margin: "3rem",
          backgroundColor: "white",
        }}
      >
        
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        />
        <Card.Body
          style={{
            backgroundColor: "black",
          }}
        >
          <Card.Title style={{ color: "white" }}>{movie.title}</Card.Title>
          <Card.Text style={{ color: "white" }}> {movie.overview}</Card.Text>
        </Card.Body >
        <ListGroup className="list-group-flush" style={{ backgroundColor: "black" }}>
          <ListGroupItem>Titulo: {movie.title}</ListGroupItem>
          <ListGroupItem>Votación: {movie.vote_average} ✔</ListGroupItem>
          <ListGroupItem>Minutos: {movie.runtime} ⌚</ListGroupItem>
          <ListGroupItem>Lenguaje original: {movie.original_language} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#"></Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card>
    </div>
    </>
  );
  
};


export default Detalle;
