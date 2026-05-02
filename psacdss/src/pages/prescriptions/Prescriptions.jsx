import React from 'react';
import { Pill, Search, ShieldAlert, Plus, ShieldCheck } from 'lucide-react';

const Prescriptions = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Prescription Management</h1>
          <p className="page-subtitle">AI-assisted drug interaction & allergy screening</p>
        </div>
      </div>

      <div className="dashboard-grid" style={{gridTemplateColumns: '1.2fr 1fr'}}>
        {/* Prescription Form */}
        <div className="card">
          <h2 className="section-title"><Plus size={18} style={{color: 'var(--color-primary)'}} /> Add New Prescription</h2>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Select Patient</label>
              <select className="select-input" style={{width: '100%'}}>
                <option>James Wilson (PT-1045)</option>
                <option>Robert Chen (PT-8422)</option>
                <option>Maria Garcia (PT-1093)</option>
              </select>
            </div>
            
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Drug Name</label>
              <div className="search-bar" style={{width: '100%', background: '#f8fafc'}}>
                <Search size={16} className="search-icon" />
                <input type="text" placeholder="e.g. Warfarin, Amoxicillin..." />
              </div>
            </div>

            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flex: 1}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Dosage</label>
                <input type="text" className="select-input" style={{width: '100%', boxSizing: 'border-box'}} placeholder="e.g. 5mg" />
              </div>
              <div style={{flex: 1}}>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Frequency</label>
                <select className="select-input" style={{width: '100%'}}>
                  <option>Once Daily</option>
                  <option>Twice Daily</option>
                  <option>As Needed</option>
                </select>
              </div>
            </div>

            <button type="button" className="btn-primary" style={{marginTop: '1rem', width: '100%'}}>Verify Prescription</button>
          </form>
        </div>

        {/* AI Warning Panel */}
        <div className="card" style={{borderColor: 'var(--color-danger)'}}>
          <h2 className="section-title"><ShieldAlert size={18} className="text-critical" /> AI Safety Check</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{padding: '1.25rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px'}}>
              <h3 style={{color: 'var(--color-danger)', fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
                <ShieldAlert size={16} /> Severe Interaction Detected
              </h3>
              <p style={{fontSize: '0.9rem', lineHeight: 1.5, margin: 0, color: 'var(--text-main)'}}>
                Patient Robert Chen is currently prescribed <strong>Amiodarone</strong>. Adding <strong>Warfarin</strong> increases bleeding risk significantly due to CYP2C9 inhibition.
              </p>
            </div>

            <div style={{padding: '1.25rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px'}}>
              <h3 style={{color: 'var(--color-success)', fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
                <ShieldCheck size={16} /> Allergy Check Passed
              </h3>
              <p style={{fontSize: '0.9rem', lineHeight: 1.5, margin: 0, color: 'var(--text-main)'}}>
                No known allergies for this drug class found in patient history.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Prescriptions;
