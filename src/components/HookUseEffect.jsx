import { useEffect, useState } from "react";

export function HookUseEffect() {
  // 5 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sem executar.");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 6 - array de dependencias vazia useEffect
  // port ter 2 useEffect, esse segundo \/, será executado somente 1x.
  useEffect(() => {
    console.log("Será executado somente 1x.");
  }, []);

  // 7 - item no array de dependência.
  const [anotherNumber, setAnotherNumber] = useState(1);
  useEffect(() => {
    console.log("Sou executado somente quando o anotherNumber mudar!");
  }, [anotherNumber]);
  const changeAnotherNumber = () => {
    setAnotherNumber(anotherNumber + 1);
  };

  // 8 - CLEANUP do useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Olá mundo.");
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);
    // return () => clearTimeout(timer); //<< isso pode gerar um ERRO/vazamento de memória.
  }, [anotherNumber]);
  return (
    <>
      <h2>useEffect</h2>
      <p>Númbero: {number}</p>
      <button onClick={changeSomething}>Mudar</button>
      <p>anotherNumber: {anotherNumber}</p>
      <button onClick={changeAnotherNumber}>Another</button>
      <hr />
    </>
  );
}
