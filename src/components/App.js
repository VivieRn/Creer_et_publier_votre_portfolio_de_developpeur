import React, { useMemo, useEffect, useCallback, useRef } from "react";
import "../styles/App.css";
import SideBar from "./SideBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import { animateScroll as scroll } from "react-scroll";

function App() {
  const sectionRefs = useMemo(
    () => [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ],
    []
  );

  const currentSection = useRef(0);

  const handleWheel = useCallback(
    (e) => {
      if (e.deltaY > 0) {
        currentSection.current = Math.min(
          currentSection.current + 1,
          sectionRefs.length - 1
        );
      } else {
        currentSection.current = Math.max(currentSection.current - 1, 0);
      }

      scroll.scrollTo(sectionRefs[currentSection.current].current.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    },
    [sectionRefs]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);
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
