import React from 'react';
import Hero3D from './components/Hero3D';
import LiveMonitor from './components/LiveMonitor';
import CloudAndMLflow from './components/CloudAndMLflow';
import WhatsAppSetup from './components/WhatsAppSetup';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-lg">Webcam Alert Dashboard</div>
        <nav className="hidden md:flex items-center gap-6 text-white/80 text-sm">
          <a href="#monitor" className="hover:text-white">Monitor</a>
          <a href="#alerts" className="hover:text-white">Alerts</a>
          <a href="#" className="hover:text-white">Docs</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-10">
        <Hero3D />
        <LiveMonitor />
        <CloudAndMLflow />
        <WhatsAppSetup />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white/60">
          Built for end-to-end, AI-powered live monitoring.
        </div>
      </footer>
    </div>
  );
}
