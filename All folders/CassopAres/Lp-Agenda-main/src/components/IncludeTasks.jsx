import "./IncludeTasks.scss";
import { useState } from "react";

const IncludeTasks = ({ value, btn, setItems }) => {
  //input control
  const [task, setTask] = useState({});

  //  function create(task) {
  //    task.title = [];

  //    fetch("http://localhost:3000/tasks", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify(task),
  //    })
  //      .then((resp) => resp.json)
  //      .then((data) => {
  //       console.log(`Nome da Tarefa é ${task} vai a merda`);
  //      })
  //      .catch((err) => console.log(err));
  //  }

  const handleChange = (e) => {
    setTask({ name: e.target.value });
    console.log(task);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(`Nome da Tarefa é ${task}`);
    setItems((prev) => {
      return [...prev, task];
    });
  };

  return (
    <div className="include">
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Nova tarefa..."
        />
        <button type="submit">
          <strong>+</strong>
        </button>
      </form>
    </div>
  );
};

export default IncludeTasks;
