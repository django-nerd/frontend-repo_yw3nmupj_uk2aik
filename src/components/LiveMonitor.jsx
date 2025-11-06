import React, { useEffect, useRef, useState } from 'react';
import { Play, Square, Activity } from 'lucide-react';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function LiveMonitor() {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [fps, setFps] = useState(null);

  useEffect(() => {
    let raf;
    let lastTime = performance.now();

    const tick = () => {
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) setFps(Math.round(1000 / dt));
      lastTime = now;
      raf = requestAnimationFrame(tick);
    };

    if (isStreaming) {
      raf = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(raf);
  }, [isStreaming]);

  useEffect(() => {
    if (!isStreaming) return;
    if (!videoRef.current) return;
    videoRef.current.src = `${backendURL}/stream`; // expects an existing backend route
    videoRef.current.play().catch(() => {});
  }, [isStreaming]);

  return (
    <section id="monitor" className="mt-10 grid md:grid-cols-[1.2fr_.8fr] gap-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white/80">
            <Activity className="w-4 h-4" />
            <span>Live Stream</span>
          </div>
          <div className="flex items-center gap-2">
            {!isStreaming ? (
              <button
                onClick={() => setIsStreaming(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Play className="w-4 h-4" /> Start
              </button>
            ) : (
              <button
                onClick={() => setIsStreaming(false)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white"
              >
                <Square className="w-4 h-4" /> Stop
              </button>
            )}
          </div>
        </div>
        <div className="aspect-video bg-black">
          <video ref={videoRef} className="w-full h-full object-contain" muted autoPlay playsInline />
        </div>
        <div className="px-4 py-3 text-sm text-white/70 flex items-center gap-4">
          <span>FPS: {fps ?? '—'}</span>
          <span className="text-white/30">•</span>
          <span>Status: {isStreaming ? 'Streaming' : 'Idle'}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <h3 className="text-white font-semibold">Detections</h3>
          <p className="text-white/70 text-sm mt-1">Objects recognized by the model appear here.</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['person','car','dog','cat','bottle','phone'].map((l) => (
              <span key={l} className="px-2 py-1 rounded-md bg-white/5 text-white/80 text-xs border border-white/10">
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <h3 className="text-white font-semibold">Recent Alerts</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-white/75 text-sm">No alerts yet. Start streaming to activate detection.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
