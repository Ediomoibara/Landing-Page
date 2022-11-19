import React from "react";
import Home from "./Components/Home";
import Page from "./Components/Page";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Home />
        <Page />
        <Projects />
        <Services />
      </div>
    </div>
  );
}

export default App;
