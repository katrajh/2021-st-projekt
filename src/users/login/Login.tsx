import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login({ setToken }: { setToken: any }) {
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = {
      username,
      password,
      userType
    };
  
    if (username === "admin" && password === "admin") {
      token.userType = "admin";
      setToken(token);
      alert("Uspešno ste se prijavili");
      window.location.href = `/restavracije`; 
    }
    else if (username === "katarina" && password === "katarina") {
      token.userType = "user";
      setToken(token);
      alert("Uspešno ste se prijavili");
      window.location.href = `/restavracije`; 
    }
    else {
      return (
        alert("Napačno uporabniško ime ali geslo. ")
      )
    }
  };

  return (
    <div className="col-sm-4 mx-auto">
      <h2>Prijava</h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Uporabniško ime:</Form.Label>
          <Form.Control type="text" placeholder="Uporabniško ime" onChange={(e) => setUserName(e.target.value)} />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Geslo</Form.Label>
          <Form.Control type="password" placeholder="Geslo" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Prijava
        </Button>
      </Form>

      <br />
      <br />
      <Link to={`/registracija`} className="msg"> Še nimate računa? Registrirajte se! </Link>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};