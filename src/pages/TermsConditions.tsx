import React from "react";

export default function TermsConditions() {
    return (
        <div className="flex flex-col bg-white">
            <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-12 lg:mb-16">
                        <div className="flex items-center text-sm font-bold text-slate-400 mb-6 font-sans">
                            <span className="hover:text-[#e31e24] cursor-pointer transition-colors">Home</span>
                            <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[#e31e24]">Terms & Conditions</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1c355e] mb-6 font-sans tracking-tight">
                            Terms & Conditions
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
                                1. About Amigo Academy
                            </h2>
                            <p className="mb-4">
                                Amigo Academy provides career-focused education and training programmes designed to help students develop professional skills and prepare for career opportunities in areas including aviation, Artificial Intelligence, Data Science, and related fields.
                            </p>
                            <p>
                                The information provided on this website is intended to help students and prospective students understand our courses, career options, training programmes, branches, admissions process, and related services.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                2. Use of Our Website
                            </h2>
                            <p className="mb-4">
                                You agree to use this website only for lawful purposes and in a manner that does not:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Violate any applicable law or regulation</li>
                                <li>Infringe the rights of Amigo Academy or any third party</li>
                                <li>Attempt to gain unauthorised access to the website or its systems</li>
                                <li>Interfere with the normal functioning of the website</li>
                                <li>Submit false, misleading, or fraudulent information</li>
                                <li>Use the website to distribute harmful or malicious content</li>
                            </ul>
                            <p>
                                Amigo Academy reserves the right to restrict or terminate access to the website where misuse or unauthorised activity is identified.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                3. Course Information
                            </h2>
                            <p className="mb-4">
                                We make reasonable efforts to ensure that information relating to courses, eligibility, duration, curriculum, training, facilities, placement support, scholarships, fees, and other programme details is accurate and up to date.
                            </p>
                            <p className="mb-4">
                                However, course structures, schedules, eligibility requirements, fees, batches, facilities, and other programme details may change from time to time.
                            </p>
                            <p>
                                The latest information confirmed by Amigo Academy at the time of admission or enrolment will apply. Students are encouraged to contact our admissions or counselling team for the latest information before making an enrolment decision.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                4. Eligibility and Admissions
                            </h2>
                            <p className="mb-4">
                                Meeting the eligibility information displayed on the website does not automatically guarantee admission. Admission may be subject to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Eligibility requirements</li>
                                <li>Document verification</li>
                                <li>Counselling</li>
                                <li>Course availability</li>
                                <li>Batch availability</li>
                                <li>Institutional requirements</li>
                                <li>Other applicable admission criteria</li>
                            </ul>
                            <p>
                                Amigo Academy reserves the right to determine admission eligibility in accordance with the applicable requirements for each programme.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                5. Course Fees and Payments
                            </h2>
                            <p className="mb-4">
                                Course fees, payment schedules, EMI options, scholarships, discounts, and other financial arrangements may vary depending on the programme and applicable offer.
                            </p>
                            <p className="mb-4">
                                Any fee or financial information displayed on the website should be treated as indicative unless specifically confirmed by Amigo Academy.
                            </p>
                            <p className="mb-4">
                                Before making a payment, students should confirm:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Total course fees</li>
                                <li>Applicable taxes, if any</li>
                                <li>Payment schedule</li>
                                <li>Scholarship or discount eligibility</li>
                                <li>EMI terms, where applicable</li>
                                <li>Refund or cancellation conditions</li>
                            </ul>
                            <p>
                                Any payment made towards a course will be subject to the applicable admission, fee, and refund policies communicated by Amigo Academy.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                6. Scholarships and Offers
                            </h2>
                            <p className="mb-4">
                                Amigo Academy may offer scholarships, discounts, EMI options, promotional offers, or other financial assistance from time to time.
                            </p>
                            <p className="mb-4">
                                Eligibility, availability, duration, and terms of such offers may vary.
                            </p>
                            <p className="mb-4">
                                A scholarship or promotional offer displayed on the website does not automatically guarantee that every student will qualify.
                            </p>
                            <p>
                                Students should contact Amigo Academy for the applicable eligibility criteria and terms before relying on any offer.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                7. Placement Support
                            </h2>
                            <p className="mb-4">
                                Amigo Academy may provide placement assistance, career guidance, interview preparation, employer connections, or other career support depending on the programme.
                            </p>
                            <p className="mb-4">
                                Placement support should not be interpreted as a guarantee of employment.
                            </p>
                            <p className="mb-4">
                                Actual employment opportunities may depend on factors including:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Student performance</li>
                                <li>Skills and qualifications</li>
                                <li>Interview performance</li>
                                <li>Employer requirements</li>
                                <li>Job availability</li>
                                <li>Industry conditions</li>
                                <li>Eligibility criteria specified by employers</li>
                                <li>Final hiring decisions are made by the respective employer.</li>
                            </ul>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                8. Career Information
                            </h2>
                            <p className="mb-4">
                                Career guides, blogs, salary information, industry insights, course information, and other educational content published on the website are provided for general informational and educational purposes.
                            </p>
                            <p className="mb-4">
                                Career outcomes, salaries, job opportunities, and industry demand may vary depending on individual skills, experience, location, employer, qualifications, and market conditions.
                            </p>
                            <p>
                                Information published on the website should not be considered a guarantee of a particular salary, job, promotion, or career outcome.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                9. Accuracy of Information
                            </h2>
                            <p className="mb-4">
                                We aim to provide accurate and useful information on our website.
                            </p>
                            <p className="mb-4">
                                However, information may occasionally contain errors, omissions, outdated information, or typographical inaccuracies.
                            </p>
                            <p>
                                Amigo Academy reserves the right to correct, update, modify, or remove website content at any time without prior notice.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                10. Intellectual Property
                            </h2>
                            <p className="mb-4">
                                Unless otherwise stated, the content available on this website is owned by or used by Amigo Academy with appropriate rights.
                            </p>
                            <p className="mb-4">
                                This includes, but is not limited to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Logos</li>
                                <li>Brand elements</li>
                                <li>Text</li>
                                <li>Images</li>
                                <li>Graphics</li>
                                <li>Videos</li>
                                <li>Course materials</li>
                                <li>Website design</li>
                                <li>Layouts</li>
                                <li>Illustrations</li>
                                <li>Articles</li>
                                <li>Other original content</li>
                            </ul>
                            <p>
                                You may not reproduce, copy, modify, distribute, publish, transmit, sell, or commercially exploit website content without prior written permission from Amigo Academy or the applicable rights holder.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                11. Website Content and Blog Articles
                            </h2>
                            <p className="mb-4">
                                Our blog articles, career guides, industry insights, and educational resources are created to help students make better-informed career decisions.
                            </p>
                            <p className="mb-4">
                                Although we make reasonable efforts to keep this content useful and relevant, industry conditions, job requirements, salaries, technologies, and career opportunities may change.
                            </p>
                            <p>
                                Readers should verify important career, admission, financial, or professional information with the appropriate source before making significant decisions.
                            </p>
                        </div>

                        {/* Section 12 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                12. Third-Party Links
                            </h2>
                            <p className="mb-4">
                                Our website may contain links to third-party websites, platforms, social media pages, or other external resources.
                            </p>
                            <p className="mb-4">
                                These links may be provided for convenience or additional information.
                            </p>
                            <p className="mb-4">
                                Amigo Academy does not control third-party websites and is not responsible for their:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Content</li>
                                <li>Availability</li>
                                <li>Privacy practices</li>
                                <li>Security</li>
                                <li>Policies</li>
                                <li>Products or services</li>
                            </ul>
                        </div>

                        {/* Section 13 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                13. Enquiry and Contact Forms
                            </h2>
                            <p className="mb-4">
                                Our website may contain links to third-party websites, platforms, social media pages, or other external resources. These links may be provided for convenience or additional information.
                            </p>
                            <p className="mb-4">
                                Amigo Academy does not control third-party websites and is not responsible for their:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                <li>Content</li>
                                <li>Availability</li>
                                <li>Privacy practices</li>
                                <li>Security</li>
                                <li>Policies</li>
                                <li>Products or services</li>
                            </ul>
                            <p>
                                Your use of third-party websites is subject to the terms and policies of those websites.
                            </p>
                        </div>

                        {/* Section 14 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                14. Privacy
                            </h2>
                            <p className="mb-4">
                                Your use of the website may involve the collection and processing of information submitted through enquiry forms, applications, counselling requests, or other interactions.
                            </p>
                            <p className="mb-4">
                                The collection and use of personal information is governed by our Privacy Policy.
                            </p>
                            <p>
                                You should review the Privacy Policy to understand how information submitted through the website is handled.
                            </p>
                        </div>

                        {/* Section 15 */}
                        <div>
                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                15. User-Submitted Information
                            </h2>
                            <p className="mb-4">
                                If you submit information, comments, testimonials, reviews, photographs, videos, or other material to Amigo Academy, you confirm that you have the necessary rights to provide such material.
                            </p>
                            <p className="mb-4">
                                You should not submit confidential, unlawful, defamatory, misleading, or infringing material through the website.
                            </p>
                            <p>
                                Where applicable, the use of testimonials, photographs, videos, or other student-related content will be subject to the appropriate consent and applicable policies.
                            </p>
                        </div>

                        {/* Section 16 */}
                        <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    16. Website Availability
                                </h2>
                                <p className="mb-4">
                                    We aim to keep the website accessible and functioning properly. However, uninterrupted availability cannot always be guaranteed. The website may occasionally become unavailable because of:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-500">
                                    <li>Maintenance</li>
                                    <li>Technical issues</li>
                                    <li>Server problems</li>
                                    <li>Software updates</li>
                                    <li>Security issues</li>
                                    <li>Network failures</li>
                                    <li>Circumstances beyond our reasonable control</li>
                                </ul>
                                <p>
                                    Amigo Academy may modify, suspend, or discontinue any part of the website or its functionality when necessary.
                                </p>
                            </div>

                            {/* Section 17 */}
                            <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    17. Limitation of Liability
                                </h2>
                                <p className="mb-4">
                                    To the extent permitted by applicable law, Amigo Academy shall not be responsible for losses or damages arising from reliance on general website information, temporary website unavailability, third-party websites, or circumstances outside our reasonable control.
                                </p>
                                <p>
                                    Nothing in these Terms & Conditions is intended to exclude or limit any rights or protections that cannot legally be excluded or limited under applicable law.
                                </p>
                            </div>

                            {/* Section 18 */}
                            <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    18. Indemnification
                                </h2>
                                <p className="mb-4">
                                    You agree to use the website responsibly and not engage in activities that may cause harm to Amigo Academy, its website, its systems, employees, representatives, students, or third parties.
                                </p>
                                <p>
                                    Where permitted by applicable law, you may be responsible for losses, claims, or expenses arising from your unlawful use of the website or violation of these Terms & Conditions.
                                </p>
                            </div>

                            {/* Section 19 */}
                            <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    19. Changes to These Terms
                                </h2>
                                <p className="mb-4">
                                    Amigo Academy may update these Terms & Conditions from time to time to reflect changes in:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-500">
                                    <li>Services</li>
                                    <li>Website functionality</li>
                                    <li>Business practices</li>
                                    <li>Legal or regulatory requirements</li>
                                    <li>Policies and procedures</li>
                                </ul>
                            </div>

                            {/* Section 20 */}
                            <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    20. Governing Law
                                </h2>
                                <p className="mb-4">
                                    These Terms & Conditions shall be governed by the applicable laws of India.
                                </p>
                                <p className="mb-4">
                                    Any disputes arising in connection with the use of this website or the services provided by Amigo Academy shall be subject to the jurisdiction of the courts having appropriate jurisdiction, subject to applicable law.
                                </p>
                                <p className="text-slate-500">
                                    Note: The exact jurisdiction clause should be confirmed by Amigo Academy's legal adviser before publication.
                                </p>
                            </div>

                            {/* Section 21 */}
                            <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    21. Contact Us
                                </h2>
                                <p className="mb-8">
                                    If you have questions regarding these Terms & Conditions, course information, admissions, or other website-related matters, you can contact us.
                                </p>
                                <div className="text-slate-600 mb-8 space-y-2">
                                    <p>Amigo Academy</p>
                                    <p>Phone / WhatsApp: +91 99875 88932</p>
                                    <p>Branches: Ghatkopar | Andheri | Thane</p>
                                    <p>Website: Amigo Academy</p>
                                </div>
                                <p>
                                    For course-specific questions, we recommend speaking with our career counsellors before making an admission decision.
                                </p>
                            </div>

                            {/* Important Information */}
                            <div>
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    Important Information
                                </h2>
                                <p className="mb-4">
                                    The information provided on this website is intended to help students explore education and career opportunities. Course availability, eligibility, fees, scholarships, schedules, and other programme details may change.
                                </p>
                                <p>
                                    Always confirm the latest information with Amigo Academy before enrolment or payment.
                                </p>
                            </div>

                            {/* Legal Note */}
                            <div className="pt-8 border-t border-slate-200">
                                <h2 className="text-2xl sm:text-[28px] font-bold text-[#1c355e] mb-4 tracking-tight">
                                    Legal note:
                                </h2>
                                <p className="mb-6">
                                    This is a website-content draft, not a substitute for legal advice.
                                </p>
                                <p className="mb-6">
                                    Before publishing, Amigo Academy should have the final Terms & Conditions reviewed against its actual admission agreement, fee/refund policy, scholarship terms, placement policy, business entity details, and applicable Indian requirements.
                                </p>
                                <p>
                                    India's Consumer Protection Act, 2019 applies to goods and services and includes protections relevant to online transactions; official government sources also maintain the current IT-law and digital-data framework. (Consumer Affairs)
                                </p>
                            </div>

                        </div>
                    </div>
            </section>
        </div>
    );
}
