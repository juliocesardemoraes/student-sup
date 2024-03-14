import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
        <button>Organização</button>
        <button>Tarefas</button>
    </div>
  )
}

//não usei BEM porque dada a necessidade, usá-lo seria mais trabalhoso

export default Header