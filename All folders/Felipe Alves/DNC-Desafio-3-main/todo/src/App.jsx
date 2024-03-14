import React, { useState, useEffect } from 'react';
import './App.scss';
import plus from '/images/plus.png';
import pen from '/images/pen.png';
import trash from '/images/trash-can.png';
import CustomModal from './components/custumModal';





function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [uncheckedImage, setUncheckedImage] = useState('/images/desmarcado.png');
  const [checkedImage, setCheckedImage] = useState('/images/marcado.png');
  const [taskStates, setTaskStates] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);



  const handleEditClick  =  (index) =>{
    setEditingTask(index);
    setCurrentTask(tasks[index]);
  }

  const handleTaskEdit  = (index) =>{
    const updatedTasks = [...tasks];
    updatedTasks[index] = currentTask;
    setTasks(updatedTasks);
    setCurrentTask('');
    setEditingTask(null);



  const openDeleteModal = (taskIndex) => {
    setTaskToDelete(taskIndex);
    setIsDeleteModalOpen(true)
  }


 const closeDeleteModal = () =>{
  setIsDeleteModalOpen(false);
 }

  const handleTaskDelete = (taskIndex) =>{
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
    closeDeleteModal();
  }





  const handleTaskChange = (e) => {
    setCurrentTask(e.target.value)
  }

  const handleTaskAdd = () =>{
    if(currentTask.trim() !== ""){
     
      setTaskStates([...taskStates, false])
      setCurrentTask('');
      setIsAddingTask(false)
      const newTask = currentTask;
      const tasksWithNewTask = [...tasks, newTask];
      setTasks(tasksWithNewTask);
      localStorage.setItem('tasks', JSON.stringify(tasksWithNewTask));

    }
  }

  const handleAddButtonClick = () => {
    setIsAddingTask(true);
  }

  useEffect(() => {
    const getTasksFromLocalStorage = () => {
      const tasksFromLocalStorage = localStorage.getItem('tasks');
      if(tasksFromLocalStorage){
        setTasks(JSON.parse(tasksFromLocalStorage));
      }
    };
    getTasksFromLocalStorage();
  }, [])
  return (
    <div>
      <div className="container">
        <div className="bottom-left">
          <div className="word">Organização</div>
          <div className="word background-word">Tarefas</div>
        </div>
      </div>
      <div className='container-body'>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        { !isDeleteModalOpen &&  (<>
        <div className='header-title'>
        <h2>Tarefa</h2>
        <h2>Status</h2>
        <h2>Opções</h2>
        </div>
        <div className="line-container">
          <div className="line"></div>
          </div>
          
        
          <div className='output-style'>
              {tasks.map((task, index) => ( 
                <div key={index} className='task-item'>
                  {editingTask === index ? (
                   <div className='input-text'>
                   <input type="text" placeholder='Digite a tarefa...' value={currentTask} onChange={handleTaskChange} className='checkbox-input'/>
                   <button onClick={() => {
                    handleTaskEdit(index)
                   }} className='checkbox-image'>Salvar</button>
                 </div>
                 ):(
                  <>   
                  <span className='elements'>{task}</span>
                  
      <i className='elements'>
      <img
        src={taskStates[index] ? checkedImage : uncheckedImage}
        alt="checkbox"
        className='checkbox'
        onClick={() => {
          const updatedStates = [...taskStates];
          updatedStates[index] = !updatedStates[index]; 
          setTaskStates(updatedStates)
        }}
      />
    </i>
                    <span className='elements'>
                      <i className='icon edit-icon' onClick={() => {
                        handleEditClick(index)
                      }}> <img src={pen} alt="icone de lapis" /></i>
                     
                    
                      <i className='icon delete-icon' onClick={() => {
                        openDeleteModal(index)
                      }}><img src={trash} alt="icone de lixeira" /></i>
                    </span>
                    </>
                   )}
               
                </div>
              ))}
            </div>
            
          <div className='task-container'>         
          <h3 className="icon-style">Nova tarefa...</h3>
          <div className='input-container'>
         
          {isAddingTask ? (
            <div className='input-text'>
              <input type="text" placeholder='Digite a tarefa...' value={currentTask} onChange={handleTaskChange} className='checkbox-input'/>
              <button onClick={handleTaskAdd} className='checkbox-image'>Adicionar</button>
            </div>  
          ) : (
            <button className='plus-input add-button' onClick={handleAddButtonClick}><img src={plus} alt="icone de +" /></button>

          )}
          </div>
          </div>
          </>
        )}
      </div>

      <CustomModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} onConfirm={() => {
        handleTaskDelete(taskToDelete)
        }}/>
       
    </div>
  )
}



export default TodoList;