import React from 'react';
import { Search, Filter, Plus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const patientsData = [
  { id: 'PT-1045', name: 'James Wilson', age: 45, gender: 'Male', condition: 'Hypertension', risk: 'Low', lastVisit: '2026-04-28' },
  { id: 'PT-8422', name: 'Robert Chen', age: 68, gender: 'Male', condition: 'Pneumonia', risk: 'Critical', lastVisit: '2026-05-01' },
  { id: 'PT-1093', name: 'Maria Garcia', age: 52, gender: 'Female', condition: 'Arrhythmia', risk: 'Medium', lastVisit: '2026-05-01' },
  { id: 'PT-5521', name: 'Sarah Jenkins', age: 31, gender: 'Female', condition: 'Sepsis Protocol', risk: 'Critical', lastVisit: '2026-05-01' },
  { id: 'PT-2210', name: 'David Smith', age: 72, gender: 'Male', condition: 'Post-Op Recovery', risk: 'Medium', lastVisit: '2026-04-30' },
];

const PatientsList = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Patient Directory</h1>
          <p className="page-subtitle">Manage and monitor all active patients</p>
        </div>
        <button className="btn-primary">
          <Plus size={16} />
          Add New Patient
        </button>
      </div>

      <div className="card">
        <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
          <div className="search-bar" style={{flex: 1, width: 'auto', background: '#f8fafc'}}>
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search by name, ID, or condition..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
            <thead>
              <tr style={{borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)'}}>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Patient ID</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Name</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Age/Gender</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Condition</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Risk Level</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Last Visit</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}></th>
              </tr>
            </thead>
            <tbody>
              {patientsData.map(patient => (
                <tr key={patient.id} style={{borderBottom: '1px solid var(--border-light)', transition: 'background 0.2s'}} className="table-row-hover">
                  <td style={{padding: '1rem', fontWeight: 600, color: 'var(--color-primary)'}}>{patient.id}</td>
                  <td style={{padding: '1rem', fontWeight: 500}}>{patient.name}</td>
                  <td style={{padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>{patient.age} / {patient.gender.charAt(0)}</td>
                  <td style={{padding: '1rem', fontSize: '0.9rem'}}>{patient.condition}</td>
                  <td style={{padding: '1rem'}}>
                    <span className={`badge bg-${patient.risk === 'Critical' ? 'critical' : patient.risk === 'Medium' ? 'warning' : 'safe'}`}>
                      {patient.risk}
                    </span>
                  </td>
                  <td style={{padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>{patient.lastVisit}</td>
                  <td style={{padding: '1rem', textAlign: 'right'}}>
                    <Link to={`/patients/${patient.id}`} className="btn-outline btn-sm" style={{textDecoration: 'none'}}>
                      View <ChevronRight size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        .table-row-hover:hover {
          background: #f8fafc;
        }
      `}</style>
    </div>
  );
};
export default PatientsList;
