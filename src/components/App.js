import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import React from "react";

import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import OptimisationSeo from "./OptimisationSeo";
import Kasa from "./Kasa";
import Contact from "./Contact";
import Legal from "./Legal";
import EmailSuccess from "./EmailSuccess";
import EmailError from "./EmailError";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/projets" element={<Works />} />
          <Route
            path="/projets/optimisation-seo"
            element={<OptimisationSeo />}
          />
          <Route path="/projets/kasa-react-app" element={<Kasa />} />
          <Route
            path="/contact"
            element={
              <GoogleReCaptchaProvider reCaptchaKey="6LdeyCEoAAAAANXQqWJsAfaHawRqLLlMKtizBWw6">
                <Contact />
              </GoogleReCaptchaProvider>
            }
          />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/email-success" element={<EmailSuccess />} />
          <Route path="/email-error" element={<EmailError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
