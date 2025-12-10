import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
function ViewContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/contacts`)
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>;

  return (
    <div style={containerStyle}>
      <h2>Contact Form Submissions</h2>
      
      {contacts.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', padding: '2rem' }}>
          No contact submissions yet.
        </p>
      ) : (
        <div style={tableContainer}>
          <table style={tableStyle}>
            <thead>
              <tr style={headerRow}>
                <th style={thStyle}>Full Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Mobile</th>
                <th style={thStyle}>City</th>
                <th style={thStyle}>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id} style={index % 2 === 0 ? evenRow : oddRow}>
                  <td style={tdStyle}>{contact.fullName}</td>
                  <td style={tdStyle}>{contact.email}</td>
                  <td style={tdStyle}>{contact.mobile}</td>
                  <td style={tdStyle}>{contact.city}</td>
                  <td style={tdStyle}>{new Date(contact.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

const tableContainer = {
  overflowX: 'auto',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px'
};

const headerRow = {
  background: '#007bff',
  color: '#fff'
};

const thStyle = {
  padding: '12px',
  textAlign: 'left',
  fontWeight: 'bold'
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd'
};

const evenRow = {
  background: '#f9f9f9'
};

const oddRow = {
  background: '#fff'
};

export default ViewContacts;