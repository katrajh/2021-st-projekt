import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import React from 'react';

import { useUsers } from './users/useUsers';
import { Menu } from './menuTemplate';
import { UsersAsList } from './users/UsersAllList';
import { RegisterForm } from './users/register/RegisterForm';
import { LoginForm } from './users/login/LoginForm';

import { AddRestaurantForm } from './restavracije/AddRestaurantForm';
import { useRestaurant } from './restavracije/useRestaurants';
import { GetRestaurantAsList } from './restavracije/RestaurantsAllList';
import { RestaurantFilter } from './restavracije/RestaurantsFilter';
import { PodrobnostiRestavracije } from './restavracije/restaurantDetails';

import { AddTrgovinaForm } from './trgovine/AddTrgovinaForm';
import { useTrgovine } from './trgovine/useTrgovine';
import { GetTrgovinaAsList } from './trgovine/TrgovinaAsList';
import { PodrobnostiTrgovine } from './trgovine/TrgovinaDetails';
import { TrgovineFilter } from './trgovine/TrgovineFilter';

import useLocalStorage from './users/useLocalStorage';
import Login from './users/login/Login';
import Logout from './users/logout/Logout';
import { potrdi } from './stringValues';
// import Menu from './menu';

//#region 
function App() {

  const { users, registerData, loginData, loginStatus, updateUser, deleteUser } = useUsers();

  const { restaurants, postRestaurant, updateRestaurant, deleteRestaurant } = useRestaurant();

  const { trgovine, postTrgovina, updateTrgovina, deleteTrgovina } = useTrgovine();

  const [token, setTokenValue] = useLocalStorage("token", "");

  const tmpToken = {
    username: "",
    password: "",
    userType: ""
  };

  const odjava = (value: boolean) => {
    if (value) {
      setTokenValue(tmpToken);
    }
  };

  if ((token.username === "" && token.password === "") || !token) {
    return (
      <div className="App">
        <Menu token={token} odjava={odjava} />

        <Router>
          <Switch>
            <Route path="/prijava">
              {/* <LoginForm potrdi={loginData} setToken={setTokenValue} /> */}
              <Login setToken={setTokenValue} />
            </Route>
            <Route path="/registracija">
              <RegisterForm potrdi={registerData} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  };

  console.log({token});

  return (
    <div className="App">

      <Menu token={token} odjava={odjava} />
      <Router>
        <Switch>
          {/* <Route path="/prijava/">
            <Login setToken={setTokenValue} />
          </Route> */}
          <Route path="/pocivalisce/">
          </Route>
          <Route path="/profil/">
            {/* <Menu /> */}
          </Route>
          <Route path="/pocivalisca/">
            {/* <Menu /> */}
          </Route>
          <Route path="/priljubljena/">
            {/* <Menu /> */}
          </Route>
          {/* <Route path="/registracija/">
            {/* <Menu /> */}
          {/* <RegisterForm potrdi={registerData} /> */}
          {/* </Route> */}

          {/* RESTAVRACIJE START */}
          <Route path="/restavracije/dodaj">
            {/* <Menu /> */}
            <AddRestaurantForm potrdi={postRestaurant}/>
          </Route>
          {/* <Route path="/restavracije/regija/:id"> */}
          {/* <Menu /> */}
          {/* <AddRestaurantForm potrdi={postRestaurant} /> */}
          {/* <RestaurantCoulmnFilter restaurants={restaurants} /> */}
          {/* </Route> */}
          <Route path="/restavracije/regija/stajerska">
            <RestaurantFilter restaurants={restaurants} />
          </Route>
          <Route path="/restavracije/regija/savinjska">
            <RestaurantFilter restaurants={restaurants} />
          </Route>
          <Route path="/restavracije/regija/osrednjeslovenska">
            <RestaurantFilter restaurants={restaurants} />
          </Route>
          <Route path="/restavracije/:id">
            {/* <Menu /> */}
            <PodrobnostiRestavracije
              restaurant={restaurants}
              updateRestaurant={updateRestaurant}
              deleteRestaurant={deleteRestaurant}
            />
          </Route>
          <Route path="/restavracije/">
            <GetRestaurantAsList restaurants={restaurants} token={token} />
          </Route>
          {/* RESTAVRACIJE END */}

          {/* TRGOVINE START */}
          <Route path="/trgovine/dodaj">
            {/* <Menu /> */}
            <AddTrgovinaForm potrdi={postTrgovina} />
          </Route>
          <Route path="/trgovine/regija/stajerska">
            <TrgovineFilter trgovine={trgovine} />
          </Route>
          <Route path="/trgovine/regija/savinjska">
            <TrgovineFilter trgovine={trgovine} />
          </Route>
          <Route path="/trgovine/regija/osrednjeslovenska">
            <TrgovineFilter trgovine={trgovine} />
          </Route>
          <Route path="/trgovine/:id">
            {/* <Menu /> */}
            <PodrobnostiTrgovine
              trgovina={trgovine}
              updateTrgovina={updateTrgovina}
              deleteTrgovina={deleteTrgovina}
            />
          </Route>
          <Route path="/trgovine/">
            {/* <Menu /> */}
            <GetTrgovinaAsList trgovina={trgovine} token={token} />
          </Route>
          {/* TRGOVINE END */}

          {/* <Route path="/prijava/"> */}
          {/* <Menu /> */}
          {/* <LoginForm potrdi={loginData} /> */}
          {/* <h1>Login status: {loginStatus}</h1> */}
          {/* </Route> */}
          <Route path="/seznam/">
            {/* <Menu /> */}
            <UsersAsList users={users} />
          </Route>
          <Route path="/odjava/">
            <Logout setToken={setTokenValue} />
          </Route>
        </Switch>
      </Router>

      {/* NOGA */}
      <div className="text-center">
        <br />
        <hr />
        <p>Univerza v Mariboru</p>
        <p>Fakulteta za elektrotehniko, računalništvo in informatiko</p>
        <p>Koroška cesta 46, 2000 Maribor</p>
        <p>feri@um.si  +386 2 220 7000 </p>
        <p>©FERI, Vse pravice pridržane </p>
      </div>

      {/* {users.length > 0 && <List users={users} />} */}
      {/* <Form onSubmit={postData} /> */}
    </div>
  );

}
//#endregion

export default App;
