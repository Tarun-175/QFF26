import React from "react";
import {
  Calendar,
  Users,
  Award,
  Lightbulb,
  MessageCircle,
  Zap,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import styles from "./PastEvent.module.css";

const PastEvent: React.FC = () => {
  const highlights2024 = [
    {
      title: "Workshops & Hands-on Sessions",
      description:
        "Participants engaged with Qiskit and quantum circuit design through carefully prepared Jupyter notebooks, ensuring a structured and beginner-friendly learning path.",
      icon: <Lightbulb />,
    },
    {
      title: "Multi-day Hackathon",
      description:
        "A multi-day challenge that combined creativity and technical problem-solving, featuring multiple review rounds, project showcases, and opportunities for collaborative innovation.",
      icon: <Award />,
    },
    {
      title: "Community Competitions",
      description:
        "A lighthearted yet engaging Meme Competition on Discord that brought the community together with creativity and humor.",
      icon: <Users />,
    },
    {
      title: "Panel Discussions",
      description:
        "Experts and industry leaders shared perspectives on the opportunities and challenges shaping the future of quantum computing.",
      icon: <MessageCircle />,
    },
  ];

  const speakers2024 = [
    "Paweł Gora – University of Warsaw",
    "Nouhaila Innan – Postdoctoral Researcher, NYU Abu Dhabi",
    "Alain Chancé – Président, Quantalain SASU & MolKet SAS; Founder & CEO, Alainquant LLC",
    "Dr. L. Venkata Subramaniam – IBM Quantum India Leader",
    "Jagan Natarajan - IBM Quantum Support",
  ];

  const schedule2024 = [
    {
      day: "Day 1 (Oct 1)",
      events: [
        "Kickoff Ceremony",
        "Introduction to Quantum Computing",
        "Hands-on Qiskit Workshop",
        "Talks by Nouhaila Innan (NYUAD) & Paweł Gora (University of Warsaw)",
      ],
    },
    {
      day: "Day 2 (Oct 2)",
      events: [
        "Quantum Random Number Generators",
        "Quantum Circuit Transpilation",
        "Quantum Machine Learning",
        "Advanced session by Alain Chancé",
      ],
    },
    {
      day: "Day 3 (Oct 3)",
      events: [
        "Keynote by Dr. L. Venkata Subramaniam",
        "Panel Discussion",
        "Hackathon Briefing & First Review",
      ],
    },
    {
      day: "Day 4 (Oct 4)",
      events: ["Hackathon Reviews", "Project Showcase", "Closing Ceremony"],
    },
  ];

  return (
    <div className={styles.pastEventPage}>
      <section className={styles.pastEventHero}>
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Qiskit Fall Fest <span className="gradient-text">2024</span>
            </h1>
            <p className="page-subtitle">
              A look back at our incredible quantum computing journey
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className="container">
          <AnimatedSection>
            <div>
              <p className={styles.introText}>
                Last year, Quantum Fall Fest 2024 brought together a diverse set
                of voices from academia and industry, along with interactive
                workshops, competitions, and a hackathon that fostered
                collaboration and innovation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.glanceSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Quantum Week 2024 - At a Glance</h2>
            <div className={styles.scheduleGrid}>
              {schedule2024.map((day, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 150}
                  animation="fade-up"
                >
                  <div className={styles.scheduleCard}>
                    <div className={styles.scheduleDay}>
                      <Calendar className={styles.dayIcon} />
                      <h3>{day.day}</h3>
                    </div>
                    <ul className={styles.scheduleEvents}>
                      {day.events.map((event, eventIndex) => (
                        <li key={eventIndex}>{event}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={600}>
              <div className={styles.weekLongEvent}>
                <Zap className={styles.eventIcon} />
                <p>
                  <strong>All Week:</strong> Meme Competition on Discord open to
                  all.
                </p>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.highlights2024Section}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Event Highlights – 2024</h2>
            <div className={styles.highlights2024Grid}>
              {highlights2024.map((highlight, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 200}
                  animation="fade-left"
                >
                  <div className={styles.highlight2024Card}>
                    <div className={styles.highlight2024Icon}>
                      {highlight.icon}
                    </div>
                    <div className={styles.highlight2024Content}>
                      <h3>{highlight.title}</h3>
                      <p>{highlight.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.speakers2024Section}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Distinguished Speakers – 2024</h2>
            <div className={styles.speakersIntro}>
              <p>
                We had the privilege of hosting leading experts who shared their
                insights on cutting-edge topics in quantum computing:
              </p>
            </div>
            <div className={styles.speakers2024List}>
              {speakers2024.map((speaker, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 100}
                  animation="fade-up"
                >
                  <div className={styles.speaker2024Item}>
                    <div className={styles.speakerNumber}>{index + 1}</div>
                    <p>{speaker}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={800}>
              <div className={styles.speakersNote}>
                <p>
                  Their talks covered themes ranging from the fundamentals of
                  quantum computing to advanced applications in federated
                  learning, quantum runtime, and the future of the field.
                </p>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.lookingAheadSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Looking Ahead – 2026</h2>
            <div className={styles.lookingAheadContent}>
              <p>
                Building on the momentum of last year, Quantum Week 2026 will
                once again feature:
              </p>
              <div className={styles.features2025Grid}>
                <div className={styles.feature2025}>
                  <div className={styles.featureIcon}>🎯</div>
                  <h4>Keynote Addresses</h4>
                  <p>From globally recognized experts</p>
                </div>
                <div className={styles.feature2025}>
                  <div className={styles.featureIcon}>🛠️</div>
                  <h4>Hands-on Workshops</h4>
                  <p>Bridge theory and practice</p>
                </div>
                <div className={styles.feature2025}>
                  <div className={styles.featureIcon}>🚀</div>
                  <h4>Collaborative Hackathons</h4>
                  <p>Foster teamwork and innovation</p>
                </div>
                <div className={styles.feature2025}>
                  <div className={styles.featureIcon}>🎮</div>
                  <h4>Engaging Competitions</h4>
                  <p>Bring the community together</p>
                </div>
              </div>
              <div className={styles.closingMessage}>
                <p>
                  We look forward to welcoming you to Quantum Week 2026 this
                  October, as we continue our journey of discovery and
                  innovation in the quantum domain.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PastEvent;
