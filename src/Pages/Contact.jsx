import "./Contact.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact(){
    return(
        <>
        <section id="contact" className="section">
        <section id="contact" className="contact-section">
            <div className="contact-form-section">
                <h2>Fill Up The Form</h2>
                <form className="contact-form">

             {/* NAME + EMAIL (same row) */}
            <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required/>
            </div>

            {/* MESSAGE BOX */}
            <textarea placeholder="Your Message" rows="5" required></textarea>

                {/* BUTTON */}
            <button type="submit">Send Message</button>
            </form> 
            </div> 
            <div className="contact-content">
           <h1>Contact Me</h1>
            <div className="contact-links">
            <a  
            href="https://mailto:soudeepta2004bhattacharjee@gmail.com">
            <FaEnvelope />
            soudeepta2004bhattacharjee@gmail.com
            </a> 


            <a href="https://www.linkedin.com/in/soudeepta-bhattacharjee-17a7273a5"target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn Profile
            </a>

            <a href="https://github.com/Soudeepta146" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub Profile
            </a>
            </div> 
            </div>
        </section>
        </section> 
        </>
    );
}

export default Contact;