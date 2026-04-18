import "./Home.css";
import profile from "../assets/profile.jpeg"
import Achievements from "./Achievements";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home(){
    return(
    <>
    <section id="home" className="section">
        <section id="home" className="hero">
            <div className="content">
                <h1 className="hero-left">
                Hi, I'm <span>Soudeepta Bhattacharjee</span>
                </h1>


                <h3> I am a Full Stack Developer with expertise in building scalable, efficient web applications. I deliver secure solutions by integrating modern front-end frameworks with robust back-end systems.</h3>
                
                <div className="social-icons">
                    <a href="https://github.com/Soudeepta146" target="_blank"> <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/soudeepta-bhattacharjee-17a7273a5" target="_blank"> <FaLinkedin />
                    </a>
                    <a href="https://mailto:soudeepta2004bhattacharjee@gmail.com"> <FaEnvelope />
                    </a>
                </div>
            </div>
            <div className="image">
                <img src={profile} alt="profile" />
            </div>
            
        </section>
        
        </section>
        <Achievements />
    </>
    );
};

export default Home;