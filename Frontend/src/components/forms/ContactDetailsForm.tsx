import React, { useContext } from 'react';
import { BiodataContext } from '../../context/BiodataContext';

export default function ContactDetailsForm() {
  const { formData, updateSection } = useContext(BiodataContext);
  const { contact } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    updateSection('contact', { [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" name="phone" value={contact.phone} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter phone number" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" value={contact.email} onChange={handleChange} className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter email address" />
        </div>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="hideContact" name="hideContact" checked={contact.hideContact} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
        <label htmlFor="hideContact" className="ml-2 block text-sm text-gray-700 hover:cursor-pointer">Hide contact details from public preview</label>
      </div>
    </div>
  );
}
