import "../styles/App.css";
import SideBar from "./SideBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import { FullPage, Slide } from "react-full-page";

function App() {
  return (
    <div className="App">
      <SideBar />
      <FullPage>
        <Slide>
          <div id="aboutSection">
            <Intro />
          </div>
        </Slide>
        <Slide>
          <div id="skillsSection">
            <Skills />
          </div>
        </Slide>
        <Slide>
          <div id="worksSection">
            <Works />
          </div>
        </Slide>
        <Slide>
          <div id="contactSection">
            <Contact />
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
