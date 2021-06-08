import axios from "axios";
import { useEffect, useState } from "react";

var crypto = require('crypto');

// Za build appa: 
// const apiUrl = process.env.NODE_ENV === "production" ? "http://192.168.?.?:8080" : "http://localhost:8080";
const apiUrl = "http://localhost:8080";

export interface IUser {
  id: number;
  ime: string;
  priimek: string;
  uporabniskoIme: string;
  email: string;
  geslo: string;
  drzava: string;
}

export interface ILogin {
  uporabniskomIme: string,
  geslo: string
}

axios.defaults.withCredentials = true;

export const useUsers = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const getUsers = async () => {
    try {
      // const data = await axios.get(`${apiUrl}/uporabnik`);
      const { data } = await axios.get(`${apiUrl}/uporabnik`);
      setUsers(data);
      // console.log(data.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //* REGISTRACIJA POST
  const registerData = async (user: IUser) => {

    // Encrypt geslo
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var gesloString = mykey.update(user.geslo, 'utf8', 'hex');
    gesloString += mykey.final('hex');

    user.geslo=gesloString;

    try {
      const { data } = await axios.post(`${apiUrl}/uporabnik/register`, { user });
      setUsers(prev => [...prev, data]);
    } catch (error) {
      console.log(error);
    }
  }

  //! TEST register
  const register = async (user: IUser) => {
    axios.post(`${apiUrl}/uporabnik/register`, {
      user 
    }).then((response) => {
      console.log(response);
    })
  }

  const [loginStatus, setLoginStatus] = useState("");

  //* LOGIN POST
  const loginData = async (userLogin: ILogin) => {

    // Encrypt geslo for login
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var gesloString = mykey.update(userLogin.geslo, 'utf8', 'hex');
    gesloString += mykey.final('hex');

    userLogin.geslo = gesloString;

    try {
      const { data } = await axios.post(`${apiUrl}/uporabnik/login`, { userLogin });
      setUsers(prev => [...prev, data]);
      if (data.length > 0) {
        console.log({ data: data });
        setLoginStatus(data[0].uporabniskoIme);
      }
      else {
        setLoginStatus("Wrong username/password combination!");
        console.log({ message: "Wrong username/password combination!" });
      }
    } catch (error) {
      console.log({ message: error });
    }
  }

  //* UPDATE
  const updateUser = async (user: IUser) => {
    try {
      const { data } = await axios.put(`${apiUrl}/uporabnik/${user.id}`, user);
      // window.location.href = `/uporabnik/${data.id}`;
    } catch (error) {
      console.log(error);
    }
  }

  //* DELETE
  const deleteUser = async (user: IUser) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/uporabnik/${user.id}`);
      // window.location.href = `/uporabnik`;
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    // Anoninmna funkcija:
    getUsers();
    axios.get(`${apiUrl}/uporabnik/login`).then((response) => {
      console.log(response);
    })
  }, []);

  return { users, registerData, loginData, loginStatus, register, updateUser, deleteUser };
};
