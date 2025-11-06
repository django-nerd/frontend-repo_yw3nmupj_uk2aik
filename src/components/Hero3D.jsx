import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Video, Bell } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-900 via-slate-900 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0xU5g1ZlCStm6J9N/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm backdrop-blur">
          <Shield className="w-4 h-4" />
          <span>Real-time Vision Safety</span>
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
          Intelligent Webcam Alerts, End‑to‑End
        </h1>
        <p className="mt-3 md:mt-4 text-white/80 max-w-2xl">
          Live monitoring, AI object recognition, cloud archiving, WhatsApp notifications, and MLflow tracking — all in one streamlined dashboard.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#monitor"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition"
          >
            <Video className="w-4 h-4" />
            Open Live Monitor
          </a>
          <a
            href="#alerts"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition"
          >
            <Bell className="w-4 h-4" />
            View Alerts
          </a>
        </div>
      </div>
    </section>
  );
}
