import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements-section">
      <h1>My Journey</h1>

      <div className="achievements-grid">

        <div className="achievement-card">
          <h3>🎓 Schooling</h3>
          <p>Completed my schooling with strong academic performance and interest in technology from Ramakrishna Vivekananda Mission.</p>
        </div>

        <div className="achievement-card">
          <h3>🏫 College</h3>
          <p>Currently pursuing BCA at Brainware University, focusing on Full Stack Development.</p>
        </div>

        <div className="achievement-card">
          <h3>💼 Internship</h3>
          <p>Working as Cloud & Microsoft 365 Intern gaining real-world experience.</p>
        </div>

        <div className="achievement-card">
          <h3>🏆 Future Goals</h3>
          <p>Aspiring to become a Cloud & Full Stack Developer, focusing on Microsoft Azure,modern web technologies, and building scalable, real-world applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;