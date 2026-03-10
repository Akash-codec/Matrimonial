import React, { useContext } from 'react';
import { BiodataContext } from '../../context/BiodataContext';

export default function PhotoUpload() {
  const { formData, setFormData } = useContext(BiodataContext);
  const [uploading, setUploading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      setError('');
      const formDataObj = new FormData();
      formDataObj.append('image', file);
      
      if (formData.photoUrl && formData.photoUrl.startsWith('http')) {
        // Extract the filename from the end of the URL
        const filename = formData.photoUrl.split('/').pop();
        if (filename) formDataObj.append('previousImage', filename);
      }

      try {
        const response = await fetch('http://localhost:5000/api/upload', {
          method: 'POST',
          body: formDataObj,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const data = await response.json();
        setFormData(prev => ({ ...prev, photoUrl: data.url }));
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Error uploading file');
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Profile Photo</h3>
      <div className="flex items-center space-x-4">
        {formData.photoUrl && (
          <img src={formData.photoUrl} alt="Preview" className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm" />
        )}
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          disabled={uploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition disabled:opacity-50" 
        />
      </div>
      {uploading && <p className="text-sm text-blue-600 mt-2">Uploading image...</p>}
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      <p className="text-xs text-gray-500 mt-3 italic">Recommended: Clear, standard Passport size photo</p>
    </div>
  );
}
