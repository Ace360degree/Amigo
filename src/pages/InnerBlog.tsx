import React from "react";
import { useNavigate } from "react-router-dom";
import innerBlogImg from "../assets/img/innerblogimg.png";
import innerBlogImg1 from "../assets/img/innerblogimg2.png";
import imgAviation3 from "../assets/img/BlogInsights3.png";
import imgAi1 from "../assets/img/BlogInsights4.png";
import imgAviation2 from "../assets/img/BlogInsights2.png";

export default function InnerBlog() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white">
      {/* Inner Blog Header & Hero Section */}
      <section className="pt-10 pb-6 sm:pt-16 sm:pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b2f61] text-center font-sans leading-[1.2] mb-6 tracking-tight">
            How to Become a Cabin Crew<br className="hidden sm:block" /> After 12th: A Complete Guide
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed text-center font-medium max-w-2xl mx-auto mb-10">
            If you're interested in building a career in aviation after completing 12th, becoming a Cabin Crew professional can be an exciting career option. This guide explains the eligibility requirements, skills, training, career opportunities, and steps involved in starting a Cabin Crew career.
          </p>

          {/* Author & Social Share Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8 sm:mb-12">
            {/* Author Info */}
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-[#0b2f61]">Amigo Academy</span>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium flex items-center mt-0.5">
                <span>July 24 2005</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183a7d] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm mb-12 sm:mb-16">
            <img
              src={innerBlogImg}
              alt="Cabin Crew Professional"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed space-y-10 sm:space-y-12">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-3 tracking-tight">
              1. Overview of Cabin Crew Career
            </h2>
            <p className="mb-3">
              Cabin Crew professionals are the face of the airline. They ensure passenger safety, provide exceptional customer service, and make every journey comfortable and enjoyable.
            </p>
            <p>
              It is a dynamic career offering opportunities to travel, meet new people, and grow professionally.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-3 tracking-tight">
              2. Eligibility Criteria
            </h2>
            <p className="mb-3">
              While requirements may vary slightly between airlines, here are some general eligibility criteria to become a Cabin Crew professional after 12th:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-600 font-medium">
              <li>12th pass (from a recognised board)</li>
              <li>Age requirements may vary by airline</li>
              <li>Minimum height requirements may vary by airline and role</li>
              <li>Good communication skills in English</li>
              <li>Additional language skills can be an advantage</li>
              <li>Physically fit and medically suitable</li>
              <li>Pleasant personality and confident attitude</li>
              <li>Professional grooming and presentation</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 font-medium italic mt-2">
              Students should always verify the latest eligibility requirements directly with the airline before applying.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-3 tracking-tight">
              3. Skills Required
            </h2>
            <p className="mb-4">
              Airlines look for candidates who are not only qualified but also well-groomed, confident, and service-oriented.
            </p>
            <div className="space-y-3">
              <p>
                <strong className="text-[#0b2f61] font-bold">Communication Skills:</strong> Clear and confident communication is essential when interacting with passengers, colleagues, and airline teams.
              </p>
              <p>
                <strong className="text-[#0b2f61] font-bold">Customer Service Mindset:</strong> Cabin Crew professionals need to understand passenger needs and provide helpful, professional service throughout the journey.
              </p>
              <p>
                <strong className="text-[#0b2f61] font-bold">Teamwork & Adaptability:</strong> Cabin Crew members work closely with other crew members and must adapt quickly to changing situations.
              </p>
              <p>
                <strong className="text-[#0b2f61] font-bold">Problem-Solving Ability:</strong> The ability to remain calm and find practical solutions is important when dealing with passenger concerns or unexpected situations.
              </p>
              <p>
                <strong className="text-[#0b2f61] font-bold">Calm & Positive Attitude:</strong> Cabin Crew professionals need to maintain professionalism and composure, especially during challenging situations.
              </p>
            </div>
          </div>

          {/* Middle Inline Image */}
          <div className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm my-10 sm:my-14">
            <img
              src={innerBlogImg1}
              alt="Cabin Crew Training & Service"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-3 tracking-tight">
              4. Training & Certification
            </h2>
            <p className="mb-3">
              Professional training can help students become more prepared for opportunities in the aviation industry.
            </p>
            <p className="mb-3 font-semibold text-[#0b2f61]">
              At Amigo Academy, Cabin Crew training focuses on areas such as:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mb-4 text-slate-600 font-medium">
              <li>Aviation & Airline Industry Knowledge</li>
              <li>Safety & Emergency Procedures</li>
              <li>In-Flight Service Training</li>
              <li>Grooming, Etiquette & Personality Development</li>
              <li>Communication & Soft Skills</li>
              <li>Interview Preparation & Mock Sessions</li>
            </ul>
            <p>
              The objective is to help students develop the professional knowledge, confidence, communication skills, and practical understanding required for aviation careers.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-3 tracking-tight">
              5. Career Opportunities
            </h2>
            <p className="mb-3">
              After completing appropriate training, students can explore opportunities across different customer-facing and aviation-related roles.
            </p>
            <p className="mb-2 font-bold text-[#0b2f61]">Potential Career Roles</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-600 font-medium">
              <li>Cabin Crew</li>
              <li>Flight Attendant</li>
              <li>Air Hostess</li>
              <li>Customer Service Executive</li>
              <li>Airport Ground Staff</li>
              <li>Airport Operations</li>
              <li>Career opportunities and job responsibilities vary depending on the employer, role, and experience.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-3 tracking-tight">
              6. Salary & Career Growth
            </h2>
            <p className="mb-3">
              Cabin Crew salaries can vary depending on the airline, location, experience, role, and other factors. As professionals gain experience and take on greater responsibilities, they may have opportunities for career growth within the aviation industry.
            </p>
            <p>
              Career progression can include opportunities to move into senior Cabin Crew positions and other airline-related roles.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2f61] mb-4 tracking-tight">
              7. How to Become a Cabin Crew After 12th – Step by Step
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#0b2f61] text-base mb-1">Step 1: Check the eligibility criteria</h3>
                <p>Understand the requirements of the airlines and roles you're interested in.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0b2f61] text-base mb-1">Step 2: Improve communication and personality skills</h3>
                <p>Develop your communication, confidence, grooming, customer-service, and interpersonal skills.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0b2f61] text-base mb-1">Step 3: Enrol in a professional Cabin Crew training programme</h3>
                <p>Choose training that provides practical knowledge and prepares you for the aviation industry.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0b2f61] text-base mb-1">Step 4: Prepare for airline interviews</h3>
                <p>Work on interview preparation, presentation, communication, and confidence.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0b2f61] text-base mb-1">Step 5: Complete the required selection process</h3>
                <p>Depending on the airline, the process may include interviews, assessments, medical checks, and other selection stages.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0b2f61] text-base mb-1">Step 6: Start your career in the aviation industry</h3>
                <p>Once selected, begin your professional journey and continue developing your skills and experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card Section */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b2f61] rounded-[28px] p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white mb-3 font-sans tracking-tight">
                Your Dream Career Starts Here
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
                Get expert guidance, industry-focused training, and placement support to help you move confidently towards your career goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                  className="w-full sm:w-auto bg-white text-[#0b2f61] hover:bg-slate-100 font-bold text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-md transition-all active:scale-95 inline-flex justify-center items-center gap-2 cursor-pointer focus:outline-none"
                >
                  Talk to Counselor Now ➔
                </button>

                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                  className="w-full sm:w-auto bg-transparent border border-white/40 text-white hover:bg-white/10 font-bold text-xs sm:text-sm py-3.5 px-8 rounded-full transition-all active:scale-95 inline-flex justify-center items-center gap-2 cursor-pointer focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Brochure (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2f61] mb-10 font-sans tracking-tight">
            More Articles You May Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Airport Ground Staff Career Guide: Roles, Salary & Growth",
                date: "July 16 2005",
                readTime: "5 min read",
                img: imgAviation3,
              },
              {
                title: "Top AI Skills to Learn in 2025 for a Future-Ready Career",
                date: "Aug 12 2005",
                readTime: "5 min read",
                img: imgAi1,
              },
              {
                title: "Cabin Crew Eligibility, Skills & Requirements Explained",
                date: "June 20 2005",
                readTime: "5 min read",
                img: imgAviation2,
              },
            ].map((post, idx) => (
              <div
                key={idx}
                onClick={() => {
                  navigate("/how-to-become-a-cabin-crew-after-12th");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
              >
                <div className="h-[180px] w-full overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-[#0b2f61] mb-3 leading-snug line-clamp-2 group-hover:text-[#e31e24] transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto text-xs text-slate-400 font-medium flex items-center">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
