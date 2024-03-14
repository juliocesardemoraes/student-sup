import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormEditarPar() {
  const [campEmpresa, setcampEmpresa] = useState("");
    const [campDes, setcampDes] = useState("");
    //
    const [userLogged] = useAtom(userLoggedIn);

    const navigate = useNavigate();

    return (
        <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
            <div className="container-fluid py-4 form">
                <div className="card shadow-lg mx-4 form-card-padding color-card">
                    <h4 className="text-center font-weight-bolder text-color">Editar Parceria</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Empresa</label>
                                <input
                                    className="form-control"
                                    placeholder="ex. Joaquim Filipe Silva"
                                    value={campEmpresa}
                                    onChange={(value) => setcampEmpresa(value.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descrição</label>
                                <input
                                    className="form-control"
                                    placeholder="ex. Joaquim Filipe Silva"
                                    value={campDes}
                                    onChange={(value) => setcampDes(value.target.value)}
                                />
                            </div>

                            {/*REVER*/}
                            <div className="row row-form">
                                <div className="mb-3">
                                    <label class="form-label" for="customFile">Default file input example</label>
                                    <input type="file" class="form-control" id="customFile" />
                                </div>
                            </div>
                            {/*REVER*/}
                            
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

/*
if (campQuantity === 0) {
            alert("Escolha a quantidade vendida.");
        } else if (campEnergy === 0) {
            alert("Escolha o preço por kw.");
        } else if (campPrice === "") {
            alert("Escolha o preço total.");
        } else {
            const baseUrl = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/create`;
            const datapost = {
                nome_parceiro: campEmpresa,
                descricao: campDes,
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