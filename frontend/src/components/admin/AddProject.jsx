import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
function AddProject() {
  const [projectData, setProjectData] = useState({
    name: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  // Image select karne par
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile) {
      setMessage('❌ Please select an image');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('name', projectData.name);
    formData.append('description', projectData.description);
    formData.append('image', imageFile);

    axios.post(`${API_URL}/api/projects`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        setMessage('✅ Project added successfully! Image automatically cropped to 700x450.');
        setProjectData({ name: '', description: '' });
        setImageFile(null);
        setImagePreview(null);
        setLoading(false);
        setTimeout(() => setMessage(''), 4000);
      })
      .catch(err => {
        setMessage('❌ Error adding project');
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>📁 Add New Project</h2>
      <p style={subtitleStyle}>Image will be automatically cropped to 700x450 (16:9 ratio)</p>

      <form onSubmit={handleSubmit} style={formStyle}>
        
        {/* Image Upload */}
        <div style={uploadBoxStyle}>
          <label htmlFor="project-image" style={uploadLabelStyle}>
            📸 {imageFile ? 'Change Image' : 'Upload Project Image'}
          </label>
          <input
            id="project-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={fileInputStyle}
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div style={previewContainerStyle}>
            <h4 style={{ color: '#1F2937', marginBottom: '10px' }}>Preview:</h4>
            <img src={imagePreview} alt="Preview" style={previewImageStyle} />
            <p style={previewTextStyle}>✂️ Will be cropped to 700x450 on upload</p>
          </div>
        )}

        {/* Project Name */}
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={projectData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Project Description */}
        <textarea
          name="description"
          placeholder="Project Description"
          value={projectData.description}
          onChange={handleChange}
          required
          style={textareaStyle}
          rows="4"
        />

        {/* Submit Button */}
        <button 
          type="submit" 
          style={submitButtonStyle}
          disabled={loading}
          onMouseEnter={(e) => !loading && (e.target.style.background = '#6D28D9')}
          onMouseLeave={(e) => !loading && (e.target.style.background = '#7C3AED')}
        >
          {loading ? '⏳ Adding Project...' : '➕ Add Project'}
        </button>

        {/* Success/Error Message */}
        {message && (
          <p style={{
            marginTop: '15px',
            padding: '12px',
            borderRadius: '8px',
            background: message.includes('✅') ? '#D1FAE5' : '#FEE2E2',
            color: message.includes('✅') ? '#065F46' : '#991B1B',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: '14px'
          }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '30px',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
};

const headingStyle = {
  marginBottom: '8px',
  color: '#1F2937',
  fontSize: '28px',
  fontWeight: '700',
  textAlign: 'center'
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#7C3AED',
  fontSize: '13px',
  marginBottom: '25px',
  fontStyle: 'italic'
};

const formStyle = {
  marginTop: '20px'
};

const uploadBoxStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  padding: '30px',
  border: '2px dashed #7C3AED',
  borderRadius: '12px',
  background: '#F9FAFB'
};

const uploadLabelStyle = {
  display: 'inline-block',
  padding: '14px 32px',
  background: '#7C3AED',
  color: '#fff',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '15px',
  transition: 'background 0.3s ease'
};

const fileInputStyle = {
  display: 'none'
};

const previewContainerStyle = {
  margin: '20px 0',
  padding: '20px',
  background: '#F9FAFB',
  borderRadius: '12px',
  textAlign: 'center'
};

const previewImageStyle = {
  maxWidth: '100%',
  maxHeight: '300px',
  borderRadius: '8px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  border: '3px solid #7C3AED'
};

const previewTextStyle = {
  marginTop: '10px',
  fontSize: '13px',
  color: '#7C3AED',
  fontWeight: '600'
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  marginBottom: '15px',
  border: '2px solid #E5E7EB',
  borderRadius: '8px',
  fontSize: '15px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease',
  outline: 'none'
};

const textareaStyle = {
  width: '100%',
  padding: '14px',
  marginBottom: '15px',
  border: '2px solid #E5E7EB',
  borderRadius: '8px',
  fontSize: '15px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease',
  outline: 'none',
  fontFamily: 'inherit',
  resize: 'vertical'
};

const submitButtonStyle = {
  width: '100%',
  padding: '16px',
  background: '#7C3AED',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
};

export default AddProject;