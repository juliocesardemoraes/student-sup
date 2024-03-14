import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function TabAdministrador() {
  const [dataUser, setdataUser] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadUser();
  }, [user]);

  function LoadUser() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/user/list`;

    axios
      .get(url, {
        params: { excludeUserId: user.user_id },
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataUser(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataUser.map((data, index) => {
      return (
        <tr key={index}>
          <td>
            <div className="d-flex px-2 py-1">
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">{data.nome_user}</h6>
              </div>
            </div>
          </td>
          <td className="align-middle text-sm">
            <p className="text-xs font-weight-bold mb-0">{data.codigo_user}</p>
          </td>
          <td className="align-middle text-center">
            <p className="text-xs font-weight-bold mb-0">{data.email_user}</p>
          </td>
          <td className="align-middle text-center">
            <p className="text-xs font-weight-bold mb-0">{data.cargo}</p>
          </td>
          <td className="align-middle text-center">
            <p className="text-xs font-weight-bold mb-0">
              {data.empresa.nome_emp}
            </p>
          </td>
          <td className="align-middle text-center">
            <p className="text-xs font-weight-bold mb-0">
              {data.manager ? data.manager.nome_user : "N/A"}
            </p>
          </td>
          <td className="align-middle">
            <Link
              className="btn bg-gradient-dark mb-0 btn-cor"
              to="/Mudar-Manager"
            >
              Mudar Manager
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Nome
          </th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Identificação
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Email
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Cargo
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Cliente
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Manager
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>
  );
}
