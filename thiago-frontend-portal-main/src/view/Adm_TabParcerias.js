import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";


export default function TabParcerias() {
  const [dataParcerias, setdataParcerias] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadParcerias();
  }, [user]);

  function LoadParcerias() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/parcerias/list`;

    axios
      .get(url, {
        params: { },
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataParcerias(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataParcerias.map((data, index) => {
      return (
        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{data.nome_parceiro}</h6>
              </div>
            </div>
          </td>
          <td class="align-middle text-center text-sm">
            <p class="text-xs font-weight-bold mb-0">{data.data_fim_parc}</p>
          </td>
          <td class="align-middle text-center text-sm">
            <p class="text-xs font-weight-bold mb-0">{data.descricao}</p>
          </td>
          <td class="align-middle">
            <Link
              to= "/">
              Editar
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <table class="table align-items-center mb-0">
      <thead>
        <tr>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Cliente
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Termnino contrato
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Descrição
          </th>
          <Link to="/Editar-Parceria">
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              
            </th>
          </Link>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>
  );
}
