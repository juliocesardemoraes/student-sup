var DataTypes = require("sequelize").DataTypes;
var _USER = require("./USER");
var _contrato = require("./contrato");
var _deslocacao = require("./deslocacao");
var _documentos = require("./documentos");
var _empresa = require("./empresa");
var _faltas = require("./faltas");
var _ferias = require("./ferias");
var _horas_trabalhadas = require("./horas_trabalhadas");
var _noticias = require("./noticias");
var _notificacoes = require("./notificacoes");
var _parceirias = require("./parceirias");
var _perfil = require("./perfil");
var _recebe = require("./recebe");
var _reuniao = require("./reuniao");
var _status = require("./status");
var _tipo_doc = require("./tipo_doc");
var _tipo_viatura = require("./tipo_viatura");
var _user_copia = require("./user_copia");
var _vencimentos = require("./vencimentos");

function initModels(sequelize) {
  var USER = _USER(sequelize, DataTypes);
  var contrato = _contrato(sequelize, DataTypes);
  var deslocacao = _deslocacao(sequelize, DataTypes);
  var documentos = _documentos(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var faltas = _faltas(sequelize, DataTypes);
  var ferias = _ferias(sequelize, DataTypes);
  var horas_trabalhadas = _horas_trabalhadas(sequelize, DataTypes);
  var noticias = _noticias(sequelize, DataTypes);
  var notificacoes = _notificacoes(sequelize, DataTypes);
  var parceirias = _parceirias(sequelize, DataTypes);
  var perfil = _perfil(sequelize, DataTypes);
  var recebe = _recebe(sequelize, DataTypes);
  var reuniao = _reuniao(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var tipo_doc = _tipo_doc(sequelize, DataTypes);
  var tipo_viatura = _tipo_viatura(sequelize, DataTypes);
  var user_copia = _user_copia(sequelize, DataTypes);
  var vencimentos = _vencimentos(sequelize, DataTypes);

  USER.belongsToMany(notificacoes, {
    as: "id_noti_notificacos",
    through: recebe,
    foreignKey: "user_id",
    otherKey: "id_noti",
  });
  notificacoes.belongsToMany(USER, {
    as: "user_id_USERs",
    through: recebe,
    foreignKey: "id_noti",
    otherKey: "user_id",
  });
  USER.belongsTo(USER, { as: "manager", foreignKey: "manager_id" });
  USER.hasMany(USER, { as: "USERs", foreignKey: "manager_id" });
  contrato.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(contrato, { as: "contratos", foreignKey: "user_id" });
  deslocacao.belongsTo(USER, { foreignKey: "user_id" });
  USER.hasMany(deslocacao, { foreignKey: "user_id" });
  faltas.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(faltas, { as: "falta", foreignKey: "user_id" });
  ferias.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(ferias, { as: "feria", foreignKey: "user_id" });
  horas_trabalhadas.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(horas_trabalhadas, {
    as: "horas_trabalhadas",
    foreignKey: "user_id",
  });
  recebe.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(recebe, { as: "recebes", foreignKey: "user_id" });
  reuniao.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(reuniao, { as: "reuniaos", foreignKey: "user_id" });
  user_copia.belongsTo(USER, { as: "user", foreignKey: "user_id" });
  USER.hasMany(user_copia, { as: "user_copia", foreignKey: "user_id" });
  USER.belongsTo(documentos, { as: "id_doc_documento", foreignKey: "id_doc" });
  documentos.hasMany(USER, { as: "USERs", foreignKey: "id_doc" });
  USER.belongsTo(empresa, { foreignKey: "id_emp" });
  empresa.hasMany(USER, { foreignKey: "id_emp" });
  recebe.belongsTo(notificacoes, {
    as: "id_noti_notificaco",
    foreignKey: "id_noti",
  });
  notificacoes.hasMany(recebe, { as: "recebes", foreignKey: "id_noti" });
  USER.belongsTo(perfil, { as: "id_perfil_perfil", foreignKey: "id_perfil" });
  perfil.hasMany(USER, { as: "USERs", foreignKey: "id_perfil" });
  deslocacao.belongsTo(status, {
    foreignKey: "id_status",
  });
  status.hasMany(deslocacao, { foreignKey: "id_status" });
  faltas.belongsTo(status, { as: "id_status_status", foreignKey: "id_status" });
  status.hasMany(faltas, { as: "falta", foreignKey: "id_status" });
  ferias.belongsTo(status, { as: "id_status_status", foreignKey: "id_status" });
  status.hasMany(ferias, { as: "feria", foreignKey: "id_status" });
  horas_trabalhadas.belongsTo(status, {
    as: "id_status_status",
    foreignKey: "id_status",
  });
  status.hasMany(horas_trabalhadas, {
    as: "horas_trabalhadas",
    foreignKey: "id_status",
  });
  notificacoes.belongsTo(status, {
    as: "id_status_status",
    foreignKey: "id_status",
  });
  status.hasMany(notificacoes, { as: "notificacos", foreignKey: "id_status" });
  reuniao.belongsTo(status, {
    as: "id_status_status",
    foreignKey: "id_status",
  });
  status.hasMany(reuniao, { as: "reuniaos", foreignKey: "id_status" });
  documentos.belongsTo(tipo_doc, {
    as: "id_tipo_d_tipo_doc",
    foreignKey: "id_tipo_d",
  });
  tipo_doc.hasMany(documentos, { as: "documentos", foreignKey: "id_tipo_d" });
  deslocacao.belongsTo(tipo_viatura, {
    foreignKey: "id_viatura",
  });
  tipo_viatura.hasMany(deslocacao, {
    foreignKey: "id_viatura",
  });
  USER.belongsTo(vencimentos, {
    as: "id_vencimento_vencimento",
    foreignKey: "id_vencimento",
  });
  vencimentos.hasMany(USER, { as: "USERs", foreignKey: "id_vencimento" });

  return {
    USER,
    contrato,
    deslocacao,
    documentos,
    empresa,
    faltas,
    ferias,
    horas_trabalhadas,
    noticias,
    notificacoes,
    parceirias,
    perfil,
    recebe,
    reuniao,
    status,
    tipo_doc,
    tipo_viatura,
    user_copia,
    vencimentos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
