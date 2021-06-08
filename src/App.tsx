import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import { useUsers } from './users/useUsers';
import { Menu } from './menuTemplate';
import { GetUsersAsList } from './users/getUsersAll';
import { RegisterForm } from './users/register/RegisterForm';
import { LoginForm } from './users/login/LoginForm';

// const List: FC<{ users: IUser[] }> = ({ users }) => {
//   return <div>{users.length}</div>
// }

function App() {

  const { users, registerData, loginData, loginStatus, register, updateUser, deleteUser } = useUsers();
  
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/pocivalisce/">
            <Menu />
            <p>Kličem pocivalisce</p>
          </Route>
          <Route path="/profil/">
            <Menu />
            <p>Kličem profil</p>
          </Route>
          <Route path="/pocivalisca/">
            <Menu />
            <p>Kličem pocivalisca</p>
          </Route>
          <Route path="/priljubljena/">
            <Menu />
            <p>Kličem priljubljena</p>
          </Route>
          <Route path="/registracija/">
            <Menu />
            <p>Kličem registracija</p>
            <RegisterForm potrdi={registerData} />
            {/* <RegisterForm onSubmit={register} />  */}
          </Route>
          <Route path="/prijava/">
            <Menu />
            <p>Kličem prijava</p>
            <LoginForm potrdi={loginData}/>
            <h1>Login status: {loginStatus}</h1>
          </Route>
          <Route path="/seznam/">
            <Menu />
            <p>Kličem seznam</p>
            <GetUsersAsList users={users} />
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

export default App;
