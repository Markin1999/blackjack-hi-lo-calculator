import "./App.css";
import Deck from "./Componenti/Deck";

function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-green-700 shadow-md z-50 h-7"></nav>

      <div>
        <Deck />
      </div>
    </>
  );
}

export default App;
