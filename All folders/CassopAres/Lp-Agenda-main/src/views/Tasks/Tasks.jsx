import Container from "../../components/Container";
import Header from "../../components/Header";
import Table from "../../components/Table";
import "./index.scss";
import IncludeTasks from "../../components/IncludeTasks";
import { useState } from "react";

const Tasks = ({}) => {
  //fazer uma função para fecth incluir Table cada vez que entrar um novo elemento
  // fetch('http://localhost:3000/tasks').then((resp)=> resp.json()).then((dados)=>{
  //   console.log(dados)
  // })

  const [items, setItems] = useState([]);

  return (
    <div className="tasks">
      <Header />
      <Container>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <Table type={"checkbox"} items={items} />
        <IncludeTasks setItems={setItems} />
      </Container>
    </div>
  );
};

export default Tasks;
