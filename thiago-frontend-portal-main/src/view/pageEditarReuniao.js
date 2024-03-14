import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NavHComponent from "./navbarhori";
import navManagerComponent from "./navbarManager";//fazer a alteraçºao para a navbar do Manager

import FormEditarReuniao from "./FormEditarReuniao";
//
import NavComponentMan from "./navbarManager";
//

export default function pageEditarReuniao() {
  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div></div>
      <div
        className="min-height-300 bg-primary position-absolute w-100 page-backoffice"
      ></div>
      {NavComponentMan()}
      <main class="main-content position-relative border-radius-lg">
        <NavHComponent></NavHComponent>
        <div class="container-fluid py-4 container-z-index">
          <div class="row index-ultimos-anuncios">
          <FormEditarReuniao></FormEditarReuniao>
          </div>
        </div>
      </main>
    </div>
  );
}
