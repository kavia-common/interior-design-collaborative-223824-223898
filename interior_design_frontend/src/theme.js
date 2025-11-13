//
// Theme configuration using Ocean Professional palette
//

// PUBLIC_INTERFACE
export const theme = {
  // Base colors from style guide
  colors: {
    primary: '#2563EB', // Ocean Professional primary
    secondary: '#F59E0B', // Amber accent
    success: '#10B981',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    muted: '#6B7280',
    border: '#E5E7EB'
  },
  // Shadows and radii for modern look
  layout: {
    radius: 10,
    shadowSm: '0 1px 2px rgba(0,0,0,0.04)',
    shadowMd: '0 4px 8px rgba(0,0,0,0.06)',
    shadowLg: '0 12px 24px rgba(0,0,0,0.08)'
  },
  // Derived tokens
  tokens: {
    gradientHeader: 'linear-gradient(180deg, rgba(37,99,235,0.08) 0%, rgba(249,250,251,0) 100%)',
    gradientSurface: 'linear-gradient(180deg, rgba(37,99,235,0.05) 0%, rgba(249,250,251,1) 100%)',
    focus: '0 0 0 3px rgba(37,99,235,0.35)'
  }
};
