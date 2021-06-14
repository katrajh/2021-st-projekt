//  import strings from './stringValues';
// import React from "react";
// import { Nav, Navbar } from "react-bootstrap";

// export function Menu() {

//     return (
//         <div className="menu">
//             <div className="jumbotron">
//                 <h1 className="display-4">Truck Express!</h1>
//                 <p className="lead">Nova Truck Express! aplikacija, posebej zasnovana za voznike tovornjakov, uporabniku prijazna in enostavna. </p>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <a className="navbar-brand" href="http://localhost:3000/pocivalisce">Truck Express</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                         <ul className="navbar-nav">
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="http://localhost:3000/pocivalisce">Domov</a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="http://localhost:3000/profil">Profil</a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="http://localhost:3000/pocivalisca">Pocivalisca</a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="http://localhost:3000/priljubljena">Priljubljena</a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="http://localhost:3000/restavracije">Restavracije</a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="http://localhost:3000/trgovine">Trgovine</a>
//                             </li>
//                         </ul>
//                     </div>
//                     <li className="navbar-nav ml-auto">
//                         <a className="nav-link" href="http://localhost:3000/prijava">Prijava</a>
//                     </li>
//                     <li className="navbar-nav ml-auto">
//                         <a className="nav-link" href="http://localhost:3000/seznam">Seznam uporabnikov</a>
//                     </li>
//                     <li className="navbar-nav ml-auto">
//                         <a className="nav-link" href="http://localhost:3000/registracija">{strings.registracija}</a>
//                     </li>
//                 </nav>
//             </div>
//         </div>
//     );
// }
// export default Menu; 


 import strings from './stringValues';
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function Menu({ token, odjava }: { token:any, odjava: any }) {


  return (
    <div className="menu">   
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">Truck Express</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
            {(token.userType === "user") ? 
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000/pocivalisce">Domov</Nav.Link>
                    <Nav.Link href="http://localhost:3000/profile">Profili</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/vozilo">Vozila</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/voznik">Vozniki</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/pocivalisca">Pocivalisca</Nav.Link>  
                          
                    <Nav.Link href="http://localhost:3000/restavracije">Restavracije</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/trgovine">Trgovine</Nav.Link>
                </Nav>
                : null
                }
                {(token.userType === "admin") ? 
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000/pocivalisce">Domov</Nav.Link>
                    <Nav.Link href="http://localhost:3000/profile">Profili</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/vozilo">Vozila</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/voznik">Vozniki</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/pocivalisca">Pocivalisca</Nav.Link>  
                          
                    <Nav.Link href="http://localhost:3000/restavracije">Restavracije</Nav.Link>      
                    <Nav.Link href="http://localhost:3000/trgovine">Trgovine</Nav.Link>
                    <Nav.Link href="http://localhost:3000/seznam">Seznam uporabnikov</Nav.Link>
                    
                </Nav>
                : null
                }
                
                {(token.username === "" && token.password === "") ? 
                <Nav className="ml-auto"> 
                    <Nav.Link href="http://localhost:3000/prijava">Prijava</Nav.Link>
                    <Nav.Link href="http://localhost:3000/registracija">Registracija</Nav.Link>
                </Nav >
                :
                <Nav>
                     <Nav.Link href="http://localhost:3000/mojracun">Moj račun</Nav.Link> 
                     <Nav.Link href="http://localhost:3000/odjava">Odjava</Nav.Link> 
                </Nav>
                }
                {/* <Nav>
                    {(token.username === "" && token.password === "") ? <Nav.Link href="http://localhost:3000/prijava">Prijava</Nav.Link> : <Nav.Link href="http://localhost:3000/mojracun">Moj račun</Nav.Link> }
                    {(token.username === "" && token.password === "") ? <Nav.Link href="http://localhost:3000/registracija">Registracija</Nav.Link> : <Nav.Link href="http://localhost:3000/odjava">Odjava</Nav.Link> }
                </Nav> */}
            </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
}
export default Menu;
