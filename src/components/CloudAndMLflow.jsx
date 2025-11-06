import React from 'react';
import { Cloud, Database, FolderGit2 } from 'lucide-react';

export default function CloudAndMLflow() {
  return (
    <section className="mt-12 grid md:grid-cols-3 gap-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 text-indigo-300">
          <Cloud className="w-5 h-5" />
          <h3 className="font-semibold text-white">Cloud Storage</h3>
        </div>
        <p className="text-white/70 text-sm mt-2">
          Captured frames are archived to cloud buckets for later review and auditing. Toggle per camera or event type.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm">Connect</button>
          <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Sync Now</button>
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 text-emerald-300">
          <Database className="w-5 h-5" />
          <h3 className="font-semibold text-white">Model Registry</h3>
        </div>
        <p className="text-white/70 text-sm mt-2">
          Track experiments and deployments with MLflow. Compare runs, switch models, and roll back safely.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm">Open UI</button>
          <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm">New Run</button>
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 text-sky-300">
          <FolderGit2 className="w-5 h-5" />
          <h3 className="font-semibold text-white">Docker & Deploy</h3>
        </div>
        <p className="text-white/70 text-sm mt-2">
          One-command container builds ship the full stack. Scale workers and add GPUs without changing the app.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm">Build</button>
          <button className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm">Deploy</button>
        </div>
      </div>
    </section>
  );
}
