import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import perfilExemplo from "../img/ana-soares.png";
import { useAtom } from "jotai";
import axios from "axios";
//
import navComponentAdmin from "./navbarAdmin";
import TabAdminHorasSub from "./Adm_TabHorasSubmetidas";
import NavHComponent from "./navbarhori";
//
import { userLoggedIn } from "../store/store";


export default function AdmHorasSubmetidas() {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <div
        className="min-height-300 bg-primary position-absolute w-100 page-backoffice"
      ></div>
      {navComponentAdmin()}
      <main className="main-content position-relative border-radius-lg ">
        <NavHComponent></NavHComponent>
        <div className="container-fluid py-4 container-z-index">
          <div className="row index-ultimos-anuncios">
            <div className="col-12">
              <div className="row">
                <div className="col-9">
                  <h6 className="h6_branco">Nome da pessoa apagar isto</h6>
                  <h6 className="h6_small">email apagar isto</h6>
                  <h6 className="h6_small">numero manager apagar isto</h6>
                </div>
                {/*REVER FILTRO*/}
                <div className="col-12 position-filtros_f">
                  
                    <h5 className="col-2 h5_color btn_filtros_m">
                      Filtrar por:
                    </h5>
                  <div className="btn_filtros_p">
                    <div className="text-end margin-btn btn_filtros_m ">
                      <Link
                        to="" className="btn bg-gradient-dark mb-0 pd_btn_filtros btn-color-filtros">
                        Mês
                      </Link>
                    </div>
                    <div className="text-end margin-btn btn_filtros_m">
                      <Link
                        to="" className="btn bg-gradient-dark mb-0 pd_btn_filtros btn-color-filtros">
                        Ano
                      </Link>
                    </div>
                    <div className="text-end margin-btn btn_filtros_m">
                      <Link
                        to="" className="btn bg-gradient-dark mb-0 pd_btn_filtros btn-color-filtros">
                        Horas Previstas
                      </Link>
                    </div>
                  </div>
                </div>
                {/*REVER FILTRO*/}
              </div>
              <div className="card mb-4 color-table">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Horas Submetidas</h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2 margin-table">
                    <div className="table-responsive p-0">{TabAdminHorasSub()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
