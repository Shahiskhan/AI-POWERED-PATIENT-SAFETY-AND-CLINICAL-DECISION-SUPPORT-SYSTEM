import React from 'react';
import { BellRing, ShieldAlert, Activity, CheckCircle } from 'lucide-react';

const Alerts = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Live Alert Center</h1>
          <p className="page-subtitle">Real-time emergency and clinical warnings</p>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <span className="badge bg-critical" style={{display: 'flex', alignItems: 'center', padding: '0.5rem 1rem'}}>3 Critical Unresolved</span>
        </div>
      </div>

      <div className="card">
        <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
          <button className="btn-primary">All Alerts</button>
          <button className="btn-outline">Critical Only</button>
          <button className="btn-outline">Warnings</button>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {/* Alert Item 1 */}
          <div className="alert-item alert-critical" style={{padding: '1.5rem'}}>
            <div className="alert-header" style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <ShieldAlert size={24} className="text-critical" />
                <div>
                  <h3 style={{fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, fontWeight: 600}}>High Risk Sepsis Prediction</h3>
                  <span className="alert-patient">Sarah Jenkins (PT-5521)</span>
                </div>
              </div>
              <span className="badge bg-critical">Critical AI Alert</span>
            </div>
            <p className="alert-message" style={{marginLeft: '3.5rem', fontSize: '0.95rem'}}>
              AI models predict 92% confidence of early-onset sepsis. Patient exhibits 3/4 SIRS criteria.
            </p>
            <div className="alert-footer" style={{marginLeft: '3.5rem', marginTop: '1rem'}}>
              <span className="alert-time">2 mins ago • ICU Bed 2</span>
              <button className="btn-primary btn-sm" style={{backgroundColor: 'var(--color-danger)'}}>Acknowledge & Escalate</button>
            </div>
          </div>

          {/* Alert Item 2 */}
          <div className="alert-item alert-critical" style={{padding: '1.5rem'}}>
            <div className="alert-header" style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <Activity size={24} className="text-critical" />
                <div>
                  <h3 style={{fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, fontWeight: 600}}>Abnormal Vitals Drop</h3>
                  <span className="alert-patient">Robert Chen (PT-8422)</span>
                </div>
              </div>
              <span className="badge bg-critical">Emergency Alert</span>
            </div>
            <p className="alert-message" style={{marginLeft: '3.5rem', fontSize: '0.95rem'}}>
              SpO2 dropped below 88% and sustained for &gt; 5 minutes.
            </p>
            <div className="alert-footer" style={{marginLeft: '3.5rem', marginTop: '1rem'}}>
              <span className="alert-time">12 mins ago • ICU Bed 4</span>
              <button className="btn-primary btn-sm" style={{backgroundColor: 'var(--color-danger)'}}>Acknowledge</button>
            </div>
          </div>
          
          {/* Alert Item 3 */}
          <div className="alert-item alert-warning" style={{padding: '1.5rem'}}>
            <div className="alert-header" style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <BellRing size={24} className="text-warning" />
                <div>
                  <h3 style={{fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, fontWeight: 600}}>Severe Drug Interaction</h3>
                  <span className="alert-patient">Maria Garcia (PT-1093)</span>
                </div>
              </div>
              <span className="badge bg-warning">Pharmacy Warning</span>
            </div>
            <p className="alert-message" style={{marginLeft: '3.5rem', fontSize: '0.95rem'}}>
              Proposed Warfarin conflicts with active Amiodarone prescription.
            </p>
            <div className="alert-footer" style={{marginLeft: '3.5rem', marginTop: '1rem'}}>
              <span className="alert-time">45 mins ago • Ward B</span>
              <button className="btn-outline btn-sm">Review Override</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Alerts;
