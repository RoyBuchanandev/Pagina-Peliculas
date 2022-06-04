import React, { useEffect, useState } from "react";
import { Navigate,Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import MovieDetail from "../MovieDetail/MovieDetail";

function Listado() {
  let token = localStorage.getItem("miToken");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=15f48dbdec89fc10206ad7433288064d&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch((err) => {
        Swal.fire("no se pudo conectar con la api");
      });
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="row">
        {}
        {moviesList.map((oneMovie, indice) => {
          return (
            <div className="col-3">
              <Card
                style={{
                  width: "20rem",
                  margin: "3rem",
                  backgroundColor: "black",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    {oneMovie.title.substring(0, 100)}
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    {oneMovie.overview.substring(0, 150)}...
                  </Card.Text>
                  <Link 
                  className="btn btn-primary"
                    to={`/detalle?movieID=${oneMovie.id}`}
                    style={{ backgroundColor: "red" }}
                    variant="primary"
                  >
                    Ver pelicula
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
