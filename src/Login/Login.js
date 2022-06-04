import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleInfo = (e) => {
    e.preventDefault();
    console.log("se va a enviar el formulario");
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length === 0 || email.lenght === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "los campos son obligatorios",
      });
      e.preventDefault();
      return false;
    } else if (email.lenght < 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "email demasiado corto",
      });
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cuenta o contraseña invalida",
      });
      e.preventDefault();
      return false;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        Swal.fire("🔑SUCCESS🔑", "🎬🎬🎬🎬🎬", "success");
        const tokenRecibido = res.data.token;
        localStorage.setItem("miToken", tokenRecibido);
        navigate("listado");
      });
  };

  return (
    <div className="form-center">
      <Form className="form-edit" onSubmit={handleInfo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa tu email"
          />
          <Form.Text className="text-muted">
            Nunca compartas tu contraseña con nadie
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Ingresa tu password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar" />
          <Form.Text className="text-muted">Olvidaste tu contraseña?</Form.Text>
        </Form.Group>
        <Button id="button-submit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
