import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import perfilExemplo from "../img/ana-soares.png";
import { useAtom } from "jotai";
import axios from "axios";
//
import navComponentMan from "./navbarManager";
import TabColaboradores from "./Man_TabColaboradores";
import NavHComponent from "./navbarhori";
//
import { userLoggedIn } from "../store/store";


export default function ManColaboradores() {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <div
        className="min-height-300 bg-primary position-absolute w-100 page-backoffice"
      ></div>
      {navComponentMan()}
      <main className="main-content position-relative border-radius-lg ">
        <NavHComponent></NavHComponent>
        <div className="container-fluid py-4 container-z-index">
          <div className="row index-ultimos-anuncios">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <h6 className="h6_branco">Nome da pessoa apagar isto</h6>
                  <h6 className="h6_small">email apagar isto</h6>
                  <h6 className="h6_small">numero manager apagar isto</h6>
                </div>
                <div className="col-6 text-end position-btn-novo">
                  <Link
                    to="/Nova-Reuniao" className="btn bg-gradient-dark mb-0 btn-cor">
                    <i className="fas fa-plus"></i>&nbsp;&nbsp;Nova Reunião
                  </Link>
                </div>
              </div>
              <div className="card mb-4 color-table">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Colaboradores</h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2 margin-table">
                    <div className="table-responsive p-0">{TabColaboradores()}</div>
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
