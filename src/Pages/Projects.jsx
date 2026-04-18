import "./Projects.css"
import { FaRobot, FaCalculator, FaGamepad } from "react-icons/fa";

function Projects(){
    return (
        <>
        <section id="projects" className="section">
        <section className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
            <div className="project-icon">
                <FaRobot />
            </div>
            
            <h3>AI Job Recommendation</h3>
            <p>Created with Node.js</p>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
            <div className="project-icon">
                <FaRobot />
            </div>
                <h3>Calculator</h3>
                <p>Created with JavaScript, HTML & CSS</p>
        </div>

        {/* PROJECT 3 (OPTIONAL ADD LIKE IMAGE) */}
        <div className="project-card">
            <div className="project-icon">
                <FaRobot />
            </div>
            <h3>TicTacToe</h3>
            <p>Created with HTML, CSS and JS</p>
        </div>

      </div>

    </section>
    </section>
    </>
  );
     
}

export default Projects;