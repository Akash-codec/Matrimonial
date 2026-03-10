import React, { useContext } from 'react';
import { BiodataContext } from '../../context/BiodataContext';

export default function EducationProfessionForm() {
  const { formData, updateSection } = useContext(BiodataContext);
  const { education } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSection('education', { [name]: value });
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education & Profession</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
          <input type="text" name="qualification" value={education.qualification} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. B.Tech, MBA" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
          <input type="text" name="occupation" value={education.occupation} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Software Engineer" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company / Workplace</label>
          <input type="text" name="company" value={education.company} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter company name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Income (Optional)</label>
          <input type="text" name="income" value={education.income} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 15 LPA" />
        </div>
      </div>
    </div>
  );
}
