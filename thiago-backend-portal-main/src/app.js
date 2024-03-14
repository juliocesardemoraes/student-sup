const express = require("express");
const app = express();
const userRouters = require("./routes/userRoute.js");
const userCopiaRouters = require("./routes/userCopiaRoute.js");
const empresaRouters = require("./routes/empresaRoute.js");
const feriasRouters = require("./routes/feriasRoute.js");
const faltasRouters = require("./routes/faltasRoute.js");
const reuniaoRouters = require("./routes/reuniaoRoute.js");
const horasRouters = require("./routes/horasRoute.js");
const deslocacaoRouters = require("./routes/deslocacaoRoute.js");
const parceiriasRouters = require("./routes/parceiriasRoute.js");
const noticiasRouters = require("./routes/noticiasRoute.js");
const notificacoesRouters = require("./routes/notificacoesRoute.js");

//Configurações
app.set("port", process.env.PORT || 3001);
//Middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Rotas
app.use("/user", userRouters);
app.use("/userCopia", userCopiaRouters);
app.use("/empresa", empresaRouters);
app.use("/ferias", feriasRouters);
app.use("/faltas", faltasRouters);
app.use("/reuniao", reuniaoRouters);
app.use("/horas", horasRouters);
app.use("/deslocacao", deslocacaoRouters);
app.use("/parcerias", parceiriasRouters);
app.use("/noticias", noticiasRouters);
app.use("/notificacoes", notificacoesRouters);

/*app.use("/offer", offerRouters);
app.use("/form", formRouters);
app.use("/role", roleRouters);
app.use("/infrastructure", infrastructureRouters);
app.use("/contract", contractRouters);*/

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
