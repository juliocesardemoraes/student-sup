import Container from "../../components/Container";
import Header from "../../components/Header";
import InputTasks from "../../components/componentsTasks/InputTasks";
import TableTasks from "../../components/componentsTasks/TableTasks";
import { useEffect, useState } from "react";
import "./index.scss";

const Tasks = ({ data }) => {
  //Father
  const [dataTask, setDataTask] = useState([...data]); //excluir daqui???
  console.log(data);
  //console.log(dataTask)

  function editTask() {}

  // //text useeffect para mandar dados para mock????
  useEffect(() => {
    console.log("Data", dataTask);
  }, [dataTask]);

  return (
    <div className="task">
      <Header />
      <Container styles="main_container">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <TableTasks dataTask={dataTask} />
        <InputTasks dataTask={dataTask} setDataTask={setDataTask} />
      </Container>
    </div>
  );
};

export default Tasks;
