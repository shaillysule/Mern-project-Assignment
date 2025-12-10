import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>Our Projects</h2>
      <p style={subHeadingStyle}>Discover our latest work and creative solutions</p>

      <div style={projectGridStyle}>
        {projects.map(project => (
          <div 
            key={project._id} 
            style={projectCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(124,58,237,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(124,58,237,0.15)';
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={projectImageStyle}
            />

            <div style={{ padding: '5px 0' }}>
              <h3 style={projectTitleStyle}>{project.name}</h3>
              <p style={projectDescStyle}>{project.description}</p>

              <button 
                style={projectButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = '#6D28D9';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#7C3AED';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Read More →
              </button>
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
  background: '#F9FAFB',
  minHeight: '600px'
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

const projectGridStyle = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto'
};

// Card Styles
const projectCardStyle = {
  width: '350px',
  background: '#fff',
  boxShadow: '0 10px 30px rgba(124,58,237,0.15)',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer'
};

const projectImageStyle = {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  display: 'block'
};

const projectTitleStyle = {
  marginTop: '20px',
  marginBottom: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  color: '#1F2937',
  fontSize: '22px',
  fontWeight: '700'
};

const projectDescStyle = {
  fontSize: '15px',
  color: '#6B7280',
  lineHeight: '1.6',
  paddingLeft: '20px',
  paddingRight: '20px',
  marginBottom: '20px'
};

const projectButtonStyle = {
  margin: '0 20px 20px',
  width: 'calc(100% - 40px)',
  padding: '14px',
  background: '#7C3AED',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600',
  transition: 'all 0.3s ease'
};

export default ProjectsSection;