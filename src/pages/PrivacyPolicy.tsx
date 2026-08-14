import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col bg-white">
            <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white lazy-section-visible">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-12 lg:mb-16">
                        <div className="flex items-center text-sm font-bold text-slate-400 mb-6 font-sans">
                            <span className="hover:text-[#e31e24] cursor-pointer transition-colors">Home</span>
                            <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[#e31e24]">Privacy Policy</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1c355e] mb-6 font-sans tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 text-[15px] sm:text-base font-medium">
                            Last updated: February 28, 2026
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="font-sans text-slate-600 text-[15px] sm:text-base leading-[1.8] space-y-12 lg:space-y-16">

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                1. Introduction
                            </h2>
                            <p className="mb-4">
                                Amigo Academy ("we", "us", "our" or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>
                            <p>
                                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-6 tracking-tight">
                                2. Information We Collect
                            </h2>
                            <div className="mb-8">
                                <h3 className="text-[20px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    2.1 Personal Information You Provide
                                </h3>
                                <p className="mb-4">
                                    We collect information you voluntarily provide, including:
                                </p>
                                <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-500">
                                    <li>Full name, email address, and phone number</li>
                                    <li>Educational background and qualifications</li>
                                    <li>Course preferences and enrollment information</li>
                                    <li>Payment and billing information</li>
                                    <li>Communications and feedback you send us</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[20px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    2.2 Automatically Collected Information
                                </h3>
                                <p className="mb-4">
                                    When you visit our website, we may automatically collect:
                                </p>
                                <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-500">
                                    <li>Device information (IP address, browser type, operating system)</li>
                                    <li>Usage data (pages visited, time spent, click patterns)</li>
                                    <li>Location information (approximate geographic location)</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-4">
                                We use the information we collect for various purposes:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-500">
                                <li>To process course enrollments and manage your account</li>
                                <li>To provide customer support and respond to inquiries</li>
                                <li>To send you educational content and course updates</li>
                                <li>To process payments and prevent fraud</li>
                                <li>To improve our website and services</li>
                                <li>To send marketing communications (with your consent)</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                4. Data Protection & Security
                            </h2>
                            <p className="mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-500">
                                <li>SSL encryption for data transmission</li>
                                <li>Secure password protection</li>
                                <li>Limited access to personal information</li>
                                <li>Regular security audits and updates</li>
                            </ul>
                            <p>
                                However, no internet transmission is completely secure. We cannot guarantee absolute security of your information.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                5. Sharing Your Information
                            </h2>
                            <p className="mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-500">
                                <li>With service providers who assist us in operating our website and conducting business</li>
                                <li>For course placement with partner companies (with your consent)</li>
                                <li>When required by law or to protect our legal rights</li>
                                <li>With your explicit consent for specific purposes</li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                6. Your Rights
                            </h2>
                            <p className="mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-500">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Request information about data we hold about you</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us at <a href="mailto:info@amigoacademy.in" className="text-[#e31e24] hover:underline">info@amigoacademy.in</a>.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                7. Cookies & Tracking
                            </h2>
                            <p>
                                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you use our site. You can control cookie settings through your browser preferences.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                8. Data Retention
                            </h2>
                            <p>
                                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time, subject to legal and business requirements.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                9. Changes to This Privacy Policy
                            </h2>
                            <p>
                                We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last updated" date above indicates when this policy was last revised. Your continued use of our Services constitutes your acceptance of the updated Privacy Policy.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100">
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                10. Contact Us
                            </h2>
                            <p className="mb-6">
                                If you have questions about this Privacy Policy or our privacy practices, please contact us:
                            </p>
                            <div className="space-y-3 font-medium text-slate-700">
                                <p className="font-bold text-[#1c355e]">Amigo Academy</p>
                                <p>Email: <a href="mailto:info@amigoacademy.in" className="text-[#e31e24] hover:underline font-normal">info@amigoacademy.in</a></p>
                                <p>Phone: <span className="text-[#e31e24] font-normal">+919987588932</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
