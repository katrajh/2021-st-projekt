
import React, { FC, useEffect, useState } from 'react';
import string from '../../stringValues.js';
import { IUser } from '../useUsers';
import { useForm } from "react-hook-form";


export const RegisterForm: FC<{ potrdi: (user: any) => void }> = ({ potrdi }) => {
  const { register, handleSubmit } = useForm<IUser>();

  const onSubmit = (data: IUser) => {
    potrdi(data);
  }

  return (
    // Forma: Dodajanje uporabnika oz. registracija
    <div className="col-sm-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputIme">{string.ime}</label>
          <input type="text" className="form-control" id="inputIme" placeholder="Vnesi ime" {...register("ime")} />
        </div>
        <div className="form-group">
          <label htmlFor="inputPriimek">{string.priimek}</label>
          <input type="text" className="form-control" id="inputPriimek" placeholder="Vnesi priimek" {...register("priimek")} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleUporabniskoIme">{string.upIme}</label>
          <input type="text" className="form-control" id="exampleUproabniskoIme" placeholder="Vnesi uporabnisko ime" {...register("uporabniskoIme")} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">{string.email}</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Vnesi email" {...register("email")} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">{string.geslo}</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Geslo" {...register("geslo")} />
        </div>
        <div className="form-group">
          <label htmlFor="inputDrzava">{string.drzava}</label>
          <input type="text" className="form-control" id="inputDrzava" placeholder="Drzava" {...register("drzava")} />
        </div>
        <br />
        <input type="submit" className="btn btn-primary" value={string.potrdi} />
        <br />
      </form>
    </div>
  );
}
