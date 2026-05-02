import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Lock, Mail, User, Shield } from 'lucide-react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="card auth-card" style={{maxWidth: '500px'}}>
        <div className="auth-header">
          <div className="auth-logo-container">
            <Hexagon className="auth-logo" size={32} />
          </div>
          <h2 className="auth-title">System Registration</h2>
          <p className="auth-subtitle">Create an authorized medical staff account</p>
        </div>
        
        <form className="auth-form">
          <div className="input-group">
            <User size={18} className="input-icon" />
            <input type="text" className="auth-input" placeholder="Full Name (e.g. Dr. Jane Doe)" required />
          </div>
          
          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input type="email" className="auth-input" placeholder="Hospital Email Address" required />
          </div>

          <div className="input-group">
            <Shield size={18} className="input-icon" />
            <select className="auth-input" required style={{appearance: 'none'}}>
              <option value="" disabled selected>Select Role</option>
              <option value="doctor">Attending Physician</option>
              <option value="nurse">Registered Nurse</option>
              <option value="admin">System Administrator</option>
            </select>
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input type="password" className="auth-input" placeholder="Secure Password" required />
          </div>
          
          <Link to="/login" className="btn-primary" style={{width: '100%', padding: '0.75rem', fontSize: '1rem', marginTop: '1.5rem', display: 'flex', textDecoration: 'none', justifyContent: 'center'}}>
            Submit Request
          </Link>
        </form>
        
        <div className="auth-footer">
          <span>Already have an account?</span> <Link to="/login" className="auth-link font-semibold">Sign In</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
