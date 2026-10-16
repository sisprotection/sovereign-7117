'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Fingerprint,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const programs = [
  { id: '01', title: 'Infant Command', age: '6 weeks — 18 months', note: 'Responsive care, sensory exploration, secure attachment.' },
  { id: '02', title: 'Discovery Core', age: '18 months — 3 years', note: 'Language, movement, and curiosity through guided play.' },
  { id: '03', title: 'Sovereign Prep', age: '3 — 5 years', note: 'Project-based learning for confident, capable thinkers.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080908] text-[#f4b942] selection:bg-[#f4b942] selection:text-black">
      <div className="top-signal">
        <span className="pulse-dot" /> SECURED BY SERPENT INTELLIGENCE SYSTEMS <span className="hidden sm:inline">// PRIVATE EDUCATION NETWORK // STATUS: NOMINAL</span>
      </div>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Sovereign Early Learning Academy home">
          <span className="brand-mark"><ShieldCheck /></span>
          <span><strong>SOVEREIGN</strong><small>EARLY LEARNING ACADEMY</small></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#protocol">Our protocol</a><a href="#programs">Programs</a><a href="#reserve">Reserve a place</a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <a href="#reserve" className="nav-cta">ENROLLMENT INTAKE <ArrowUpRight /></a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><CircleDot /> SYSTEM 01 / EARLY YEARS OPERATING SYSTEM</div>
          <h1>Built for <em>bright</em><br />beginnings.</h1>
          <p className="hero-lede">A considered early learning environment where children are known, families are supported, and every day is designed with intention.</p>
          <div className="hero-actions"><a className="button button-primary" href="#reserve">Reserve a place <ArrowUpRight /></a><a className="text-link" href="#protocol">Explore the protocol <span>↘</span></a></div>
          <div className="hero-status"><span><i /> Accepting 2025—26 reservations</span><span className="status-divider" /><span>East Austin / TX</span></div>
        </div>
        <div className="hero-console" aria-label="Academy operating principles">
          <div className="console-top"><span>LIVE / CAMPUS_FEED</span><span>SEC_001</span></div>
          <div className="console-graphic"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><Fingerprint /><small>TRUST<br />BY DESIGN</small></div><span className="axis axis-x" /><span className="axis axis-y" /></div>
          <div className="console-data"><div><small>CHILD-LED</small><strong>100%</strong></div><div><small>RATIO</small><strong>1:6</strong></div><div><small>FAMILY ACCESS</small><strong>24/7</strong></div></div>
        </div>
      </section>

      <section id="protocol" className="protocol shell section-grid">
        <div className="section-label">02 / THE PROTOCOL</div>
        <div className="protocol-content"><h2>Care is the<br /><em>infrastructure.</em></h2><p>We build the conditions for wonder: calm rooms, capable educators, and a rhythm that gives children room to become themselves.</p><div className="principle-list"><div><b>01</b><span>Secure by design</span><small>Consistent rituals and primary-caregiver relationships make every room feel like home.</small></div><div><b>02</b><span>Curiosity, activated</span><small>Open-ended materials and real-world projects turn questions into capability.</small></div><div><b>03</b><span>Families, in the loop</span><small>Clear communication, shared context, and no surprises—ever.</small></div></div></div>
      </section>

      <section id="programs" className="programs shell">
        <div className="section-heading"><div><div className="section-label">03 / PROGRAM MATRIX</div><h2>Find their <em>frequency.</em></h2></div><p>Purposeful programs tuned to each stage of development.</p></div>
        <div className="program-grid">{programs.map((program) => <article className="program-card" key={program.id}><div className="card-number">{program.id}</div><Sparkles /><h3>{program.title}</h3><div className="age">{program.age}</div><p>{program.note}</p><a href="#reserve">View program <ArrowUpRight /></a></article>)}</div>
      </section>

      <section id="reserve" className="reserve shell">
        <div className="section-label">04 / ENROLLMENT INTAKE</div>
        <div className="reserve-grid"><div className="reserve-intro"><h2>Open a<br /><em>conversation.</em></h2><p>Tell us a little about your family. Our admissions team will respond within one business day to schedule a private campus visit.</p><div className="privacy-note"><LockKeyhole /><span><strong>Private by default.</strong><br />Your information is used only to respond to this inquiry and is never sold or shared with third parties.</span></div></div>
          <form className="intake-form" onSubmit={handleSubmit}><div className="form-header"><span>RESERVATION REQUEST</span><span>FORM_004</span></div><div className="field-row"><label>Parent / guardian name<input required name="name" placeholder="Your full name" /></label><label>Best email<input required type="email" name="email" placeholder="you@example.com" /></label></div><div className="field-row"><label>Child&apos;s name<input required name="child" placeholder="Child&apos;s full name" /></label><label>Target start<select name="start" defaultValue=""><option value="" disabled>Select a window</option><option>Fall 2025</option><option>Winter 2026</option><option>Spring 2026</option></select></label></div><label>Which program are you exploring?<select name="program" defaultValue=""><option value="" disabled>Select a program</option>{programs.map((p) => <option key={p.id}>{p.title}</option>)}</select></label><label>Anything you&apos;d like us to know?<textarea name="message" placeholder="Tell us about your family, questions, or access needs..." rows={3} /></label><label className="checkline"><input required type="checkbox" name="consent" /><span>I consent to Sovereign Early Learning Academy contacting me about this enrollment inquiry. I understand I can withdraw consent at any time.</span></label><label className="checkline"><input type="checkbox" name="updates" /><span>Keep me informed about academy updates and family events. (Optional)</span></label>{submitted ? <div className="success-message"><Check /> Request received. We&apos;ll be in touch shortly.</div> : <button className="button button-primary submit-button" type="submit">Transmit reservation request <ArrowUpRight /></button>}<p className="form-legal">By submitting, you acknowledge our <a href="#privacy">privacy disclosure</a>. We collect only what is needed to respond, coordinate a visit, and support enrollment.</p></form>
        </div>
      </section>

      <footer className="site-footer shell"><div className="brand"><span className="brand-mark"><ShieldCheck /></span><span><strong>SOVEREIGN</strong><small>EARLY LEARNING ACADEMY</small></span></div><div>512.555.0147<br /><span>hello@sovereignela.com</span></div><div>© 2025 Sovereign ELA<br /><span id="privacy">Privacy disclosure / Accessibility</span></div></footer>
    </main>
  )
}
