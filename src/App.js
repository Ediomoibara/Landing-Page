import React from "react";
import Home from "./Components/Home";
import Page from "./Components/Page";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Home />
        <Page />
        <Projects />
        <Services />
        <ContactUs /> 
      </div>
    </div>
  );
}

export default App;
