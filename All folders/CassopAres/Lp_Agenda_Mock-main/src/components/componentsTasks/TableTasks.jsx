import "./TableTasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";
import CardAdd from "../Cards/CardAdd";
import CardDel from "../Cards/CardDel";
import { useState } from "react";

const TableTasks = ({ dataTask = [], removeTask }) => {
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);

  // States para negar
  function delet() {
    setDel(!del);
  }

  function edite() {
    setEdit(!edit);
  }

  //const para remover (new)
  const deletYes = (e) => {
    e.preventDefault();
    removeTask(data);
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataTask.map((dataTask, id) => {
            return (
              <tr key={id}>
                <td className="table_pg">{dataTask.title}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="icons">
                  <FaPen onClick={edite} />
                  {edit === true && <CardAdd onclickNo={edite} />}
                  <FaTrash onClick={delet} />
                  {del === true && (
                    <CardDel onclickNo={delet} onclickYes={deletYes} />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTasks;
