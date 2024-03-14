import "./index.scss";
import trash from "../../images/trash.png"
import pencil from "../../images/edit.png"
import { useState } from "react";

export default function Todo ({data}) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalTrash, setShowModalTrash] = useState(false);
  const [showModalNew, setShowModalNew ] = useState(false);
  const [selectTitle, setSelectTitle] =useState(" ");
  const [selectDescription, setSelectDescription] = useState(" ");

  const OpenModalEdit = (title, description) =>{
    setSelectTitle(title);
    setSelectDescription(description);
    setShowModalEdit(true);
  };
  const OpenModalTrash = (title, description) => {
    setSelectTitle (title);
    setSelectDescription(description);
    setShowModalTrash(true);
  };

  return (
   <div className="containerTable">
      <table 
        id="tfhover"
        className="tftable"
        style={{
          display: showModalEdit || showModalNew || showModalTrash ? "none" : "table",
        }}
      >
        <tr>
          <th>Tarefa</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
        {data.map((obj) =>( 
          <tr key={obj.id}>
            <td className="tr__td">{obj.title}</td>
            <td className="check">
              <input type ="checkbox" checked={obj.completed} />
            </td>
            <td>
              <img
                onClick={() => OpenModalEdit(obj.title, obj.description)}
                src={pencil}></img>
              <img
                onClick={() => OpenModalTrash(obj.title, obj.description)}
                src={trash}></img>
            </td>
          </tr>
        ))}

        <tr className="tr">
          <td className="tr__tdNew"> Nova Tarefa</td>
          <td className="add" onClick={() => setShowModalNew}>
            +
          </td>
        </tr>
      </table>
      {showModalEdit && (
        <div className="modal__container"> 
          <div className="modal__container__content"> 
            <div
              className="modal__container_content--close"
              onClick={() => setShowModalEdit(false)}
            >
              <h2>X</h2>
            </div>
            <h1>{`Deseja editar o item "${selectTitle}"?`}</h1>
            <span>{selectDescription}</span> 
            <div className="modal__container__content__buttons">
              <button className="no" 
               onClick={() => setShowModalTrash(false)}>
               Não
               </button> 
               <button className="yes"> sim</button>   
            </div> 
          </div>  
        </div>

      )}

      {showModalTrash && (
        <div className="modal__container">
          <div className="modal__container__content">
            <div className="modal__container__content--close"
            onClick={() =>setShowModalTrash(false)}>
            <button>x</button>
            <button className="yes">Sim</button>
            </div>
          </div>     
        </div>
      )}
      {showModalNew && (
        <div className="modal__containerNew">
          <div className="modal__containerNew__content"> 
          <div className="modal__container__content--close"
            onClick={() =>setShowModalNew(false)}>
           <h2>X</h2>
            </div>
            <h1> Deseja Adicionar uma tarefa</h1>
            <label>
              <input type="text" placeholder="Digite o nome da tarefa "/>
            </label>
            <div className="modal__containerNew__content__buttons">
              <button className="no" onClick={ () => setShowModalNew(false)}>
                Não
              </button>
              <button className="yes">Sim</button>
            </div>
          </div>
        </div>

      )}   
   </div>
    )

}
