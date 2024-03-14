import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import Olisipo from "../img/Olisipo_LogoWhite.svg";
import axios from "axios";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function LoginComponent() {
  const [email_user, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState("");
  const [actualUser, setActualUser] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    let data = sessionStorage.getItem("user");
    const USER = JSON.parse(data);
    if (USER) {
      navigate(`/${USER.perfil}`);
    } else if (actualUser) {
      navigate(`/${actualUser.perfil}`);
    }
  }, []);

  const validateUser = async (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/user/auth`;
    try {
      const res = await axios.get(url, {
        params: { email_user: email_user, pass: pass },
      });

      sessionStorage.setItem("USER", JSON.stringify(res.data));

      setActualUser({
        ...res.data,
      });
      navigate(`${res.data.perfil}`);
    } catch (error) {
      const errorMessage = JSON.parse(error.request.responseText);

      setInvalidCredentials(errorMessage.message);
    }
  };
  return (
    <div>
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card z-index-0">
                    <div className="card card-plain ">
                      <div className="card-header pb-0 text-start">
                        <h4 className="font-weight-bolder text-center">
                          Login
                        </h4>
                        <Link to="/Adm-Administradores">
                          <p className="mb-0 text-center txt-secundary">
                            Digite o seu e-mail e senha para entrar
                          </p>
                        </Link>
                        <p className="mb-0 text-center red__text">
                          {invalidCredentials}
                        </p>
                      </div>
                      <div className="card-body">
                        <form
                          onSubmit={(e) => {
                            validateUser(e);
                          }}
                        >
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="Email"
                              aria-label="Email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control form-control-lg"
                              placeholder="Palavra-passe"
                              aria-label="Password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                            />
                            <Link to="/Man-Empresas">
                              <label
                                className="form-check-label txt-secundary"
                                htmlFor="rememberMe"
                              >
                                Relembrar-me
                              </label>
                            </Link>
                          </div>
                          <div className="text-center bt-save">
                            <button
                              type="submit"
                              className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0 fundo_verde"
                            >
                              Entrar
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1">
                        <Link to="/Recuperar-Conta">
                          <p className="mb-4 text-sm mx-auto txt-secundary">
                            Esqueceu-se da palavra-passe?
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div className="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden padd">
                    <img src={Olisipo} alt="img-logo" className="img-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
