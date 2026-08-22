import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/img/logo.png";

interface SeminarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReferenceItem {
  id: number;
  fullName: string;
  mobile: string;
}

export default function SeminarModal({ isOpen, onClose }: SeminarModalProps) {
  const navigate = useNavigate();

  // Form states matching images
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    gender: "",
    height: "",
    weight: "",
    age: "",
    maritalStatus: "",
  });

  const [contactDetails, setContactDetails] = useState({
    whatsapp: "",
    mobile2: "",
    mobile3: "",
  });

  const [parentDetails, setParentDetails] = useState({
    fatherName: "",
    fatherOccupation: "",
    fatherMobile: "",
    motherName: "",
    motherOccupation: "",
    motherMobile: "",
  });

  const [educationalDetails, setEducationalDetails] = useState({
    educationLevel: "",
    schoolCollege: "",
    stream: "",
    year: "",
    medium: "",
    percentage: "",
  });

  const [references, setReferences] = useState<ReferenceItem[]>([
    { id: 1, fullName: "", mobile: "" },
  ]);

  if (!isOpen) return null;

  const handleAddReference = () => {
    setReferences((prev) => [
      ...prev,
      { id: prev.length + 1, fullName: "", mobile: "" },
    ]);
  };

  const handleReferenceChange = (
    index: number,
    field: "fullName" | "mobile",
    value: string
  ) => {
    setReferences((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://amigoacademy.in/api/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "seminar",
          personalDetails,
          contactDetails,
          parentDetails,
          educationalDetails,
          references,
        }),
      });
      const data = await res.json();

      if (res.ok && data.status === "success") {
        onClose();
        Swal.fire({
          title: "Seminar Seat Reserved!",
          text: "Seminar Appointment No will be sent to your WhatsApp No. as a confirmation.",
          icon: "success",
          confirmButtonColor: "#1C3E8A",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          navigate("/thank-you");
        });
      } else {
        Swal.fire({
          title: "Reservation Failed",
          text: data.message || "Failed to reserve your seat. Please try again.",
          icon: "error",
          confirmButtonColor: "#1C3E8A",
        });
      }
    } catch (err) {
      console.error("Backend API error:", err);
      Swal.fire({
        title: "Network Error",
        text: "Could not connect to server. Please check your internet connection.",
        icon: "error",
        confirmButtonColor: "#1C3E8A",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative transition-all duration-300 transform scale-100 flex flex-col max-h-[92vh] my-auto border border-neutral-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 z-50 p-2 hover:bg-zinc-100 rounded-full transition-colors"
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
            className="w-6 h-6"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto p-4 sm:p-8 space-y-8 custom-scrollbar">
          {/* Header with Logo & Title */}
          <div className="flex flex-col items-center justify-center text-center space-y-3 pt-2">
            <img
              src={logo}
              alt="Amigo Academy Logo"
              className="h-14 sm:h-16 object-contain"
            />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F61] tracking-tight">
              Seminar Form
            </h2>
            <div className="w-16 h-1 bg-[#1C3E8A] rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Personal Details */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* FIRST NAME */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={personalDetails.firstName}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, firstName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                </div>

                {/* MIDDLE NAME */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    MIDDLE NAME
                  </label>
                  <input
                    type="text"
                    value={personalDetails.middleName}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, middleName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                </div>

                {/* SURNAME */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    SURNAME
                  </label>
                  <input
                    type="text"
                    required
                    value={personalDetails.surname}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, surname: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                </div>

                {/* GENDER */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    GENDER
                  </label>
                  <select
                    required
                    value={personalDetails.gender}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, gender: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                  >
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* HEIGHT (CM) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    HEIGHT (CM)
                  </label>
                  <input
                    type="number"
                    value={personalDetails.height}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, height: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                  <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                    Enter in centimeters (e.g. 170)
                  </span>
                </div>

                {/* WEIGHT (KG) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    WEIGHT (KG)
                  </label>
                  <input
                    type="number"
                    value={personalDetails.weight}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, weight: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                  <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                    Enter in kilograms (e.g. 65)
                  </span>
                </div>

                {/* AGE */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    AGE
                  </label>
                  <input
                    type="number"
                    required
                    value={personalDetails.age}
                    onChange={(e) =>
                      setPersonalDetails({ ...personalDetails, age: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                  <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                    Enter your age in years
                  </span>
                </div>

                {/* MARITAL STATUS */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    MARITAL STATUS
                  </label>
                  <select
                    value={personalDetails.maritalStatus}
                    onChange={(e) =>
                      setPersonalDetails({
                        ...personalDetails,
                        maritalStatus: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                  >
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Contact Details */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
                Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* WHATSAPP NUMBER */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={contactDetails.whatsapp}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        whatsapp: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                  <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                    Must be exactly 10 digits
                  </span>
                </div>

                {/* MOBILE NUMBER 2 */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    MOBILE NUMBER 2
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={contactDetails.mobile2}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        mobile2: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                  <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                    Optional (10 digits)
                  </span>
                </div>

                {/* MOBILE NUMBER 3 */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    MOBILE NUMBER 3
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={contactDetails.mobile3}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        mobile3: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  />
                  <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                    Optional (10 digits)
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Parent Details */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
                Parent Details
              </h3>
              <div className="space-y-4">
                {/* Row 1: Father */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      FATHER'S NAME
                    </label>
                    <input
                      type="text"
                      value={parentDetails.fatherName}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, fatherName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      OCCUPATION
                    </label>
                    <select
                      value={parentDetails.fatherOccupation}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, fatherOccupation: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                    >
                      <option value="">Select</option>
                      <option value="Business">Business</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Government Service">Government Service</option>
                      <option value="Retired">Retired</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      MOBILE NO
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      value={parentDetails.fatherMobile}
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          fatherMobile: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Mother */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      MOTHER'S NAME
                    </label>
                    <input
                      type="text"
                      value={parentDetails.motherName}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, motherName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      OCCUPATION
                    </label>
                    <select
                      value={parentDetails.motherOccupation}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, motherOccupation: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                    >
                      <option value="">Select</option>
                      <option value="Homemaker">Homemaker</option>
                      <option value="Business">Business</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      MOBILE NO
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      value={parentDetails.motherMobile}
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          motherMobile: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    />
                    <span className="text-[10px] italic text-slate-400 mt-0.5 block">
                      Optional (10 digits)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Educational Details */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
                Educational Details
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* EDUCATION LEVEL */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      EDUCATION LEVEL
                    </label>
                    <select
                      value={educationalDetails.educationLevel}
                      onChange={(e) =>
                        setEducationalDetails({
                          ...educationalDetails,
                          educationLevel: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                    >
                      <option value="">Select</option>
                      <option value="10th">10th Standard</option>
                      <option value="12th">12th Standard</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>

                  {/* SCHOOL/COLLEGE */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      SCHOOL/COLLEGE
                    </label>
                    <input
                      type="text"
                      value={educationalDetails.schoolCollege}
                      onChange={(e) =>
                        setEducationalDetails({
                          ...educationalDetails,
                          schoolCollege: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    />
                  </div>

                  {/* STREAM */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      STREAM
                    </label>
                    <select
                      value={educationalDetails.stream}
                      onChange={(e) =>
                        setEducationalDetails({
                          ...educationalDetails,
                          stream: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                    >
                      <option value="">Select</option>
                      <option value="Arts">Arts</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Science">Science</option>
                      <option value="Diploma/Vocational">Diploma/Vocational</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* YEAR */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      YEAR
                    </label>
                    <select
                      value={educationalDetails.year}
                      onChange={(e) =>
                        setEducationalDetails({
                          ...educationalDetails,
                          year: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                    >
                      <option value="">Select</option>
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="Earlier">Earlier</option>
                    </select>
                  </div>

                  {/* MEDIUM */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      MEDIUM
                    </label>
                    <select
                      value={educationalDetails.medium}
                      onChange={(e) =>
                        setEducationalDetails({
                          ...educationalDetails,
                          medium: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700"
                    >
                      <option value="">Select</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* PERCENTAGE % */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      PERCENTAGE %
                    </label>
                    <input
                      type="text"
                      value={educationalDetails.percentage}
                      onChange={(e) =>
                        setEducationalDetails({
                          ...educationalDetails,
                          percentage: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: References */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                  References
                </h3>
                <button
                  type="button"
                  onClick={handleAddReference}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1C3E8A] font-bold text-xs flex items-center gap-1.5 transition-colors border border-blue-200/60 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Add More
                </button>
              </div>

              <div className="bg-slate-50/60 p-4 rounded-2xl space-y-3 border border-slate-100">
                {references.map((refItem, idx) => (
                  <div
                    key={refItem.id}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                  >
                    <span className="text-xs font-bold text-slate-500 min-w-[50px]">
                      Ref {idx + 1}
                    </span>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={refItem.fullName}
                        onChange={(e) =>
                          handleReferenceChange(idx, "fullName", e.target.value)
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                      />
                      <div>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="Mobile Number"
                          value={refItem.mobile}
                          onChange={(e) =>
                            handleReferenceChange(
                              idx,
                              "mobile",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                        />
                        <span className="text-[10px] italic text-slate-400 mt-0.5 block text-right">
                          Min/Max 10 digits
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Submit Button */}
            <div className="flex flex-col items-center justify-center space-y-2.5 pt-4 pb-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#1C3E8A] hover:bg-[#14306d] text-white font-bold text-base shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer"
              >
                Reserve My Seat
              </button>
              <p className="text-xs italic text-slate-500 text-center">
                Seminar Appointment No will be sent to your WhatsApp No. as a confirmation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
