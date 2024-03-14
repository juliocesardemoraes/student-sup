import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function TabAdminDadosP() {
  const [dataDadosP, setdataDadosP] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadDadosP();
  }, [user]);

  function LoadDadosP() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/userCopia/list`;

    axios
      .get(url, {
        params: {},
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataDadosP(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataDadosP.map((data, index) => {
      return (
        <>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{data.USER.nome_user}</h6>
                </div>
              </div>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.USER.morada}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <p class="text-xs font-weight-bold mb-0">{data.USER.telemovel}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.USER.iban}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.USER.ccidadao}</p>
            </td>
            {/*REVER ESTADO*/}
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">Aprovado / Recusado</p>
            </td>
            {/*REVER ESTADO*/}
          </tr>
          <tr>
            <td class="align-middle text-center text-sm">
              <p class="text-xs font-weight-bold mb-0 cor-verde">Novo</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.morada_copia}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <p class="text-xs font-weight-bold mb-0">
                {data.telemovel_copia}
              </p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.iban_copia}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.ccidadao_copia}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <p class="text-xs font-weight-bold mb-0"></p>
            </td>
          </tr>
        </>
      );
    });
  }

  return (
    <table class="table align-items-center mb-0">
      <thead>
        <tr>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Morada
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Contacto
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            IBAN
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Cartão Cidadão
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
