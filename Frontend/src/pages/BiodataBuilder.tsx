import React, { useState } from 'react';
import PersonalDetailsForm from '../components/forms/PersonalDetailsForm';
import ContactDetailsForm from '../components/forms/ContactDetailsForm';
import EducationProfessionForm from '../components/forms/EducationProfessionForm';
import PhotoUpload from '../components/forms/PhotoUpload';
import ModernTemplate from '../components/templates/ModernTemplate';

export default function BiodataBuilder() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Sidebar Form Area */}
      <div className="w-full md:w-[500px] lg:w-[600px] h-screen overflow-y-auto bg-slate-50 border-r border-slate-200 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 relative">
        <div className="p-6 sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-20 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">ShaadiBio</h2>
            <p className="text-sm text-slate-500">Fill in details to generate your biodata</p>
          </div>
          <button className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:bg-slate-50 transition">
            Save Draft
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-6 flex-1 pb-32">
          <PhotoUpload />
          <PersonalDetailsForm />
          <ContactDetailsForm />
          <EducationProfessionForm />
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 h-screen overflow-y-auto bg-slate-200/50 relative p-4 md:p-8 flex justify-center items-start">
        <div className="w-full max-w-2xl mt-4 md:mt-8 pb-32 transition-all duration-300 transform md:hover:scale-[1.01]">
          <ModernTemplate />
        </div>

        {/* Floating Download Button (Demo) */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg font-medium transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2">
            <span className="text-xl">⬇️</span>
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
