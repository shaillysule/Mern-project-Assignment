import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    axios.get(`${API_URL}/api/projects`)
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      axios.delete(`${API_URL}/api/projects/${id}`)
        .then(() => {
          alert('✅ Project deleted successfully!');
          fetchProjects(); // Refresh list
        })
        .catch(err => {
          alert('❌ Error deleting project');
          console.log(err);
        });
    }
  };

  if (loading) return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>;

  return (
    <div style={containerStyle}>
      <h2>Manage Projects</h2>
      
      {projects.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', padding: '2rem' }}>
          No projects yet.
        </p>
      ) : (
        <div style={gridStyle}>
          {projects.map(project => (
            <div key={project._id} style={cardStyle}>
              <img
                src={project.image}
                alt={project.name}
                style={imageStyle}
              />
              <h3 style={{ margin: '10px 0', fontSize: '18px' }}>{project.name}</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                {project.description}
              </p>
              
              <button
                onClick={() => handleDelete(project._id)}
                style={deleteButtonStyle}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  marginTop: '20px'
};

const cardStyle = {
  background: '#fff',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '6px'
};

const deleteButtonStyle = {
  width: '100%',
  padding: '10px',
  background: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold'
};

export default ManageProjects;