import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { submitEligibilityForm } from "../services/api";

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function EligibilityModal({ isOpen, onClose, source = "automatic popup" }: EligibilityModalProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    fullName: "",
    age: "",
    gender: "",
    course: "",
    qualif: "",
    branch: "",
  });

  if (!isOpen) return null;

  const isFormValid =
    formData.phone.length === 10 &&
    formData.fullName.trim() !== "" &&
    formData.age !== "" &&
    formData.gender !== "" &&
    formData.course !== "" &&
    formData.qualif !== "" &&
    formData.branch !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);

    try {
      await submitEligibilityForm({
        full_name: formData.fullName,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender,
        course: formData.course,
        qualification: formData.qualif,
        branch: formData.branch,
        source_page: `${window.location.pathname} (${source})`
      });

      // Reset form
      setFormData({
        phone: "",
        fullName: "",
        age: "",
        gender: "",
        course: "",
        qualif: "",
        branch: "",
      });

      onClose();

      Swal.fire({
        title: "Application Submitted!",
        text: "Thank you for checking your eligibility. Redirecting to confirmation page...",
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        navigate("/thank-you");
      });
    } catch (error: any) {
      console.error("Eligibility form submit error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: error?.response?.data?.message || "Failed to submit enquiry. Please try again or contact us directly.",
        icon: "error",
        confirmButtonColor: "#DF1818"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white rounded-[1.5rem] shadow-2xl w-full max-w-md overflow-hidden relative transition-all duration-300 transform scale-100 flex flex-col max-h-[95vh]">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 z-50 p-1.5 hover:bg-zinc-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide w-5 h-5 lucide-x-icon lucide-x"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>

        <div className="overflow-y-auto scrollbar-hide">
          <div className="bg-[#1C3E8A] px-6 py-5 text-white relative overflow-hidden flex flex-col items-center text-center">
            <div className="relative z-10">
              <h2 className="text-xl font-black uppercase tracking-tight leading-tight text-white">
                Claim ₹50,000 Scholarship
              </h2>
              <p className="text-blue-100 text-[11px] mt-1 font-bold opacity-80 uppercase tracking-widest">
                30 Sec Eligibility Check
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="space-y-3">
              {/* WhatsApp Number */}
              <div className="space-y-1">
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide w-4 h-4 lucide-phone-icon lucide-phone"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Mobile Number *"
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-sm font-bold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1">
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide w-4 h-4 lucide-user-icon lucide-user"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-sm font-bold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                  />
                </div>
              </div>

              {/* Age & Gender Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-4 h-4 lucide-calendar-icon lucide-calendar"
                        aria-hidden="true"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </div>
                    <select
                      required
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="w-full pl-9 pr-2 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer text-zinc-900"
                    >
                      <option disabled value="">
                        Age *
                      </option>
                      <option value="Below 15">Below 15</option>
                      <option value="15–17">15–17</option>
                      <option value="17–20">17–20</option>
                      <option value="21–24">21–24</option>
                      <option value="25 and above">25 and above</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-4 h-4 lucide-users-icon lucide-users"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <select
                      required
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-full pl-9 pr-2 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer text-zinc-900"
                    >
                      <option disabled value="">
                        Gender *
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course & Qualif Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-4 h-4 lucide-graduation-cap-icon lucide-graduation-cap"
                        aria-hidden="true"
                      >
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                        <path d="M22 10v6"></path>
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                      </svg>
                    </div>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full pl-9 pr-5 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer truncate text-zinc-900"
                    >
                      <option disabled value="">
                        Course *
                      </option>
                      <option value="Cabin Crew (Air Hostess & Hospitality Management)">
                        Cabin Crew (Air Hostess & Hospitality Management)
                      </option>
                      <option value="Airport Ground Staff & Hospitality Management">
                        Airport Ground Staff & Hospitality Management
                      </option>
                      <option value="AI & Data Science">
                        AI & Data Science
                      </option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-4 h-4 lucide-book-open-icon lucide-book-open"
                        aria-hidden="true"
                      >
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <select
                      required
                      value={formData.qualif}
                      onChange={(e) =>
                        setFormData({ ...formData, qualif: e.target.value })
                      }
                      className="w-full pl-9 pr-5 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer truncate text-zinc-900"
                    >
                      <option disabled value="">
                        Qualif. *
                      </option>
                      <option value="10th Pass">10th Pass</option>
                      <option value="12th Pass">12th Pass</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Select Branch */}
              <div className="space-y-1">
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide w-4 h-4 lucide-map-pin-icon lucide-map-pin"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <select
                    required
                    value={formData.branch}
                    onChange={(e) =>
                      setFormData({ ...formData, branch: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer text-zinc-900"
                  >
                    <option disabled value="">
                      Select Branch *
                    </option>
                    <option value="Thane">Thane</option>
                    <option value="Ghatkopar">Ghatkopar</option>
                    <option value="Andheri">Andheri</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide w-4 h-4 lucide-chevron-down-icon lucide-chevron-down"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full py-4 bg-[#df1818] hover:bg-[#b01313] disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed text-white rounded-xl text-base font-black uppercase tracking-wider shadow-lg shadow-red-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 animate-pulse-subtle cursor-pointer"
              >
                Check My Eligibility Now
              </button>

              <div className="relative flex items-center justify-center py-1">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-zinc-200"></div>
                </div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest px-3 bg-white text-zinc-400">
                  — OR —
                </div>
              </div>

              <a
                href="https://wa.me/919987588932"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.273.608-1.441.159-.168.348-.21.464-.21.117 0 .232.001.333.007.109.004.258-.041.404.308.147.355.503 1.226.547 1.314.044.088.073.19.014.308-.06.117-.088.19-.174.29-.088.101-.184.225-.264.302-.088.085-.18.177-.077.354.103.179.458.753.985 1.222.678.604 1.248.792 1.424.881.175.088.277.073.379-.045.103-.117.438-.508.553-.68.117-.174.232-.145.393-.087.16.058 1.017.479 1.191.566.174.088.29.131.334.204.043.073.043.42-.101.824zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path>
                  </svg>
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
