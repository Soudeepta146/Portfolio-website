import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About_Us from "./Pages/About_Us";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import  "./App.css";


function App(){
  return(
    <>
    <div className="app-center">
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element= {<About_Us/>} />
      <Route path="/contact" element= {<Contact/>} />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}
export default App;
