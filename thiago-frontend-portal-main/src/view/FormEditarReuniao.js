import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormEditarReuniao() {
  const [campDescricao, setcampDescrcao] = useState("");
  const [campID, setcampID] = useState("");
  const [campName, setcampName] = useState("");
  const [campData, setcampData] = useState("");
  const [campHoras, setcampHoras] = useState("");
  const [userLogged] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
      <div className="container-fluid py-4 form">
        <div className="card shadow-lg mx-4 form-card-padding color-card">
          <h4 className="text-center font-weight-bolder text-color">Editar Reunião</h4>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Motivo</label>
                <input
                  className="form-control"
                  placeholder="eg. Falta"
                  /*value={}
                  onChange={(value) => (value.target.value)}*/
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <input
                  className="form-control"
                  placeholder="eg. 45"
                  value={campDescricao}
                  onChange={(value) => setcampDescrcao(value.target.value)}
                />
              </div>
              <div className="row row-form">
                <div className="col-md-6 mb-3">
                  <label className="form-label">ID</label>
                  <input
                    className="form-control"
                    placeholder="1000"
                    value={campID}
                    onChange={(value) => setcampID(value.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nome</label>
                  <input
                    className="form-control"
                    placeholder="Leandro Faria"
                    value={campName}
                    onChange={(value) => setcampName(value.target.value)}
                  />
                </div>
              </div>
              <div className="row row-form">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Data</label>
                  <input
                    className="form-control"
                    placeholder="eg. 10-10-2023"
                    value={campData}
                    onChange={(value) => setcampData(value.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                <label className="form-label">Hora</label>
                  <select className="form-control" name="horas" id="horas">
                  
                    <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>9:00 h</option>
                    <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>10:00 h</option>
                    <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>11:00 h</option>
                    <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>12:00 h</option>
                     <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>13:00 h</option>
                     <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>14:00 h</option>
                     <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>15:00 h</option>
                     <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>16:00 h</option>
                     <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>17:00 h</option>
                     <option value={campHoras}
                    onChange={(value) => setcampHoras(value.target.value)}>18:00 h</option>
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
    event.preventDefault();
    if (campData === "") {
      alert("Escolha a data para realizar a Reunião.");
    } else if (campDescricao === "") {
      alert("Elabore uma breve descrição.");
    } else if (campHoras === "") {
      alert("Escolha a hora para realizar a Reunião.");
    } else {
      const baseUrl = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/create`;
      const datapost = {
        user_id: campID,
        nome_perfil: campName,
        data_reuniao: campData,
        hora_reuniao: campHoras,
        descricao_reuniao: campDescricao,
        userId: userLogged.userId,
      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {})
        .catch((error) => {
          alert("Error 34 " + error);
        })
        .finally(() => {
          navigate("/vendedor");
          return;
        });
    }
  }
}
