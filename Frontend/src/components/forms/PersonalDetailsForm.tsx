import React, { useContext, useEffect } from 'react';
import { BiodataContext } from '../../context/BiodataContext';

export default function PersonalDetailsForm() {
  const { formData, updateSection } = useContext(BiodataContext);
  const { personal } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateSection('personal', { [name]: value });
  };

  // Auto-calculate Age based on Date of Birth
  useEffect(() => {
    if (personal.dob) {
      const birthDate = new Date(personal.dob);
      const diff = Date.now() - birthDate.getTime();
      const ageDate = new Date(diff); 
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      updateSection('personal', { age: calculatedAge.toString() });
    }
  }, [personal.dob, updateSection]);

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Personal Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" name="fullName" value={personal.fullName} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Enter full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select name="gender" value={personal.gender} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input type="date" name="dob" value={personal.dob} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age (Auto)</label>
          <input type="text" name="age" value={personal.age} readOnly className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-gray-600 cursor-not-allowed" placeholder="Calculated from DOB" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
          <input type="text" name="height" value={personal.height} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 5 ft 8 in" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
          <input type="text" name="religion" value={personal.religion} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Hindu" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Caste</label>
          <input type="text" name="caste" value={personal.caste} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Brahmin" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mother Tongue</label>
          <input type="text" name="motherTongue" value={personal.motherTongue} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Hindi, Tamil" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
          <select name="maritalStatus" value={personal.maritalStatus} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
            <option value="Awaiting Divorce">Awaiting Divorce</option>
          </select>
        </div>
      </div>
    </div>
  );
}
