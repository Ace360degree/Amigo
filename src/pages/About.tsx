import React from "react";

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const statistics = [
    { number: "10,000+", label: "Students Placed Successfully" },
    { number: "100%", label: "Placement Assistance Guarantee" },
    { number: "150+", label: "Global Airlines & Tech Recruiters" },
    { number: "₹4.5L - ₹9.2L", label: "Average Starting Salary Range" },
  ];

  const partners = [
    { name: "Indigo Airlines", logo: "✈️" },
    { name: "Air India", logo: "🇮🇳" },
    { name: "SpiceJet", logo: "🌶️" },
    { name: "Vistara", logo: "👑" },
    { name: "Qatar Airways", logo: "🇶🇦" },
    { name: "Emirates", logo: "🇦🇪" },
    { name: "Etihad Airways", logo: "✨" },
    { name: "GoFirst", logo: "⭐" },
  ];

  const studentSuccess = [
    {
      name: "Sneha Sharma",
      role: "Cabin Crew, Indigo Airlines",
      batch: "Aviation 2024 Batch",
      quote: "Amigo Academy transformed my confidence. The practical sessions in mock cabins prepared me perfectly for my airlines interviews. Getting placed before completing the course was a dream come true!",
      initial: "S"
    },
    {
      name: "Rahul Deshmukh",
      role: "Ground Operations, Qatar Airways",
      batch: "Aviation 2023 Batch",
      quote: "The recruiters at Amigo are extremely supportive. They guided me through group discussions, grooming sessions, and technical tests. I'm now based out of Doha working for a 5-star airline.",
      initial: "R"
    },
    {
      name: "Anjali Patil",
      role: "Airport Manager, Vistara",
      batch: "Airport Management 2024 Batch",
      quote: "A government-certified course combined with expert training gave me an edge in the interviews. The branches and training mockups are highly professional.",
      initial: "A"
    }
  ];

  return (
    <div className="flex flex-col space-y-20 pb-20">
      
      {/* Placements Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50/50 via-neutral-50 to-neutral-50 pt-16 pb-12 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 w-fit mx-auto">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-xs font-semibold text-indigo-800 uppercase tracking-wider">
              Official Placement Wing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-outfit font-bold tracking-tight text-neutral-900 leading-tight">
            Launch Your Career in the{" "}
            <span className="bg-gradient-to-r from-[#e31e24] to-indigo-600 bg-clip-text text-transparent">
              Sky & Aviation Industry
            </span>
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Our placement cells work hand-in-hand with leading airlines and hospitality partners to ensure that every student secures their dream job upon completion.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, i) => (
            <div key={i} className="bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-3xl sm:text-4xl font-outfit font-extrabold text-[#0b2f61] mb-2">{stat.number}</p>
              <p className="text-neutral-500 text-xs sm:text-sm font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Partners Grid */}
      <section className="bg-neutral-900 py-16 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-outfit font-bold">Where Our Alumni Work</h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Our graduates are employed at the world’s most prestigious airlines, luxury hotels, and travel corporations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-neutral-850 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-neutral-800 transition-colors">
                <span className="text-3xl">{partner.logo}</span>
                <span className="text-sm font-bold text-neutral-200">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-outfit font-bold">Success Stories from Amigo Academy</h2>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Read what our alumni say about their training and recruitment experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentSuccess.map((student, i) => (
            <div key={i} className="bg-white border border-neutral-200/50 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative hover:-translate-y-1 transition-transform duration-300">
              <div className="space-y-4 text-left">
                <span className="text-indigo-600 text-4xl font-serif">“</span>
                <p className="text-neutral-600 text-sm leading-relaxed italic">
                  {student.quote}
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold font-outfit">
                  {student.initial}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-neutral-900">{student.name}</h4>
                  <p className="text-[10px] text-neutral-400 font-semibold">{student.role} • {student.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Button to Contact */}
      <section className="max-w-4xl mx-auto px-6 w-full text-center">
        <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 flex flex-col items-center space-y-4">
          <h3 className="text-xl font-bold font-outfit text-[#0b2f61]">Want to get hired by top airlines?</h3>
          <p className="text-sm text-neutral-600 max-w-md">
            Our training coordinators can evaluate your profile and advise you on the best route to secure a high-paying airlines career.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Check Career Eligibility
          </button>
        </div>
      </section>

    </div>
  );
}
