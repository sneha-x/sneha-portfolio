
import './App.css'

const skills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub']

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'A responsive portfolio website showcasing my skills, projects, and journey as a developer.',
    tech: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Task Manager',
    description:
      'A task management application to organize tasks, track progress, and improve productivity.',
    tech: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application concept for displaying current conditions and weather information.',
    tech: ['React', 'API', 'CSS'],
  },
]

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">Dev<span>Portfolio.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">Contact ↗</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE TO LEARN & COLLABORATE</p>
            <h1>Building digital<br />experiences with <span>React.</span></h1>
            <p className="hero-description">
              Hi, I'm a frontend developer in the making. I enjoy turning
              ideas into clean, responsive, and user-friendly web experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work ↗</a>
              <a className="button secondary" href="#contact">Let's connect</a>
            </div>
            <div className="hero-stack">
              <span>React.js</span><span>JavaScript</span><span>CSS</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top"><span>MY DEVELOPER SPACE</span><span>✳</span></div>
            <div className="code-window">
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="indent">focus: <span className="code-green">'Frontend'</span>,</p>
              <p className="indent">stack: <span className="code-green">'React + JS'</span>,</p>
              <p className="indent">mindset: <span className="code-green">'Always learning'</span>,</p>
              <p className="indent">building: <span className="code-green">'Cool things'</span></p>
              <p>{'}'}</p>
              <div className="code-divider" />
              <p><span className="code-purple">function</span> <span className="code-blue">createFuture</span>() {'{'}</p>
              <p className="indent">return <span className="code-green">'Keep building 🚀'</span></p>
              <p>{'}'}</p>
            </div>
            <div className="card-bottom"><span>●</span> Currently learning & building</div>
          </div>
          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Curious mind.<br /><span>Creative builder.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I'm passionate about frontend development and creating digital
              experiences that are both useful and enjoyable to use.
            </p>
            <p>
              I work with React and JavaScript, and I believe the best way to
              grow as a developer is to keep experimenting, building projects,
              and learning something new every day.
            </p>
            <div className="about-note"><span>✦</span> Turning ideas into working products, one project at a time.</div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>Technologies I <span>work with.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-name">{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>Things I'm <span>building.</span></h2>
            <p className="section-subtitle">A growing collection of projects and experiments.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${index + 1}`}>
                  <span className="project-index">PROJECT 0{index + 1}</span>
                  <span className="project-symbol">{['✳', '◫', '☼'][index]}</span>
                  <span className="project-open">↗</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <p className="project-status">Concept / In progress</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        
<div className="social-links">
  <a
    href="https://github.com/sneha-x"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub profile"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/sneha-patel-926174426/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn profile"
  >
    LinkedIn ↗
  </a>
</div>


        <section className="contact-section" id="contact">
          <p className="eyebrow">04 / GET IN TOUCH</p>
          <h2>Have an idea?<br /><span>Let's build it.</span></h2>
          <p>I'm always interested in learning, collaborating, and connecting with people in tech.</p>
          <a className="button primary" href="mailto:snepatel556@gmail.com">Say hello ↗</a>
          <p className="contact-reminder">Replace the example email with your real email address.</p>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">Dev<span>Portfolio.</span></a>
        <p>Designed with curiosity. Built with React.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
