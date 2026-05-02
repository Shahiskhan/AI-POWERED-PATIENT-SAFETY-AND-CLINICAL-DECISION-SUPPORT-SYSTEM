import React from 'react';
import { Activity, HeartPulse, Wind, Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const liveData = [
  { time: '10:00', heartRate: 75, bloodPressure: 115, oxygen: 98, temp: 37.1 },
  { time: '10:15', heartRate: 78, bloodPressure: 118, oxygen: 98, temp: 37.2 },
  { time: '10:30', heartRate: 85, bloodPressure: 122, oxygen: 97, temp: 37.4 },
  { time: '10:45', heartRate: 110, bloodPressure: 135, oxygen: 94, temp: 38.0 },
  { time: '11:00', heartRate: 115, bloodPressure: 140, oxygen: 91, temp: 38.5 },
];

const Vitals = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Live Vitals Monitoring</h1>
          <p className="page-subtitle">ICU and High-Risk patient real-time telemetry</p>
        </div>
        <select className="select-input" style={{width: '250px'}}>
          <option>Robert Chen (PT-8422)</option>
          <option>James Wilson (PT-1045)</option>
        </select>
      </div>

      <div className="stats-grid">
        <div className="card stat-card" style={{borderLeft: '4px solid var(--color-danger)'}}>
          <div className="stat-header">
            <span className="stat-label">Heart Rate</span>
            <HeartPulse size={20} className="text-critical" />
          </div>
          <div className="stat-value text-critical">115 <span style={{fontSize:'1rem', color:'var(--text-muted)', fontWeight: 500}}>bpm</span></div>
        </div>
        <div className="card stat-card" style={{borderLeft: '4px solid var(--color-warning)'}}>
          <div className="stat-header">
            <span className="stat-label">Blood Pressure</span>
            <Activity size={20} className="text-warning" />
          </div>
          <div className="stat-value text-warning">140/90 <span style={{fontSize:'1rem', color:'var(--text-muted)', fontWeight: 500}}>mmHg</span></div>
        </div>
        <div className="card stat-card" style={{borderLeft: '4px solid var(--color-danger)'}}>
          <div className="stat-header">
            <span className="stat-label">SpO2</span>
            <Wind size={20} className="text-critical" />
          </div>
          <div className="stat-value text-critical">91 <span style={{fontSize:'1rem', color:'var(--text-muted)', fontWeight: 500}}>%</span></div>
        </div>
        <div className="card stat-card" style={{borderLeft: '4px solid var(--color-warning)'}}>
          <div className="stat-header">
            <span className="stat-label">Temperature</span>
            <Thermometer size={20} className="text-warning" />
          </div>
          <div className="stat-value text-warning">38.5 <span style={{fontSize:'1rem', color:'var(--text-muted)', fontWeight: 500}}>°C</span></div>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title"><Activity size={18} style={{color: 'var(--color-primary)'}} /> Telemetry Graph</h2>
        <div style={{height: '400px'}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={liveData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="time" stroke="#64748b" axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" stroke="#64748b" axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '6px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}} />
              <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#dc2626" strokeWidth={2} dot={{r: 4}} animationDuration={2000} />
              <Line yAxisId="left" type="monotone" dataKey="oxygen" stroke="#2563eb" strokeWidth={2} dot={{r: 4}} animationDuration={2000} />
              <Line yAxisId="right" type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} dot={{r: 4}} animationDuration={2000} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Vitals;
