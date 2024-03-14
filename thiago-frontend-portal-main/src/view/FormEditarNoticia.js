import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function FormEditarNot() {
  const [campTitulo, setcampTitulo] = useState("");
  const [campMotivo, setcampMotivo] = useState("");
  const [campResumo, setcampResumo] = useState("");
  const [campNoticia, setcampNoticia] = useState("");
  const [campImg, setcampImg] = useState("");
  //
  const [userLogged] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
      <div className="container-fluid py-4 form">
        <div className="card shadow-lg mx-4 form-card-padding color-card">
          <h4 className="text-center font-weight-bolder text-color">Editar Notícia</h4>
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

              <div className="col-md-6 mb-3">
                <label className="form-label">Motivo</label>
                <select className="form-control" name="motivo" id="motivo">

                  <option value={campMotivo}
                    onChange={(value) => setcampMotivo(value.target.value)}>Nova Parceria</option>
                  <option value={campMotivo}
                    onChange={(value) => setcampMotivo(value.target.value)}>Novidades</option>
                  <option value={campMotivo}
                    onChange={(value) => setcampMotivo(value.target.value)}>Reunião</option>
                  <option value={campMotivo}
                    onChange={(value) => setcampMotivo(value.target.value)}>Atualização</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Resumo</label>
                <input
                  className="form-control"
                  placeholder="ex. Joaquim Filipe Silva"
                  value={campResumo}
                  onChange={(value) => setcampResumo(value.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Notícia</label>
                <input
                  className="form-control"
                  placeholder="ex. Joaquim Filipe Silva"
                  value={campNoticia}
                  onChange={(value) => setcampNoticia(value.target.value)}
                />
              </div>
              <div className="row row-form">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Imagem</label>
                  <input
                    className="form-control"
                    placeholder="ex. 245967034"
                    value={campImg}
                    onChange={(value) => setcampImg(value.target.value)}
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
/*if (campQuantity === 0) {
      alert("Escolha a quantidade vendida.");
    } else if (campEnergy === 0) {
      alert("Escolha o preço por kw.");
    } else if (campPrice === "") {
      alert("Escolha o preço total.");
    } else {
      const baseUrl = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/create`;
      const datapost = {
        titulo_noticia: campTitulo,
        
        //Rever
        priceEnergy: campMotivo,
        totalPrice: campResumo,
        //Rever

        conteudo_noticia: campNoticia,
        imagem_noticia: campImg,
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