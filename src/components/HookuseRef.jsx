import { useEffect, useState, useRef } from "react";

export function HookUseRef() {
  // 10 - useRef
  //criando referencia = Ref
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
    //caso eu coloque um:
    // setCounter(counter+1);
    //é gerado um loop infinito e ele fica disparando número infinitamente.
  });

  // 11 - useRef e DOM
  const inputRef = useRef();
  const[text,setText]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(inputRef)

    setText("") //reseta o valor do input.

    inputRef.current.focus(); //depois de enviar o input, ele irá voltar e focar no input, ficando com aquela marcação para digitar.
  }
  return (
    <>
      <h2>useRef</h2>
      {/* Para se fazer o acesso, no useRef, é utilizando o ".current" */}
      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 1: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      {/* ideia aqui é: mapear quantas vezes o componente revisou o numberRef, para conseguir altarar o valor dele via useEffect. Para verificar se ele está rederizando o componente, onde o objtivo é ele nao fazer isso. */}
      {/* 11 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
