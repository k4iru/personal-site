import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

const App = () => {

  const [resumeData, setResumeData] = useState({});

  const getResumeData = async () => {
    const response = await fetch("/resumeData.json");
    const data = await response.json();
    setResumeData(data)
  };

  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <div className="App" >
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
