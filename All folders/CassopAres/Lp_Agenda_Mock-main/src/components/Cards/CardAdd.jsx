import './CardAdd.scss'
import Button from '../Button'

const CardAdd = ({onclickYes, onclickNo}) => {
  return (
    <div className='card'>
           <h1>Deseja editar esse item?</h1>
           <p>Colocar as descrições das tarefas aqui.</p>
           <div className='container-btn'>
            <Button text='Não' styles='btnCard_nao' event={onclickNo}   />
            <Button text='Sim' styles='btnCard_sim' event={onclickYes}   />
          </div>
    </div>
  )
}

export default CardAdd