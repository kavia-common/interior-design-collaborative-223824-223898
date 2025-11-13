import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

function Card({ title, description, to, accent = 'primary' }) {
  const color = accent === 'secondary' ? theme.colors.secondary : theme.colors.primary;
  return (
    <Link to={to} className="card-link" style={{ textDecoration: 'none' }}>
      <div
        className="card"
        style={{
          background: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 12,
          padding: 16,
          boxShadow: theme.layout.shadowSm
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 3,
              background: color,
              boxShadow: `0 0 0 4px ${color}1A`
            }}
          />
          <h3 style={{ margin: 0, color: theme.colors.text }}>{title}</h3>
        </div>
        <p style={{ marginTop: 8, color: theme.colors.muted }}>{description}</p>
      </div>
    </Link>
  );
}

/**
 * Home page landing with quick actions and links.
 */
// PUBLIC_INTERFACE
export default function Home() {
  return (
    <div>
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: 'linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(255,255,255,1) 100%)',
          border: `1px solid ${theme.colors.border}`,
          boxShadow: theme.layout.shadowSm
        }}
      >
        <h2 style={{ marginTop: 0 }}>Welcome to Interior Design Collaborative</h2>
        <p style={{ color: theme.colors.muted }}>
          Create and share interior floor plans. Collaborate with the community and get inspired.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14, marginTop: 16 }}>
        <Card title="Open Editor" description="Start a new floor plan or continue editing." to="/editor" accent="primary" />
        <Card title="Explore Gallery" description="Browse community floor plans and templates." to="/gallery" accent="secondary" />
        <Card title="About" description="Learn more about this project and how to contribute." to="/about" />
      </div>
    </div>
  );
}
