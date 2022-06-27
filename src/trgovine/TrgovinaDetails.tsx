import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ITrgovina } from "./useTrgovine";
import string from '../stringValues.js';

export const PodrobnostiTrgovine: FC<{ trgovina: ITrgovina[], updateTrgovina: any, deleteTrgovina: any, token: any }> = ({ trgovina, updateTrgovina, deleteTrgovina, token }) => {

  const { register, handleSubmit } = useForm<ITrgovina>();

  const path = window.location.pathname;
  const id = Number(path.replace("/trgovine/", ""));
  const p = trgovina.find(x => x.id === id)!;

  console.log("p: " + p?.naslov);

  const onSubmit = (data: ITrgovina) => {
    try {
      updateTrgovina(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    try {
      deleteTrgovina(p);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto col-sm-8">
      <h3>Podrobnosti trgovine </h3>
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
          <label htmlFor="inputDelovniCas">{string.delovniCas}</label>
          <input
            type="text"
            className="form-control"
            defaultValue={p?.delovniCas}
            {...register("delovniCas")}
          />
        </div>

        <br />

        {(token.userType === "admin") ?
          <div className="row">
            <div className="col gumbPosodobi">
              <button type="submit" className="btn btn-success btn-sm">
                ✏ Posodobi
              </button>
            </div>

            <div className="col">
              <Link to="/trgovine">
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
          : null}
      </form>

      <br />
      <p>
        <Link to="/trgovine"> <input className="btn btn-primary" value={string.nazaj} /> </Link>
      </p>
    </div>
  );
};