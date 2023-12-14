import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import React from "react";

import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Legal from "./Legal";
import EmailSuccess from "./EmailSuccess";
import EmailError from "./EmailError";
import NotFound from "./NotFound";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/travaux" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-légales" element={<Legal />} />
          <Route
            path="/email-success"
            element={
              <GoogleReCaptchaProvider reCaptchaKey="6LdeyCEoAAAAANXQqWJsAfaHawRqLLlMKtizBWw6">
                <EmailSuccess />
              </GoogleReCaptchaProvider>
            }
          />
          <Route path="/email-error" element={<EmailError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
