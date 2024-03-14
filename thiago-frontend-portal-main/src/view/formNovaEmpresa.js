import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormNovaEmp() {
  const [campNomeEmp, setcampNomeEmp] = useState("");
  const [campNifEmp, setcampNifEmp] = useState("");
  const [campCPostalEmp, setcampCPostalEmp] = useState("");
  const [campMoradaEmp, setcampMoradaEmp] = useState("");
  /*REVER*/
  const [campEmailEmp, setcampEmailEmp] = useState("");
  /*REVER*/
  const [campInicioCont, setcampInicioCont] = useState("");
  const [campFimCont, setcampFimCont] = useState("");


  const [userLogged] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
      <div className="container-fluid py-4 form">
        <div className="card shadow-lg mx-4 form-card-padding color-card">
          <h4 className="text-center font-weight-bolder text-color">Nova Empresa</h4>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nome da Empresa</label>
                <input
                  className="form-control"
                  placeholder="ex. Joaquim Filipe Silva"
                  value={campNomeEmp}
                  onChange={(value) => setcampNomeEmp(value.target.value)}
                />
              </div>

              <div className="row row-form">
                <div className="col-md-6 mb-3">
                  <label className="form-label">NIF</label>
                  <input
                    className="form-control"
                    placeholder="ex. Joaquim"
                    value={campNifEmp}
                    onChange={(value) => setcampNifEmp(value.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Código-Postal</label>
                  <input
                    className="form-control"
                    placeholder="ex. Silva"
                    value={campCPostalEmp}
                    onChange={(value) => setcampCPostalEmp(value.target.value)}
                  />
                </div>
              </div>
              <div className="row row-form">
                <div className="mb-3">
                  <label className="form-label">Morada</label>
                  <input
                    className="form-control"
                    placeholder="ex. Joaquim Filipe Silva"
                    value={campMoradaEmp}
                    onChange={(value) => setcampMoradaEmp(value.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    placeholder="ex. Joaquim Filipe Silva"
                    value={campEmailEmp}
                    onChange={(value) => setcampEmailEmp(value.target.value)}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label">Início do Contrato</label>
                  <input
                    className="form-control"
                    placeholder="ex. 965032281"
                    value={campInicioCont}
                    onChange={(value) => setcampInicioCont(value.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Fim do Contrato</label>
                  <input
                    className="form-control"
                    placeholder="ex. Rua Santo António n23"
                    value={campFimCont}
                    onChange={(value) => setcampFimCont(value.target.value)}
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
        nome_cli: campNomeEmp,
        nif_emp: campNifEmp,
        codigo_post_emp: campCPostalEmp,
        attribute_22: campMoradaEmp,
        //priceEnergy: campEmailEmp,
        inicio_contrato: campInicioCont,
        fim_contrato: campFimCont,
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