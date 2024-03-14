import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";


export default function TabColaboradores() {
  const [dataOffer, setdataOffer] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadOffer();
  }, [user]);

  function LoadOffer() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/list`;

    axios
      .get(url, {
        params: { userId: user.userId },
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataOffer(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataOffer.map((data, index) => {
      return (
        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{data.nome_perfil}</h6>
              </div>
            </div>
          </td>
          <td class="align-middle text-center text-sm">
            <p class="text-xs font-weight-bold mb-0">{data.user_id}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.data_reuniao}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.hora_reuniao}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.descricao_reuniao}</p>
          </td>
          <td class="align-middle">
            <Link to= "editarReuniao"
              /*to={`/editarAnuncio?data=${JSON.stringify({
                user_id: data.user_id,
                data_reuniao: data.data_reuniao,
                hora_reuniao: data.hora_reuniao,
                descricao_reuniao: data.descricao_reuniao,
              })}`}
              class="text-secondary font-weight-bold text-xs"
              data-toggle="tooltip"
              data-original-title="Edit user"*/
            >
              Editar Reunião
            </Link>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.status_reuniao}</p>
          </td>
        </tr>
      );
    });
  }

  return (
    <table class="table align-items-center mb-0">
      <thead>
        <tr>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            
          </th>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            ID
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Data
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Hora
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Descrição
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Editar
          </th><Link to="/Editar-Reuniao">
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Estado
          </th></Link>
          <th class="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>
  );
}
