import React from 'react';
import { BrainCircuit, CheckCircle2, ChevronRight, ActivitySquare } from 'lucide-react';

const AiRecs = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">AI Clinical Decision Support</h1>
          <p className="page-subtitle">Machine learning insights and diagnosis recommendations</p>
        </div>
      </div>

      <div className="dashboard-grid" style={{gridTemplateColumns: '1fr 2fr'}}>
        {/* Patient Selection */}
        <div className="card" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <h2 className="section-title"><BrainCircuit size={18} style={{color: 'var(--color-primary)'}} /> Select Patient</h2>
          <select className="select-input" style={{width: '100%'}}>
            <option>Sarah Jenkins (PT-5521)</option>
            <option>Robert Chen (PT-8422)</option>
          </select>
          <div style={{marginTop: '1rem', padding: '1.25rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-light)'}}>
            <h3 style={{fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600}}>Primary Symptoms</h3>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, padding: 0}}>
              <li>• Fever (39.2°C)</li>
              <li>• Tachycardia (115 bpm)</li>
              <li>• Hypotension (90/60)</li>
              <li>• Altered Mental Status</li>
            </ul>
          </div>
          <button className="btn-primary" style={{marginTop: 'auto'}}><ActivitySquare size={16}/> Re-run Analysis</button>
        </div>

        {/* AI Suggestions */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div className="card" style={{borderTop: '4px solid var(--color-primary)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
              <div>
                <h2 style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', margin: 0}}>Sepsis (Septic Shock)</h2>
                <p style={{color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, margin: '0.25rem 0 0 0'}}>Primary Hypothesis</p>
              </div>
              <div style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1}}>92%</div>
            </div>
            
            <div style={{background: '#eff6ff', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #bfdbfe'}}>
              <h3 style={{fontSize: '1rem', marginBottom: '0.5rem', color: '#1e3a8a', fontWeight: 600}}>AI Reasoning:</h3>
              <p style={{fontSize: '0.9rem', color: '#1e3a8a', lineHeight: 1.6, margin: 0}}>
                Patient meets 3 of 4 systemic inflammatory response syndrome (SIRS) criteria. Combining recent surgery history with current hemodynamic instability strongly correlates with septic shock models trained on 500,000+ ICU cases.
              </p>
            </div>

            <h3 style={{fontSize: '1rem', marginBottom: '1rem', fontWeight: 600}}>Recommended Next Steps:</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)'}}>
                <CheckCircle2 style={{color: 'var(--color-success)'}} size={20} />
                <span style={{flex: 1, fontSize: '0.95rem', fontWeight: 500}}>Initiate Sepsis 3-Hour Bundle</span>
                <button className="btn-outline btn-sm">Apply Protocol</button>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)'}}>
                <CheckCircle2 style={{color: 'var(--color-success)'}} size={20} />
                <span style={{flex: 1, fontSize: '0.95rem', fontWeight: 500}}>Order Blood Cultures (Stat)</span>
                <button className="btn-outline btn-sm">Order Test</button>
              </div>
            </div>
          </div>
          
          <div className="card" style={{backgroundColor: '#f8fafc', borderColor: '#e2e8f0'}}>
             <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <h2 style={{fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)', margin: 0}}>Pulmonary Embolism</h2>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0 0'}}>Alternative Hypothesis</p>
                </div>
                <div style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-muted)'}}>18%</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default AiRecs;
