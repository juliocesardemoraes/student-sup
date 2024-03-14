import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import perfilExemplo from "../img/ana-soares.png";
import { useAtom } from "jotai";
import axios from "axios";
//
import navComponent from "./navbarAdmin";
import FormEditarNot from "./FormEditarNoticia";
import NavHComponent from "./navbarhori";
//
import { userLoggedIn } from "../store/store";

export default function pageFormEditarNot() {
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
          {FormEditarNot()}
          </div>
        </div>
      </main>
    </div>
  );
}
