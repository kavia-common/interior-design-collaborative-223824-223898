import React from 'react';
import { NavLink } from 'react-router-dom';
import { theme } from '../theme';
import './layout.css';

/**
 * AppShell provides the multi-panel layout:
 * - Sidebar navigation (Home, Editor, Gallery, About)
 * - Top header with app title and placeholder toolbar
 * - Content area for routed pages
 */
// PUBLIC_INTERFACE
export function AppShell({ children }) {
  return (
    <div className="app-shell" style={{ background: theme.colors.background, color: theme.colors.text }}>
      <aside className="sidebar" aria-label="Primary">
        <div className="brand">
          <div className="brand-logo" aria-hidden="true">ID</div>
          <div className="brand-info">
            <strong>Interior Design</strong>
            <span className="brand-sub">Collaborative</span>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/editor" className="nav-link">Editor</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </nav>

        <div className="sidebar-footer">
          <span className="version-badge" title="Environment / Version">
            {process.env.REACT_APP_NODE_ENV || 'dev'}
          </span>
        </div>
      </aside>

      <div className="main">
        <header className="header" role="banner">
          <div className="header-left">
            <h1 className="app-title">Interior Design</h1>
          </div>
          <div className="header-actions" role="toolbar" aria-label="Quick actions">
            <button className="btn primary" type="button">New</button>
            <button className="btn" type="button">Import</button>
          </div>
        </header>

        <main className="content" role="main" aria-live="polite">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppShell;
