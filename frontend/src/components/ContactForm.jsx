import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${API_URL}/api/contacts`, formData)
      .then(res => {
        setMessage('✅ Contact form submitted successfully!');
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(err => {
        setMessage('❌ Error submitting form');
        console.log(err);
      });
  };

  return (
    <div id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Get In Touch</h2>
      <p style={subHeadingStyle}>We'd love to hear from you. Send us a message!</p>
      
      <form onSubmit={handleSubmit} style={formContainerStyle}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#7C3AED'}
          onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#7C3AED'}
          onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
        
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#7C3AED'}
          onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
        
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#7C3AED'}
          onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
        
        <button 
          type="submit" 
          style={submitButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.background = '#6D28D9';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(124,58,237,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#7C3AED';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(124,58,237,0.3)';
          }}
        >
          Send Message
        </button>

        {message && (
          <p style={{
            marginTop: '20px',
            textAlign: 'center',
            padding: '12px',
            borderRadius: '8px',
            background: message.includes('✅') ? '#D1FAE5' : '#FEE2E2',
            color: message.includes('✅') ? '#065F46' : '#991B1B',
            fontWeight: '500'
          }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

// Section Styles
const sectionStyle = {
  padding: '80px 20px',
  background: '#F3F4F6',
  minHeight: '600px'
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '10px',
  fontSize: '42px',
  color: '#1F2937',
  fontWeight: '800'
};

const subHeadingStyle = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#6B7280',
  marginBottom: '50px'
};

// Form Styles
const formContainerStyle = {
  maxWidth: '550px',
  margin: '0 auto',
  background: '#fff',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(124,58,237,0.1)'
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  marginBottom: '20px',
  border: '2px solid #E5E7EB',
  borderRadius: '10px',
  fontSize: '15px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease',
  outline: 'none',
  fontFamily: 'inherit'
};

const submitButtonStyle = {
  width: '100%',
  padding: '16px',
  background: '#7C3AED',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
  fontWeight: '700',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(124,58,237,0.3)'
};

export default ContactForm;