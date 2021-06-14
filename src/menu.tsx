import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function Menu({ token, odjava }: { token:any, odjava: any }) {


  return (
    <div className="menu">   
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">Truck Express</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#pocivalisce">Domov</Nav.Link>
                    <Nav.Link href="#profile">Profili</Nav.Link>      
                    <Nav.Link href="#vozilo">Vozila</Nav.Link>      
                    <Nav.Link href="#voznik">Vozniki</Nav.Link>      
                    <Nav.Link href="#pocivalisca">Pocivalisca</Nav.Link>  
                    <Nav.Link href="#priljubljena">Priljubljena</Nav.Link>      
                    <Nav.Link href="#priljubljena">Trgovine</Nav.Link>      
                    <Nav.Link href="#priljubljena">Restavracije</Nav.Link>      
                </Nav>
                <Nav>
                    {(token.username === "" && token.password === "") ? <Nav.Link href="#prijava">Prijava</Nav.Link> : <Nav.Link href="#mojracun">Moj račun</Nav.Link> }
                    {(token.username === "" && token.password === "") ? <Nav.Link href="#registracija">Registracija</Nav.Link> : <Nav.Link href="#odjava">Odjava</Nav.Link> }
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Menu;
