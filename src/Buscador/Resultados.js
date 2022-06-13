import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Buscador from "./Buscador";

const Resultados = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=15f48dbdec89fc10206ad7433288064d&language=es-ES&query=${keyword}`;

    axios
      .get(endPoint)
      .then((res) => {
        const moviesArray = res.data.results;
        setMoviesResults(moviesArray);
      })
      .catch((err) => {
        Swal.fire("no se pudo conectar con la api");
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="row">
        {moviesResults.map((oneMovie, indice) => {
          return (
            <div className="col-4">
              <Card
                style={{
                  width: "20rem",
                  margin: "3rem",
                  backgroundColor: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    {oneMovie.title.substring(0, 100)}
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    {oneMovie.overview.substring(0, 150)}...
                  </Card.Text>
                  <Link
                    className="btn btn-primary"
                    to={`/detalle?movieID=${oneMovie.id}`}
                    style={{ backgroundColor: "red" }}
                    variant="primary"
                  >
                    Ver info
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resultados;
