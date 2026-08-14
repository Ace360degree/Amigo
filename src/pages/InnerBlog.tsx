import React from "react";
import innerBlogImg from "../assets/img/innerblogimg.png";
import innerBlogImg1 from "../assets/img/innerblogimg2.png"
import imgAviation3 from "../assets/img/BlogInsights3.png";
import imgAi1 from "../assets/img/BlogInsights4.png";
import imgAviation2 from "../assets/img/BlogInsights2.png";

export default function InnerBlog() {
    return (
        <div className="flex flex-col bg-white">

             {/* Inner Blog Hero Section */}
            <section className="pt-6 pb-2 lg:pt-32 lg:pb-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-6 lg:mb-12">
                        <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2a4a] mb-4 lg:mb-6 font-sans leading-tight">
                            How to Become a Cabin Crew<br className="hidden sm:block" /> After 12th: A Complete Guide
                        </h1>
                        <p className="text-slate-500 text-[11px] sm:text-base leading-relaxed lg:leading-[1.8] font-medium max-w-3xl mx-auto">
                            If you're interested in building a career in aviation after completing 12th, becoming a Cabin Crew professional can be an exciting career option. This guide explains the eligibility requirements, skills, training, career opportunities, and steps involved in starting a Cabin Crew career.
                        </p>
                    </div>

                    {/* Author & Share */}
                    <div className="flex flex-row items-center justify-between border-b border-slate-100 pb-3 mb-4 lg:pb-5 lg:mb-8 gap-2">

                        {/* Author Info */}
                        <div className="flex flex-col text-left">
                            <span className="text-xs sm:text-[15px] font-bold text-[#0f2a4a] mb-0.5">Amigo Academy</span>
                            <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium flex items-center">
                                <span>July 24, 2025</span>
                                <span className="mx-1.5 sm:mx-2">•</span>
                                <span>8 min read</span>
                            </div>
                        </div>

                        {/* Share Icons */}
                        <div className="flex items-center gap-1.5 sm:gap-3 text-slate-500">
                            <button className="p-1 sm:p-2 hover:bg-slate-50 rounded-full transition-colors group">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#0f2a4a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </button>
                            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                            <button className="p-1 sm:p-2 hover:bg-slate-50 rounded-full transition-colors group">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#0f2a4a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-sm mb-6 sm:mb-16">
                        <img
                            src={innerBlogImg}
                            alt="Cabin Crew Professional"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="max-w-3xl mx-auto font-sans text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-12">

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                1. Overview of Cabin Crew Career
                            </h2>
                            <p className="mb-4">
                                Cabin Crew professionals are the face of the airline. They ensure passenger safety, provide exceptional customer service, and make every journey comfortable and enjoyable.
                            </p>
                            <p>
                                It is a dynamic career offering opportunities to travel, meet new people, and grow professionally.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                2. Eligibility Criteria
                            </h2>
                            <p className="mb-4">
                                While requirements may vary slightly between airlines, here are some general eligibility criteria to become a Cabin Crew professional after 12th:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>12th pass from a recognised board</li>
                                <li>Age requirements may vary by airline</li>
                                <li>Minimum height requirements may vary by airline and role</li>
                                <li>Good communication skills in English</li>
                                <li>Additional language skills can be an advantage</li>
                                <li>Physically fit and medically suitable</li>
                                <li>Pleasant personality and confident attitude</li>
                                <li>Professional grooming and presentation</li>
                            </ul>
                            <p className="text-sm italic text-slate-500">
                                Students should always verify the latest eligibility requirements directly with the airline before applying.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                3. Skills Required
                            </h2>
                            <p className="mb-6">
                                Airlines look for candidates who are not only qualified but also well-groomed, confident, and service-oriented.
                            </p>
                            <div className="space-y-4">
                                <p><strong className="text-[#0f2a4a]">Communication Skills:</strong> Clear and confident communication is essential when interacting with passengers, colleagues, and airline teams.</p>
                                <p><strong className="text-[#0f2a4a]">Customer Service Mindset:</strong> Cabin Crew professionals need to understand passenger needs and provide helpful, professional service throughout the journey.</p>
                                <p><strong className="text-[#0f2a4a]">Teamwork & Adaptability:</strong> Cabin Crew members work closely with other crew members and must adapt quickly to changing situations.</p>
                                <p><strong className="text-[#0f2a4a]">Problem-Solving Ability:</strong> The ability to remain calm and find practical solutions is important when dealing with passenger concerns or unexpected situations.</p>
                                <p><strong className="text-[#0f2a4a]">Calm & Positive Attitude:</strong> Cabin Crew professionals need to maintain professionalism and composure, especially during challenging situations.</p>
                            </div>
                        </div>

                        {/* Inner Image */}
                        <div className="w-full rounded-2xl overflow-hidden shadow-sm my-16">
                            <img
                                src={innerBlogImg1}
                                alt="Cabin Crew Training"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                4. Training & Certification
                            </h2>
                            <p className="mb-4">
                                Professional training can help students become more prepared for opportunities in the aviation industry.
                            </p>
                            <p className="mb-4">
                                At Amigo Academy, Cabin Crew training focuses on areas such as:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6">
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
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                5. Career Opportunities
                            </h2>
                            <p className="mb-4">
                                After completing appropriate training, students can explore opportunities across different customer-facing and aviation-related roles.
                            </p>
                            <p className="mb-2 font-bold text-[#0f2a4a]">Potential Career Roles</p>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>Cabin Crew</li>
                                <li>Flight Attendant</li>
                                <li>Air Hostess</li>
                                <li>Customer Service Executive</li>
                                <li>Airport Ground Staff</li>
                                <li>Airport Operations</li>
                            </ul>
                            <p className="text-sm italic text-slate-500">
                                Career opportunities and job responsibilities vary depending on the employer, role, and experience.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                6. Salary & Career Growth
                            </h2>
                            <p className="mb-4">
                                Cabin Crew salaries can vary depending on the airline, location, experience, role, and other factors. As professionals gain experience and take on greater responsibilities, they may have opportunities for career growth within the aviation industry.
                            </p>
                            <p>
                                Career progression can include opportunities to move into senior Cabin Crew positions and other airline-related roles.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-2xl sm:text-[26px] font-bold text-[#1c355e] mb-6 tracking-tight">
                                7. How to Become a Cabin Crew After 12th - Step by Step
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">Step 1: Check the eligibility criteria</h3>
                                    <p>Understand the requirements of the airlines and roles you're interested in.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">Step 2: Improve communication and personality skills</h3>
                                    <p>Develop your communication, confidence, grooming, customer-service, and interpersonal skills.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">Step 3: Enrol in a professional Cabin Crew training programme</h3>
                                    <p>Choose training that provides practical knowledge and prepares you for the aviation industry.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">Step 4: Prepare for airline interviews</h3>
                                    <p>Work on interview preparation, presentation, communication, and confidence.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">Step 5: Complete the required selection process</h3>
                                    <p>Depending on the airline, the process may include interviews, assessments, medical checks, and other selection stages.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">Step 6: Start your career in the aviation industry</h3>
                                    <p>Once selected, begin your professional journey and continue developing your skills and experience.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* CTA Banner Section */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-[#122e5a] to-[#1c4485] rounded-3xl p-10 lg:p-16 text-center shadow-lg relative overflow-hidden">

                        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-6 font-sans tracking-tight">
                                Your Dream Career Starts Here
                            </h2>
                            <p className="text-blue-100 text-[15px] sm:text-base leading-[1.8] mb-10 max-w-2xl">
                                Get expert guidance, industry-focused training, and placement support to help you move confidently towards your career goals.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                                {/* Primary Button */}
                                <button className="w-full sm:w-auto bg-white text-[#122e5a] font-bold text-[14px] sm:text-[15px] py-4 px-8 rounded-lg shadow-md hover:bg-slate-50 transition-colors inline-flex justify-center items-center gap-2 group">
                                    Talk to Counselor Now
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                {/* Secondary Button */}
                                <button className="w-full sm:w-auto bg-transparent border border-white/40 text-white hover:bg-white/10 font-bold text-[14px] sm:text-[15px] py-4 px-8 rounded-lg transition-colors inline-flex justify-center items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c355e] mb-12 font-sans tracking-tight">
                        More Articles You May Like
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

                        {/* Card 1 */}
                        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                            <div className="h-[180px] sm:h-[200px] w-full overflow-hidden">
                                <img src={imgAviation3} alt="Airport Ground Staff" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0f2a4a] mb-4 leading-[1.4] line-clamp-2">
                                    Airport Ground Staff Career Guide: Roles, Salary & Growth
                                </h3>
                                <div className="mt-auto text-[12px] text-slate-500 font-medium flex items-center">
                                    <span>July 16, 2025</span>
                                    <span className="mx-2">•</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                            <div className="h-[180px] sm:h-[200px] w-full overflow-hidden">
                                <img src={imgAi1} alt="Top AI Skills" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0f2a4a] mb-4 leading-[1.4] line-clamp-2">
                                    Top AI Skills to Learn in 2025 for a Future-Ready Career
                                </h3>
                                <div className="mt-auto text-[12px] text-slate-500 font-medium flex items-center">
                                    <span>Aug 12, 2025</span>
                                    <span className="mx-2">•</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                            <div className="h-[180px] sm:h-[200px] w-full overflow-hidden">
                                <img src={imgAviation2} alt="Cabin Crew Eligibility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0f2a4a] mb-4 leading-[1.4] line-clamp-2">
                                    Cabin Crew Eligibility, Skills & Requirements Explained
                                </h3>
                                <div className="mt-auto text-[12px] text-slate-500 font-medium flex items-center">
                                    <span>June 20, 2025</span>
                                    <span className="mx-2">•</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
