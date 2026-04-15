import Image from 'next/image'
import Link from 'next/link'
import { SITE_PHOTOS } from '@/lib/site-photos'

const CAPABILITIES = [
  {
    title: 'Project Structuring',
    body: 'We design bankable project frameworks integrating technical, commercial, and risk allocation principles.',
  },
  {
    title: 'Capital Advisory',
    body: 'We structure financing solutions and connect projects with institutional capital.',
  },
  {
    title: 'Technical & Financial Integration',
    body: 'We align engineering design, cost structures, and financial models to ensure investment viability.',
  },
]

const EXPERIENCE = [
  {
    title: '1,000 MW Solar PV Project',
    location: 'Egypt',
    body: 'Full feasibility study, technical structuring, and financial modeling for utility-scale development',
  },
  {
    title: '4 GW Renewable Energy Pipeline',
    location: 'Middle East',
    body: 'Equipment strategy, cost optimization, and investment structuring across multi-project portfolio',
  },
  {
    title: 'Infrastructure Development',
    location: 'Kuwait',
    body: 'Technical advisory supporting project structuring and execution alignment',
  },
  {
    title: 'Utility-Scale Infrastructure Advisory',
    location: 'MENA Region',
    body: 'Integrated support across engineering, commercial structuring, and investment readiness',
  },
]

const PRINCIPLES = ['Technical rigor', 'Financial discipline', 'Execution certainty']

export function InstitutionalHome() {
  const heroPhoto = SITE_PHOTOS.home

  return (
    <div className="home-institutional">
      <div className="home-institutional__glow home-institutional__glow--top" />
      <div className="home-institutional__glow home-institutional__glow--bottom" />

      <div className="home-institutional__container">
        <section className="home-hero">
          <Image
            src={heroPhoto.src}
            alt="Night infrastructure asset representing large-scale, institutional infrastructure and energy advisory work."
            fill
            priority
            sizes="100vw"
            className="home-hero__image"
            style={{ objectPosition: heroPhoto.position ?? 'center center' }}
          />
          <div className="home-hero__overlay" />

          <div className="home-hero__content">
            <div className="home-hero__eyebrow">Infrastructure & Energy Advisory</div>
            <h1 className="home-hero__title">
              <span>Capital follows structure.</span>
              <span>We build both.</span>
            </h1>
            <p className="home-hero__subtitle">Institutional-grade advisory for infrastructure and energy investments.</p>

            <div className="home-hero__actions">
              <Link href="/support#inquiry-form" className="home-button home-button--primary">
                Start a Discussion
              </Link>
              <Link href="/projects" className="home-button home-button--secondary">
                View Experience
              </Link>
            </div>

            <div className="home-hero__rail" aria-label="Advisory focus">
              <span>Infrastructure</span>
              <span>Energy</span>
              <span>Capital Structuring</span>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-section__intro">
            <div className="home-section__eyebrow">What We Do</div>
            <h2 className="home-section__title">Integrated advisory across structure, capital, and execution logic.</h2>
          </div>

          <div className="home-capabilities">
            {CAPABILITIES.map((item) => (
              <article key={item.title} className="home-capability">
                <h3 className="home-capability__title">{item.title}</h3>
                <p className="home-capability__body">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-section--track-record">
          <div className="home-section__intro home-section__intro--wide">
            <div className="home-section__eyebrow">Selected Experience</div>
            <h2 className="home-section__title">Representative mandates across infrastructure and energy.</h2>
            <p className="home-section__meta">$1B+ Project Value | 5 GW+ Pipeline | Multi-Country Experience</p>
          </div>

          <div className="home-track-record">
            {EXPERIENCE.map((item, index) => (
              <article key={`${item.title}-${item.location}`} className="home-track-record__item">
                <div className="home-track-record__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="home-track-record__content">
                  <h3 className="home-track-record__title">
                    {item.title} <span>— {item.location}</span>
                  </h3>
                  <p className="home-track-record__body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-section--approach">
          <div className="home-approach">
            <div className="home-approach__copy">
              <div className="home-section__eyebrow">How We Work</div>
              <h2 className="home-section__title">We operate at the intersection of engineering and capital.</h2>
              <p className="home-section__body">Our approach is structured around:</p>
              <p className="home-section__body">We focus on making projects not only feasible, but investable.</p>
            </div>

            <div className="home-principles" aria-label="Core principles">
              {PRINCIPLES.map((item) => (
                <div key={item} className="home-principles__item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-cta">
          <div className="home-section__eyebrow">Final Discussion</div>
          <h2 className="home-cta__title">Discuss Your Project</h2>
          <p className="home-cta__body">Engage with us to structure and unlock investment value.</p>
          <Link href="/support#inquiry-form" className="home-button home-button--primary">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  )
}
