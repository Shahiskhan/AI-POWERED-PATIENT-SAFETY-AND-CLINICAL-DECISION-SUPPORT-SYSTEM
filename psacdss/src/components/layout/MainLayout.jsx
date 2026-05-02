import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Activity, BellRing, Cpu, Settings, LogOut, Search, User, Hexagon, Pill, ClipboardList } from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-container">
            <Hexagon className="sidebar-logo" size={24} />
          </div>
          <span className="sidebar-title">PSACDSS</span>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">Main Menu</div>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} end>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/patients" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Users size={20} />
            <span>Patients</span>
          </NavLink>
          <NavLink to="/prescriptions" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Pill size={20} />
            <span>Prescriptions</span>
          </NavLink>
          <NavLink to="/vitals" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Activity size={20} />
            <span>Vitals Monitoring</span>
          </NavLink>
          <NavLink to="/alerts" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BellRing size={20} />
            <span>Alerts</span>
          </NavLink>
          <NavLink to="/ai-recs" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Cpu size={20} />
            <span>AI Recommendations</span>
          </NavLink>
          
          <div className="nav-section mt-auto">System</div>
          <NavLink to="/users" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <ClipboardList size={20} />
            <span>Users & Roles</span>
          </NavLink>
          <NavLink to="/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-outline logout-btn">
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-wrapper">
        <header className="top-navbar">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search patient ID, name, or alerts..." />
          </div>

          <div className="navbar-actions">
            <button className="icon-btn">
              <BellRing size={20} />
              <span className="badge-dot"></span>
            </button>
            <div className="user-profile">
              <div className="avatar">
                <User size={18} />
              </div>
              <div className="user-info">
                <span className="user-name">Dr. Sarah Connor</span>
                <span className="user-role">Chief Medical Officer</span>
              </div>
            </div>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
