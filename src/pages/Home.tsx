import React from 'react';
import Map from "../components/Map";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountdownTimer from '../components/CountdownTimer';
import styles from './Home.module.css';
import Full_Illustration from '../assets/Full_Illustration.png';
import Qiskit_Logo from '../assets/qiskit logo.svg';
import IBM_Quantum_Logo from '../assets/IBM Quantum Logo.png';
import Crop_Future from '../assets/Crop_Future.png';
import Crop_Einstein from '../assets/Crop_Einstein.png';
import Crop_Prof from '../assets/Crop_Prof.png';
import Crop_Thinker from '../assets/Crop_Thinker.png';
import Team_2 from '../assets/Team_2.png';

const API_KEY_GOOGLE_MAPS = ""

const Home: React.FC = () => {
  const events = [
    {
      title: "Quantum Computing Fundamentals",
      description: "Introduction to quantum mechanics and quantum computing principles",
      icon: "🔬"
    },
    {
      title: "Hands-on Qiskit Workshop",
      description: "Interactive workshop using Qiskit for quantum circuit design",
      icon: "💻"
    },
    {
      title: "Quantum Hackathon",
      description: "Overnight hackathon focusing on quantum applications",
      icon: "🏆"
    },
    {
      title: "Industry Expert Talks",
      description: "Keynotes from quantum computing industry leaders",
      icon: "🎤"
    },
    {
      title: "Panel Discussions",
      description: "Interactive discussions on quantum computing future",
      icon: "💬"
    },
    {
      title: "Networking Sessions",
      description: "Connect with quantum enthusiasts and researchers",
      icon: "🤝"
    }
  ];

  const timelineData = [
    {
      day: "Day 1",
      date: "October 5, 2026",
      events: [
        "Opening Ceremony: 8:30 - 11:30",
        "Workshop: 11:30 - 13:00",
        "Lunch Session: 13:00 - 14:00",
        "Challenge-1: 14:00 - 16:00"
      ]
    },
    {
      day: "Day 2",
      date: "October 6, 2026",
      events: [
        "Lecture Sessions: 9:00 - 13:00",
        "Lunch Session: 13:00 - 14:00",
        "Challenge-2: 14:00 - 16:00",
        "Hackathon Time: 18:00 - 08:00"
      ]
    },
    {
      day: "Day 3",
      date: "October 7, 2026",
      events: [
        "Breakfast Session: 8:00 - 9:00",
        "Felicitation & Conclusion: 9:00 - 10:00"
      ]
    }
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={Full_Illustration} alt="Quantum Illustration" className={styles.heroBgImage} />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <AnimatedSection className={styles.heroContent}>
            <div className={styles.heroLogos}>
              <img src={Qiskit_Logo} alt="Qiskit" className={styles.heroLogo} />
              <img src={IBM_Quantum_Logo} alt="IBM Quantum" className={styles.heroLogo} />
            </div>
            <h1 className={styles.heroTitle}>
              Qiskit Fall Fest <span className="gradient-text">2026</span>
            </h1>
            <p className={styles.heroSubtitle}>Hosted by QuantumPlators, VIT Chennai</p>
            <p className={styles.heroQuote}>
              "Quantum computing is not just about processing power; it's about reimagining what's possible."
            </p>
            <div className={styles.heroDetails}>
              <div className={styles.heroDetail}>
                <Calendar className="icon" />
                <span>October 5-7, 2026</span>
              </div>
              <div className={styles.heroDetail}>
                <MapPin className="icon" />
                <span>VIT Chennai Campus</span>
              </div>
            </div>
            
            <CountdownTimer />

            <button className={styles.ctaButton}>
              Register Now <ArrowRight />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">About the Event</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  Qiskit Fall Fest 2026 is a premier quantum computing and technology event hosted by QuantumPlators
                  at VIT Chennai. Part of the global Qiskit Fall Fest program, this event brings together students,
                  researchers, and technology enthusiasts to explore the frontiers of quantum information science
                  and computational algorithms.
                </p>
                <p>
                  Featuring expert-led sessions, hands-on Qiskit exposure, interactive quiz segments, and multi-stage
                  competitions, the 3-day event (October 5–7, 2026) offers a structured platform for technical
                  learning, inter-college participation, and collaborative innovation.
                </p>
              </div>
              <div className={styles.aboutImage}>
                <img src={Crop_Future} alt="Future of Quantum" className={styles.aboutImg} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Highlights */}
      <section className={styles.highlightsSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Event Highlights</h2>
            <div className={styles.highlightsGrid}>
              {events.map((event, index) => (
                <AnimatedSection key={index} delay={index * 100} animation="fade-up">
                  <div className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>{event.icon}</div>
                    <h3 className={styles.highlightTitle}>{event.title}</h3>
                    <p className={styles.highlightDescription}>{event.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners */}
      <section className={styles.partnersSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Partners</h2>
            <div className={styles.partnersGrid}>
              <div className={styles.partnerCard}>
                <img src={IBM_Quantum_Logo} alt="IBM Quantum" className={styles.partnerLogo} />
                <h3>IBM Quantum</h3>
                <p>Leading quantum computing platform and research</p>
              </div>
              <div className={styles.partnerCard}>
                <div className={styles.quantumplatorsLogo}>
                  <img src={Team_2} alt="Quantumplators" className={styles.logoIcon} />
                  <span>Quantumplators</span>
                </div>
                <h3>Team Quantumplators</h3>
                <p>VIT Chennai's quantum computing enthusiast team</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Event Timeline</h2>
            <div className={styles.timeline}>
              {timelineData.map((day, index) => (
                <AnimatedSection key={index} delay={index * 200} animation="fade-left">
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.timelineDay}>{day.day}</h3>
                      <p className={styles.timelineDate}>{day.date}</p>
                      <ul className={styles.timelineEvents}>
                        {day.events.map((event, eventIndex) => (
                          <li key={eventIndex}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Speakers */}
      <section className={styles.speakersSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Distinguished Speakers</h2>
            <div className={styles.speakersGrid}>
              <div className={styles.speakerPlaceholder}>
                <div className={styles.speakerImage}>
                  <img src={Crop_Einstein} alt="Speaker" />
                </div>
                <h3>Dr. Quantum Expert</h3>
                <p>Quantum Computing Researcher</p>
                <p className={styles.speakerBio}>Leading expert in quantum algorithms and applications</p>
              </div>
              <div className={styles.speakerPlaceholder}>
                <div className={styles.speakerImage}>
                  <img src={Crop_Prof} alt="Speaker" />
                </div>
                <h3>Industry Pioneer</h3>
                <p>Quantum Solutions Architect</p>
                <p className={styles.speakerBio}>Pioneering quantum computing implementations in industry</p>
              </div>
              <div className={styles.speakerPlaceholder}>
                <div className={styles.speakerImage}>
                  <img src={Crop_Thinker} alt="Speaker" />
                </div>
                <h3>Research Scientist</h3>
                <p>Quantum Machine Learning</p>
                <p className={styles.speakerBio}>Advancing quantum machine learning research and development</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Venue */}
      <section className={styles.venueSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Venue</h2>
            <div className={styles.venueContent}>
              <div className={styles.venueInfo}>
                <h3>VIT Chennai Campus</h3>
                <p className={styles.venueAddress}>
                  Vellore Institute of Technology<br />
                  Vandalur-Kelambakkam Road<br />
                  Chennai, Tamil Nadu 600127<br />
                  India
                </p>
                <div className={styles.venueFeatures}>
                  <div className={styles.feature}>
                    <MapPin className={styles.featureIcon} />
                    <span>Easy accessibility via public transport</span>
                  </div>
                  <div className={styles.feature}>
                    <Users className={styles.featureIcon} />
                    <span>State-of-the-art conference facilities</span>
                  </div>
                </div>
              </div>
              <div className={styles.venueMap}>
                <div className={styles.mapPlaceholder}>
                  <Map />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
