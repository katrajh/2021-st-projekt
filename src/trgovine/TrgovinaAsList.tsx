import { FC } from "react";
// import { useForm } from "react-hook-form";
import { ITrgovina } from "./useTrgovine";
import string from '../stringValues.js';
import { Link } from "react-router-dom";

// Izpis podatkov
// export const GetTrgovinaAsList: FC<{ trgovina: ITrgovina[] }> = ({ trgovina }) => {

export function GetTrgovinaAsList({ trgovina, token }: { trgovina: ITrgovina[], token: any }) {

  // const path = window.location.pathname;
  // const id = Number(path.replace("/trgovine/", ""));

  return (

    <div>
      <div className="d-flex">
        <div>
          <h2 className="float-start ml-3">Seznam trgovin: </h2>
        </div>
        <div className="ml-auto">
          {(token.userType === "admin")
            ? <Link to={`/trgovine/dodaj`}> <input className="btn btn-info float-end" value={string.dodajTrgovino} /> </Link>
            : null
          }
        </div>
      </div>
      <br />
      <div className="d-flex">
        <div>
          <p className="float-start ml-3">Filtriraj po regiji:</p>
          {/* <br></br>
          <p>{regija}</p> */}
        </div>
        <div className="ml-3">
          <Link to={`/trgovine/`}> <input type="button" className="btn btn-secondary" value="Brez" /> </Link>
        </div>
        <div className="ml-3">
          <Link to={`/trgovine/regija/stajerska`}> <input type="button" className="btn btn-secondary" value="Štajerska" /> </Link>
        </div>
        <div className="ml-3">
          <Link to={`/trgovine/regija/savinjska`}> <input type="button" className="btn btn-secondary" value="Savinjska" /> </Link>
        </div>
        <div className="ml-3">
          <Link to={`/trgovine/regija/osrednjeslovenska`}> <input type="button" className="btn btn-secondary" value="Osrednjeslovenska" /> </Link>
        </div>
      </div>
      <br />
      <table className="table">
        <thead >
          <tr>
            <th scope="col">Podrobnosti</th>
            <th scope="col">{string.naziv}</th>
            {/* <th scope="col">{string.naslov}</th>
            <th scope="col">{string.drzava}</th> */}
            <th scope="col">{string.regija}</th>
          </tr>
        </thead>
        <tbody>
          {trgovina.map((trgovina) => (
            <tr key={trgovina.id}>
              <td>
                <Link to={`/trgovine/` + trgovina.id}> ℹ </Link>
                {/* <Link to={`/trgovine/${trgovina.id}`}> ℹ </Link>   */}
                {/* <Link to={`/prijava`}> ℹ </Link>   */}
              </td>
              <td>{trgovina.naziv}</td>
              {/* <td>{trgovina.naslov}</td>
              <td>{trgovina.drzava}</td> */}
              <td>{trgovina.regija}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
