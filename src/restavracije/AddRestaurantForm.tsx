import React, { FC, useEffect, useState } from 'react';
import string from '../stringValues';
import { IRestaurant } from './useRestaurants';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


export const AddRestaurantForm: FC<{ potrdi: (restaurant: any) => void }> = ({ potrdi }) => {
  const { register, handleSubmit, setError, formState: { errors }  } = useForm<IRestaurant>();

  const onSubmit = (data: IRestaurant) => {
    potrdi(data);
    alert("Uspešno ste dodali novo restavracijo! ");
  }

  return (
    // Forma: Dodajanje uporabnika oz. registracija
    <div className="col-sm-5 mx-auto">
      <h2> {string.dodajRestavracijo} </h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputNaziv">{string.naziv}</label>
          <input type="text" className="form-control" id="inputNaziv" placeholder="Vnesi naziv" {...register("naziv", {required: true, minLength: { value: 4, message: "Vnesti morate vsaj 4 znake" }, maxLength: 60 })} />
          {
            errors.naziv && <div className="error-msg">Polje "Naziv" ne sme biti prazno!</div>
          }
          {
            errors.naziv?.message && <div className="error-msg-2">{errors.naziv?.message}</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="inputNaslov">{string.naslov}</label>
          <input type="text" className="form-control" id="inputNaslov" placeholder="Vnesi naslov" {...register("naslov", {required: true, minLength: { value: 4, message: "Vnesti morate vsaj 4 znake" }, maxLength: 60 })} />
          {
            errors.naslov && <div className="error-msg">Polje "Naslov" ne sme biti prazno!</div>
          }
          {
            errors.naslov?.message && <div className="error-msg-2">{errors.naslov?.message}</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="inputDrzava">{string.drzava}</label>
          <select className="form-control" id="drzava" {...register("drzava", {required: true})}>
            <option value=""></option>
            <option value="SI">Slovenija</option>
            <option value="IT">Italija</option>
            <option value="CRO">Hrvaška</option>
            <option value="AUT">Avstrija</option>
            <option value="GER">Nemčija</option>
            <option value="BIH">Bosna in hercegovina</option>
            <option value="SRB">Srbija</option>
          </select>
          {
            errors.drzava && <div className="error-msg">Polje "Drzava" ne sme biti prazno!</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="regija">{string.regija}</label>
          <select className="form-control" id="regija" {...register("regija", {required: true})}>
            <option value=""></option>
            <option value="Štajerska">Štajerska</option>
            <option value="Savinjska">Savinjska</option>
            <option value="Osrednjeslovenska">Osrednjeslovenska</option>
            <option value="Primorska">Primorska</option>
            <option value="Gorenjska">Gorenjska</option>
            <option value="Prekmurje">Prekmurje</option>
          </select>
          {
            errors.regija && <div className="error-msg">Polje "Regija" ne sme biti prazno!</div>
          }
        </div>
        <br />
        <input type="submit" className="btn btn-success" value={string.dodaj} />
        <br />
        <br />
        <Link to={`/restavracije/`}> <input className="btn btn-secondary" value={string.nazaj} /> </Link>
      </form>
    </div>
  );
}
