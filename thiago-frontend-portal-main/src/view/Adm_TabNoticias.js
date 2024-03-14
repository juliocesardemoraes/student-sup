import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function TabNoticias() {
  const [dataNoticias, setdataNoticias] = useState([]);
  const [user] = useAtom(userLoggedIn);

  useEffect(() => {
    if (user) LoadNoticias();
  }, [user]);

  function LoadNoticias() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/noticias/list`;

    axios
      .get(url, {
        params: {},
      })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataNoticias(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataNoticias.map((data, index) => {
      return (
        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{data.titulo_noticia}</h6>
              </div>
            </div>
          </td>
          <td class="align-middle text-center text-sm">
            <p class="text-xs font-weight-bold mb-0">{data.conteudo_noticia}</p>
          </td>
          <td class="align-middle">
            <Link className="btn bg-gradient-dark mb-0 btn-cor" to="/">
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
            Título
          </th>

          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Notícia
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>
  );
}
