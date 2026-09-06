import React from 'react';
import { Github, Instagram, Linkedin, User } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import styles from './Organizers.module.css';

const Organizers: React.FC = () => {
  const organizers = [
    {
      name: "Dr. N. Ramesh Babu",
      role: "Lead Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Lakshmanan S",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Padmaja N",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Sriraman R",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Thangaraj M",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Ms. Nathimalar Chandran",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Tarun Ashwat",
      role: "Student Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Adithya K",
      role: "Student Organizer",
      image: null,
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className={styles.organizersPage}>
      <section className={styles.organizersHero}>
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Meet the <span className="gradient-text">Organizers</span></h1>
            <p className="page-subtitle">
              Organized by QuantumPlators in association with the Department of Mathematics, VIT Chennai
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.organizersGridSection}>
        <div className="container">
          <div className={styles.organizersGrid}>
            {organizers.map((organizer, index) => (
              <AnimatedSection key={index} delay={index * 80} animation="fade-up">
                <div className={styles.organizerCard}>
                  <div className={styles.organizerPhoto}>
                    {organizer.image ? (
                      <img src={organizer.image} alt={organizer.name} />
                    ) : (
                      <User className={styles.placeholderIcon} />
                    )}
                  </div>
                  <h3 className={styles.organizerName}>{organizer.name}</h3>
                  <p className={styles.organizerRole}>{organizer.role}</p>
                  <div className={styles.socialLinks}>
                    <a href={organizer.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                      <Github className={styles.socialIcon} />
                    </a>
                    <a href={organizer.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                      <Instagram className={styles.socialIcon} />
                    </a>
                    <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                      <Linkedin className={styles.socialIcon} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamMessage}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.messageCard}>
              <h2>From Team Quantumplators</h2>
              <p>
                We are a passionate group of quantum computing enthusiasts from VIT Chennai, 
                dedicated to advancing quantum education and research. Our team combines expertise 
                in quantum computing, event management, and community building to create meaningful 
                learning experiences.
              </p>
              <p>
                Together, we're committed to making Qiskit Fall Fest 2026 an unforgettable journey 
                into the quantum realm. Join us as we explore the infinite possibilities of quantum computing!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Organizers;