import React from 'react';
import { theme } from '../theme';
import { getConfig } from '../utils/env';

/**
 * About page with brief project overview and environment information.
 */
// PUBLIC_INTERFACE
export default function About() {
  const cfg = getConfig();
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>About</h2>
      <p style={{ color: theme.colors.muted }}>
        A community tool to easily create and share interior design floor plans. Visualize, design, and plan interior spaces collaboratively and intuitively.
      </p>

      <div
        style={{
          marginTop: 16,
          background: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 12,
          padding: 12,
          boxShadow: theme.layout.shadowSm
        }}
      >
        <h3 style={{ marginTop: 0 }}>Environment</h3>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>API Base: <code>{cfg.apiBase || '(not configured)'}</code></li>
          <li>WebSocket URL: <code>{cfg.wsUrl || '(not configured)'}</code></li>
          <li>Frontend URL: <code>{cfg.frontendUrl || '(not configured)'}</code></li>
          <li>Node Env: <code>{cfg.nodeEnv}</code></li>
          <li>Feature Flags: <code>{JSON.stringify(cfg.flags || {})}</code></li>
        </ul>
      </div>
    </div>
  );
}
