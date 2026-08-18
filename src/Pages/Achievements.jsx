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
          <p>Currently pursuing BCA at Brainware University, focusing on Software Engineer.</p>
        </div>

        <div className="achievement-card">
          <h3>💼 Internship</h3>
          <p>Working as Cloud & Microsoft 365 Intern gaining real-world experience.</p>
        </div>

        <div className="achievement-card">
          <h3>🏆 Future Goals</h3>
          <p>Aspiring to become a Software Engineer, focusing on Data Structure and Algorithm.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;