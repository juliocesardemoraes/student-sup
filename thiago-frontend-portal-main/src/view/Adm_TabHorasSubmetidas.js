import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";


export default function TabAdminHorasSub() {
  const [dataHoras, setdataHoras] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadHoras();
  }, [user]);

  function LoadHoras() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/horas/list`;

    axios
      .get(url, {
        params: { },
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataHoras(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataHoras.map((data, index) => {
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
            <p class="text-xs font-weight-bold mb-0">{data.data_inicio}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.data_horas_fim}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.horas_estimadas}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.horas_trabalhadas}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.descricao_horas}</p>
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
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            
          </th>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Início
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Fim
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Horas p/dia
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Horário Previsto
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
