import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
function ViewSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/newsletter`)
      .then(res => {
        setSubscribers(res.data);
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
      <h2>Newsletter Subscribers</h2>
      
      {subscribers.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', padding: '2rem' }}>
          No subscribers yet.
        </p>
      ) : (
        <div style={listContainer}>
          <div style={countStyle}>
            Total Subscribers: <strong>{subscribers.length}</strong>
          </div>
          
          <table style={tableStyle}>
            <thead>
              <tr style={headerRow}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Email Address</th>
                <th style={thStyle}>Subscribed On</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub, index) => (
                <tr key={sub._id} style={index % 2 === 0 ? evenRow : oddRow}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{sub.email}</td>
                  <td style={tdStyle}>{new Date(sub.createdAt).toLocaleDateString()}</td>
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
  maxWidth: '900px',
  margin: '0 auto'
};

const listContainer = {
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  overflow: 'hidden'
};

const countStyle = {
  padding: '15px 20px',
  background: '#f0f0f0',
  borderBottom: '2px solid #ddd',
  fontSize: '16px'
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

export default ViewSubscribers;