import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function TabAdminNotificacoes() {
  const [dataNotificacoes, setDataNotificacoes] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadNotificacoes();
  }, [user]);

  function LoadNotificacoes() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/notificacoes/list`;

    axios
      .get(url, {
        params: {},
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          console.log("Received data:", data);
          setDataNotificacoes(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataNotificacoes.map((data, index) => {
      return (
        <tr key={index}>
          <td>
            <div className="d-flex px-2 py-1">
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">{data.USER.nome_user}</h6>
              </div>
            </div>
          </td>
          <td className="align-middle text-center text-sm">
            <p className="text-xs font-weight-bold mb-0">{data.id_noti}</p>
          </td>
          <td className="align-middle text-center text-sm">
            <p className="text-xs font-weight-bold mb-0">
              {data.notificaco.mensagem_noti}
            </p>
          </td>
          <td className="align-middle">
            <Link to="">Eliminar</Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Nome
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Identificação
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Descrição
          </th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
        </tr>
      </thead>
      <tbody>{LoadFillData()}</tbody>
    </table>
  );
}
