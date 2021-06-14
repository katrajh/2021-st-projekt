
import React, { FC, useEffect, useRef, useState } from 'react';
import strings, { geslo } from '../../stringValues.js';
import { IUser } from '../useUsers';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router';


export const RegisterForm: FC<{ potrdi: (user: any) => void }> = ({ potrdi }) => {
  const { register, handleSubmit, setError, formState: { errors }, watch } = useForm<IUser>();
  
  const geslo = useRef({});
  geslo.current = watch("geslo", "");

  const onSubmit = (data: IUser) => {
    potrdi(data);
    alert("Uspešno ste se registrirali! Pojdite na meni prijava in začnite z uporabo aplikacije.");
  }

  return (
    // Forma: Dodajanje uporabnika oz. registracija
    <div className="col-sm-4 mx-auto">
    <br />
    <h2> {strings.registracija} </h2>
    <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputIme">{strings.ime}</label>
          <input type="text" className="form-control" id="inputIme"
            placeholder="Vnesi ime"
            {...register("ime", { required: true, minLength: { value: 2, message: "Vnesti morate vsaj 4 znake" }, maxLength: 60 })} />
          {
            errors.ime && <div className="error-msg">Polje "Naziv" ne sme biti prazno!</div>
          }
          {
            errors.ime?.message && <div className="error-msg-2">{errors.ime?.message}</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="inputPriimek">{strings.priimek}</label>
          <input type="text" className="form-control" id="inputPriimek"
            placeholder="Vnesi priimek"
            {...register("priimek", { required: true, minLength: { value: 2, message: "Vnesti morate vsaj 4 znake" }, maxLength: 60 })} />
            {
              errors.priimek && <div className="error-msg">Polje "Priimek" ne sme biti prazno!</div>
            }
            {
              errors.priimek?.message && <div className="error-msg-2">{errors.priimek?.message}</div>
            }
        </div>
        <div className="form-group">
          <label htmlFor="exampleUporabniskoIme">{strings.upIme}</label>
          <input type="text" className="form-control" id="exampleUproabniskoIme"
            placeholder="Vnesi uporabnisko ime"
            {...register("uporabniskoIme", { required: true, minLength: { value: 6, message: "Uporabniško ime mora imeti vsaj 6 znakov" }, maxLength: 60 })} />
            {
              errors.uporabniskoIme && <div className="error-msg">Polje "Uporabniško ime" ne sme biti prazno!</div>
            }
            {
              errors.uporabniskoIme?.message && <div className="error-msg-2">{errors.uporabniskoIme?.message}</div>
            }
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">{strings.email}</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
            placeholder="Vnesi email"
            {...register("email", { required: true, maxLength: 40 })} />
            {
              errors.email && <div className="error-msg">Polje "Email" ne sme biti prazno!</div>
            }
            {
              errors.email?.message && <div className="error-msg-2">{errors.email?.message}</div>
            }
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">{strings.geslo}</label>
          <input type="password" className="form-control" id="geslo" 
            placeholder="Geslo"
            {...register("geslo", { required: true, minLength: { value: 6, message: "Geslo mora imeti vsaj 6 znakov" }, maxLength: 30 })} />
            {
              errors.geslo && <div className="error-msg">Polje "Geslo" ne sme biti prazno!</div>
            }
            {
              errors.geslo?.message && <div className="error-msg-2">{errors.geslo?.message}</div>
            }
        </div>
        <div className="form-group">
          <label htmlFor="geslo2">{strings.geslo}</label>
          <input type="password" className="form-control" id="geslo2"
            placeholder="Ponovite geslo"
            {...register("gesloPonovitev", { required: true, validate: value => value === geslo.current || "Gesli se ne ujemata", minLength: { value: 4, message: "Geslo mora imeti vsaj 6 znakov" }, maxLength: 30 })} />
            {
              errors.gesloPonovitev && <div className="error-msg-2">{errors.gesloPonovitev?.message}</div>
            }
        </div>
        <div className="form-group">
          <label htmlFor="inputDrzava">{strings.drzava}</label>
          <select className="form-control" id="drzava" {...register("drzava", { required: true })}>
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
        <br />
        <input type="submit" className="btn btn-primary" value={strings.potrdi} />
        <br />
      </form>
    </div>
  );
}
