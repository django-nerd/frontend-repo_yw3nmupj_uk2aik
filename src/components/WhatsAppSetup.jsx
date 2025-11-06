import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function WhatsAppSetup() {
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('Disconnected');

  const connect = () => {
    setStatus('Connected');
  };

  return (
    <section id="alerts" className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <MessageSquare className="w-5 h-5 text-emerald-300" />
        <h3 className="text-white font-semibold">WhatsApp Alerts</h3>
      </div>
      <p className="text-white/70 text-sm mt-2">
        Get instant notifications when the model detects important events. Add one or more numbers to receive alerts with annotated snapshots.
      </p>
      <div className="mt-4 grid md:grid-cols-[1fr_auto] gap-3">
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10">
          <Phone className="w-4 h-4 text-white/60" />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="WhatsApp number (with country code)"
            className="bg-transparent outline-none text-white placeholder:text-white/40 w-full"
          />
        </div>
        <button onClick={connect} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
          Connect
        </button>
      </div>
      <div className="mt-3 text-sm text-white/70">
        Status: <span className={status === 'Connected' ? 'text-emerald-400' : 'text-white/70'}>{status}</span>
      </div>
    </section>
  );
}
