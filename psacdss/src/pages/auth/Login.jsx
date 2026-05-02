import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Lock, Mail } from 'lucide-react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="card auth-card">
        <div className="auth-header">
          <div className="auth-logo-container">
            <Hexagon className="auth-logo" size={32} />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to the PSACDSS Command Center</p>
        </div>
        
        <form className="auth-form">
          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input type="email" className="auth-input" placeholder="Doctor / Admin Email" required />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input type="password" className="auth-input" placeholder="Password" required />
          </div>
          
          <div className="auth-actions">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
          </div>
          
          <Link to="/" className="btn-primary" style={{width: '100%', padding: '0.75rem', fontSize: '1rem', marginTop: '1.5rem', display: 'flex', textDecoration: 'none', justifyContent: 'center'}}>
            Secure Login
          </Link>
        </form>
        
        <div className="auth-footer">
          <span>New to the system?</span> <Link to="/register" className="auth-link font-semibold">Request Access</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
