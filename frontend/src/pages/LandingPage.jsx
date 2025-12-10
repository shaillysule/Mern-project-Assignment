import React from "react";
import ProjectsSection from "../components/ProjectSection";
import ClientsSection from "../components/ClientsSection";
import ContactForm from "../components/ContactForm";
import NewsletterSection from "../components/NewsletterSection";

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '700' }}>YourBrand</h1>
        <div style={{ display: 'flex', gap: '30px' }}>
          <button style={{border:"3px solid black ",background:"purple",color:"black",width:"100px",height:"50px",padding:"5px"}}><a href="/" style={navLinkStyle}>Landing Page</a></button>
        <button style={{border:"3px solid black ",background:"purple",color:"black",width:"100px",height:"50px",padding:"5px"}}>  <a href="/admin" style={navLinkStyle}>Admin Page</a></button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
          Build Your Dream Project
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '30px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 30px' }}>
          We create stunning digital experiences that help your business grow and succeed in the modern world
        </p>
        <button style={heroCTAStyle}>Get Started</button>
      </div>

      {/* Existing Sections */}
      <ProjectsSection />
      <ClientsSection />
      <ContactForm />
      <NewsletterSection />

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>YourBrand</h3>
            <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Building digital excellence since 2024</p>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={footerLinkStyle}>About</a>
            <a href="#" style={footerLinkStyle}>Services</a>
            <a href="#" style={footerLinkStyle}>Privacy</a>
            <a href="#" style={footerLinkStyle}>Terms</a>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>© 2024 YourBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Navbar Styles
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 50px',
  background: '#7C3AED',
  color: '#fff',
  boxShadow: '0 2px 10px rgba(124,58,237,0.3)',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '500',
  transition: 'opacity 0.3s ease'
};

// Hero Styles
const heroStyle = {
  textAlign: 'center',
  padding: '120px 20px',
  background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
  color: '#fff',
  minHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const heroCTAStyle = {
  padding: '16px 48px',
  background: '#fff',
  color: '#7C3AED',
  border: 'none',
  borderRadius: '10px',
  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
};

// Footer Styles
const footerStyle = {
  padding: '50px 50px 30px',
  background: '#1F2937',
  color: '#fff'
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
  opacity: 0.8,
  transition: 'opacity 0.3s ease'
};

export default LandingPage;