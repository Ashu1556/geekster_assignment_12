import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";
import Table from "../Component/Table";

const Main = () => {
  const [user, setUser] = useState([]);

  const data = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        setUser(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <div className="header_container">
        <div className="header_container1">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
          </tr>
        </thead>

        {user.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>
                  <img src={item.picture.medium} alt="profile_image" />
                </td>
                <td>
                  {item.name.first} {item.name.last}
                </td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Main;
