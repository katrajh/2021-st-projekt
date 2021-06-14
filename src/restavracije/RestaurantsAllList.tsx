import { FC } from "react";
// import { useForm } from "react-hook-form";
import { IRestaurant } from "./useRestaurants";
import string from '../stringValues.js';
import { Link } from "react-router-dom";

// Izpis podatkov
// export const GetRestaurantAsList: FC<{ restaurants: IRestaurant[] }> = ({ restaurants }) => {
  
export function GetRestaurantAsList ({restaurants, token}: {restaurants: IRestaurant[], token: any}) {

  const path = window.location.pathname;
  const regija = Number(path.replace("/restavracije/", ""));

  // const filteredRestaurants = restaurants.filter(function (str) {
  //   return (str.regija === "Savinjska")
  // })

  // console.log(filteredRestaurants);

  return (

    <div>
      <div className="d-flex">
        <div>
          <h2 className="float-start ml-3">Seznam restavracij: </h2>
        </div>
        <div className="ml-auto">
          {(token.userType === "admin") ?
           <Link to={`/restavracije/dodaj`}> <input className="btn btn-info float-end" value={string.dodajRestavracijo} /> </Link>
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
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>
                <Link to={`/restavracije/` + restaurant.id}> ℹ </Link>
                {/* <Link to={`/restavracije/${restaurant.id}`}> ℹ </Link>   */}
                {/* <Link to={`/prijava`}> ℹ </Link>   */}
              </td>
              <td>{restaurant.naziv}</td>
              {/* <td>{restaurant.naslov}</td>
              <td>{restaurant.drzava}</td> */}
              <td>{restaurant.regija}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
