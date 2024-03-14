import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormMudarMana() {
    const [campColab, setcampColab] = useState("");
    const [campId, setcampId] = useState("");
    const [campManAtual, setcampManAtual] = useState("");
    const [campManNovo, setcampManNovo] = useState("");
    const [userLogged] = useAtom(userLoggedIn);

    const navigate = useNavigate();

    return (
        <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
            <div className="container-fluid py-4 form">
                <div className="card shadow-lg mx-4 form-card-padding color-card">
                    <h4 className="text-center font-weight-bolder text-color">Mudar Manager</h4>
                    <div className="card-body">
                        <form>
                            <div className="row row-form">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Colaborador</label>
                                    <input
                                        className="form-control"
                                        placeholder="ex. Joaquim"
                                        value={campColab}
                                        onChange={(value) => setcampColab(value.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Identificação</label>
                                    <input
                                        className="form-control"
                                        placeholder="ex. Silva"
                                        value={campId}
                                        onChange={(value) => setcampId(value.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row row-form">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Manager Atual</label>
                                    <select className="form-control" name="horas" id="horas">
                                        <option value={campManAtual}
                                            onChange={(value) => setcampManAtual(value.target.value)}></option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Manager Novo</label>
                                    <select className="form-control" name="horas" id="horas">
                                        <option value={campManNovo}
                                            onChange={(value) => setcampManNovo(value.target.value)}></option>
                                    </select>
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
        nome_perfil: campColab,
        user_id: campId,
        //REVER: campManAtual,
        //REVER: campManNovo,
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
}*/