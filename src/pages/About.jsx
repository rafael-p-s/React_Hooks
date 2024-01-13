//useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookuseContext";

export function About() {
  //vou consumir o Context
  const { contextValue } = useContext(SomeContext);
  return (
    <>
      <h1>About</h1>
      <p>Valor do contexto: {contextValue}</p>
    </>
  );
}
