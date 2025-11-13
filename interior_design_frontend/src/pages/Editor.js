import React, { useMemo, useState } from 'react';
import { theme } from '../theme';
import { getConfig } from '../utils/env';

/**
 * Basic toolbar button
 */
function TButton({ label, onClick, active }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      aria-pressed={active ? 'true' : 'false'}
      style={active ? { background: theme.colors.primary, color: '#fff', borderColor: '#1d4ed8' } : undefined}
      type="button"
    >
      {label}
    </button>
  );
}

/**
 * Editor workspace with:
 * - Left tools panel (toggle)
 * - Canvas placeholder
 * - Right properties panel (toggle)
 * Reads API base from env via getConfig() for future network ops.
 */
// PUBLIC_INTERFACE
export default function Editor() {
  const { apiBase } = getConfig();
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [tool, setTool] = useState('select');

  const gridTemplate = useMemo(() => {
    const left = leftOpen ? '240px' : '0px';
    const right = rightOpen ? '280px' : '0px';
    return `${left} 1fr ${right}`;
  }, [leftOpen, rightOpen]);

  return (
    <div>
      <div
        style={{
          padding: 10,
          borderRadius: 10,
          border: `1px solid ${theme.colors.border}`,
          background: theme.colors.surface,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          boxShadow: theme.layout.shadowSm,
          marginBottom: 12
        }}
      >
        <div style={{ display: 'flex', gap: 8 }}>
          <TButton label="Select" onClick={() => setTool('select')} active={tool === 'select'} />
          <TButton label="Wall" onClick={() => setTool('wall')} active={tool === 'wall'} />
          <TButton label="Room" onClick={() => setTool('room')} active={tool === 'room'} />
          <TButton label="Object" onClick={() => setTool('object')} active={tool === 'object'} />
        </div>
        <div style={{ color: theme.colors.muted, fontSize: 12 }}>
          API: {apiBase || '(not configured)'}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <TButton label={leftOpen ? 'Hide Left' : 'Show Left'} onClick={() => setLeftOpen((v) => !v)} />
          <TButton label={rightOpen ? 'Hide Right' : 'Show Right'} onClick={() => setRightOpen((v) => !v)} />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: gridTemplate,
          gap: 10,
          minHeight: '60vh'
        }}
      >
        {/* Left panel */}
        <div
          aria-hidden={!leftOpen}
          style={{
            overflow: 'hidden',
            borderRadius: 10,
            border: `1px solid ${theme.colors.border}`,
            background: theme.colors.surface,
            boxShadow: theme.layout.shadowSm
          }}
        >
          {leftOpen && (
            <div style={{ padding: 12 }}>
              <h3 style={{ marginTop: 0 }}>Tools</h3>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Selection</li>
                <li>Draw Walls</li>
                <li>Place Doors/Windows</li>
                <li>Furniture</li>
                <li>Measure</li>
              </ul>
            </div>
          )}
        </div>

        {/* Canvas */}
        <div
          role="img"
          aria-label="Floor plan canvas placeholder"
          style={{
            borderRadius: 10,
            border: `1px dashed ${theme.colors.border}`,
            background:
              'repeating-conic-gradient(#f3f4f6 0% 25%, #ffffff 0% 50%) 50% / 24px 24px',
            boxShadow: theme.layout.shadowSm,
            position: 'relative',
            minHeight: 420
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 8,
              pointerEvents: 'none',
              color: theme.colors.muted,
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
              padding: 10
            }}
          >
            <div>
              <strong>Canvas Placeholder</strong>
              <div style={{ marginTop: 6, fontSize: 13 }}>
                Use the toolbar to draw walls, rooms, and place objects.
              </div>
              <div style={{ marginTop: 6, fontSize: 12 }}>
                Active tool: <code>{tool}</code>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div
          aria-hidden={!rightOpen}
          style={{
            overflow: 'hidden',
            borderRadius: 10,
            border: `1px solid ${theme.colors.border}`,
            background: theme.colors.surface,
            boxShadow: theme.layout.shadowSm
          }}
        >
          {rightOpen && (
            <div style={{ padding: 12 }}>
              <h3 style={{ marginTop: 0 }}>Properties</h3>
              <div style={{ fontSize: 14, color: theme.colors.muted }}>
                Select an element to edit its properties here.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
