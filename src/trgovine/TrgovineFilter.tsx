import { FC } from "react";
// import { useForm } from "react-hook-form";
import { ITrgovina } from "./useTrgovine";
import string from '../stringValues.js';
import { Link } from "react-router-dom";

// Izpis podatkov
export const TrgovineFilter: FC<{ trgovine: ITrgovina[] }> = ({ trgovine }) => {

  const path = window.location.pathname;
  const regija = String(path.replace("/trgovine/regija/", ""));

  // console.log(regija);

  const filteredTrgovine = trgovine.filter(function (str) {
    if(regija==="stajerska") {
      return (str.regija === "Štajerska")
    }
    if(regija==="savinjska") {
      return (str.regija === "Savinjska")
    }
    if(regija==="osrednjeslovenska") {
      return (str.regija === "Osrednjeslovenska")
    }
    return null;
  })

  // console.log(filteredRestaurants);

  return (
    // <ul>
    //   {users.map((user) => (
    //     <li key={user.id}>{user.id}: {user.ime} {user.priimek}</li>
    //   ))}
    // </ul>

    <div>
      <div className="d-flex">
        <div>
          <h2 className="float-start ml-3">Seznam trgovin: </h2>
        </div>
        <div className="ml-auto">
           <Link to={`/trgovine/dodaj`}> <input type="submit" className="btn btn-info float-end" value={string.dodajRestavracijo} /> </Link>
        </div>
      </div>
      <br />
      <div className="d-flex">
        <div>
          <p className="float-start ml-3">Filtriraj po regiji:</p>
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
            <th scope="col">{string.regija}</th>
            <th scope="col">{string.delovniCas}</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrgovine.map((filteredTrgovine) => (
            <tr key={filteredTrgovine.id}>
              <td>
                <Link to={`/trgovine/` + filteredTrgovine.id}> ℹ </Link>
              </td>
              <td>{filteredTrgovine.naziv}</td>
              <td>{filteredTrgovine.regija}</td>
              <td>{filteredTrgovine.delovniCas}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
