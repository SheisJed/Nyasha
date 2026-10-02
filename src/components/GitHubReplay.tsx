import { useState } from 'react'
import './GitHubReplay.css'

export default function GitHubReplay() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % 6)
    setTimeout(() => setIsAnimating(false), 150)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + 6) % 6)
    setTimeout(() => setIsAnimating(false), 150)
  }

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 150)
  }

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
    <div className="slide slide-overview">
      <div className="slide-emoji">🔬</div>
      <h3>Where It Started</h3>

      <div className="experience-card">
        <h4>Laboratory Technician — Attaché</h4>
        <p className="experience-company">
          State Department of Roads, Ministry of Infrastructure
        </p>
        <p className="experience-dates">Jan 2023 – Apr 2023</p>

        <ul className="experience-highlights">
          <li>Conducted laboratory analysis of water, soil, cement, and construction materials.</li>
          <li>Operated analytical instruments including AAS and Flame Photometry.</li>
          <li>Prepared technical laboratory reports supporting engineering and construction decisions.</li>
          <li>Maintained laboratory quality assurance and safety standards.</li>
        </ul>
      </div>
    </div>
  )
      case 1:
        return (
     <div className="slide slide-language">
      <div className="slide-emoji">🏭</div>
      <h3>Chemistry Meets Industry</h3>

      <div className="experience-card">
        <h4>Quality Control Analyst — Assistant</h4>
        <p className="experience-company">
          Devki Group of Companies
        </p>
        <p className="experience-dates">Feb 2026 – Apr 2026</p>

        <ul className="experience-highlights">
          <li>Performed in-process and final quality inspections across steel manufacturing operations.</li>
          <li>Conducted dimensional inspection and tensile strength testing to verify product quality.</li>
          <li>Used Vernier calipers, micrometers, and UTS testing equipment for precision measurements.</li>
          <li>Identified non-conforming products and maintained quality inspection records.</li>
        </ul>
      </div>
    </div>
  )
      case 2:
        return (
    <div className="slide slide-impact">
      <div className="slide-emoji">📞</div>
      <h3>Learning People</h3>

      <div className="experience-card">
        <h4>Customer Service Representative</h4>
        <p className="experience-company">
          CCI Global
        </p>
        <p className="experience-dates">Oct 2024 – May 2026</p>

        <ul className="experience-highlights">
          <li>Resolved customer concerns through active listening, clear communication, and practical problem-solving.</li>
          <li>Balanced empathy with accurate policy interpretation during complex service interactions.</li>
          <li>Investigated account issues and guided customers toward appropriate solutions.</li>
          <li>Collaborated with cross-functional teams to support timely issue resolution.</li>
        </ul>
      </div>
    </div>
  )
      case 3:
        return (
      <div className="slide slide-productivity">
      <div className="slide-emoji">🌊</div>
      <h3>Coming Back to Water</h3>

      <div className="experience-card">
        <h4>Water Treatment Design Engineer</h4>
        <p className="experience-company">
          Kridha Limited
        </p>
        <p className="experience-dates">May 2026 – Present</p>

        <ul className="experience-highlights">
          <li>Design and size water treatment systems based on client requirements and raw water analysis.</li>
          <li>Contribute to the design of reverse osmosis, softening, filtration, and wastewater treatment systems.</li>
          <li>Interpret water quality analyses to recommend appropriate treatment solutions.</li>
          <li>Prepare technical proposals, quotations, and project documentation.</li>
          <li>Collaborate with technical and sales teams to develop customer-specific plant designs.</li>
        </ul>
      </div>
    </div>
  )
      case 4:
        return (
          <div className="slide slide-collaboration">
      <div className="slide-emoji">🧪</div>
      <h3>What I Actually Do</h3>

      <div className="experience-card">
        <h4>Water, Chemistry & Problem-Solving</h4>
        <p className="experience-company">
          Technical Work
        </p>

        <ul className="experience-highlights">
          <li>Translate raw water analysis into practical treatment requirements.</li>
          <li>Work across filtration, softening, reverse osmosis, and wastewater treatment.</li>
          <li>Prepare technical proposals, quotations, and supporting documentation.</li>
          <li>Balance technical requirements with client needs and project realities.</li>
          <li>Keep learning because every water problem seems to come with another question.</li>
        </ul>
      </div>
    </div>
  )
      case 5:
        return (
           <div className="slide slide-growth">
      <div className="slide-emoji">🌱</div>
      <h3>Where I'm Going</h3>

      <div className="experience-card">
        <h4>Building Better Water Systems</h4>
        <p className="experience-company">
          The Questions I'm Following
        </p>

        <ul className="experience-highlights">
          <li>Exploring better ways to treat and reuse water.</li>
          <li>Learning how low-energy treatment can make water systems more practical and sustainable.</li>
          <li>Thinking about circular water systems, especially for communities that face water insecurity.</li>
          <li>Growing from water treatment design into deeper technical understanding and problem-solving.</li>
          <li>Writing, learning, and asking better questions along the way.</li>
        </ul>
      </div>
    </div>
  )
      default:
        return null
    }
  }

  return (
    <section className="card work-experience">
      <div className="card-header">
        <div className="replay-header-content">
          <span>Work Experience</span>
        </div>
      </div>

      <div className="replay-carousel">
        <button
          className="carousel-nav prev"
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          ◀
        </button>

        <div className={`carousel-content ${isAnimating ? 'animating' : ''}`}>
          {renderSlide()}
        </div>

        <button
          className="carousel-nav next"
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isAnimating}
        >
          ▶
        </button>
      </div>

      <div className="carousel-dots">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
