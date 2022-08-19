import "./styles.css";
import {
  ComponentePrueba,
  Componentedany,
  JoakoApp,
  Gs
} from "./componentes/componente.js";

function App() {
  return (
    <>
      <header className="App-header">
        <ComponentePrueba />
        <Componentedany />
        <JoakoApp />
        <Gs />
      </header>
    </>
  );
}

export default App;
