import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    axios.post(`${API_URL}/api/newsletter`, { email })
      .then(res => {
        setMessage('✅ Successfully subscribed!');
        setEmail('');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(err => {
        setMessage('❌ Error or already subscribed');
        console.log(err);
      });
  };

  return (
    <div style={sectionStyle}>
      <div style={contentContainerStyle}>
        <h2 style={headingStyle}>Stay Updated</h2>
        <p style={subHeadingStyle}>
          Subscribe to our newsletter and get the latest updates, tips, and exclusive offers delivered to your inbox
        </p>
        
        <form onSubmit={handleSubscribe} style={formStyle}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          
          <button 
            type="submit" 
            style={subscribeButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.background = '#F9FAFB';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fff';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Subscribe →
          </button>
        </form>

        {message && (
          <p style={{
            marginTop: '20px',
            fontSize: '15px',
            padding: '12px 20px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            fontWeight: '500'
          }}>
            {message}
          </p>
        )}

        <p style={privacyTextStyle}>
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

// Section Styles
const sectionStyle = {
  padding: '80px 20px',
  background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const contentContainerStyle = {
  maxWidth: '700px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const headingStyle = {
  fontSize: '42px',
  fontWeight: '800',
  marginBottom: '15px',
  textShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const subHeadingStyle = {
  fontSize: '18px',
  marginBottom: '40px',
  opacity: 0.95,
  lineHeight: '1.6',
  maxWidth: '600px',
  margin: '0 auto 40px'
};

// Form Styles
const formStyle = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'stretch'
};

const inputStyle = {
  flex: '1',
  minWidth: '280px',
  padding: '16px 20px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '15px',
  outline: 'none',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease'
};

const subscribeButtonStyle = {
  padding: '16px 40px',
  background: '#fff',
  color: '#7C3AED',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: '700',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  whiteSpace: 'nowrap'
};

const privacyTextStyle = {
  marginTop: '25px',
  fontSize: '14px',
  opacity: 0.85
};

export default NewsletterSection;