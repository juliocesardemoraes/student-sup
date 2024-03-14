import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormNovaNot() {
  const [campTitulo, setcampTitulo] = useState("");
  const [campIdent, setcampIdent] = useState("");
  const [campTodosC, setcampTodosC] = useState("");
  const [campDescr, setcampDescr] = useState("");
  const [userLogged] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
        <div className="container-fluid py-4 form">
            <div className="card shadow-lg mx-4 form-card-padding color-card">
                <h4 className="text-center font-weight-bolder text-color">Nova Notificação</h4>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input
                                className="form-control"
                                placeholder="ex. Joaquim Filipe Silva"
                                value={campTitulo}
                                onChange={(value) => setcampTitulo(value.target.value)}
                            />
                        </div>

                        <div className="row row-form">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Identificação</label>
                                <input
                                    className="form-control"
                                    placeholder="ex. Joaquim"
                                    value={campIdent}
                                    onChange={(value) => setcampIdent(value.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Colaboradores</label>
                                <div className="form-check">
                                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={campTodosC}
                                    onChange={(value) => setcampTodosC(value.target.value)}/>
                                        <label class="form-check-label" for="flexCheckDefault">Todos os Colaboradores</label>
                                </div>
                            </div>
                        </div>
                        <div className="row row-form">
                            <div className="mb-3">
                                <label className="form-label">Descrição</label>
                                <input
                                    className="form-control"
                                    placeholder="ex. Joaquim Filipe Silva"
                                    value={campDescr}
                                    onChange={(value) => setcampDescr(value.target.value)}
                                />
                            </div>

                        </div>

                        <button onClick={(e) => SendSave(e)} className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

function SendSave(event) {
    event.preventDefault();//alterar
}
}

/*DENTRO DA FUNÇÃO SendSave
if (campQuantity === 0) {
        alert("Escolha a quantidade vendida.");
    } else if (campEnergy === 0) {
        alert("Escolha o preço por kw.");
    } else if (campPrice === "") {
        alert("Escolha o preço total.");
    } else {
        const baseUrl = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/create`;
        const datapost = {
            //FALTA-REVER: campTitulo,
            user_id: campIdent,
            para_todos: campTodosC,
            mensagem_noti: campDescr,
            userId: userLogged.userId,
        };
        axios
            .post(baseUrl, datapost)
            .then((response) => { })
            .catch((error) => {
                alert("Error 34 " + error);
            })
            .finally(() => {
                navigate("/vendedor");
                return;
            });
    }
*/ 