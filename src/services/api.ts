import axios from "axios";

// Read API Base URL from Vite environment variable or fallback to production backend domain
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.amigoacademy.in/api";

export interface ContactPayload {
  enquiry_type?: string;
  name: string;
  phone: string;
  email?: string;
  city?: string;
  preferred_location?: string;
  business_experience?: string;
  investment_range?: string;
  message?: string;
}

export interface CounsellorPayload {
  name: string;
  phone: string;
  course?: string;
  branch?: string;
  age?: string;
  gender?: string;
  qualification?: string;
  form_location: string;
}

export interface EligibilityPayload {
  full_name: string;
  phone: string;
  age?: string;
  gender?: string;
  course?: string;
  qualification?: string;
  branch?: string;
  source_page?: string;
}

export interface SeminarPayload {
  first_name: string;
  middle_name?: string;
  surname: string;
  gender?: string;
  height?: string;
  weight?: string;
  age?: string;
  marital_status?: string;
  whatsapp: string;
  mobile2?: string;
  mobile3?: string;
  father_name?: string;
  father_occupation?: string;
  father_mobile?: string;
  mother_name?: string;
  mother_occupation?: string;
  mother_mobile?: string;
  education_level?: string;
  school_college?: string;
  stream?: string;
  year?: string;
  medium?: string;
  percentage?: string;
  references_json?: any;
}

export const submitContactForm = async (payload: ContactPayload) => {
  const response = await axios.post(`${API_BASE_URL}/contact`, payload);
  return response.data;
};

export const submitCounsellorForm = async (payload: CounsellorPayload) => {
  const response = await axios.post(`${API_BASE_URL}/counsellor`, payload);
  return response.data;
};

export const submitEligibilityForm = async (payload: EligibilityPayload) => {
  const response = await axios.post(`${API_BASE_URL}/eligibility`, payload);
  return response.data;
};

export const submitSeminarForm = async (payload: SeminarPayload) => {
  const response = await axios.post(`${API_BASE_URL}/seminar`, payload);
  return response.data;
};
