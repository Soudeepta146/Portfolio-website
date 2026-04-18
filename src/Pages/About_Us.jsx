import "./About.css"
import Certificate from "../assets/Certificate.jpeg"

function About_Us(){
    return(
      <>
      <section id="about" className="section">

      <div className="about-section">

        <div className="about-content">
          <h1>About Me</h1>

          <p>
            I am Soudeepta Bhattacharjee, a passionate BCA student at Brainware University.
            I am currently in my 3rd year and learning Full-Stack Web Development.
          </p>

          <p>
            I enjoy building modern web applications using React, JavaScript, and CSS.
            I am always eager to learn new technologies and improve my skills.
          </p>

          <p>
            I was certified for completing a 30-hour Value-Added course in Data Representation and Visualization.
          </p>

          <p>
            I am a Cloud and Microsoft 365 Intern at ICPES Technologies Pvt. Ltd.
          </p>

          <p>
            My goal is to become a professional software developer and work on real-world projects.
          </p>
        </div>

        <div className="about-image">
          <img src={Certificate} alt="Certificate" />
        </div>

      </div>

    </section>

      </>
    );
};

export default About_Us;