import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Activity, Pill, ShieldAlert, ChevronLeft, Edit, AlertTriangle, FileText, HeartPulse } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const vitalsData = [
  { time: '08:00', heartRate: 72, bloodPressure: 110, oxygen: 98 },
  { time: '10:00', heartRate: 75, bloodPressure: 115, oxygen: 97 },
  { time: '12:00', heartRate: 85, bloodPressure: 125, oxygen: 95 },
  { time: '14:00', heartRate: 110, bloodPressure: 140, oxygen: 92 },
  { time: '16:00', heartRate: 95, bloodPressure: 130, oxygen: 96 },
];

const PatientDetails = () => {
  const { id } = useParams();

  return (
    <div className="dashboard-container">
      <div style={{marginBottom: '-1rem'}}>
        <Link to="/patients" className="btn-outline btn-sm" style={{textDecoration: 'none'}}>
          <ChevronLeft size={14} /> Back to Patients
        </Link>
      </div>

      <div className="card" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem'}}>
        <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
          <div style={{width: '80px', height: '80px', borderRadius: '50%', background: '#eff6ff', border: '2px solid #2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#2563eb'}}>
            {id ? 'RC' : 'JW'}
          </div>
          <div>
            <h1 style={{fontSize: '2rem', margin: 0, fontWeight: 700}}>{id === 'PT-8422' ? 'Robert Chen' : 'James Wilson'}</h1>
            <div style={{display: 'flex', gap: '1rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.95rem'}}>
              <span>ID: <strong style={{color: 'var(--text-main)'}}>{id || 'PT-1045'}</strong></span> • 
              <span>Age: <strong style={{color: 'var(--text-main)'}}>68</strong></span> • 
              <span>Gender: <strong style={{color: 'var(--text-main)'}}>Male</strong></span> • 
              <span>Blood: <strong style={{color: 'var(--text-main)'}}>O+</strong></span>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end'}}>
          <span className="badge bg-critical" style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}>High Risk Patient</span>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <button className="btn-outline"><Edit size={16} /> Edit</button>
            <button className="btn-outline"><Pill size={16} /> Add Rx</button>
            <button className="btn-primary" style={{backgroundColor: 'var(--color-danger)'}}><AlertTriangle size={16} /> Trigger Alert</button>
          </div>
        </div>
      </div>

      <div className="dashboard-grid" style={{gridTemplateColumns: '1fr 1fr'}}>
        
        {/* AI Risk Summary */}
        <div className="card" style={{borderColor: 'var(--color-danger)'}}>
          <h2 className="section-title"><ShieldAlert size={18} className="text-critical" /> AI Risk Analysis</h2>
          <div style={{display: 'flex', gap: '2rem', alignItems: 'center', padding: '1rem 0'}}>
            <div style={{fontSize: '4rem', fontWeight: 700, color: 'var(--color-danger)', lineHeight: 1}}>84%</div>
            <div>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600}}>Critical Sepsis Risk Detected</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0}}>
                Patient exhibits correlated signs of early-onset sepsis: elevated heart rate (110 bpm), dropping SpO2 (92%), and sustained fever over 4 hours. Immediate blood culture recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Current Medications */}
        <div className="card">
          <h2 className="section-title"><Pill size={18} style={{color: 'var(--color-primary)'}} /> Current Medications</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-light)'}}>
              <div>
                <strong style={{display: 'block', fontSize: '1rem', color: 'var(--text-main)'}}>Amiodarone</strong>
                <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>200mg Oral • Once Daily</span>
              </div>
              <span className="badge bg-safe">Active</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca'}}>
              <div>
                <strong style={{display: 'block', fontSize: '1rem', color: 'var(--color-danger)'}}>Warfarin (Proposed)</strong>
                <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>5mg Oral • Once Daily</span>
              </div>
              <span className="badge bg-critical">Interaction Alert</span>
            </div>
          </div>
        </div>

        {/* Vitals Monitoring */}
        <div className="card" style={{gridColumn: '1 / span 2'}}>
          <h2 className="section-title"><HeartPulse size={18} style={{color: 'var(--color-primary)'}} /> Vitals History (Last 12 Hours)</h2>
          <div className="chart-container" style={{height: '350px', marginTop: '1rem'}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
                <RechartsTooltip contentStyle={{backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '6px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}} />
                <Line type="monotone" dataKey="heartRate" name="Heart Rate" stroke="#dc2626" strokeWidth={2} dot={{r: 4, fill: '#dc2626'}} />
                <Line type="monotone" dataKey="bloodPressure" name="Systolic BP" stroke="#2563eb" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="oxygen" name="SpO2" stroke="#16a34a" strokeWidth={2} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};
export default PatientDetails;
