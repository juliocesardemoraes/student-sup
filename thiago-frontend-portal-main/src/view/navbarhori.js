import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";
import Olisipo from "../img/Olisipo_LogoWhite.svg";


export default function NavHComponent() {
  const [, setActualUser] = useAtom(userLoggedIn);

  const logoutUser = () => {
    sessionStorage.removeItem("user");
    setActualUser(null);
  };

  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      data-scroll="false"
    >
      <div className="container-fluid py-1 px-3">
        
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
            <img src={Olisipo} alt="img-logo" className="img-portal"/>
            </div>
          </div>
          <ul className="navbar-nav justify-content-end">
            
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a
                href="javascript:;"
                className="nav-link text-white p-0"
                id="iconNavbarSidenav"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
