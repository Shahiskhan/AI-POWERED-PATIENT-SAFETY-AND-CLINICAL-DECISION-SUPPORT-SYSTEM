import React from 'react';
import { User, Bell, Shield, Sliders } from 'lucide-react';

const Settings = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">System Settings</h1>
          <p className="page-subtitle">Manage your preferences and security</p>
        </div>
      </div>

      <div className="dashboard-grid" style={{gridTemplateColumns: '1fr 2fr'}}>
        <div className="card" style={{padding: '0', overflow: 'hidden'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button style={{display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: 0, padding: '1.25rem', borderBottom: '1px solid var(--border-light)', background: '#eff6ff', color: 'var(--color-primary)', border: 'none', borderLeft: '3px solid var(--color-primary)', textAlign: 'left', fontWeight: 600, cursor: 'pointer'}}>
              <User size={18} /> Profile Details
            </button>
            <button style={{display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: 0, padding: '1.25rem', borderBottom: '1px solid var(--border-light)', background: 'transparent', color: 'var(--text-main)', border: 'none', textAlign: 'left', fontWeight: 500, cursor: 'pointer'}}>
              <Bell size={18} /> Notifications
            </button>
            <button style={{display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: 0, padding: '1.25rem', borderBottom: '1px solid var(--border-light)', background: 'transparent', color: 'var(--text-main)', border: 'none', textAlign: 'left', fontWeight: 500, cursor: 'pointer'}}>
              <Shield size={18} /> Security & 2FA
            </button>
            <button style={{display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: 0, padding: '1.25rem', background: 'transparent', color: 'var(--text-main)', border: 'none', textAlign: 'left', fontWeight: 500, cursor: 'pointer'}}>
              <Sliders size={18} /> System Config
            </button>
          </div>
        </div>

        <div className="card">
          <h2 className="section-title"><User size={18} style={{color: 'var(--color-primary)'}} /> Profile Settings</h2>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500}}>Full Name</label>
              <input type="text" className="select-input" style={{width: '100%', boxSizing: 'border-box'}} defaultValue="Dr. Sarah Connor" />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500}}>Email Address</label>
              <input type="email" className="select-input" style={{width: '100%', boxSizing: 'border-box'}} defaultValue="s.connor@hospital.org" />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500}}>Role</label>
              <input type="text" className="select-input" style={{width: '100%', boxSizing: 'border-box', backgroundColor: '#f1f5f9', color: '#94a3b8'}} defaultValue="Chief Medical Officer" disabled />
            </div>
            
            <hr style={{border: 0, borderBottom: '1px solid var(--border-light)', margin: '1rem 0'}} />
            
            <h3 style={{fontSize: '1rem', color: 'var(--text-main)', fontWeight: 600}}>Theme Settings</h3>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <span style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Clean Healthcare UI (Light)</span>
              <div style={{width: '40px', height: '22px', background: 'var(--color-primary)', borderRadius: '11px', position: 'relative'}}>
                <div style={{width: '18px', height: '18px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)'}}></div>
              </div>
            </div>

            <button type="button" className="btn-primary" style={{marginTop: '1rem', alignSelf: 'flex-start'}}>Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Settings;
