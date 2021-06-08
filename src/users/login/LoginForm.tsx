import { FC, useState } from "react";
import strings from '../../stringValues.js';
import { useForm } from 'react-hook-form';
import { ILogin } from "../useUsers.js";

// PRIJAVA FORM
export const LoginForm: FC<{ potrdi: (loginUser: any) => void }> = ({ potrdi }) => {

  const [uporabniskoIme, setUporabniskoIme] = useState<string>("");
  const [geslo, setGeslo] = useState<string>("");

  const { register, handleSubmit} = useForm<ILogin>()

  const onSubmit = (data: ILogin) => {
    potrdi(data);
  }
  
  function validateForm() {
    return uporabniskoIme.length > 3 && geslo.length > 3;
  }


  return (
    <div className="col-sm-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputEmail">{strings.email}</label>
          <input type="text" className="form-control" id="inputEmail" placeholder="Vnesi uporabniško ime" {...register("uporabniskomIme")} />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">{strings.geslo}</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="Geslo" {...register("geslo")} />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" disabled={!validateForm()} >{strings.potrdi}</button>
        <br />
      </form>
    </div>
  );
}