import Button from "../Button";
import "./EditTask.scss";

const EditTask = () => {
  return (
    <div className="card_editTask">
      <h1>Edite a tarefa</h1>
      <form action="">
        <label htmlFor="Tarefa">Tarefa</label>
        <br />
        <input type="text" placeholder="Digite o nome da tarefa" />
        <br />

        <label htmlFor="Description">Descrição</label>
        <br />
        <textarea
          cols="30"
          rows="5"
          placeholder="Descreva os detalhes da tarefa"
        />
        <br />
        <div className="time_date">
          <div>
            <label htmlFor="hour">Hora</label>
            <br />
            <input type="time" placeholder="00:00" />
          </div>

          <br />
          <div>
            <label htmlFor="Date">Data</label>
            <br />
            <input type="date" placeholder="Data da Tarefa" />
          </div>
        </div>

        <div className="container-btn">
          <Button text="Cancelar" styles="btnCard_nao" />
          {/* event={onclickNo}  */}
          <Button text="Ok" styles="btnCard_sim" />
          {/* event={onclickYes} */}
        </div>
      </form>
    </div>
  );
};

export default EditTask;
