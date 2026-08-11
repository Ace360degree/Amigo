import React from "react";
import { useNavigate } from "react-router-dom";
import Bloghero from "../assets/img/blogheroimgy.png";

import imgAviation1 from "../assets/img/BlogInsights1.png";
import imgAviation2 from "../assets/img/BlogInsights2.png";
import imgAviation3 from "../assets/img/BlogInsights3.png";
import imgAi1 from "../assets/img/BlogInsights4.png";
import imgAi2 from "../assets/img/BlogInsights5.png";
import imgAi3 from "../assets/img/BlogInsights6.png";
import imgCareer1 from "../assets/img/BlogInsights7.png";
import imgCareer2 from "../assets/img/BlogInsights8.png";
import imgCareer3 from "../assets/img/BlogInsights9.png";
import imgStory1 from "../assets/img/BlogInsights10.png";
import imgStory2 from "../assets/img/BlogInsights11.png";
import imgStory3 from "../assets/img/BlogInsights12.png";

const blogCategories = [
    {
        title: "Aviation Insights",
        posts: [
            {
                title: "How to Become a Cabin Crew After 12th: A Complete Guide",
                date: "May 24, 2026",
                readTime: "8 min read",
                image: imgAviation1
            },
            {
                title: "Cabin Crew Eligibility, Skills & Requirements Explained",
                date: "May 20, 2026",
                readTime: "5 min read",
                image: imgAviation2
            },
            {
                title: "Airport Ground Staff Career Guide: Roles, Salary & Growth",
                date: "May 16, 2026",
                readTime: "5 min read",
                image: imgAviation3
            }
        ]
    },
    {
        title: "AI & Technology",
        posts: [
            {
                title: "Top AI Skills to Learn in 2026 for a Future-Ready Career",
                date: "Aug 12, 2026",
                readTime: "5 min read",
                image: imgAi1
            },
            {
                title: "AI vs Machine Learning vs Data Science: What's the Difference?",
                date: "Aug 1, 2026",
                readTime: "15 min read",
                image: imgAi2
            },
            {
                title: "Top AI Tools Every Student Should Know in 2026",
                date: "Aug 1, 2026",
                readTime: "15 min read",
                image: imgAi3
            }
        ]
    },
    {
        title: "Career Development",
        posts: [
            {
                title: "Interview Preparation Tips That Actually Work",
                date: "Aug 10, 2026",
                readTime: "8 min read",
                image: imgCareer1
            },
            {
                title: "How to Write a Resume That Gets You Hired",
                date: "Aug 5, 2026",
                readTime: "12 min read",
                image: imgCareer2
            },
            {
                title: "Top 10 Soft Skills Employers Look For In Freshers",
                date: "July 12, 2026",
                readTime: "10 min read",
                image: imgCareer3
            }
        ]
    },
    {
        title: "Student Stories & Academy Updates",
        posts: [
            {
                title: "Amigo Academy Hosts Aviation Career Workshop",
                date: "July 10, 2026",
                readTime: "6 min read",
                image: imgStory1
            },
            {
                title: "Highlights from Amigo Academy Annual Seminar 2026",
                date: "Aug 5, 2026",
                readTime: "7 min read",
                image: imgStory2
            },
            {
                title: "Life at Amigo Academy: Inside The Classroom",
                date: "Aug 12, 2026",
                readTime: "8 min read",
                image: imgStory3
            }
        ]
    }
];

export default function Blog() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-white">
            <section className="relative w-full min-h-[500px] lg:min-h-[600px] bg-white overflow-hidden flex items-center">

                {/* Right Background Image Container (Visible on large screens, faded behind overlay) */}
                <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[70%] h-full z-0">
                    <img
                        src={Bloghero}
                        alt="Amigo Academy Blog"
                        className="w-full h-full object-cover object-right"
                    />
                </div>

                {/* Content Area */}
                <div className="max-w-7xl mx-auto w-full px-6 pt-12 pb-32 lg:py-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Heading and Text */}
                    <div className="lg:col-span-6 flex flex-col space-y-6 text-left items-start justify-center">

                        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-[#0f2a4a] leading-[1.12]">
                            Insights, Stories <br />& Resources
                        </h1>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                            Stay informed with articles covering aviation, Artificial Intelligence, career development, student success stories, and updates from Amigo Academy. Whether you're exploring career opportunities, preparing for interviews, or looking for industry insights, our blog is here to help you learn beyond the classroom.
                        </p>

                        <button
                            onClick={() => {
                                const element = document.getElementById("blogPosts");
                                element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group focus:outline-none"
                        >
                            Explore Latest Articles

                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>

                </div>

            </section>

            {/* Blog Categories Section */}
            <section id="blogPosts" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                    {blogCategories.map((category, catIdx) => (
                        <div key={catIdx}>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c355e] mb-8 font-sans tracking-tight">
                                {category.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.posts.map((post, postIdx) => (
                                    <div key={postIdx} className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">

                                        {/* Image */}
                                        <div className="h-[180px] sm:h-[200px] w-full overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0f2a4a] mb-4 leading-[1.4] line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <div className="mt-auto text-[12px] text-slate-500 font-medium flex items-center">
                                                <span>{post.date}</span>
                                                <span className="mx-2">•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

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