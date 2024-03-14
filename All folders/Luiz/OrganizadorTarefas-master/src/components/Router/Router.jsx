import React from 'react';
import Modal from 'react-modal';
import './Router.scss';
import {useState} from 'react';
import Pencil from '../../images/pencil.svg'
import Trash from '../../images/trash.svg'


const Router = () => {
  const db = [
    { "id": 0, "title": "Exercicios", "description": "Ir para academia fazer exercicios", "completed": true },
    { "id": 1, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora", "completed": false },
    { "id": 2, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop", "completed": false },
    { "id": 3, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto", "completed": true },
    { "id": 4, "title": "trabalhar", "description": "Chegar ao escritorio antes das 20:00", "completed": true },
    { "id": 5, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00", "completed": false },
    { "id": 6, "title": "Almoçar", "description": "Preparar a comida para a janta", "completed": false },
    { "id": 7, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos", "completed": true },
    { "id": 8, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar", "completed": false },
    { "id": 9, "title": "shopping", "description": "Fazer algumas compras no shopping", "completed": true }
  ];

const [array, setArray] = useState(db);
         
const mudarEstado = (id) => {
  console.log(array)
  console.log(array[id].title)
  console.log(array[id].completed)

  setArray((array) => {
    return array.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      console.log(array[id].title)
      console.log(array[id].completed)
      return task;
    });
  });

}

const [modalIsOpen, setModalIsOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState(null);
const [editedPhrase, setEditedDescription] = useState('');
const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });
const [newTaskModalIsOpen, setNewTaskModalIsOpen] = useState(false);



const openModal = (task) => {
  setSelectedTask(task);
  setEditedDescription(task.description);
  setModalIsOpen(true);
};



const closeModal = () => {
  setModalIsOpen(false);
};

const updateTask = () => {
  if (selectedTask) {
    const updatedArray = array.map((task) => {
      if (task.id === selectedTask.id) {
        return { ...task, description: editedPhrase };
      }
      return task;
    });
    setArray(updatedArray);
  }
  closeModal();
};

const removeItem = (id) => {
  const newData = array.filter((e) => e.id !== id);
  setArray(newData);
};

const openNewTaskModal = () => {
    setNewTaskModalIsOpen(true);
};

const addNewTask = () => {
    if (newTask.title && newTask.description) {
      const newId = Math.max(...array.map((task) => task.id), -1) + 1;
      setArray([...array, { ...newTask, id: newId }]);
      setNewTask({ title: '', description: '', completed: false });
      setNewTaskModalIsOpen(false);
    }
  };

 return (
    <div className="Tasks">
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <table>
        <thead>
          <tr>
            <th id="tarefa" className="tdtdwidth">Tarefa</th>
            <th className="StatusOpcoesAlign">Status</th>
            <th className="StatusOpcoesAlign">Opções</th>
          </tr>
        </thead>
        <hr/>
        <tbody>
          {array.map((task) => {

            return (
              <tr key={task.id}>
                <td className="tooltip">{task.title}<span className="tooltiptext">{task.description}</span></td>
                <td className="StatusOpcoesAlign">
                  <input
                    type="checkbox"
                    label="statusbox"
                    title="statusbox"
                    id={task.id}
                    value={task.completed}
                    checked={task.completed}
                    onChange={() => mudarEstado(task.id)}
                  />
                </td>
                <td className="StatusOpcoesAlign">
                  <button onClick={() => openModal(task)}><img src={Pencil} alt="Editar"/></button>
                  <button onClick={() => removeItem(task.id)}><img src={Trash} alt="Remover"/></button>
                </td>
              </tr>
            );
          })}
          <tr className='newTaskRow'>
            <td>
              <p>Nova tarefa...</p>
            </td>
            <td></td>
            <td id="addButton">
            <button onClick={openNewTaskModal} id="addButton">+</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className = "Modal"
      >
        <p>Deseja editar esse item?</p>
        <input
          type="text"
          value={editedPhrase}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <div>
          <button onClick={closeModal}>Não</button>
          <button onClick={updateTask}>Sim</button>
        </div>
      </Modal>
      <Modal isOpen={newTaskModalIsOpen} onRequestClose={() => setNewTaskModalIsOpen(false)} className="Modal">
        <p>Adicionar nova tarefa</p>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <div>
          <button onClick={() => setNewTaskModalIsOpen(false)}>Cancelar</button>
          <button onClick={addNewTask}>Adicionar</button>
        </div>
      </Modal>
    </div>
  )
}


export default Router