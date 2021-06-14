import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IRestaurant } from "./useRestaurants";
import string from '../stringValues';
import { useRestaurant } from './useRestaurants';

export const PodrobnostiRestavracije: FC<{ restaurant: IRestaurant[], updateRestaurant: any, deleteRestaurant: any  }> = ({ restaurant, updateRestaurant, deleteRestaurant }) => {
  
    const { register, handleSubmit } = useForm<IRestaurant>();

    const path = window.location.pathname;
    const id = Number(path.replace("/restavracije/", ""));
    const p = restaurant.find(x => x.id === id)!;

    console.log("p: "+p?.naslov);

    const onSubmit = (data: IRestaurant) => {
        try {
            updateRestaurant(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        try {
            deleteRestaurant(p);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <div className="mx-auto col-sm-8">
        <h3>Podrobnosti restavracije </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />

          <div className="form-group">
            <label htmlFor="inputId">ID:</label>
            <input
              type="text"
              readOnly
              className="form-control"
              defaultValue={p?.id}
              {...register("id")}
            />
            <label htmlFor="inputNaziv">{string.naziv}</label>
            <input
              type="text"
              className="form-control"
              defaultValue={p?.naziv}
              {...register("naziv")}
            />
            <label htmlFor="inputNaslov">{string.naslov}</label>
            <input
              type="text"
              className="form-control"
              defaultValue={p?.naslov}
              {...register("naslov")}
            />
            <label htmlFor="inputDrzava">{string.drzava}</label>
            <input
              type="text"
              className="form-control"
              defaultValue={p?.drzava}
              {...register("drzava")}
            />
            <label htmlFor="inputRegija">{string.regija}</label>
            <input
              type="text"
              className="form-control"
              defaultValue={p?.regija}
              {...register("regija")}
            />
          </div>

          <br />

          <div className="row gumbBrisiPosodobi">
            <div className="col gumbPosodobi">
              <button type="submit" className="btn btn-success btn-sm">
                ✏ Posodobi
              </button>
            </div>

            <div className="col gumbBrisi">
              <Link to="/restavracije">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={handleClick}
                >
                  🗑 Izbriši
                </button>
              </Link>
            </div>
          </div>
        </form>

        <br />
        <p>
          <Link to="/restavracije"> <input className="btn btn-primary" value={string.nazaj} /> </Link>
        </p>
      </div>
    );
  };