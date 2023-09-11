import "../styles/App.css";
import SideBar from "./SideBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import useScrollHooks from "./UseScrollHooks.js";

function App() {
  const { sectionRefs } = useScrollHooks();

  return (
    <div className="App">
      <SideBar />
      <div ref={sectionRefs[0]} className="element">
        <Intro />
      </div>
      <div ref={sectionRefs[1]} className="element">
        <Skills />
      </div>
      <div ref={sectionRefs[2]} className="element">
        <Works />
      </div>
      <div ref={sectionRefs[3]} className="element">
        <Contact />
      </div>
    </div>
  );
}

export default App;
