import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import perfilExemplo from "../img/ana-soares.png";
import { useAtom } from "jotai";
import axios from "axios";
//
import navComponent from "./navbarAdmin";
import FormNovaEmp from "./formNovaEmpresa";
import NavHComponent from "./navbarhori";
//
import { userLoggedIn } from "../store/store";

export default function pageFormNovaEmp() {
  /*
  const [sales, setSales] = useState([]);
  const [actualUser] = useAtom(userLoggedIn);

  useEffect(() => {
    if (!actualUser) return;

    const getSales = async () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/contract/list`;
      try {
        const res = await axios.get(url, {
          params: { sellerId: actualUser.userId },
        });

        setSales(res.data.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    getSales();
  }, [actualUser]);
*/
  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div
        className="min-height-300 bg-primary position-absolute w-100 page-backoffice"
      ></div>
      {navComponent()}
      <main class="main-content position-relative border-radius-lg ">
        <NavHComponent></NavHComponent>
        <div class="container-fluid py-4 container-z-index">
          <div class="row index-ultimos-anuncios">
          {FormNovaEmp()}
          </div>
        </div>
      </main>
    </div>
  );
}
