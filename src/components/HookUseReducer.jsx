import { useReducer, useState } from "react";

export function HookUseReducer() {
  // 3 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state); //aqui no caso state === number, que vai receber um n° aleatório.
  });
  //dispatch << é onde executa a função

  // 4 - avançando no useReducer
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];
  //vai iniciar o useReducer com isso:
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD" });
  };
  const removeTask=(id)=>{
    dispatchTasks({type:"DELETE",id})
  }
  return (
    <>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar N°</button>

      {/* // 4 - avançando no useReducer */}
      <h2>Tarefas:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={()=>removeTask(task.id)}>{task.text}</li>
      ))}
      <hr />
    </>
  );
}
