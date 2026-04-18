// import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About_Us from "./Pages/About_Us";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import "./App.css";


function App(){
  return(
    <>
    {/* <div className="app-center"> */}
    <Navbar/>
    <Home />
    <About_Us/>
    <Skills />
    <Projects />
    <Contact />

    <Footer/> 
    {/* </div> */}
    </>
  )
}
export default App;
