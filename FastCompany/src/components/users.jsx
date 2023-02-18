import React from "react";
import { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  //   console.log(users, "Стейт");
  //   console.log(setUsers, "фунцкия позволяющая изменять наш Стейт");
  const renderPhrase = () => {
    let word = "тусанёт с тобой сегодня";
    if (users.length >= 2 && users.length <= 4) {
      return " человека " + word;
    } else {
      return " человек " + word;
    }
  };
  const hendeleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += users.length === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  return (
    <>
      <div className={getBageClasses()}>
        {users.length} {renderPhrase()}
      </div>

      <table className="table">
        {users.length === 0 ? (
          ""
        ) : (
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, кол. раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Удалить</th>
            </tr>
          </thead>
        )}

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality, index) => (
                  <span className={"badge bg-" + quality.color} key={index}>
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  onClick={() => hendeleDelete(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* "badge bg-secondary" */}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default Users;
