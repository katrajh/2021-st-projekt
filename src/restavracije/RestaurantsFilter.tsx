import { FC } from "react";
// import { useForm } from "react-hook-form";
import { IRestaurant } from "./useRestaurants";
import string from '../stringValues.js';
import { Link } from "react-router-dom";

// Izpis podatkov
export const RestaurantFilter: FC<{ restaurants: IRestaurant[] }> = ({ restaurants }) => {

  const path = window.location.pathname;
  const regija = String(path.replace("/restavracije/regija/", ""));

  // console.log(regija);

  const filteredRestaurants = restaurants.filter(function (str) {
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
          <h2 className="float-start ml-3">Seznam restavracij: </h2>
        </div>
        <div className="ml-auto">
           <Link to={`/restavracije/dodaj`}> <input type="button" className="btn btn-info float-end" value={string.dodajRestavracijo} /> </Link>
        </div>
      </div>
      <br />
      <div className="d-flex">
        <div>
          <p className="float-start ml-3">Filtriraj po regiji:</p>
        </div>
        <div className="ml-3">
           <Link to={`/restavracije/`}> <input type="button" className="btn btn-secondary" value="Brez" /> </Link>
        </div>
        <div className="ml-3">
           <Link to={`/restavracije/regija/stajerska`}> <input type="button" className="btn btn-secondary" value="Štajerska" onSubmit={window.location.reload} /> </Link>
        </div>
        <div className="ml-3">
           <Link to={`/restavracije/regija/savinjska`}> <input type="button" className="btn btn-secondary" value="Savinjska" /> </Link>
        </div>
        <div className="ml-3">
           <Link to={`/restavracije/regija/osrednjeslovenska`}> <input type="button" className="btn btn-secondary" value="Osrednjeslovenska" /> </Link>
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
          {filteredRestaurants.map((filteredRestaurants) => (
            <tr key={filteredRestaurants.id}>
              <td>
                <Link to={`/restavracije/` + filteredRestaurants.id}> ℹ </Link>
                {/* <Link to={`/restavracije/${restaurant.id}`}> ℹ </Link>   */}
                {/* <Link to={`/prijava`}> ℹ </Link>   */}
              </td>
              <td>{filteredRestaurants.naziv}</td>
              {/* <td>{restaurant.naslov}</td>
              <td>{restaurant.drzava}</td> */}
              <td>{filteredRestaurants.regija}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
