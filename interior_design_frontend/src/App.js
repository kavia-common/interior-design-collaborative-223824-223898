import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppShell from './components/Layout';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Gallery from './pages/Gallery';
import About from './pages/About';

/**
 * Root App component wiring the layout and routes:
 * - Home (/)
 * - Editor (/editor)
 * - Gallery (/gallery)
 * - About (/about)
 *
 * Uses AppShell for the multi-panel layout.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </div>
  );
}

export default App;
