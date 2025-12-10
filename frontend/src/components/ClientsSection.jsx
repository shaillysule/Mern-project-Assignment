import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/clients`)
      .then(res => setClients(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div id="clients" style={sectionStyle}>
      {/* Decorative Line with Purple Accent */}
      <div style={decorativeLineStyle}>
        <div style={purpleAccentStyle}></div>
      </div>

      <h2 style={headingStyle}>Happy Clients</h2>
      <p style={subHeadingStyle}>See what our clients say about us</p>

      <div style={clientsGridStyle}>
        {clients.map(client => (
          <div 
            key={client._id} 
            style={clientCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(124,58,237,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(124,58,237,0.12)';
            }}
          >
            {/* Purple Top Border */}
            <div style={cardTopBorderStyle}></div>
            
            <div style={quoteIconStyle}>"</div>
            
            <img
              src={client.image}
              alt={client.name}
              style={clientImageStyle}
            />
            
            <p style={testimonialTextStyle}>
              {client.description}
            </p>
            
            <div style={clientInfoStyle}>
              <h4 style={clientNameStyle}>{client.name}</h4>
              <p style={clientDesignationStyle}>{client.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Section Styles
const sectionStyle = {
  padding: '80px 20px',
  background: '#fff',
  minHeight: '600px',
  position: 'relative'
};

const decorativeLineStyle = {
  width: '100px',
  height: '4px',
  background: '#E5E7EB',
  margin: '0 auto 20px',
  borderRadius: '2px',
  position: 'relative'
};

const purpleAccentStyle = {
  width: '50px',
  height: '4px',
  background: 'linear-gradient(90deg, #7C3AED, #EC4899)',
  borderRadius: '2px',
  position: 'absolute',
  left: '0'
};

const headingStyle = {
  marginBottom: '10px',
  textAlign: 'center',
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

const clientsGridStyle = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto'
};

// Card Styles
const clientCardStyle = {
  width: '350px',
  padding: '35px 30px',
  background: '#fff',
  boxShadow: '0 8px 25px rgba(124,58,237,0.12)',
  borderRadius: '16px',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  border: '1px solid #F3F4F6',
  overflow: 'hidden'
};

const cardTopBorderStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '4px',
  background: 'linear-gradient(90deg, #7C3AED, #EC4899)',
  borderRadius: '16px 16px 0 0'
};

const quoteIconStyle = {
  fontSize: '60px',
  color: '#7C3AED',
  opacity: 0.2,
  position: 'absolute',
  top: '15px',
  left: '20px',
  fontFamily: 'Georgia, serif',
  lineHeight: '1'
};

const clientImageStyle = {
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '20px',
  border: '4px solid #7C3AED',
  boxShadow: '0 4px 15px rgba(124,58,237,0.3)'
};

const testimonialTextStyle = {
  fontSize: '15px',
  color: '#4B5563',
  fontStyle: 'italic',
  marginBottom: '20px',
  lineHeight: '1.7',
  minHeight: '80px'
};

const clientInfoStyle = {
  borderTop: '2px solid #7C3AED',
  paddingTop: '15px',
  marginTop: '10px'
};

const clientNameStyle = {
  margin: '5px 0',
  color: '#7C3AED',
  fontSize: '18px',
  fontWeight: '700'
};

const clientDesignationStyle = {
  fontSize: '14px',
  color: '#9CA3AF',
  margin: 0
};

export default ClientsSection;