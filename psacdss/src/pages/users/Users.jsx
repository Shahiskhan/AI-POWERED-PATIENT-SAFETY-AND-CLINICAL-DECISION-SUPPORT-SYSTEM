import React from 'react';
import { Plus, Edit, Trash2, Shield, User as UserIcon } from 'lucide-react';

const usersData = [
  { id: 'USR-001', name: 'Dr. Sarah Connor', role: 'Admin', email: 's.connor@hospital.org', status: 'Active' },
  { id: 'USR-002', name: 'Dr. James Wilson', role: 'Doctor', email: 'j.wilson@hospital.org', status: 'Active' },
  { id: 'USR-003', name: 'Maria Garcia, RN', role: 'Nurse', email: 'm.garcia@hospital.org', status: 'Active' },
  { id: 'USR-004', name: 'David Smith', role: 'Admin', email: 'd.smith@hospital.org', status: 'Inactive' },
  { id: 'USR-005', name: 'Dr. Emily Chen', role: 'Doctor', email: 'e.chen@hospital.org', status: 'Active' },
];

const Users = () => {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Users & Roles</h1>
          <p className="page-subtitle">Manage system access and staff roles</p>
        </div>
        <button className="btn-primary">
          <Plus size={16} />
          Add New User
        </button>
      </div>

      <div className="card">
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
            <thead>
              <tr style={{borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)'}}>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>User ID</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Name</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Role</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Email</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem'}}>Status</th>
                <th style={{padding: '1rem', fontWeight: 600, fontSize: '0.85rem', textAlign: 'right'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map(user => (
                <tr key={user.id} style={{borderBottom: '1px solid var(--border-light)', transition: 'background 0.2s'}} className="table-row-hover">
                  <td style={{padding: '1rem', fontWeight: 600, color: 'var(--color-primary)'}}>{user.id}</td>
                  <td style={{padding: '1rem', fontWeight: 500}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <div style={{width: '28px', height: '28px', borderRadius: '50%', background: '#eff6ff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <UserIcon size={14} />
                      </div>
                      {user.name}
                    </div>
                  </td>
                  <td style={{padding: '1rem'}}>
                    <span className={`badge ${user.role === 'Admin' ? 'bg-critical' : user.role === 'Doctor' ? 'bg-warning' : 'bg-safe'}`} style={{display: 'inline-flex', alignItems: 'center', gap: '0.25rem'}}>
                      {user.role === 'Admin' && <Shield size={12} />}
                      {user.role}
                    </span>
                  </td>
                  <td style={{padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>{user.email}</td>
                  <td style={{padding: '1rem'}}>
                    <span style={{fontSize: '0.85rem', fontWeight: 500, color: user.status === 'Active' ? 'var(--color-success)' : 'var(--text-muted)'}}>
                      {user.status}
                    </span>
                  </td>
                  <td style={{padding: '1rem', textAlign: 'right'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', gap: '0.5rem'}}>
                      <button className="btn-outline btn-sm" style={{padding: '0.3rem', color: 'var(--text-muted)'}}>
                        <Edit size={16} />
                      </button>
                      <button className="btn-outline btn-sm" style={{padding: '0.3rem', color: 'var(--color-danger)', borderColor: '#fecaca'}}>
                        <Trash2 size={16} />
                      </button>
                    </div>
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
export default Users;
