import { FC, useState } from "react";
import strings from '../../stringValues.js';
import { useForm } from 'react-hook-form';
import { ILogin } from "../useUsers.js";
import PropTypes from "prop-types";
// PRIJAVA FORM
// export const LoginForm: FC<{ potrdi: (loginUser: any) => void }> = ({ potrdi }) => {

export function LoginForm ({potrdi, setToken}: {potrdi: any, setToken: any}) {

  const { register, handleSubmit, setError, formState: { errors } } = useForm<ILogin>()

  // const onSubmit = (data: ILogin) => {
  //   potrdi(data);
  //   alert("Prijava uspešna");
  // }
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  const onSubmit = (data: ILogin) => {
    // potrdi(data);
    
    if(potrdi(data)) {
      const token = {
        username: data.uporabniskoIme,
        password: data.geslo,
        userType
      };
    
      if (username === "admin" && password === "724d895f87823bf2ee377b3bc5fb894f") {
        token.userType = "admin";
        setToken(token);
      }
      else {
        token.userType = "user";
        setToken(token);
      }
    }
  
  };

  return (
    <div className="col-sm-4 mx-auto">
      <br />
      <h2> {strings.prijava} </h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputEmail">{strings.email}</label>
          <input type="text" className="form-control" id="inputEmail" 
          placeholder="Vnesi uporabniško ime" 
          {...register("uporabniskoIme", {required: true})} />
          {
            errors.uporabniskoIme && <div className="error-msg">Uporabniško ime ne sme biti prazno!</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">{strings.geslo}</label>
          <input type="password" className="form-control" id="inputPassword" 
          placeholder="Geslo" 
          {...register("geslo", {required: true})} />
          {
            errors.geslo && <div className="error-msg">Geslo ne sme biti prazno!</div>
          }
        </div>
        <br />
        <button type="submit" className="btn btn-primary" >{strings.potrdi}</button>
        <br />
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};