import React from "react";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";
import Resultados from "./Resultados";
import { Button } from "react-bootstrap";

const Buscador = () => {
 const  navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    navigate (`/Resultados?keyword=${keyword}`)
    if (keyword.lenght < 4) {
      Swal.fire("ingresa al menos una palabra");
    }
  };

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandle}>
      <label className="form-label mb-0">
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="ingresa nombre de la pelicula"
        />
      </label>
      <Button className="btn btn-success"  type="submit" >
        Buscar
      </Button>
    </form>
  );
};

export default Buscador;

