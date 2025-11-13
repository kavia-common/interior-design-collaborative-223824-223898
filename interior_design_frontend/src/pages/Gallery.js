import React from 'react';
import { theme } from '../theme';
import { getConfig } from '../utils/env';

function GalleryCard({ title, author }) {
  return (
    <div
      style={{
        background: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: theme.layout.shadowSm,
        display: 'grid',
        gridTemplateRows: '160px auto'
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(245,158,11,0.2) 0%, rgba(255,255,255,1) 100%)'
        }}
      />
      <div style={{ padding: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h4 style={{ margin: 0 }}>{title}</h4>
          <span style={{ fontSize: 12, color: theme.colors.muted }}>{author}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Community Gallery page. If feature disabled via flags.gallery = false, shows message.
 */
// PUBLIC_INTERFACE
export default function Gallery() {
  const { flags } = getConfig();
  const enabled = flags.gallery !== false; // default to enabled unless explicitly false

  if (!enabled) {
    return (
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`
        }}
      >
        <strong>Gallery is disabled</strong>
        <div style={{ color: theme.colors.muted, marginTop: 6 }}>
          This feature is currently turned off by configuration.
        </div>
      </div>
    );
  }

  const items = [
    { id: 1, title: 'Modern Studio Layout', author: 'Ava' },
    { id: 2, title: 'Open Concept Living', author: 'Liam' },
    { id: 3, title: 'Scandinavian 2BHK', author: 'Noah' },
    { id: 4, title: 'Minimalist Office Plan', author: 'Emma' },
    { id: 5, title: 'Cozy Loft', author: 'Olivia' },
    { id: 6, title: 'Family Home Blueprint', author: 'Mason' }
  ];

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Community Gallery</h2>
      <div style={{ color: theme.colors.muted, marginBottom: 12 }}>
        Explore shared floor plans from the community.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        {items.map((i) => (
          <GalleryCard key={i.id} title={i.title} author={i.author} />
        ))}
      </div>
    </div>
  );
}
