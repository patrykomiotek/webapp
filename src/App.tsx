import { RegistrationFormState } from "@components/RegistrationFormState";
import "./App.css";
import { Generator } from "@components/Generator";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <Generator /> */}
      <RegistrationFormState />
    </>
  );
}

export default App;
