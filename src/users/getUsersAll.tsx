import { FC } from "react";
// import { useForm } from "react-hook-form";
import { IUser} from "./useUsers";
import string from '../stringValues.js';

// Izpis podatkov
export const GetUsersAsList: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    // <ul>
    //   {users.map((user) => (
    //     <li key={user.id}>{user.id}: {user.ime} {user.priimek}</li>
    //   ))}
    // </ul>

    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">{string.ime}</th>
            <th scope="col">{string.priimek}</th>
            <th scope="col">{string.upIme}</th>
            <th scope="col">{string.email}</th>
            <th scope="col">{string.geslo}</th>
            <th scope="col">{string.drzava}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.ime}</td>
              <td>{user.priimek}</td>
              <td>{user.uporabniskoIme}</td>
              <td>{user.email}</td>
              <td>{user.geslo}</td>
              <td>{user.drzava}</td>
            </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
}
