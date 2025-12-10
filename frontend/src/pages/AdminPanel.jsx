import React, { useState } from 'react';
import AddProject from '../components/admin/AddProject';
import AddClient from '../components/admin/AddClient';
import ViewContacts from '../components/admin/ViewContacts';
import ViewSubscribers from '../components/admin/ViewSubscribers';
import ManageProjects from '../components/admin/ManageProjects';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Admin Panel</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
          Manage your projects, clients, contacts & subscribers
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={tabContainerStyle}>
        <button
          onClick={() => setActiveTab('projects')}
          style={activeTab === 'projects' ? activeTabStyle : tabStyle}
        >
          📁 Add Projects
        </button>

        <button
          onClick={() => setActiveTab('manage-projects')}
          style={activeTab === 'manage-projects' ? activeTabStyle : tabStyle}
        >
          🗂️ Manage Projects
        </button>
        
        <button
          onClick={() => setActiveTab('clients')}
          style={activeTab === 'clients' ? activeTabStyle : tabStyle}
        >
          👥 Add Clients
        </button>
        
        <button
          onClick={() => setActiveTab('contacts')}
          style={activeTab === 'contacts' ? activeTabStyle : tabStyle}
        >
          📧 View Contacts
        </button>
        
        <button
          onClick={() => setActiveTab('subscribers')}
          style={activeTab === 'subscribers' ? activeTabStyle : tabStyle}
        >
          📬 View Subscribers
        </button>
      </div>

      {/* Content Area */}
      <div style={{ padding: '20px 0' }}>
        {activeTab === 'projects' && <AddProject />}
        {activeTab === 'manage-projects' && <ManageProjects />}
        {activeTab === 'clients' && <AddClient />}
        {activeTab === 'contacts' && <ViewContacts />}
        {activeTab === 'subscribers' && <ViewSubscribers />}
      </div>
    </div>
  );
}

const headerStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  padding: '2rem',
  textAlign: 'center',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const tabContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  padding: '20px',
  flexWrap: 'wrap',
  background: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
};

const tabStyle = {
  padding: '12px 24px',
  background: '#fff',
  border: '2px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 0.3s ease',
  color: '#333'
};

const activeTabStyle = {
  ...tabStyle,
  background: '#007bff',
  color: '#fff',
  borderColor: '#007bff',
  transform: 'translateY(-2px)',
  boxShadow: '0 4px 10px rgba(0,123,255,0.3)'
};

export default AdminPanel;