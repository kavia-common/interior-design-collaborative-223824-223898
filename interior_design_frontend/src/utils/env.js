//
// Environment variable access helpers with graceful fallbacks.
// No secrets are hardcoded. Values are read from process.env (CRA prefixed).
//

/**
 * Safely get an env var. If undefined or empty, returns defaultValue and logs a debug message.
 * @param {string} key - Env var key (must start with REACT_APP_)
 * @param {string|undefined} defaultValue - Fallback value if env is not set
 * @returns {string|undefined}
 */
// PUBLIC_INTERFACE
export function getEnv(key, defaultValue = undefined) {
  try {
    const raw = process.env[key];
    if (raw === undefined || raw === null || String(raw).trim() === '') {
      if (defaultValue !== undefined) {
        // eslint-disable-next-line no-console
        console.debug(`[env] ${key} not set; using default`);
      }
      return defaultValue;
    }
    return raw;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`[env] Error reading ${key}. Using default if provided.`, e);
    return defaultValue;
  }
}

/**
 * Parse feature flags from REACT_APP_FEATURE_FLAGS.
 * Accepts JSON ({"gallery":true}) or comma list (gallery,editor).
 * @returns {Record<string, boolean>}
 */
// PUBLIC_INTERFACE
export function getFeatureFlags() {
  const raw = getEnv('REACT_APP_FEATURE_FLAGS', '');
  if (!raw) return {};
  try {
    if (raw.trim().startsWith('{')) {
      const obj = JSON.parse(raw);
      return Object.keys(obj).reduce((acc, k) => {
        acc[k] = Boolean(obj[k]);
        return acc;
      }, {});
    }
    // comma-separated list: feature1,feature2
    return raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .reduce((acc, k) => {
        acc[k] = true;
        return acc;
      }, {});
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('[env] Failed to parse REACT_APP_FEATURE_FLAGS. Using empty set.', e);
    return {};
  }
}

/**
 * Provide a normalized configuration object for the app.
 * - apiBase prefers REACT_APP_API_BASE then REACT_APP_BACKEND_URL
 * - wsUrl uses REACT_APP_WS_URL if present
 */
// PUBLIC_INTERFACE
export function getConfig() {
  const apiBase =
    getEnv('REACT_APP_API_BASE') ||
    getEnv('REACT_APP_BACKEND_URL') ||
    ''; // graceful fallback to empty string
  const wsUrl = getEnv('REACT_APP_WS_URL', '');
  const frontendUrl = getEnv('REACT_APP_FRONTEND_URL', '');
  const nodeEnv = getEnv('REACT_APP_NODE_ENV', getEnv('NODE_ENV', 'development'));
  const flags = getFeatureFlags();

  return {
    apiBase,
    wsUrl,
    frontendUrl,
    nodeEnv,
    flags
  };
}
