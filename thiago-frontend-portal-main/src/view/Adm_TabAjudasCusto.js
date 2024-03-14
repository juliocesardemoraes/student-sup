import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function TabAdminAjudasC() {
  const [dataDeslocacao, setdataDeslocacao] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadDeslocacao();
  }, [user]);

  function LoadDeslocacao() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/deslocacao/list`;

    axios
      .get(url, {
        params: {},
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataDeslocacao(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataDeslocacao.map((data, index) => {
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
            <p class="text-xs font-weight-bold mb-0">
              {data.tipo_viatura.nome_viatura}
            </p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.local_part}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.local_dest}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.dist_perc}</p>
          </td>

          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.custo_deslocacao}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.custo_hosped}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.custo_aliment}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">{data.total_custo}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs font-weight-bold mb-0">botao aqui</p>
          </td>
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
            Transporte
          </th>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Partida
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Chegada
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Distância
          </th>

          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Custo de Deslocação
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Custo de Hospedagem
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Custo de Alimentação
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Total
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
