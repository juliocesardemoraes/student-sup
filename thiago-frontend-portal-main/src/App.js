import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//
import Login from "./view/login";
import Adm_Admin from "./view/Adm_Admin";
import Adm_Empresa from "./view/Adm_Empresa";
import Adm_PedidoFerias from "./view/Adm_PedidoFerias";
import Adm_Faltas from "./view/Adm_Faltas";
import Adm_HorasSubmetidas from "./view/Adm_HorasSubmetidas";
import Adm_Parcerias from "./view/Adm_Parcerias";
import Adm_Noticias from "./view/Adm_Noticias";
import Adm_Notificacoes from "./view/Adm_Notificacoes";
import Adm_DadosPessoais from "./view/Adm_DadosPessoais";
import Man_Colaboradores from "./view/Man_Colab";
import Adm_AjudasCusto from "./view/Adm_AjudasCusto";
import PageFormNovoUtilizador from "./view/PageFormNovoUtilizador";

/*import RecuperarConta from "./view/RecuperarConta";

import Man_Empresa from "./view/Man_Empresa";
import Man_Admin from "./view/Man_Admin";
import Man_Colaboradores from "./view/Man_Colaboradores";
import Man_PedidoFerias from "./view/Man_PedidoFerias";
import Man_Faltas from "./view/Man_Faltas";
import Man_HorasSubmetidas from "./view/Man_HorasSubmetidas";
import Man_AjudasCusto from "./view/Man_AjudasCusto";
import Man_DadosPessoais from "./view/Man_DadosPessoais";

import NovaReuniao from "./view/pageNovaReuniao";
import EditarReuniao from "./view/pageEditarReuniao";

import Adm_Admin from "./view/Adm_Admin";
import Adm_AjudasCusto from "./view/Adm_AjudasCusto";
import Adm_DadosPessoais from "./view/Adm_DadosPessoais";
import Adm_Empresa from "./view/Adm_Empresa";
import Adm_Faltas from "./view/Adm_Faltas";
import Adm_HorasSubmetidas from "./view/Adm_HorasSubmetidas";
import Adm_Noticias from "./view/Adm_Noticias";
import Adm_Notificacoes from "./view/Adm_Notificacoes";
import Adm_Parcerias from "./view/Adm_Parcerias";
import Adm_PedidoFerias from "./view/Adm_PedidoFerias";

import MudarManager from "./view/pageformMudarManager";
import NovaEmpresa from "./view/pageformNovaEmpresa";
import NovaNotificacao from "./view/pageformNovaNotificacao";
import EditarNoticia from "./view/pageformEditarNoticia";
import EditarParceria from "./view/pageformEditarParceria";
import NovoUtilizador from "./view/pageformNovoUtilizador";
*/
//

import { useAtom } from "jotai";
import { userLoggedIn } from "./store/store";

function App() {
  const [, setUser] = useAtom(userLoggedIn);

  useEffect(() => {
    let data = sessionStorage.getItem("user");
    const user = JSON.parse(data);
    setUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Administrador" element={<Adm_Admin />}></Route>
          <Route path="/Adm-Empresas" element={<Adm_Empresa />}></Route>
          <Route
            path="/Adm-Pedido-de-Ferias"
            element={<Adm_PedidoFerias />}
          ></Route>
          <Route path="/Adm-Faltas" element={<Adm_Faltas />}></Route>
          <Route
            path="/Adm-Horas-Submetidas"
            element={<Adm_HorasSubmetidas />}
          ></Route>
          <Route path="/Adm-Parcerias" element={<Adm_Parcerias />}></Route>
          <Route path="/Adm-Noticias" element={<Adm_Noticias />}></Route>
          <Route
            path="/Adm-Notificacoes"
            element={<Adm_Notificacoes />}
          ></Route>
          <Route
            path="/Adm-Ajudas-da-Custo"
            element={<Adm_AjudasCusto />}
          ></Route>
          <Route path="/Manager" element={<Man_Colaboradores />} />
          <Route
            path="/Adm-Dados-Pessoais"
            element={<Adm_DadosPessoais />}
          ></Route>

          <Route
            path="/Novo-Utilizador"
            element={<PageFormNovoUtilizador />}
          ></Route>
          {/*<Route element={<ProtectedRouter userType={"manager"}/>}/>
          <Route element={<ProtectedRouter userType={"admin"}/>}/>*/}
        </Routes>
      </div>
    </Router>
  );
}

/*  <Route path="/Recuperar-Conta" element={<RecuperarConta />} />
          <Route path="/Man-Empresas" element={<Man_Empresa />} />
          <Route path="/Man-Administradores" element={<Man_Admin />} />
          <Route path="/Manager" element={<Man_Colaboradores />} />
          <Route path="/Man-Ajudas-de-Custo" element={<Man_AjudasCusto />} />
          <Route
            path="/Man-Horas-Submetidas"
            element={<Man_HorasSubmetidas />}
          />
          <Route path="/Man-Pedidos-de-Ferias" element={<Man_PedidoFerias />} />
          <Route path="/Man-Faltas" element={<Man_Faltas />} />
          <Route path="/Man-Dados-Pessoais" element={<Man_DadosPessoais />} />

          <Route path="/Nova-Reuniao" element={<NovaReuniao />}></Route>
          <Route path="/Editar-Reuniao" element={<EditarReuniao />}></Route>

          <Route path="/Administrador" element={<Adm_Admin />}></Route>
          <Route
            path="/Adm-Ajudas-da-Custo"
            element={<Adm_AjudasCusto />}
          ></Route>
          <Route
            path="/Adm-Dados-Pessoais"
            element={<Adm_DadosPessoais />}
          ></Route>
          <Route path="/Adm-Empresas" element={<Adm_Empresa />}></Route>
          <Route path="/Adm-Faltas" element={<Adm_Faltas />}></Route>
          <Route
            path="/Adm-Horas-Submetidas"
            element={<Adm_HorasSubmetidas />}
          ></Route>
          <Route path="/Adm-Noticias" element={<Adm_Noticias />}></Route>
          <Route
            path="/Adm-Notificacoes"
            element={<Adm_Notificacoes />}
          ></Route>
          <Route path="/Adm-Parcerias" element={<Adm_Parcerias />}></Route>
          <Route
            path="/Adm-Pedido-de-Ferias"
            element={<Adm_PedidoFerias />}
          ></Route>

          <Route path="/Mudar-Manager" element={<MudarManager />}></Route>
          <Route path="/Nova-Empresa" element={<NovaEmpresa />}></Route>
          <Route path="/Nova-Notificacao" element={<NovaNotificacao />}></Route>
          <Route path="/Editar-Noticia" element={<EditarNoticia />}></Route>
          <Route path="/Editar-Parceria" element={<EditarParceria />}></Route>
           */

export default App;
