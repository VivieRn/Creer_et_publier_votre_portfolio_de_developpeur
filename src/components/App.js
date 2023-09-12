import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import EmailSuccess from "./EmailSuccess";
import EmailError from "./EmailError";
import "../styles/App.css";
import SideBar from "./SideBar";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import useScrollHooks from "./UseScrollHooks.js";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  const { sectionRefs } = useScrollHooks();
  const [isNotFound, setIsNotFound] = React.useState(false);

  return (
    <Router>
      <div className="App">
        {!isNotFound && <SideBar />}
        <Routes>
          <Route
            path="/"
            element={
              <div>
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
                  <GoogleReCaptchaProvider reCaptchaKey="6LfGlf8nAAAAAJskZXeNk5ufYSUG00POyBKyL-hD">
                    <Contact />
                  </GoogleReCaptchaProvider>
                </div>
              </div>
            }
          />
          <Route
            path="email-success"
            element={<EmailSuccess setIsNotFound={setIsNotFound} />}
          />
          <Route
            path="email-error"
            element={<EmailError setIsNotFound={setIsNotFound} />}
          />
          <Route
            path="*"
            element={<NotFound setIsNotFound={setIsNotFound} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
