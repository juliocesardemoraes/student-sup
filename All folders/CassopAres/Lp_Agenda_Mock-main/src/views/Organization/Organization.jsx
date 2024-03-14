import Container from "../../components/Container";
import Header from "../../components/Header";
import CardDescription from "../../components/componentsOrganization/CardDescription";
import EditTask from "../../components/componentsOrganization/EditTask";
import { useState } from "react";
import "./index.scss";

const Organization = ({ data }) => {
  const [dataTask, setDataTask] = useState([...data]);
 // console.log(dataTask)

  function dataDescription() {
    //função para preencher dados
  }

  return (
    <div className="task">
      <Header />
      <Container styles="main_container">
        {/* <EditTask /> */}
        <CardDescription
         dataTask={dataTask}
        />
        {/*/colocar Props para prennce */}
      </Container>
    </div>
  );
};

export default Organization;
