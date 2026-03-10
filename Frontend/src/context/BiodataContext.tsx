import React, { createContext, useState, type ReactNode } from 'react';

// Define the shape of our biodata state
export interface BiodataState {
  personal: {
    fullName: string;
    gender: string;
    dob: string;
    age: string;
    religion: string;
    caste: string;
    motherTongue: string;
    maritalStatus: string;
    nationality: string;
    height: string;
  };
  contact: {
    phone: string;
    email: string;
    hideContact: boolean;
  };
  education: {
    qualification: string;
    occupation: string;
    company: string;
    income: string;
  };
  family: {
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
    siblings: string;
    familyType: string;
    familyStatus: string;
    nativePlace: string;
  };
  horoscope: {
    rashi: string;
    nakshatra: string;
    gothra: string;
    birthTime: string;
    birthPlace: string;
  };
  photoUrl: string | null;
  templateId: string;
}

export interface BiodataContextType {
  formData: BiodataState;
  updateSection: (section: keyof BiodataState, data: any) => void;
  setFormData: React.Dispatch<React.SetStateAction<BiodataState>>;
}

const defaultState: BiodataState = {
  personal: {
    fullName: '', gender: '', dob: '', age: '', religion: '', caste: '', motherTongue: '', maritalStatus: 'Single', nationality: 'Indian', height: ''
  },
  contact: {
    phone: '', email: '', hideContact: false
  },
  education: {
    qualification: '', occupation: '', company: '', income: ''
  },
  family: {
    fatherName: '', fatherOccupation: '', motherName: '', motherOccupation: '', siblings: '', familyType: 'Nuclear', familyStatus: 'Middle Class', nativePlace: ''
  },
  horoscope: {
    rashi: '', nakshatra: '', gothra: '', birthTime: '', birthPlace: ''
  },
  photoUrl: null,
  templateId: 'modern'
};

export const BiodataContext = createContext<BiodataContextType>({
  formData: defaultState,
  updateSection: () => {},
  setFormData: () => {}
});

export const BiodataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<BiodataState>(defaultState);

  const updateSection = (section: keyof BiodataState, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...(prev[section] as any), ...data }
    }));
  };

  return (
    <BiodataContext.Provider value={{ formData, updateSection, setFormData }}>
      {children}
    </BiodataContext.Provider>
  );
};
