import { HookUseReducer } from "../components/HookUseReducer";
import { HookUseState } from "../components/HookUseState";

export function Home() {
  return (
    <>
      <HookUseState />
      <HookUseReducer />
    </>
  );
}
