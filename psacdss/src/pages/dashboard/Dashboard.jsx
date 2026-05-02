import React from 'react';
import { 
  Users, Activity, ShieldAlert, Cpu, 
  TrendingUp, TrendingDown, PieChart, 
  BellRing, BrainCircuit, FileText
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart as RechartsPie, Pie, Cell
} from 'recharts';
import './Dashboard.css';

// Mock Data
const vitalsData = [
  { time: '08:00', heartRate: 72, bloodPressure: 110, oxygen: 98 },
  { time: '10:00', heartRate: 75, bloodPressure: 115, oxygen: 97 },
  { time: '12:00', heartRate: 85, bloodPressure: 125, oxygen: 95 },
  { time: '14:00', heartRate: 110, bloodPressure: 140, oxygen: 92 },
  { time: '16:00', heartRate: 95, bloodPressure: 130, oxygen: 96 },
  { time: '18:00', heartRate: 80, bloodPressure: 118, oxygen: 98 },
];

const riskData = [
  { name: 'Low Risk', value: 65, color: '#16a34a' },
  { name: 'Medium Risk', value: 25, color: '#f59e0b' },
  { name: 'High Risk', value: 10, color: '#dc2626' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Real-time Patient Monitoring & AI Analysis</p>
        </div>
        <div style={{display: 'flex', gap: '0.75rem'}}>
          <button className="btn-outline">
            <FileText size={16} />
            Generate Report
          </button>
          <button className="btn-primary">
            <BrainCircuit size={16} />
            Run Full Analysis
          </button>
        </div>
      </div>

      {/* 1. Top Stats Overview Cards */}
      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-header">
            <span className="stat-label">Total Patients</span>
            <div className="stat-icon-wrapper blue"><Users size={20} /></div>
          </div>
          <div className="stat-value">3,428</div>
          <div className="stat-trend text-safe">
            <TrendingUp size={14} /> <span>+4% this week</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <span className="stat-label">High Risk Patients</span>
            <div className="stat-icon-wrapper red">
              <ShieldAlert size={20} />
            </div>
          </div>
          <div className="stat-value">42</div>
          <div className="stat-trend text-critical">
            <TrendingUp size={14} /> <span>+12% from yesterday</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <span className="stat-label">Active Alerts</span>
            <div className="stat-icon-wrapper yellow">
              <BellRing size={20} />
            </div>
          </div>
          <div className="stat-value">18</div>
          <div className="stat-trend text-safe">
            <TrendingDown size={14} /> <span>-5% resolution rate</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-header">
            <span className="stat-label">AI Predictions Today</span>
            <div className="stat-icon-wrapper green"><Cpu size={20} /></div>
          </div>
          <div className="stat-value">1,024</div>
          <div className="stat-trend text-safe">
            <TrendingUp size={14} /> <span>98.2% Accuracy</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        
        {/* 2. AI Risk Analysis Section */}
        <div className="card">
          <h2 className="section-title">
            AI Risk Classification
          </h2>
          <div className="chart-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ResponsiveContainer width="100%" height={200}>
              <RechartsPie>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '6px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  itemStyle={{color: '#0f172a'}}
                />
              </RechartsPie>
            </ResponsiveContainer>
            <div className="chart-legend">
              {riskData.map(risk => (
                <div key={risk.name} className="legend-item">
                  <div className="legend-color" style={{backgroundColor: risk.color}}></div>
                  <span>{risk.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Live Alerts System */}
        <div className="card">
          <h2 className="section-title">Live Alerts Feed</h2>
          <div className="alerts-feed">
            <div className="alert-item alert-critical">
              <div className="alert-header">
                <span className="alert-patient">Robert Chen (PT-8422)</span>
                <span className="badge bg-critical">Critical</span>
              </div>
              <p className="alert-message">Sudden drop in SpO2 levels (88%) accompanied by elevated heart rate. Immediate intervention recommended.</p>
              <div className="alert-footer">
                <span className="alert-time">2 mins ago • ICU Bed 4</span>
                <button className="btn-outline btn-sm">Acknowledge</button>
              </div>
            </div>

            <div className="alert-item alert-warning">
              <div className="alert-header">
                <span className="alert-patient">Maria Garcia (PT-1093)</span>
                <span className="badge bg-warning">Warning</span>
              </div>
              <p className="alert-message">Potential drug interaction detected between newly prescribed Warfarin and existing Amiodarone.</p>
              <div className="alert-footer">
                <span className="alert-time">15 mins ago • Ward B</span>
                <button className="btn-outline btn-sm">Review Meds</button>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-header">
                <span className="alert-patient">James Wilson (PT-4421)</span>
                <span className="badge bg-safe">Notice</span>
              </div>
              <p className="alert-message">Patient vitals have stabilized over the last 4 hours. Ready for step-down evaluation.</p>
              <div className="alert-footer">
                <span className="alert-time">1 hour ago • Ward A</span>
                <button className="btn-outline btn-sm">View File</button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. AI Recommendations Panel */}
        <div className="card">
          <h2 className="section-title">AI Recommendations</h2>
          <div className="ai-rec-panel">
            <div className="ai-card">
              <div className="ai-card-header">
                <div>
                  <h3 className="ai-card-title">Sepsis Prediction</h3>
                  <p className="ai-card-subtitle">Patient: Sarah Jenkins</p>
                </div>
                <div className="confidence-score high">92%</div>
              </div>
              <p className="ai-card-text">
                Pattern matching indicates high probability of early-onset sepsis. Recommended immediate blood cultures and broad-spectrum antibiotics protocol.
              </p>
              <button className="btn-primary btn-sm" style={{marginTop: '0.75rem', width: '100%'}}>Initiate Protocol</button>
            </div>
            
            <div className="ai-card">
              <div className="ai-card-header">
                <div>
                  <h3 className="ai-card-title">Readmission Risk</h3>
                  <p className="ai-card-subtitle">Patient: David Smith</p>
                </div>
                <div className="confidence-score medium">78%</div>
              </div>
              <p className="ai-card-text">
                Post-discharge risk elevated due to medication adherence history. Recommend scheduling remote follow-up within 48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Vitals Charts Section */}
        <div className="card vitals-card">
          <div className="section-header-row">
            <h2 className="section-title">Real-time Vitals Stream</h2>
            <select className="select-input">
              <option>ICU Ward - All</option>
              <option>Robert Chen</option>
              <option>Sarah Jenkins</option>
            </select>
          </div>
          
          <div className="chart-container" style={{height: '250px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '6px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                />
                <Line type="monotone" dataKey="heartRate" name="Heart Rate (bpm)" stroke="#dc2626" strokeWidth={2} dot={{r: 3, fill: '#dc2626'}} activeDot={{r: 6}} />
                <Line type="monotone" dataKey="bloodPressure" name="Systolic BP" stroke="#2563eb" strokeWidth={2} dot={{r: 3}} />
                <Line type="monotone" dataKey="oxygen" name="SpO2 (%)" stroke="#16a34a" strokeWidth={2} dot={{r: 3}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 6. Patient Activity Feed */}
        <div className="card">
          <h2 className="section-title">Patient Activity</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot blue"></div>
              <div className="timeline-content">
                <div className="timeline-title">AI Analysis Completed</div>
                <div className="timeline-desc">Dr. Connor reviewed sepsis risk for PT-923</div>
                <div className="timeline-time">10 mins ago</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot red"></div>
              <div className="timeline-content">
                <div className="timeline-title">New Admission</div>
                <div className="timeline-desc">Emergency trauma patient admitted to Bed 7</div>
                <div className="timeline-time">45 mins ago</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot green"></div>
              <div className="timeline-content">
                <div className="timeline-title">Vitals Alert Resolved</div>
                <div className="timeline-desc">Tachycardia alert cleared for Maria Garcia</div>
                <div className="timeline-time">2 hours ago</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot gray"></div>
              <div className="timeline-content">
                <div className="timeline-title">System Update</div>
                <div className="timeline-desc">Predictive model v2.4 deployed successfully</div>
                <div className="timeline-time">5 hours ago</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
