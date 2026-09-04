import { createRouter as createRouter$1, createRootRoute, Outlet, useLocation, createFileRoute, lazyRouteComponent, useNavigate } from '@tanstack/react-router';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const logo = "/assets/logo-D2SCUlw1.png";
const API_BASE_URL = "https://api.amigoacademy.in/api";
const submitContactForm = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/contact`, payload);
  return response.data;
};
const submitCounsellorForm = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/counsellor`, payload);
  return response.data;
};
const submitEligibilityForm = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/eligibility`, payload);
  return response.data;
};
const submitSeminarForm = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/seminar`, payload);
  return response.data;
};
function EligibilityModal({ isOpen, onClose, source = "automatic popup" }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    fullName: "",
    age: "",
    gender: "",
    course: "",
    qualif: "",
    branch: ""
  });
  if (!isOpen) return null;
  const isFormValid = formData.phone.length === 10 && formData.fullName.trim() !== "" && formData.age !== "" && formData.gender !== "" && formData.course !== "" && formData.qualif !== "" && formData.branch !== "";
  const handleSubmit = async (e) => {
    var _a, _b;
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
      setFormData({
        phone: "",
        fullName: "",
        age: "",
        gender: "",
        course: "",
        qualif: "",
        branch: ""
      });
      onClose();
      Swal.fire({
        title: "Application Submitted!",
        text: "Thank you for checking your eligibility. Redirecting to confirmation page...",
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2e3,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        navigate({ to: "/thank-you" });
      });
    } catch (error) {
      console.error("Eligibility form submit error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to submit enquiry. Please try again or contact us directly.",
        icon: "error",
        confirmButtonColor: "#DF1818"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[1.5rem] shadow-2xl w-full max-w-md overflow-hidden relative transition-all duration-300 transform scale-100 flex flex-col max-h-[95vh]", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        type: "button",
        className: "absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 z-50 p-1.5 hover:bg-zinc-100 rounded-full transition-colors",
        "aria-label": "Close modal",
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "lucide w-5 h-5 lucide-x-icon lucide-x",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
              /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto scrollbar-hide", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[#1C3E8A] px-6 py-5 text-white relative overflow-hidden flex flex-col items-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black uppercase tracking-tight leading-tight text-white", children: "Claim \u20B950,000 Scholarship" }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-[11px] mt-1 font-bold opacity-80 uppercase tracking-widest", children: "30 Sec Eligibility Check" })
      ] }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "px-6 py-5 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide w-4 h-4 lucide-phone-icon lucide-phone",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsx("path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" })
              }
            ) }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Mobile Number *",
                minLength: 10,
                maxLength: 10,
                value: formData.phone,
                onChange: (e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") }),
                className: "w-full pl-11 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-sm font-bold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide w-4 h-4 lucide-user-icon lucide-user",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "4" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Full Name *",
                value: formData.fullName,
                onChange: (e) => setFormData({ ...formData, fullName: e.target.value }),
                className: "w-full pl-11 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-sm font-bold outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-4 h-4 lucide-calendar-icon lucide-calendar",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M8 2v4" }),
                    /* @__PURE__ */ jsx("path", { d: "M16 2v4" }),
                    /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
                    /* @__PURE__ */ jsx("path", { d: "M3 10h18" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  required: true,
                  value: formData.age,
                  onChange: (e) => setFormData({ ...formData, age: e.target.value }),
                  className: "w-full pl-9 pr-2 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer text-zinc-900",
                  children: [
                    /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Age *" }),
                    /* @__PURE__ */ jsx("option", { value: "Below 15", children: "Below 15" }),
                    /* @__PURE__ */ jsx("option", { value: "15\u201317", children: "15\u201317" }),
                    /* @__PURE__ */ jsx("option", { value: "17\u201320", children: "17\u201320" }),
                    /* @__PURE__ */ jsx("option", { value: "21\u201324", children: "21\u201324" }),
                    /* @__PURE__ */ jsx("option", { value: "25 and above", children: "25 and above" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" })
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-4 h-4 lucide-users-icon lucide-users",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                    /* @__PURE__ */ jsx("path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }),
                    /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  required: true,
                  value: formData.gender,
                  onChange: (e) => setFormData({ ...formData, gender: e.target.value }),
                  className: "w-full pl-9 pr-2 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer text-zinc-900",
                  children: [
                    /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Gender *" }),
                    /* @__PURE__ */ jsx("option", { value: "Male", children: "Male" }),
                    /* @__PURE__ */ jsx("option", { value: "Female", children: "Female" }),
                    /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" })
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-4 h-4 lucide-graduation-cap-icon lucide-graduation-cap",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" }),
                    /* @__PURE__ */ jsx("path", { d: "M22 10v6" }),
                    /* @__PURE__ */ jsx("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  required: true,
                  value: formData.course,
                  onChange: (e) => setFormData({ ...formData, course: e.target.value }),
                  className: "w-full pl-9 pr-5 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer truncate text-zinc-900",
                  children: [
                    /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Course *" }),
                    /* @__PURE__ */ jsx("option", { value: "Cabin Crew (Air Hostess) & Hospitality Management", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
                    /* @__PURE__ */ jsx("option", { value: "Airport Ground Staff & Hospitality Management", children: "Airport Ground Staff & Hospitality Management" }),
                    /* @__PURE__ */ jsx("option", { value: "AI & Data Science", children: "AI & Data Science" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" })
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-4 h-4 lucide-book-open-icon lucide-book-open",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M12 7v14" }),
                    /* @__PURE__ */ jsx("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  required: true,
                  value: formData.qualif,
                  onChange: (e) => setFormData({ ...formData, qualif: e.target.value }),
                  className: "w-full pl-9 pr-5 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer truncate text-zinc-900",
                  children: [
                    /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Qualif. *" }),
                    /* @__PURE__ */ jsx("option", { value: "10th Pass", children: "10th Pass" }),
                    /* @__PURE__ */ jsx("option", { value: "12th Pass", children: "12th Pass" }),
                    /* @__PURE__ */ jsx("option", { value: "Graduate", children: "Graduate" }),
                    /* @__PURE__ */ jsx("option", { value: "Post Graduate", children: "Post Graduate" }),
                    /* @__PURE__ */ jsx("option", { value: "Diploma", children: "Diploma" }),
                    /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "lucide w-3.5 h-3.5 lucide-chevron-down-icon lucide-chevron-down",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" })
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1C3E8A] transition-colors", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide w-4 h-4 lucide-map-pin-icon lucide-map-pin",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                required: true,
                value: formData.branch,
                onChange: (e) => setFormData({ ...formData, branch: e.target.value }),
                className: "w-full pl-11 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-[#1C3E8A] rounded-xl text-[13px] font-bold outline-none transition-all appearance-none cursor-pointer text-zinc-900",
                children: [
                  /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Select Branch *" }),
                  /* @__PURE__ */ jsx("option", { value: "Thane", children: "Thane" }),
                  /* @__PURE__ */ jsx("option", { value: "Ghatkopar", children: "Ghatkopar" }),
                  /* @__PURE__ */ jsx("option", { value: "Andheri", children: "Andheri" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide w-4 h-4 lucide-chevron-down-icon lucide-chevron-down",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" })
              }
            ) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: !isFormValid,
              className: "w-full py-4 bg-[#df1818] hover:bg-[#b01313] disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed text-white rounded-xl text-base font-black uppercase tracking-wider shadow-lg shadow-red-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 animate-pulse-subtle cursor-pointer",
              children: "Check My Eligibility Now"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center py-1", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-zinc-200" }) }),
            /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-[10px] font-black uppercase tracking-widest px-3 bg-white text-zinc-400", children: "\u2014 OR \u2014" })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://wa.me/919987588932",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-full py-4 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-full h-full", children: /* @__PURE__ */ jsx("path", { d: "M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.273.608-1.441.159-.168.348-.21.464-.21.117 0 .232.001.333.007.109.004.258-.041.404.308.147.355.503 1.226.547 1.314.044.088.073.19.014.308-.06.117-.088.19-.174.29-.088.101-.184.225-.264.302-.088.085-.18.177-.077.354.103.179.458.753.985 1.222.678.604 1.248.792 1.424.881.175.088.277.073.379-.045.103-.117.438-.508.553-.68.117-.174.232-.145.393-.087.16.058 1.017.479 1.191.566.174.088.29.131.334.204.043.073.043.42-.101.824zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" }) }) }),
                "Chat on WhatsApp"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
function Header() {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("automatic popup");
  const lastClickedElRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleGlobalClick = (e) => {
      lastClickedElRef.current = e.target;
    };
    window.addEventListener("click", handleGlobalClick, true);
    return () => window.removeEventListener("click", handleGlobalClick, true);
  }, []);
  useEffect(() => {
    const handleOpenModal = (e) => {
      var _a;
      const customEvent = e;
      let source = (_a = customEvent.detail) == null ? void 0 : _a.source;
      if (!source) {
        const clickedEl = lastClickedElRef.current || document.activeElement;
        if (clickedEl) {
          if (clickedEl.closest("header") || clickedEl.closest("[role='navigation']")) {
            source = "header-menu";
          } else if (clickedEl.closest("footer")) {
            source = "footer-cta";
          } else {
            const parentSection = clickedEl.closest("section");
            const parentDiv = clickedEl.closest("div[id]");
            const pageName = window.location.pathname === "/" ? "home" : window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
            let sectionName = "cta";
            if (parentSection && parentSection.id) {
              sectionName = parentSection.id;
            } else if (parentDiv && parentDiv.id) {
              sectionName = parentDiv.id;
            } else if (parentSection) {
              const className = parentSection.className || "";
              if (className.includes("hero") || className.includes("banner")) {
                sectionName = "hero";
              } else {
                const allSections = Array.from(document.querySelectorAll("section"));
                const index = allSections.indexOf(parentSection);
                sectionName = index === 0 ? "hero" : `section-${index}`;
              }
            }
            source = `${pageName}-${sectionName}`;
          }
        } else {
          source = "automatic popup";
        }
      }
      setModalSource(source);
      setIsEligibilityModalOpen(true);
    };
    window.addEventListener("openEligibilityModal", handleOpenModal);
    return () => window.removeEventListener("openEligibilityModal", handleOpenModal);
  }, []);
  const handleNavClick = (path) => {
    navigate({ to: path });
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const courses = [
    { name: "Cabin Crew (Air Hostess) & Hospitality Management", desc: "Cabin crew training & placement assistance", path: "/courses/air-hostess-cabin-crew-hospitality-management" },
    { name: "Airport Ground Staff & Hospitality Management", desc: "Ground operations & placement assistance", path: "/courses/airport-ground-staff-hospitality-management" },
    { name: "AI & Data Science", desc: "Certified course & placement assistance", path: "/courses/ai-data-science-with-generative-ai-machine-learning" }
  ];
  return /* @__PURE__ */ jsxs("header", { className: "w-full sticky md:static top-0 z-50 bg-white max-md:shadow-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden w-full bg-[#f6a619] py-2 px-4 text-center border-b border-amber-600/10", children: /* @__PURE__ */ jsxs("p", { className: "text-neutral-900 font-sans font-bold text-[11px] sm:text-xs md:text-sm flex items-center justify-center gap-1.5 leading-none", children: [
      /* @__PURE__ */ jsx("span", { children: "\u{1F3DB}\uFE0F" }),
      " Maharashtra Govt Certified Aviation Institute"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-[#0b2f61] text-[#ffd300] py-2 px-4 overflow-hidden relative border-b border-blue-950/20", children: /* @__PURE__ */ jsx("div", { className: "relative w-full flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "animate-marquee whitespace-nowrap flex items-center text-xs sm:text-sm font-bold tracking-wide gap-8", children: [
      /* @__PURE__ */ jsx("span", { children: "\u{1F680} Become an Air Hostess | \u{1F393} Up to \u20B950,000 Scholarship Available | \u2708\uFE0F 10,000+ Students Trained | \u23F3 Limited seats \u2014 apply now to secure your spot! \xA0\xA0|" }),
      /* @__PURE__ */ jsx("span", { children: "\u{1F680} Become an Air Hostess | \u{1F393} Up to \u20B950,000 Scholarship Available | \u2708\uFE0F 10,000+ Students Trained | \u23F3 Limited seats \u2014 apply now to secure your spot! \xA0\xA0|" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full border-b border-neutral-100 shadow-sm py-3 px-4 sm:px-6 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-10 lg:space-x-14", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleNavClick("/"),
            className: "flex items-center focus:outline-none",
            "aria-label": "Amigo Academy Home",
            children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Amigo Academy Logo", className: "h-20 sm:h-24 lg:h-[88px] w-auto object-contain py-1" })
          }
        ),
        /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center space-x-5 text-[#1e293b] font-sans font-semibold text-sm", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsCoursesDropdownOpen(true),
              onMouseLeave: () => setIsCoursesDropdownOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => {
                      if (isCoursesDropdownOpen) {
                        handleNavClick("/courses");
                        setIsCoursesDropdownOpen(false);
                      } else {
                        setIsCoursesDropdownOpen(true);
                      }
                    },
                    className: `flex items-center gap-1 hover:text-[#e31e24] transition-colors py-2 focus:outline-none ${location.pathname.startsWith("/courses") ? "text-[#e31e24]" : ""}`,
                    children: [
                      "Courses",
                      /* @__PURE__ */ jsx("svg", { className: `w-3.5 h-3.5 transition-transform duration-200 ${isCoursesDropdownOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M19 9l-7 7-7-7" }) })
                    ]
                  }
                ),
                isCoursesDropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full pt-1 z-50 animate-fadeIn", children: /* @__PURE__ */ jsx("div", { className: "w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-3", children: courses.map((course, idx) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleNavClick(course.path);
                      setIsCoursesDropdownOpen(false);
                    },
                    className: "w-full text-left px-4 py-2 hover:bg-neutral-50 flex flex-col group/item transition-colors",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-neutral-800 group-hover/item:text-[#e31e24]", children: course.name }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-400", children: course.desc })
                    ]
                  },
                  idx
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-300 font-normal", children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick("/placement"),
              className: `hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/placement" ? "text-[#e31e24]" : ""}`,
              children: "Placements"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-300 font-normal", children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick("/scholarship"),
              className: `hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/scholarship" ? "text-[#e31e24]" : ""}`,
              children: "Scholarships"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-300 font-normal", children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick("/branches"),
              className: `hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/branches" ? "text-[#e31e24]" : ""}`,
              children: "Branches"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-300 font-normal", children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick("/franchise"),
              className: `hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/franchise" ? "text-[#e31e24]" : ""}`,
              children: "Franchise"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3.5", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsEligibilityModalOpen(true),
            className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: "Check my Eligibility"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            className: "md:hidden p-1 text-neutral-600 hover:text-neutral-900 focus:outline-none",
            "aria-label": "Toggle Menu",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMobileMenuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.2, d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        )
      ] })
    ] }) }),
    isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden w-full border-b border-neutral-100 bg-white animate-slideDown", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col px-6 py-4 space-y-4 font-sans font-bold text-[#1e293b] text-base", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b border-neutral-100 pb-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/courses"), className: "text-left w-full focus:outline-none", children: /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs uppercase tracking-wider block mb-2 hover:text-[#e31e24] cursor-pointer", children: "Our Courses" }) }),
        courses.map((course, idx) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleNavClick(course.path),
            className: "w-full text-left py-1.5 text-sm text-neutral-700 hover:text-[#e31e24] block",
            children: [
              "\u2022 ",
              course.name
            ]
          },
          idx
        ))
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleNavClick("/placement"),
          className: "text-left py-1 hover:text-[#e31e24] border-b border-neutral-100",
          children: "Placements"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleNavClick("/scholarship"),
          className: "text-left py-1 hover:text-[#e31e24] border-b border-neutral-100",
          children: "Scholarships"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleNavClick("/branches"),
          className: "text-left py-1 hover:text-[#e31e24] border-b border-neutral-100",
          children: "Branches"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setIsMobileMenuOpen(false);
            setIsEligibilityModalOpen(true);
          },
          className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm px-6 py-3 rounded-full shadow-md text-center",
          children: "Check my Eligibility"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      EligibilityModal,
      {
        isOpen: isEligibilityModalOpen,
        onClose: () => setIsEligibilityModalOpen(false),
        source: modalSource
      }
    )
  ] });
}
const logoFooter = "/assets/logofooter-C15ryCkB.png";
const FooterQR = "/assets/FooterQR-DWj48vzD.png";
function Footer() {
  const navigate = useNavigate();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const handleNavClick = (path) => {
    navigate({ to: path });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#132238] text-slate-300 font-sans pt-16 pb-8 border-t border-blue-950/40", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 flex flex-col space-y-5 text-left", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick("/"),
              className: "flex items-center focus:outline-none w-fit",
              "aria-label": "Amigo Academy Home",
              children: /* @__PURE__ */ jsx("img", { src: logoFooter, alt: "Amigo Academy Logo", className: "h-16 sm:h-20 w-auto object-contain" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-3 pt-2 text-sm text-slate-200", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+919987588932", className: "flex items-center space-x-3 group w-fit", children: [
              /* @__PURE__ */ jsx("span", { className: "w-8 h-8 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-white transition-all", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold group-hover:text-white transition-colors", children: "+919987588932" })
            ] }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:care@amigoacademy.in", className: "flex items-center space-x-3 group w-fit", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#112340] flex items-center justify-center text-[#e31e24] group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold group-hover:text-white transition-colors text-xs sm:text-sm", children: "care@amigoacademy.in" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs pt-1", children: "Founded in 2017, Amigo Academy Pvt Ltd has been envisaged as an academy steadily committed to delivering holistic training concepts across aviation, hospitality, and technology sectors." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick("/about-us"),
              className: "text-white hover:text-[#e31e24] font-bold text-xs w-fit text-left focus:outline-none",
              children: "Read More"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col space-y-4 text-left", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/about-us"), className: "text-left hover:text-white transition-colors w-fit", children: "About us" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/placement"), className: "text-left hover:text-white transition-colors w-fit", children: "Placements" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/scholarship"), className: "text-left hover:text-white transition-colors w-fit", children: "Scholarships" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/branches"), className: "text-left hover:text-white transition-colors w-fit", children: "Branches" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/franchise"), className: "text-left hover:text-white transition-colors w-fit", children: "Franchise" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/blog"), className: "text-left hover:text-white transition-colors w-fit", children: "Blog" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/gallery"), className: "text-left hover:text-white transition-colors w-fit", children: "Gallery" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/student-success"), className: "text-left hover:text-white transition-colors w-fit", children: "Amigo Student Success" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/contact"), className: "text-left hover:text-white transition-colors w-fit", children: "Contact Us" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/locations"), className: "text-left hover:text-white transition-colors w-fit", children: "Locations" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5 pt-1", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setIsPaymentOpen(!isPaymentOpen),
                  className: "flex items-center justify-between text-left hover:text-white transition-colors w-fit gap-1.5 focus:outline-none cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Online Payment" }),
                    /* @__PURE__ */ jsx("svg", { className: `w-3 h-3 transition-transform duration-200 ${isPaymentOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }) })
                  ]
                }
              ),
              isPaymentOpen && /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2 pl-3 border-l border-slate-700 mt-1", children: [
                /* @__PURE__ */ jsx("a", { href: "https://pages.razorpay.com/amigoacademypayment", target: "_blank", rel: "noreferrer", className: "hover:text-white transition-colors text-xs w-fit", children: "Razorpay" }),
                /* @__PURE__ */ jsx("a", { href: "https://www.instamojo.com/@amigoairacademy/", target: "_blank", rel: "noreferrer", className: "hover:text-white transition-colors text-xs w-fit", children: "Instamojo" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col space-y-4 text-left", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5", children: "Courses" }),
          /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/courses/air-hostess-cabin-crew-hospitality-management"), className: "text-left hover:text-white transition-colors w-fit", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/courses/airport-ground-staff-hospitality-management"), className: "text-left hover:text-white transition-colors w-fit", children: "Airport Ground Staff & Hospitality Management" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/courses/ai-data-science-with-generative-ai-machine-learning"), className: "text-left hover:text-white transition-colors w-fit", children: "AI & Data Science" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/courses"), className: "text-left hover:text-white transition-colors w-fit", children: "All Courses" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col space-y-4 text-left", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5", children: "Career Guides" }),
          /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/career-guide/cabin-crew"), className: "text-left hover:text-white transition-colors w-fit", children: "Cabin Crew Career Guide" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/career-guide/airport-ground-staff"), className: "text-left hover:text-white transition-colors w-fit", children: "Airport Ground Staff Career Guide" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/career-guide/ai-data-science"), className: "text-left hover:text-white transition-colors w-fit", children: "AI & Data Science Career Guide" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/career-guides"), className: "text-left hover:text-white transition-colors w-fit", children: "All Career Guides" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col space-y-3.5 items-start text-left", children: [
          /* @__PURE__ */ jsxs("h4", { className: "text-white font-sans font-bold text-xs tracking-wider uppercase leading-snug", children: [
            "Scan & Pre Register",
            /* @__PURE__ */ jsx("br", {}),
            "For Seminar"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => window.dispatchEvent(new CustomEvent("openSeminarModal")),
              className: "bg-white p-2 rounded-xl border border-slate-700/50 shadow-md hover:scale-105 transition-transform cursor-pointer group text-left",
              title: "Click to open Seminar Form",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: FooterQR,
                  alt: "Scan & Pre Register QR Code",
                  className: "w-28 h-28 sm:w-32 sm:h-32 object-contain"
                }
              )
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-slate-700/30 text-left text-xs sm:text-sm", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleNavClick("/ghatkopar-branch"),
            className: "flex items-start space-x-3 text-left group cursor-pointer focus:outline-none",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-lg sm:text-xl pt-0.5 group-hover:scale-110 transition-transform", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
                /* @__PURE__ */ jsx("h5", { className: "text-white font-sans font-bold uppercase tracking-wider group-hover:text-[#e31e24] transition-colors", children: "Ghatkopar Branch" }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-400 leading-relaxed", children: [
                  "107 & 108, Sai Infotech, Patel Chowk,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Opposite Railway Station, Pant Nagar,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Ghatkopar East, Mumbai, Maharashtra 400077"
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleNavClick("/andheri-branch"),
            className: "flex items-start space-x-3 text-left group cursor-pointer focus:outline-none",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-lg sm:text-xl pt-0.5 group-hover:scale-110 transition-transform", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
                /* @__PURE__ */ jsx("h5", { className: "text-white font-sans font-bold uppercase tracking-wider group-hover:text-[#e31e24] transition-colors", children: "Andheri Branch" }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-400 leading-relaxed", children: [
                  "902, 9th Floor, Time Chambers,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Swami Vivekanand Rd,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Andheri West, Mumbai 400058"
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleNavClick("/thane-branch"),
            className: "flex items-start space-x-3 text-left group cursor-pointer focus:outline-none",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-lg sm:text-xl pt-0.5 group-hover:scale-110 transition-transform", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
                /* @__PURE__ */ jsx("h5", { className: "text-white font-sans font-bold uppercase tracking-wider group-hover:text-[#e31e24] transition-colors", children: "Thane Branch" }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-400 leading-relaxed", children: [
                  "3rd Floor, Above McDonald's,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Opp Railway Station,",
                  /* @__PURE__ */ jsx("br", {}),
                  "Thane West, Maharashtra 400601"
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 mb-4 md:mb-0", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/share/1dUEaqYi4g/", target: "_blank", rel: "noreferrer", className: "text-slate-400 hover:text-white transition-colors", "aria-label": "Facebook", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" }) }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/amigozacademy", target: "_blank", rel: "noreferrer", className: "text-slate-400 hover:text-white transition-colors", "aria-label": "Instagram", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 fill-none stroke-current", strokeWidth: 2, viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
            /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" }),
            /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
          ] }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@amigoacademy6050", target: "_blank", rel: "noreferrer", className: "text-slate-400 hover:text-white transition-colors", "aria-label": "YouTube", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/amigo-academy", target: "_blank", rel: "noreferrer", className: "text-slate-400 hover:text-white transition-colors", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-6 mb-4 md:mb-0 text-slate-400 font-semibold", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/privacy-policy"), className: "hover:text-white transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/terms-and-conditions"), className: "hover:text-white transition-colors", children: "Terms & Conditions" }),
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/refund-policy"), className: "hover:text-white transition-colors", children: "Refund Policy" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
          "\xA9 2026 Amigo Academy Pvt Ltd. All Rights Reserved | Designed and Managed by",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.ace360degree.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-white underline transition-colors",
              children: "Ace 360\u2070 Digital Marketing Agency"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-20 right-5 md:bottom-6 md:right-6 z-[9999] bg-[#e31e24] hover:bg-[#c2141a] text-white w-11 h-11 md:w-12 md:h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-90 flex items-center justify-center border border-white/20 focus:outline-none cursor-pointer group",
        "aria-label": "Scroll back to top",
        children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5", fill: "none", stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15l7-7 7 7" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/919987588932",
        target: "_blank",
        rel: "noreferrer",
        className: "fixed bottom-[162px] right-6 z-[9999] hidden md:flex bg-[#25d366] hover:bg-[#20ba5a] text-white w-[60px] h-[60px] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-90 items-center justify-center border border-white/20 focus:outline-none cursor-pointer group",
        "aria-label": "Chat on WhatsApp",
        children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 transition-transform duration-200 group-hover:scale-110 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.001l-1.416 5.17 5.293-1.388c1.46.797 3.109 1.217 4.781 1.218h.004c5.505 0 9.987-4.479 9.988-9.986 0-2.667-1.037-5.175-2.923-7.062a9.923 9.923 0 0 0-7.069-2.937zm5.882 14.398c-.247.694-1.228 1.288-1.996 1.455-.525.114-1.211.205-3.518-.75-2.954-1.222-4.857-4.223-5.004-4.419-.147-.196-1.199-1.597-1.199-3.045 0-1.448.756-2.161 1.026-2.455.27-.294.589-.368.785-.368.196 0 .392.001.564.01.182.009.428-.069.67.511.247.592.834 2.036.907 2.183.074.147.123.319.025.515-.098.196-.147.319-.294.49-.147.172-.309.384-.442.516-.147.147-.301.308-.13.602.172.294.764 1.261 1.639 2.04 1.127 1.002 2.077 1.312 2.371 1.459.294.147.466.123.638-.074.172-.196.736-.858.932-1.152.196-.294.392-.245.662-.147.27.098 1.716.81 2.01 1.006.294.196.49.294.564.417.074.123.074.717-.173 1.411z" }) })
      }
    )
  ] });
}
function SeminarModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    gender: "",
    height: "",
    weight: "",
    age: "",
    maritalStatus: ""
  });
  const [contactDetails, setContactDetails] = useState({
    whatsapp: "",
    mobile2: "",
    mobile3: ""
  });
  const [parentDetails, setParentDetails] = useState({
    fatherName: "",
    fatherOccupation: "",
    fatherMobile: "",
    motherName: "",
    motherOccupation: "",
    motherMobile: ""
  });
  const [educationalDetails, setEducationalDetails] = useState({
    educationLevel: "",
    schoolCollege: "",
    stream: "",
    year: "",
    medium: "",
    percentage: ""
  });
  const [references, setReferences] = useState([
    { id: 1, fullName: "", mobile: "" }
  ]);
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;
  const handleAddReference = () => {
    setReferences((prev) => [
      ...prev,
      { id: prev.length + 1, fullName: "", mobile: "" }
    ]);
  };
  const handleReferenceChange = (index, field, value) => {
    setReferences((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await submitSeminarForm({
        first_name: personalDetails.firstName,
        middle_name: personalDetails.middleName,
        surname: personalDetails.surname,
        gender: personalDetails.gender,
        height: personalDetails.height,
        weight: personalDetails.weight,
        age: personalDetails.age,
        marital_status: personalDetails.maritalStatus,
        whatsapp: contactDetails.whatsapp,
        mobile2: contactDetails.mobile2,
        mobile3: contactDetails.mobile3,
        father_name: parentDetails.fatherName,
        father_occupation: parentDetails.fatherOccupation,
        father_mobile: parentDetails.fatherMobile,
        mother_name: parentDetails.motherName,
        mother_occupation: parentDetails.motherOccupation,
        mother_mobile: parentDetails.motherMobile,
        education_level: educationalDetails.educationLevel,
        school_college: educationalDetails.schoolCollege,
        stream: educationalDetails.stream,
        year: educationalDetails.year,
        medium: educationalDetails.medium,
        percentage: educationalDetails.percentage,
        references_json: references
      });
      setPersonalDetails({ firstName: "", middleName: "", surname: "", gender: "", height: "", weight: "", age: "", maritalStatus: "" });
      setContactDetails({ whatsapp: "", mobile2: "", mobile3: "" });
      setParentDetails({ fatherName: "", fatherOccupation: "", fatherMobile: "", motherName: "", motherOccupation: "", motherMobile: "" });
      setEducationalDetails({ educationLevel: "", schoolCollege: "", stream: "", year: "", medium: "", percentage: "" });
      setReferences([{ id: 1, fullName: "", mobile: "" }]);
      onClose();
      Swal.fire({
        title: "Seminar Seat Reserved!",
        text: "Seminar Appointment No will be sent to your WhatsApp No. as a confirmation.",
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        navigate({ to: "/thank-you" });
      });
    } catch (error) {
      console.error("Seminar registration error:", error);
      Swal.fire({
        title: "Registration Failed",
        text: ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to reserve seat. Please try again.",
        icon: "error",
        confirmButtonColor: "#DF1818"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative transition-all duration-300 transform scale-100 flex flex-col max-h-[92vh] my-auto border border-neutral-100", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        type: "button",
        className: "absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 z-50 p-2 hover:bg-zinc-100 rounded-full transition-colors",
        "aria-label": "Close modal",
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "w-6 h-6",
            children: [
              /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
              /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto p-4 sm:p-8 space-y-8 custom-scrollbar", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center space-y-3 pt-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logo,
            alt: "Amigo Academy Logo",
            className: "h-14 sm:h-16 object-contain"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#0B2F61] tracking-tight", children: "Seminar Form" }),
        /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-[#1C3E8A] rounded-full" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2", children: "Personal Details" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "FIRST NAME" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: personalDetails.firstName,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, firstName: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MIDDLE NAME" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: personalDetails.middleName,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, middleName: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "SURNAME" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: personalDetails.surname,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, surname: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "GENDER" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  required: true,
                  value: personalDetails.gender,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, gender: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "Female", children: "Female" }),
                    /* @__PURE__ */ jsx("option", { value: "Male", children: "Male" }),
                    /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "HEIGHT (CM)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: personalDetails.height,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, height: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Enter in centimeters (e.g. 170)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "WEIGHT (KG)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: personalDetails.weight,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, weight: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Enter in kilograms (e.g. 65)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "AGE" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  required: true,
                  value: personalDetails.age,
                  onChange: (e) => setPersonalDetails({ ...personalDetails, age: e.target.value }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Enter your age in years" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MARITAL STATUS" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  value: personalDetails.maritalStatus,
                  onChange: (e) => setPersonalDetails({
                    ...personalDetails,
                    maritalStatus: e.target.value
                  }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "Single", children: "Single" }),
                    /* @__PURE__ */ jsx("option", { value: "Married", children: "Married" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2", children: "Contact Details" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "WHATSAPP NUMBER" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  required: true,
                  maxLength: 10,
                  value: contactDetails.whatsapp,
                  onChange: (e) => setContactDetails({
                    ...contactDetails,
                    whatsapp: e.target.value.replace(/\D/g, "")
                  }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Must be exactly 10 digits" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MOBILE NUMBER 2" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  maxLength: 10,
                  value: contactDetails.mobile2,
                  onChange: (e) => setContactDetails({
                    ...contactDetails,
                    mobile2: e.target.value.replace(/\D/g, "")
                  }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Optional (10 digits)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MOBILE NUMBER 3" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  maxLength: 10,
                  value: contactDetails.mobile3,
                  onChange: (e) => setContactDetails({
                    ...contactDetails,
                    mobile3: e.target.value.replace(/\D/g, "")
                  }),
                  className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Optional (10 digits)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2", children: "Parent Details" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "FATHER'S NAME" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: parentDetails.fatherName,
                    onChange: (e) => setParentDetails({ ...parentDetails, fatherName: e.target.value }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "OCCUPATION" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: parentDetails.fatherOccupation,
                    onChange: (e) => setParentDetails({ ...parentDetails, fatherOccupation: e.target.value }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                      /* @__PURE__ */ jsx("option", { value: "Business", children: "Business" }),
                      /* @__PURE__ */ jsx("option", { value: "Salaried", children: "Salaried" }),
                      /* @__PURE__ */ jsx("option", { value: "Government Service", children: "Government Service" }),
                      /* @__PURE__ */ jsx("option", { value: "Retired", children: "Retired" }),
                      /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MOBILE NO" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    maxLength: 10,
                    value: parentDetails.fatherMobile,
                    onChange: (e) => setParentDetails({
                      ...parentDetails,
                      fatherMobile: e.target.value.replace(/\D/g, "")
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MOTHER'S NAME" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: parentDetails.motherName,
                    onChange: (e) => setParentDetails({ ...parentDetails, motherName: e.target.value }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "OCCUPATION" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: parentDetails.motherOccupation,
                    onChange: (e) => setParentDetails({ ...parentDetails, motherOccupation: e.target.value }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                      /* @__PURE__ */ jsx("option", { value: "Homemaker", children: "Homemaker" }),
                      /* @__PURE__ */ jsx("option", { value: "Business", children: "Business" }),
                      /* @__PURE__ */ jsx("option", { value: "Salaried", children: "Salaried" }),
                      /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MOBILE NO" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    maxLength: 10,
                    value: parentDetails.motherMobile,
                    onChange: (e) => setParentDetails({
                      ...parentDetails,
                      motherMobile: e.target.value.replace(/\D/g, "")
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block", children: "Optional (10 digits)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200 pb-2", children: "Educational Details" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "EDUCATION LEVEL" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: educationalDetails.educationLevel,
                    onChange: (e) => setEducationalDetails({
                      ...educationalDetails,
                      educationLevel: e.target.value
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                      /* @__PURE__ */ jsx("option", { value: "10th", children: "10th Standard" }),
                      /* @__PURE__ */ jsx("option", { value: "12th", children: "12th Standard" }),
                      /* @__PURE__ */ jsx("option", { value: "Undergraduate", children: "Undergraduate" }),
                      /* @__PURE__ */ jsx("option", { value: "Postgraduate", children: "Postgraduate" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "SCHOOL/COLLEGE" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: educationalDetails.schoolCollege,
                    onChange: (e) => setEducationalDetails({
                      ...educationalDetails,
                      schoolCollege: e.target.value
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "STREAM" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: educationalDetails.stream,
                    onChange: (e) => setEducationalDetails({
                      ...educationalDetails,
                      stream: e.target.value
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                      /* @__PURE__ */ jsx("option", { value: "Arts", children: "Arts" }),
                      /* @__PURE__ */ jsx("option", { value: "Commerce", children: "Commerce" }),
                      /* @__PURE__ */ jsx("option", { value: "Science", children: "Science" }),
                      /* @__PURE__ */ jsx("option", { value: "Diploma/Vocational", children: "Diploma/Vocational" }),
                      /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "YEAR" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: educationalDetails.year,
                    onChange: (e) => setEducationalDetails({
                      ...educationalDetails,
                      year: e.target.value
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                      /* @__PURE__ */ jsx("option", { value: "2026", children: "2026" }),
                      /* @__PURE__ */ jsx("option", { value: "2025", children: "2025" }),
                      /* @__PURE__ */ jsx("option", { value: "2024", children: "2024" }),
                      /* @__PURE__ */ jsx("option", { value: "2023", children: "2023" }),
                      /* @__PURE__ */ jsx("option", { value: "2022", children: "2022" }),
                      /* @__PURE__ */ jsx("option", { value: "Earlier", children: "Earlier" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "MEDIUM" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: educationalDetails.medium,
                    onChange: (e) => setEducationalDetails({
                      ...educationalDetails,
                      medium: e.target.value
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none text-slate-700",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                      /* @__PURE__ */ jsx("option", { value: "English", children: "English" }),
                      /* @__PURE__ */ jsx("option", { value: "Hindi", children: "Hindi" }),
                      /* @__PURE__ */ jsx("option", { value: "Marathi", children: "Marathi" }),
                      /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1", children: "PERCENTAGE %" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: educationalDetails.percentage,
                    onChange: (e) => setEducationalDetails({
                      ...educationalDetails,
                      percentage: e.target.value
                    }),
                    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-slate-200 pb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-800", children: "References" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: handleAddReference,
                className: "px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1C3E8A] font-bold text-xs flex items-center gap-1.5 transition-colors border border-blue-200/60 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [
                        /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
                        /* @__PURE__ */ jsx("path", { d: "M12 5v14" })
                      ]
                    }
                  ),
                  "Add More"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-slate-50/60 p-4 rounded-2xl space-y-3 border border-slate-100", children: references.map((refItem, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-slate-500 min-w-[50px]", children: [
                  "Ref ",
                  idx + 1
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Full Name",
                      value: refItem.fullName,
                      onChange: (e) => handleReferenceChange(idx, "fullName", e.target.value),
                      className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "tel",
                        maxLength: 10,
                        placeholder: "Mobile Number",
                        value: refItem.mobile,
                        onChange: (e) => handleReferenceChange(
                          idx,
                          "mobile",
                          e.target.value.replace(/\D/g, "")
                        ),
                        className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-[#1C3E8A] focus:ring-2 focus:ring-[#1C3E8A]/20 transition-all text-sm outline-none"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] italic text-slate-400 mt-0.5 block text-right", children: "Min/Max 10 digits" })
                  ] })
                ] })
              ]
            },
            refItem.id
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-2.5 pt-4 pb-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#1C3E8A] hover:bg-[#14306d] text-white font-bold text-base shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer",
              children: "Reserve My Seat"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs italic text-slate-500 text-center", children: "Seminar Appointment No will be sent to your WhatsApp No. as a confirmation." })
        ] })
      ] })
    ] })
  ] }) });
}
function StickyMobileBar() {
  return /* @__PURE__ */ jsx("div", { className: "md:hidden fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t-2 border-[#0b2f61] shadow-[0_-6px_25px_rgba(0,0,0,0.15)]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 w-full h-[65px]", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "tel:+919987588932",
        className: "flex flex-col items-center justify-center bg-white border-r border-slate-200 active:bg-slate-50 transition-colors py-1 focus:outline-none",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#0b2f61] fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[12.5px] font-extrabold text-[#0b2f61] leading-tight mt-1 font-outfit tracking-wide", children: "Call Now" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://wa.me/919987588932",
        target: "_blank",
        rel: "noreferrer",
        className: "flex flex-col items-center justify-center bg-white border-r border-slate-200 active:bg-slate-50 transition-colors py-1 focus:outline-none",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#22c55e] fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.001l-1.416 5.17 5.293-1.388c1.46.797 3.109 1.217 4.781 1.218h.004c5.505 0 9.987-4.479 9.988-9.986 0-2.667-1.037-5.175-2.923-7.062a9.923 9.923 0 0 0-7.069-2.937zm5.882 14.398c-.247.694-1.228 1.288-1.996 1.455-.525.114-1.211.205-3.518-.75-2.954-1.222-4.857-4.223-5.004-4.419-.147-.196-1.199-1.597-1.199-3.045 0-1.448.756-2.161 1.026-2.455.27-.294.589-.368.785-.368.196 0 .392.001.564.01.182.009.428-.069.67.511.247.592.834 2.036.907 2.183.074.147.123.319.025.515-.098.196-.147.319-.294.49-.147.172-.309.384-.442.516-.147.147-.301.308-.13.602.172.294.764 1.261 1.639 2.04 1.127 1.002 2.077 1.312 2.371 1.459.294.147.466.123.638-.074.172-.196.736-.858.932-1.152.196-.294.392-.245.662-.147.27.098 1.716.81 2.01 1.006.294.196.49.294.564.417.074.123.074.717-.173 1.411z" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[12.5px] font-extrabold text-[#22c55e] leading-tight mt-1 font-outfit tracking-wide", children: "WhatsApp" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
        className: "flex flex-col items-center justify-center bg-[#e31e24] active:bg-[#c2141a] transition-colors py-1 focus:outline-none cursor-pointer",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[12.5px] font-extrabold text-white leading-tight mt-1 font-outfit tracking-wide", children: "Apply Now" })
        ]
      }
    )
  ] }) });
}
function Layout({ children }) {
  const { pathname, search } = useLocation();
  const [isSeminarModalOpen, setIsSeminarModalOpen] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(search);
    const formParam = params.get("form");
    const qrParam = params.get("qr");
    const scanParam = params.get("scan");
    const cleanPath = pathname.toLowerCase().replace(/\/$/, "");
    if (formParam === "seminar" || qrParam === "1" || qrParam === "true" || scanParam === "true" || cleanPath === "/seminar" || cleanPath === "/seminar-form") {
      setIsSeminarModalOpen(true);
    }
  }, [search, pathname]);
  useEffect(() => {
    const handleOpenSeminar = () => setIsSeminarModalOpen(true);
    window.addEventListener("openSeminarModal", handleOpenSeminar);
    return () => window.removeEventListener("openSeminarModal", handleOpenSeminar);
  }, []);
  useEffect(() => {
    const Tawk_API = window.Tawk_API || {};
    Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: "br",
          xOffset: 24,
          yOffset: 90
        },
        mobile: {
          position: "br",
          xOffset: 20,
          yOffset: 145
        }
      }
    };
    const updateTawkVisibility = () => {
      const isMobile = window.innerWidth < 1024;
      try {
        const api = window.Tawk_API;
        if (api && typeof api.hideWidget === "function" && typeof api.showWidget === "function") {
          if (isMobile) {
            api.hideWidget();
          } else {
            api.showWidget();
          }
        }
      } catch (err) {
      }
      const elements = document.querySelectorAll(
        'iframe[src*="tawk.to"], iframe[title*="chat"], iframe[title*="tawk"], iframe[title*="Tawk"], #tawkchat-container, .tawk-min-container, [id^="tawk"], [class*="tawk"]'
      );
      elements.forEach((el) => {
        if (isMobile) {
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("opacity", "0", "important");
          el.style.setProperty("pointer-events", "none", "important");
          if (el.parentElement && el.parentElement !== document.body) {
            el.parentElement.style.setProperty("display", "none", "important");
          }
        } else {
          el.style.removeProperty("display");
          el.style.removeProperty("visibility");
          el.style.removeProperty("opacity");
          el.style.removeProperty("pointer-events");
          if (el.parentElement && el.parentElement !== document.body) {
            el.parentElement.style.removeProperty("display");
          }
        }
      });
    };
    Tawk_API.onLoad = updateTawkVisibility;
    window.Tawk_API = Tawk_API;
    window.Tawk_LoadStart = /* @__PURE__ */ new Date();
    window.addEventListener("resize", updateTawkVisibility);
    const interval = setInterval(updateTawkVisibility, 500);
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5f2e9e94ed9d9d262709321f/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
    return () => {
      window.removeEventListener("resize", updateTawkVisibility);
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lazy-section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
    );
    const elements = document.querySelectorAll("section, article, .lazy-reveal");
    elements.forEach((el) => {
      if (!el.classList.contains("lazy-section-visible")) {
        el.classList.add("lazy-section-init");
        observer.observe(el);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname, children]);
  if (pathname === "/thank-you") {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-500 selection:text-white antialiased relative overflow-x-clip pb-14 md:pb-0", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none z-0" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow z-10 relative", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(StickyMobileBar, {}),
    /* @__PURE__ */ jsx(
      SeminarModal,
      {
        isOpen: isSeminarModalOpen,
        onClose: () => setIsSeminarModalOpen(false)
      }
    )
  ] });
}
const Route$t = createRootRoute({
  component: () => /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Outlet, {}) })
});
const $$splitComponentImporter$s = () => import('./index-C1fXYK_u.mjs');
const Route$s = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Amigo Academy - Leading Aviation, Hospitality & AI Institute in Mumbai"
    }, {
      name: "description",
      content: "Join Amigo Academy for premier Aviation, Hospitality & AI Data Science training programs in Mumbai. Guaranteed placement assistance & up to \u20B950,000 scholarship."
    }, {
      name: "keywords",
      content: "Air Hostess Training, Cabin Crew Course, Airport Ground Staff, AI Data Science, Amigo Academy Mumbai"
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const BLOG_API_URL = "https://blog.amigoacademy.in/wp-json/wp/v2";
const CONTENT_API_URL = "https://content.amigoacademy.in/wp-json/wp/v2";
const seoPageCache = {};
let seoPagesCache = null;
const mockBlogPosts = [
  {
    id: 1,
    title: { rendered: "How to Become a Cabin Crew After 12th: A Complete Guide" },
    slug: "how-to-become-a-cabin-crew-after-12th",
    date: "2026-05-24T00:00:00",
    excerpt: { rendered: "If you're interested in building a career in aviation after completing 12th, becoming a Cabin Crew professional can be an exciting career option." },
    content: { rendered: "" },
    // populated via the InnerBlog template structure if fallback
    categoryName: "Aviation Insights",
    readTime: "8 min read",
    imageUrl: ""
  },
  {
    id: 2,
    title: { rendered: "Cabin Crew Eligibility, Skills & Requirements Explained" },
    slug: "cabin-crew-eligibility-skills-requirements-explained",
    date: "2026-05-20T00:00:00",
    excerpt: { rendered: "Understand the requirements of airlines, including physical criteria, age limits, and essential soft skills." },
    content: { rendered: "" },
    categoryName: "Aviation Insights",
    readTime: "5 min read",
    imageUrl: ""
  },
  {
    id: 3,
    title: { rendered: "Airport Ground Staff Career Guide: Roles, Salary & Growth" },
    slug: "airport-ground-staff-career-guide-roles-salary-growth",
    date: "2026-05-16T00:00:00",
    excerpt: { rendered: "Airports depend on skilled professionals to ensure smooth passenger experiences." },
    content: { rendered: "" },
    categoryName: "Aviation Insights",
    readTime: "5 min read",
    imageUrl: ""
  },
  {
    id: 4,
    title: { rendered: "Top AI Skills to Learn in 2026 for a Future-Ready Career" },
    slug: "top-ai-skills-to-learn-in-2026-for-a-future-ready-career",
    date: "2026-08-12T00:00:00",
    excerpt: { rendered: "Technology is shaping the future of every industry. Our AI & Data Science program helps students build practical knowledge." },
    content: { rendered: "" },
    categoryName: "AI & Technology",
    readTime: "5 min read",
    imageUrl: ""
  }
];
const mockSeoLinks = [
  "Best Aviation Institute Near Bhandup",
  "Best Aviation Institute Near Powai",
  "Best Aviation Institute Near Mulund",
  "Best Aviation Institute Near Vikhroli",
  "Best Aviation Institute Near Kanjurmarg",
  "Best Aviation Institute Near Chembur",
  "Air Hostess Course Near Bhandup",
  "Air Hostess Course Near Powai",
  "Air Hostess Course Near Mulund",
  "Cabin Crew Course Near Bhandup",
  "Cabin Crew Course Near Powai",
  "Cabin Crew Course Near Vikhroli",
  "Airport Ground Staff Course Near Bhandup",
  "Airport Ground Staff Course Near Powai",
  "Airport Ground Staff Course Near Mulund",
  "Airport Ground Staff Course Near Vikhroli",
  "Airport Ground Staff Course Near Kanjurmarg",
  "Airport Ground Staff Course Near Chembur",
  "AI & Data Science Course Near Bhandup",
  "AI & Data Science Course Near Powai",
  "AI & Data Science Course Near Mulund",
  "AI & Data Science Course Near Vikhroli",
  "AI & Data Science Course Near Kanjurmarg",
  "AI & Data Science Course Near Chembur",
  "Best Courses After 12th Near Bhandup",
  "Aviation Courses Near Powai",
  "Aviation Courses Near Mulund",
  "Aviation Career Guidance Near Bhandup",
  "Aviation Career Guidance Near Powai",
  "Aviation Career Guidance Near Mulund"
];
const toSlug = (text) => {
  return text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};
async function fetchBlogPosts() {
  try {
    const response = await axios.get(`${BLOG_API_URL}/posts?_embed&per_page=20`);
    return response.data;
  } catch (error) {
    console.warn("Failed to fetch blog posts from WordPress, using fallback mock data:", error);
    return mockBlogPosts.map((post) => ({
      id: post.id,
      date: post.date,
      slug: post.slug,
      link: `/blog/${post.slug}`,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      _embedded: {
        author: [{ name: "Amigo Academy" }],
        "wp:term": [[{ name: post.categoryName, slug: toSlug(post.categoryName) }]]
      }
    }));
  }
}
async function fetchBlogPostBySlug(slug) {
  try {
    const response = await axios.get(`${BLOG_API_URL}/posts?slug=${slug}&_embed`);
    if (response.data && response.data.length > 0) {
      return response.data[0];
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch blog post for slug ${slug} from WordPress:`, error);
    const mock = mockBlogPosts.find((p) => p.slug === slug);
    if (mock) {
      return {
        id: mock.id,
        date: mock.date,
        slug: mock.slug,
        link: `/blog/${mock.slug}`,
        title: mock.title,
        content: mock.content,
        excerpt: mock.excerpt,
        _embedded: {
          author: [{ name: "Amigo Academy" }],
          "wp:term": [[{ name: mock.categoryName, slug: toSlug(mock.categoryName) }]]
        }
      };
    }
    return null;
  }
}
async function fetchSEOPages() {
  if (seoPagesCache) {
    return seoPagesCache;
  }
  try {
    const response = await axios.get(`${CONTENT_API_URL}/posts?_embed&per_page=100`);
    seoPagesCache = response.data;
    response.data.forEach((post) => {
      seoPageCache[post.slug] = post;
    });
    return response.data;
  } catch (error) {
    console.warn("Failed to fetch SEO pages from WordPress, using fallback mock data:", error);
    const mockData = mockSeoLinks.map((title, index) => ({
      id: index + 100,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      slug: toSlug(title),
      link: `/${toSlug(title)}`,
      title: { rendered: title },
      content: { rendered: "" },
      excerpt: { rendered: "" }
    }));
    seoPagesCache = mockData;
    return mockData;
  }
}
async function fetchSEOPageBySlug(slug) {
  if (seoPageCache[slug]) {
    return seoPageCache[slug];
  }
  try {
    const response = await axios.get(`${CONTENT_API_URL}/posts?slug=${slug}&_embed`);
    if (response.data && response.data.length > 0) {
      seoPageCache[slug] = response.data[0];
      return response.data[0];
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch SEO page for slug ${slug} from WordPress:`, error);
    const mockTitle = mockSeoLinks.find((title) => toSlug(title) === slug);
    if (mockTitle) {
      const mockPost = {
        id: 999,
        date: (/* @__PURE__ */ new Date()).toISOString(),
        slug,
        link: `/${slug}`,
        title: { rendered: mockTitle },
        content: { rendered: "" },
        excerpt: { rendered: "" }
      };
      seoPageCache[slug] = mockPost;
      return mockPost;
    }
    return null;
  }
}
const $$splitComponentImporter$r = () => import('./_slug-DaMzmhuR.mjs');
const Route$r = createFileRoute("/$slug")({
  loader: async ({
    params
  }) => {
    const post = await fetchSEOPageBySlug(params.slug);
    return {
      post,
      slug: params.slug
    };
  },
  head: ({
    loaderData
  }) => {
    var _a, _b;
    const title = ((_b = (_a = loaderData == null ? void 0 : loaderData.post) == null ? void 0 : _a.title) == null ? void 0 : _b.rendered) ? `${loaderData.post.title.rendered} | Amigo Academy` : "Amigo Academy Mumbai";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `Aviation, Cabin Crew, and Airport Ground Staff training programs near ${(loaderData == null ? void 0 : loaderData.slug) || "Mumbai"}.`
      }],
      links: [{
        rel: "canonical",
        href: `https://staging.amigoacademy.in/${(loaderData == null ? void 0 : loaderData.slug) || ""}`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import('./about-us-C2BP7HyJ.mjs');
const Route$q = createFileRoute("/about-us")({
  head: () => ({
    meta: [{
      title: "About Us | Amigo Academy Pvt Ltd"
    }, {
      name: "description",
      content: "Learn about Amigo Academy's mission, Govt certification, leadership team, and history of excellence in aviation and technology education since 2017."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/about-us"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import('./andheri-branch-DhovlhQP.mjs');
const Route$p = createFileRoute("/andheri-branch")({
  head: () => ({
    meta: [{
      title: "Amigo Academy Andheri West Branch | Aviation & Tech Classes"
    }, {
      name: "description",
      content: "Visit Amigo Academy Andheri West Branch at Time Chambers, SV Road. Air Hostess & Ground Staff training near Andheri station."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/andheri-branch"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import('./branches-DFzKAKRi.mjs');
const Route$o = createFileRoute("/branches")({
  head: () => ({
    meta: [{
      title: "All Amigo Academy Branches in Mumbai | Ghatkopar, Andheri, Thane"
    }, {
      name: "description",
      content: "Explore all Amigo Academy branches in Mumbai. Locate your nearest branch in Ghatkopar East, Andheri West, or Thane West."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/branches"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import('./career-guides-CN6rUtD0.mjs');
const Route$n = createFileRoute("/career-guides")({
  head: () => ({
    meta: [{
      title: "Career Guides | Aviation, Hospitality & Tech | Amigo Academy"
    }, {
      name: "description",
      content: "Comprehensive career guidance for Air Hostess, Ground Staff, and AI Data Science paths after 12th and Graduation."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/career-guides"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import('./contact-D9yaXWRv.mjs');
const Route$m = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | Amigo Academy Branches in Mumbai"
    }, {
      name: "description",
      content: "Get in touch with Amigo Academy. Contact our Ghatkopar, Andheri, and Thane branches for course inquiries, counseling sessions, and campus visits."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import('./franchise-DQW7Dafp.mjs');
const Route$l = createFileRoute("/franchise")({
  head: () => ({
    meta: [{
      title: "Franchise Opportunities | Partner with Amigo Academy"
    }, {
      name: "description",
      content: "Become an Amigo Academy franchise partner. High ROI aviation & vocational training franchise opportunity in India."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/franchise"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import('./gallery-BA-VDdpu.mjs');
const Route$k = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Photo & Video Gallery | Life at Amigo Academy"
    }, {
      name: "description",
      content: "Explore campus life, cabin simulator sessions, Convocation events, and practical grooming workshops at Amigo Academy."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import('./ghatkopar-branch-DgSdMP94.mjs');
const Route$j = createFileRoute("/ghatkopar-branch")({
  head: () => ({
    meta: [{
      title: "Amigo Academy Ghatkopar East Branch | Aviation Academy"
    }, {
      name: "description",
      content: "Visit Amigo Academy Ghatkopar East Branch at Sai Infotech, Opp Railway Station. Air Hostess, Ground Staff & Hospitality courses."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/ghatkopar-branch"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import('./placement-CP-BviGo.mjs');
const Route$i = createFileRoute("/placement")({
  head: () => ({
    meta: [{
      title: "Placement Statistics & Hiring Partners | Amigo Academy"
    }, {
      name: "description",
      content: "Explore 10,000+ student placements across top airlines (IndiGo, Air India, Emirates) and airport ground handling agencies."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/placement"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import('./privacy-policy-xHLhFN12.mjs');
const Route$h = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy | Amigo Academy Pvt Ltd"
    }, {
      name: "description",
      content: "Privacy policy explaining data collection, protection, and student inquiry handling at Amigo Academy."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/privacy-policy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import('./refund-policy-D83QnrqI.mjs');
const Route$g = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [{
      title: "Refund Policy | Amigo Academy Pvt Ltd"
    }, {
      name: "description",
      content: "Refund and cancellation guidelines for admission registration fees at Amigo Academy."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/refund-policy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import('./scholarship-BQaUEMNq.mjs');
const Route$f = createFileRoute("/scholarship")({
  head: () => ({
    meta: [{
      title: "Scholarship Test & Financial Assistance | Amigo Academy"
    }, {
      name: "description",
      content: "Apply for up to \u20B950,000 scholarship at Amigo Academy for Aviation, Cabin Crew & Ground Staff training. Check eligibility today."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/scholarship"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import('./student-success-iagsh0FR.mjs');
const Route$e = createFileRoute("/student-success")({
  head: () => ({
    meta: [{
      title: "Student Success Stories & Placements | Amigo Academy"
    }, {
      name: "description",
      content: "Read success stories and testimonials from Amigo Academy alumni working as Air Hostesses, Flight Attendants, and Airport Staff globally."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/student-success"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import('./terms-and-conditions-DBrdzHSR.mjs');
const Route$d = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [{
      title: "Terms and Conditions | Amigo Academy Pvt Ltd"
    }, {
      name: "description",
      content: "Terms and conditions for enrollment, admission procedures, and platform usage at Amigo Academy."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/terms-and-conditions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import('./thane-branch-jHP-Nifm.mjs');
const Route$c = createFileRoute("/thane-branch")({
  head: () => ({
    meta: [{
      title: "Amigo Academy Thane West Branch | Air Hostess Institute"
    }, {
      name: "description",
      content: "Visit Amigo Academy Thane West Branch near Thane Railway Station. Expert aviation training, mock cabin crew setups & placement cell."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/thane-branch"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import('./thank-you-C0R2bKcd.mjs');
const Route$b = createFileRoute("/thank-you")({
  head: () => ({
    meta: [{
      title: "Thank You | Inquiry Submitted | Amigo Academy"
    }, {
      name: "description",
      content: "Thank you for contacting Amigo Academy. Our academic counselors will reach out to you shortly."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/thank-you"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import('./blog.index-PHV24PX2.mjs');
const Route$a = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await fetchBlogPosts();
    return {
      posts
    };
  },
  head: () => ({
    meta: [{
      title: "Aviation & Career Insights Blog | Amigo Academy"
    }, {
      name: "description",
      content: "Read expert articles, career advice, cabin crew guides, airport ground handling tips, and industry trends on the Amigo Academy blog."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import('./blog._slug-ihP4rkk2.mjs');
const Route$9 = createFileRoute("/blog/$slug")({
  loader: async ({
    params
  }) => {
    const post = await fetchBlogPostBySlug(params.slug);
    return {
      post,
      slug: params.slug
    };
  },
  head: ({
    loaderData
  }) => {
    var _a, _b, _c, _d;
    const title = ((_b = (_a = loaderData == null ? void 0 : loaderData.post) == null ? void 0 : _a.title) == null ? void 0 : _b.rendered) ? `${loaderData.post.title.rendered} | Amigo Academy Blog` : "Blog Post | Amigo Academy";
    const excerpt = ((_d = (_c = loaderData == null ? void 0 : loaderData.post) == null ? void 0 : _c.excerpt) == null ? void 0 : _d.rendered) ? loaderData.post.excerpt.rendered.replace(/<[^>]+>/g, "").trim() : "Read full article on Amigo Academy Blog.";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: excerpt
      }],
      links: [{
        rel: "canonical",
        href: `https://staging.amigoacademy.in/blog/${(loaderData == null ? void 0 : loaderData.slug) || ""}`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import('./career-guide.ai-data-science-LparPAsG.mjs');
const Route$8 = createFileRoute("/career-guide/ai-data-science")({
  head: () => ({
    meta: [{
      title: "AI & Data Science Career Guide | Amigo Academy"
    }, {
      name: "description",
      content: "Explore high-paying career opportunities in Artificial Intelligence, Machine Learning, and Data Science with Generative AI skills."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/career-guide/ai-data-science"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import('./career-guide.airport-ground-staff-CB7RLQ10.mjs');
const Route$7 = createFileRoute("/career-guide/airport-ground-staff")({
  head: () => ({
    meta: [{
      title: "Airport Ground Staff Career Guide | Amigo Academy"
    }, {
      name: "description",
      content: "Learn about Airport Ground Handling careers, duties, passenger service management, cargo operations, and airline recruitment after 12th."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/career-guide/airport-ground-staff"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import('./career-guide.cabin-crew-DyUXsl2T.mjs');
const Route$6 = createFileRoute("/career-guide/cabin-crew")({
  head: () => ({
    meta: [{
      title: "Air Hostess & Cabin Crew Career Guide | Amigo Academy"
    }, {
      name: "description",
      content: "Complete guide on how to become an Air Hostess or Cabin Crew member after 12th. Eligibility, salary expectations, physical requirements & hiring process."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/career-guide/cabin-crew"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import('./courses.index-CsHm3Gy-.mjs');
const Route$5 = createFileRoute("/courses/")({
  head: () => ({
    meta: [{
      title: "All Courses | Aviation, Hospitality & Tech | Amigo Academy"
    }, {
      name: "description",
      content: "Explore job-ready training programs in Air Hostess (Cabin Crew), Airport Ground Staff, and AI Data Science with Machine Learning."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/courses"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import('./courses.ai-data-science-with-generative-ai-machine-learning-XUNMrf4J.mjs');
const Route$4 = createFileRoute("/courses/ai-data-science-with-generative-ai-machine-learning")({
  head: () => ({
    meta: [{
      title: "AI & Data Science with Generative AI & Machine Learning | Amigo Academy"
    }, {
      name: "description",
      content: "Master Python, Machine Learning, Deep Learning, and Generative AI with hands-on projects and placement support at Amigo Academy."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/courses/ai-data-science-with-generative-ai-machine-learning"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import('./courses.air-hostess-cabin-crew-hospitality-management-BYBQxspF.mjs');
const Route$3 = createFileRoute("/courses/air-hostess-cabin-crew-hospitality-management")({
  head: () => ({
    meta: [{
      title: "Air Hostess & Cabin Crew Hospitality Management Course | Amigo Academy"
    }, {
      name: "description",
      content: "Professional Air Hostess and Cabin Crew training course in Mumbai. 100% placement assistance, mock flight simulator training, and soft skills grooming."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/courses/air-hostess-cabin-crew-hospitality-management"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import('./courses.airport-ground-staff-hospitality-management-ClCluwFJ.mjs');
const Route$2 = createFileRoute("/courses/airport-ground-staff-hospitality-management")({
  head: () => ({
    meta: [{
      title: "Airport Ground Staff & Hospitality Management Course | Amigo Academy"
    }, {
      name: "description",
      content: "Certified Airport Ground Staff & Hospitality Management course in Mumbai. Learn passenger handling, baggage service, ticketing & airport operations."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/courses/airport-ground-staff-hospitality-management"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import('./locations.index-CHrQPHQc.mjs');
const Route$1 = createFileRoute("/locations/")({
  head: () => ({
    meta: [{
      title: "Aviation & Tech Institutes Across Mumbai Locations | Amigo Academy"
    }, {
      name: "description",
      content: "Explore Amigo Academy course training centers across Powai, Bhandup, Mulund, Chembur, Vikhroli, and Kanjurmarg."
    }],
    links: [{
      rel: "canonical",
      href: "https://staging.amigoacademy.in/locations"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import('./locations._slug-DhrpHN64.mjs');
const Route = createFileRoute("/locations/$slug")({
  loader: async ({
    params
  }) => {
    const post = await fetchSEOPageBySlug(params.slug);
    return {
      post,
      slug: params.slug
    };
  },
  head: ({
    loaderData
  }) => {
    var _a, _b;
    const title = ((_b = (_a = loaderData == null ? void 0 : loaderData.post) == null ? void 0 : _a.title) == null ? void 0 : _b.rendered) ? `${loaderData.post.title.rendered} | Amigo Academy` : "Location Details | Amigo Academy";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `Find aviation, air hostess, ground staff, and tech training near ${(loaderData == null ? void 0 : loaderData.slug) || "your location"} at Amigo Academy.`
      }],
      links: [{
        rel: "canonical",
        href: `https://staging.amigoacademy.in/locations/${(loaderData == null ? void 0 : loaderData.slug) || ""}`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$s.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$t
});
const SlugRoute = Route$r.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => Route$t
});
const AboutUsRoute = Route$q.update({
  id: "/about-us",
  path: "/about-us",
  getParentRoute: () => Route$t
});
const AndheriBranchRoute = Route$p.update({
  id: "/andheri-branch",
  path: "/andheri-branch",
  getParentRoute: () => Route$t
});
const BranchesRoute = Route$o.update({
  id: "/branches",
  path: "/branches",
  getParentRoute: () => Route$t
});
const CareerGuidesRoute = Route$n.update({
  id: "/career-guides",
  path: "/career-guides",
  getParentRoute: () => Route$t
});
const ContactRoute = Route$m.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$t
});
const FranchiseRoute = Route$l.update({
  id: "/franchise",
  path: "/franchise",
  getParentRoute: () => Route$t
});
const GalleryRoute = Route$k.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$t
});
const GhatkoparBranchRoute = Route$j.update({
  id: "/ghatkopar-branch",
  path: "/ghatkopar-branch",
  getParentRoute: () => Route$t
});
const PlacementRoute = Route$i.update({
  id: "/placement",
  path: "/placement",
  getParentRoute: () => Route$t
});
const PrivacyPolicyRoute = Route$h.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$t
});
const RefundPolicyRoute = Route$g.update({
  id: "/refund-policy",
  path: "/refund-policy",
  getParentRoute: () => Route$t
});
const ScholarshipRoute = Route$f.update({
  id: "/scholarship",
  path: "/scholarship",
  getParentRoute: () => Route$t
});
const StudentSuccessRoute = Route$e.update({
  id: "/student-success",
  path: "/student-success",
  getParentRoute: () => Route$t
});
const TermsAndConditionsRoute = Route$d.update({
  id: "/terms-and-conditions",
  path: "/terms-and-conditions",
  getParentRoute: () => Route$t
});
const ThaneBranchRoute = Route$c.update({
  id: "/thane-branch",
  path: "/thane-branch",
  getParentRoute: () => Route$t
});
const ThankYouRoute = Route$b.update({
  id: "/thank-you",
  path: "/thank-you",
  getParentRoute: () => Route$t
});
const BlogIndexRoute = Route$a.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$t
});
const BlogSlugRoute = Route$9.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$t
});
const CareerGuideAiDataScienceRoute = Route$8.update({
  id: "/career-guide/ai-data-science",
  path: "/career-guide/ai-data-science",
  getParentRoute: () => Route$t
});
const CareerGuideAirportGroundStaffRoute = Route$7.update({
  id: "/career-guide/airport-ground-staff",
  path: "/career-guide/airport-ground-staff",
  getParentRoute: () => Route$t
});
const CareerGuideCabinCrewRoute = Route$6.update({
  id: "/career-guide/cabin-crew",
  path: "/career-guide/cabin-crew",
  getParentRoute: () => Route$t
});
const CoursesIndexRoute = Route$5.update({
  id: "/courses/",
  path: "/courses/",
  getParentRoute: () => Route$t
});
const CoursesAiDataScienceWithGenerativeAiMachineLearningRoute = Route$4.update({
  id: "/courses/ai-data-science-with-generative-ai-machine-learning",
  path: "/courses/ai-data-science-with-generative-ai-machine-learning",
  getParentRoute: () => Route$t
});
const CoursesAirHostessCabinCrewHospitalityManagementRoute = Route$3.update({
  id: "/courses/air-hostess-cabin-crew-hospitality-management",
  path: "/courses/air-hostess-cabin-crew-hospitality-management",
  getParentRoute: () => Route$t
});
const CoursesAirportGroundStaffHospitalityManagementRoute = Route$2.update({
  id: "/courses/airport-ground-staff-hospitality-management",
  path: "/courses/airport-ground-staff-hospitality-management",
  getParentRoute: () => Route$t
});
const LocationsIndexRoute = Route$1.update({
  id: "/locations/",
  path: "/locations/",
  getParentRoute: () => Route$t
});
const LocationsSlugRoute = Route.update({
  id: "/locations/$slug",
  path: "/locations/$slug",
  getParentRoute: () => Route$t
});
const rootRouteChildren = {
  IndexRoute,
  SlugRoute,
  AboutUsRoute,
  AndheriBranchRoute,
  BranchesRoute,
  CareerGuidesRoute,
  ContactRoute,
  FranchiseRoute,
  GalleryRoute,
  GhatkoparBranchRoute,
  PlacementRoute,
  PrivacyPolicyRoute,
  RefundPolicyRoute,
  ScholarshipRoute,
  StudentSuccessRoute,
  TermsAndConditionsRoute,
  ThaneBranchRoute,
  ThankYouRoute,
  BlogSlugRoute,
  CareerGuideAiDataScienceRoute,
  CareerGuideAirportGroundStaffRoute,
  CareerGuideCabinCrewRoute,
  CoursesAiDataScienceWithGenerativeAiMachineLearningRoute,
  CoursesAirHostessCabinCrewHospitalityManagementRoute,
  CoursesAirportGroundStaffHospitalityManagementRoute,
  LocationsSlugRoute,
  BlogIndexRoute,
  CoursesIndexRoute,
  LocationsIndexRoute
};
const routeTree = Route$t._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
  const router2 = createRouter$1({
    routeTree,
    scrollRestoration: true
  });
  return router2;
}
function getRouter() {
  return createRouter();
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRouter,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));

export { fetchSEOPageBySlug as a, submitContactForm as b, fetchBlogPosts as c, fetchSEOPages as d, fetchBlogPostBySlug as f, logoFooter as l, router as r, submitCounsellorForm as s };
//# sourceMappingURL=router-CBeBCufh.mjs.map
