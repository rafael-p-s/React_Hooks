import { useState } from "react";

export function HookUseState() {
  // 1 - useState
  let userName = "João";

  const [name, setName] = useState("Matheus");
  const changeName = () => {
    userName = "João Mosca";
    setName("Matheus dos Doces");
  };

  //   2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit=(e)=>{
    e.preventDefault(); //faz com que não seja "resetado" a pg ao clicar em enviar.
    // envio a uma API
    console.log(age);
  }

  

  return (
    <>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Clique</button>
      {/* 2 - useState e input */}
      <p>Digite sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit"value="Enviar" />
      </form>
      <p>Sua idade é: {age}</p>
      <hr />
    </>
  );
}
