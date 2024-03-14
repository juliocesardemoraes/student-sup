import React from 'react'
import "./index.scss"
import Header from "../../components/Header/Header";
import Todo from "../../components/ToDoList/Todo";

//utilizar esse mockup como exemplo


export default function Home( {data}) {
  return (
    <div className="App" >
      <Header />
      <Todo data={data}/>
    </div>
  );
}


