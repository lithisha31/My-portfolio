import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-gradient-to-r from-stone-950 to-stone-900 overflow-x-hidden">
      <Navbar />
      <Summary />
      <Tech />
      <Projects />
      <Experience />
    </div>
  )
}

export default App;
