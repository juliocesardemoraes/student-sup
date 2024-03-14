import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function TabAdimPedido() {
  const [dataFerias, setdataFerias] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadFerias();
  }, [user]);

  function LoadFerias() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/ferias/list`;

    axios
      .get(url, {
        params: {},
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataFerias(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataFerias.map((data, index) => {
      return (
        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{data.USER.nome_user}</h6>
              </div>
            </div>
          </td>
          <td class="align-middle text-center text-sm">
            <p class="text-xs font-weight-bold mb-0">{data.data_inicio_f}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.data_fim_f}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.descricao_f}</p>
          </td>
          {/*REVER BTN DE APROVADO E ERCUSADO*/}
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.status_f}</p>
          </td>
          {/*REVER BTN DE APROVADO E ERCUSADO*/}
        </tr>
      );
    });
  }

  return (
    <table class="table align-items-center mb-0">
      <thead>
        <tr>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Início
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Fim
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Descrição
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Estado
          </th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>
  );
}
