import "./Skills.css"
function Skills(){
  return (
    <>
    <section id="skills" className="section">
    <section className="skills-section">

      <h1>My Skills</h1>

      <div className="skills-container">

        {/* TECHNICAL */}
        <div className="skills-column">
          <h2>Technical Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>GitHub</li>
          </ul>
        </div>
           

        {/* SOFT */}
        <div className="skills-column">
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </div>

        <div className="skills-column">
          <h2>Creative Skills</h2>
          <ul>
            
            <li>Responsive Design</li>
            <li>Web Design</li>
          </ul>
        </div>

      </div>
    </section>
    </section>
    </>
  )
}
export default Skills;