import React, { useContext } from 'react';
import { BiodataContext } from '../../context/BiodataContext';

export default function ModernTemplate() {
  const { formData } = useContext(BiodataContext);
  const { personal, contact, education, photoUrl } = formData;

  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-2xl mx-auto border border-gray-100 font-sans">
      {/* Header */}
      <div className="bg-slate-900 p-8 text-center text-white relative flex flex-col items-center">
        {photoUrl ? (
          <img src={photoUrl} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg mb-4" />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-slate-700 bg-slate-800 flex items-center justify-center shadow-lg mb-4 text-slate-400">Photo</div>
        )}
        <h1 className="text-4xl font-light tracking-wide">{personal.fullName || 'Your Name'}</h1>
        <p className="text-indigo-300 mt-2 font-medium text-lg">{education.occupation || 'Your Occupation'}</p>
      </div>

      <div className="p-8 space-y-8 bg-slate-50">
        
        {/* Personal Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold border-b border-slate-200 pb-3 mb-4 text-slate-800 flex items-center">
            <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 text-sm">👤</span>
            Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Date of Birth</span> <span className="text-slate-700 font-medium">{personal.dob || '-'} {personal.age ? `(${personal.age} yrs)` : ''}</span></div>
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Height</span> <span className="text-slate-700 font-medium">{personal.height || '-'}</span></div>
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Religion / Caste</span> <span className="text-slate-700 font-medium">{personal.religion || '-'} / {personal.caste || '-'}</span></div>
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Marital Status</span> <span className="text-slate-700 font-medium">{personal.maritalStatus || '-'}</span></div>
          </div>
        </section>

        {/* Education & Profession */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold border-b border-slate-200 pb-3 mb-4 text-slate-800 flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">🎓</span>
            Education & Profession
          </h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Qualification</span> <span className="text-slate-700 font-medium">{education.qualification || '-'}</span></div>
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Occupation</span> <span className="text-slate-700 font-medium">{education.occupation || '-'}</span></div>
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Company</span> <span className="text-slate-700 font-medium">{education.company || '-'}</span></div>
            <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Income</span> <span className="text-slate-700 font-medium">{education.income || '-'}</span></div>
          </div>
        </section>

        {/* Contact info (If not hidden) */}
        {!contact.hideContact && (
          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-3 mb-4 text-slate-800 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">📞</span>
              Contact Details
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Phone</span> <span className="text-slate-700 font-medium">{contact.phone || '-'}</span></div>
              <div className="flex flex-col"><span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Email</span> <span className="text-slate-700 font-medium">{contact.email || '-'}</span></div>
            </div>
          </section>
        )}
        
      </div>
    </div>
  );
}
