import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import useScrollHooks from "./UseScrollHooks.js";
import React, { Suspense } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const NotFound = React.lazy(() => import("./NotFound"));
const EmailSuccess = React.lazy(() => import("./EmailSuccess"));
const EmailError = React.lazy(() => import("./EmailError"));
const Intro = React.lazy(() => import("./Intro"));
const Skills = React.lazy(() => import("./Skills"));
const Works = React.lazy(() => import("./Works"));
const Contact = React.lazy(() => import("./Contact"));

function App() {
  const { sectionRefs } = useScrollHooks();

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
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
                    <GoogleReCaptchaProvider reCaptchaKey="6LdeyCEoAAAAANXQqWJsAfaHawRqLLlMKtizBWw6">
                      <Contact />
                    </GoogleReCaptchaProvider>
                  </div>
                </div>
              }
            />
            <Route path="email-success" element={<EmailSuccess />} />
            <Route path="email-error" element={<EmailError />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
