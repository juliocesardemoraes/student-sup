//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import groupImage from "../img/Group.png";
import groupHome from "../img/Home.svg";
import imageAnuncio from "../img/Meus_Anuncios_pg.svg";
import imageVendas from "../img/Minhas_Vendas_pg.svg";
import imageEstatistica from "../img/Estatisticas_pg.svg";
//
import sair from "../img/Sair.svg";
import React, { useEffect, useState } from "react";
//

export default function NavComponentMan() {

  const [textColor, setTextColor] = useState('#000000'); // Estado para controlar a cor do texto

  const handleClick = () => {
    // Altera a cor do texto quando clicado
    setTextColor(textColor === '#000000' ? '#1ED700' : '#000000');
  };


  return (
    <aside
      className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 justify-content-sidebar"
      id="sidenav-main"
    >

      <div
        className="collapse navbar-collapse w-auto"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav sidebar">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="nav-link-text ms-1 sidebar-text">Inicio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Colaboradores">
              <span className="nav-link-text ms-1 sidebar-text">Colaboradores</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Empresas">
              <span className="nav-link-text ms-1 sidebar-text">Empresa</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="">
              <span className="nav-link-text ms-1 sidebar-text">Reunião</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Man-Colaborador">
              <span className="nav-link-text ms-1 sub-tittle sidebar-text">Colaborador</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Administradores">
              <span className="nav-link-text ms-1 sub-tittle sidebar-text">Admin</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Pedidos-de-Ferias">
              <span className="nav-link-text ms-1 sidebar-text">Pedido de Férias</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Faltas">
              <span className="nav-link-text ms-1 sidebar-text">Faltas</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Horas-Submetidas">
              <span className="nav-link-text ms-1 sidebar-text">Horas Submetidas</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Ajudas-de-Custo">
              <span className="nav-link-text ms-1 sidebar-text">Ajudas de Custo</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Man-Dados-Pessoais">
              <span className="nav-link-text ms-1 sidebar-text">Dados Pessoais</span>
            </Link>
          </li>
        </ul>
      </div>
      <Link className="nav-link" to="/">
        <div className="align-items-sair">
          <span className="sidebar-text-sair">Sair</span>
          <img src={sair} alt="img-sair" className="img-sair"></img>
        </div>
      </Link>
    </aside>
  );
}
