import { HookUseEffect } from "../components/HookUseEffect";
import { HookUseReducer } from "../components/HookUseReducer";
import { HookUseState } from "../components/HookUseState";
import { HookUseRef } from "../components/HookuseRef";


//useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookuseContext";

export function Home() {
  //vou consumir o Context
  const { contextValue } = useContext(SomeContext);
  return (
    <>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do useContext: {contextValue}</p>
      <hr />
      {/* 10 - useRef */}
      <HookUseRef />
      <hr />
    </>
  );
}
