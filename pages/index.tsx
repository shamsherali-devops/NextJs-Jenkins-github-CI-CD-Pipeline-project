import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title> Moving Abroad Made Easy  </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional relocation and moving abroad services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">GoAbroad</div>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>☰</button>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Move Abroad with Confidence ✈️</h1>
        <p>We simplify relocation, visas, and settling into your dream country.</p>
        <a href="#services" className="btn">Explore Services</a>
      </section>

      {/* Services Section */}
      <section id="services" className="features">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Visa Assistance</h3>
            <p>Guidance for work, study, and permanent residency visas.</p>
          </div>
          <div className="card">
            <h3>Relocation Support</h3>
            <p>Housing, banking, and cultural orientation made simple.</p>
          </div>
          <div className="card">
            <h3>Career Abroad</h3>
            <p>Resume optimization and job search strategies for global markets.</p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="about">
        <h2>Popular Destinations</h2>
        <p>Italy • Canada • Germany • Australia • UAE</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 GoAbroad. Helping you move globally.</p>
      </footer>
    </>
  );
}
