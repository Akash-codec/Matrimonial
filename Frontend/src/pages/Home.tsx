import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, FileText, Share2, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 cursor-pointer">
          <Heart className="w-7 h-7 text-indigo-600" fill="currentColor" />
          ShaadiBio
        </div>
        <div className="space-x-4 flex items-center">
          <Link to="/login" className="hidden sm:block text-slate-600 hover:text-indigo-600 font-medium transition">Login</Link>
          <Link to="/register" className="bg-indigo-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-24 flex flex-col items-center text-center relative z-10">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 backdrop-blur-sm text-indigo-700 font-medium text-sm mb-8 border border-indigo-100 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
          </span>
          The #1 Premium Marriage Biodata Generator
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Create a beautiful marriage<br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">biodata in minutes.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
          First impressions matter. Design a stunning, professional, and elegant marriage biodata to highlight your absolute best. No design skills required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/register" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
            <FileText className="w-5 h-5" /> Create Your Biodata
          </Link>
          <Link to="/builder" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto group">
            Try Demo Preview <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl text-left">
          <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Beautiful Templates</h3>
            <p className="text-slate-600 leading-relaxed">Choose from professionally designed modern and traditional templates tailored specifically for marriage proposals.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Privacy First</h3>
            <p className="text-slate-600 leading-relaxed">You control exactly what you share. Hide sensitive contact details easily inside our robust builder controls.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Share2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Easy PDF Export</h3>
            <p className="text-slate-600 leading-relaxed">Download your final biodata as a high-quality PDF, ready to be shared with families and matchmakers instantly on WhatsApp or Email.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 py-12 text-center text-slate-500 mt-12">
        <div className="flex items-center justify-center gap-2 font-bold text-xl text-slate-800 mb-4 cursor-pointer">
           <Heart className="w-5 h-5 text-indigo-600" fill="currentColor" />
           ShaadiBio
        </div>
        <p>© {new Date().getFullYear()} ShaadiBio. All rights reserved. Designed with love.</p>
      </footer>
    </div>
  );
}
