import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormNovoUti() {
  const [campNomeComp, setcampNomeComp] = useState("");
  const [campPassword, setcampPassword] = useState("");
  const [campCargo, setcampCargo] = useState("");
  const [campCCidadao, setcampCCidadao] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campTelemovel, setcampTelemovel] = useState("");
  const [campMorada, setcampMorada] = useState("");
  const [campCPostal, setcampCPostal] = useState("");
  const [campIBAN, setcampIBAN] = useState("");
  const [campEmpresa, setcampEmpresa] = useState("");
  const [campContrato, setcampContrato] = useState("");
  const [camp, setcamp] = useState("");
  //const [camp, setcamp] = useState("");
  const [campManager, setcampManager] = useState("");

  const [userLogged] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
      <div className="container-fluid py-4 form">
        <div className="card shadow-lg mx-4 form-card-padding color-card">
          <h4 className="text-center font-weight-bolder text-color">
            Novo Utilizador
          </h4>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                  className="form-control"
                  placeholder="ex. Joaquim Filipe Silva"
                  value={campNomeComp}
                  onChange={(value) => setcampNomeComp(value.target.value)}
                />
              </div>

              <div className="row row-form">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Cargo</label>
                  <select
                    className="form-control"
                    name="Cargo"
                    id="Cargo"
                    value={campCargo}
                    onChange={(value) => setcampCargo(value.target.value)}
                  >
                    <option value="">Selecione um Cargo</option>
                    {/*{managers.map((manager, index) => (
                      <option key={index} value={manager}>
                        {manager}
                      </option>))} */}
                    <option>Colaborador</option>
                    <option>Manager</option>
                    <option>Administrador</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Cartão de Cidadão</label>
                  <input
                    className="form-control"
                    placeholder="egx. 596395603"
                    value={campCCidadao}
                    onChange={(value) => setcampCCidadao(value.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    placeholder="eg. joaquimfs@gmail.com"
                    value={campEmail}
                    onChange={(value) => setcampEmail(value.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Telemóvel</label>
                  <input
                    className="form-control"
                    placeholder="ex. 965032281"
                    value={campTelemovel}
                    onChange={(value) => setcampTelemovel(value.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Morada</label>
                  <input
                    className="form-control"
                    placeholder="ex. Rua Santo António n23"
                    value={campMorada}
                    onChange={(value) => setcampMorada(value.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Código-Postal</label>
                  <input
                    className="form-control"
                    placeholder="ex. 2330-240"
                    value={campCPostal}
                    onChange={(value) => setcampCPostal(value.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">IBAN</label>
                  <input
                    className="form-control"
                    placeholder="eg. PT50 238564330012845037400"
                    value={campIBAN}
                    onChange={(value) => setcampIBAN(value.target.value)}
                  />
                </div>

                {/*REVER*/}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Profissão</label>
                  <input
                    className="form-control"
                    placeholder="eg. Designer"
                    value={camp}
                    onChange={(value) => setcamp(value.target.value)}
                  />
                </div>
                {/*REVER*/}

                {/*REVER*/}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Manager</label>
                  <select
                    className="form-control"
                    name="Manager"
                    id="Manager"
                    value={campManager}
                    onChange={(value) => setcampManager(value.target.value)}
                  >
                    <option value="">Selecione um Manager</option>
                    {/*{managers.map((manager, index) => (
                      <option key={index} value={manager}>
                        {manager}
                      </option>))} */}
                    <option>Man 1</option>
                  </select>
                </div>
                {/*REVER*/}

                <div className="mb-3">
                  <label className="form-label">Código da Empresa</label>
                  <input
                    className="form-control"
                    placeholder="ex. 1000"
                    value={campEmpresa}
                    onChange={(value) => setcampEmpresa(value.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    className="form-control"
                    placeholder="ex. aUdsv3SAsu"
                    value={campPassword}
                    onChange={(value) => setcampPassword(value.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" for="customFile">
                    Inserir Contrato
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="customFile"
                    value={campContrato}
                    onChange={(value) => setcampContrato(value.target.value)}
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
    event.preventDefault(); //alterar
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
      const baseUrl = `${.env.REACT_APP_BACKEND_HOST_URL}/offer/create`;
      const datapost = {
        quantity: campQuantity,
        priceEnergy: campEnergy,
        totalPrice: campPrice,
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
