import React, { useState } from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';
import logo1 from '../assets/logo1.png';
import qr from '../assets/qr.jpg';

export default function Landing() {
    const [openFaqs, setOpenFaqs] = useState([]);

    const scrollToEnroll = () => {
        document.getElementById('enroll-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const toggleFaq = (index) => {
        setOpenFaqs(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index) 
                : [...prev, index] 
        );
    };

    return (
        <div className="w-screen min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-200" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <div className="w-32 rounded-lg flex items-center justify-center">
                                <img src={logo1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Speak Smart Weekend
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-3xl mx-auto lg:mx-0">
                            2-day online bootcamp to speak with confidence, fix everyday grammar slips, crack interviews & win group discussions.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm sm:text-base text-gray-600">
                            <span className="bg-blue-50 px-3 py-1 rounded-full">📅 Dates: 11–12 Oct</span>
                            <span className="bg-blue-50 px-3 py-1 rounded-full">💻 Mode: Zoom</span>
                            <span className="bg-blue-50 px-3 py-1 rounded-full">⏱️ Total time: ~6 hours</span>
                            <span className="bg-blue-50 px-3 py-1 rounded-full">👥 Batch size: 25–35</span>
                        </div>
                    </div>

                    {/* Price Card */}
                    <div className="w-full lg:w-auto mx-auto lg:mx-0">
                        <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-cyan-400 max-w-xs mx-auto">
                            <div className="text-center mb-4">
                                <p className="text-sm text-gray-600 mb-2">Intro Price</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">₹100</span>
                                </div>
                            </div>
                            <button
                                onClick={scrollToEnroll}
                                className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 font-bold text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 mb-3"
                            >
                                Enroll Now
                            </button>
                            <p className="text-xs text-center text-gray-500">
                                ⚡ Limited seats · First-come first-served
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Curriculum & Schedule
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Day 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 hover:cursor-pointer hover:scale-105">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Day 1 - Saturday</h3>
                            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">2 sessions x 90 mins</span>
                        </div>

                        <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mb-4">The Foundation</h4>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Beat stage fear with mindset, breathing & grounding tools.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Project confidence using the <em>Preparation → Practice → Presence</em> approach.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Grammar that speaks: tense fixes, subject-verb agreement, transitions.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Hands-on: Extempore + "Spot & Fix" grammar game.</span>
                            </li>
                        </ul>

                        <div className="border-t pt-4">
                            <p className="font-semibold text-gray-800 mb-2">Sessions</p>
                            <p className="text-sm text-gray-700 mb-2">• Building Confidence & Overcoming Fear — mindset, quick hacks, extempore practice.</p>
                            <p className="text-sm text-gray-700">• Grammar that Speaks — practical fixes + live "Spot & Fix".</p>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 hover:cursor-pointer hover:scale-105">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Day 2 - Sunday</h3>
                            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">2 sessions x 90 mins</span>
                        </div>

                        <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mb-4">Career Communication</h4>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Answer "Tell me about yourself" with clarity using STAR.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Virtual interview do's & don'ts that actually matter.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Mock interviews in pairs with rapid feedback.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2 mt-1">•</span>
                                <span className="text-gray-700">Group Discussion drills with a simple scoring rubric.</span>
                            </li>
                        </ul>

                        <div className="border-t pt-4">
                            <p className="font-semibold text-gray-800 mb-2">Sessions</p>
                            <p className="text-sm text-gray-700 mb-2">• Mastering Interviews — STAR, TMAY structure, mock interview.</p>
                            <p className="text-sm text-gray-700">• Communication Games & Real-Life Practice — extempore, grammar game, GD with scoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Join & What You Need */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Who Should Join */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Who should join</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 mt-1 text-xl">•</span>
                                <span className="text-gray-700">Students & freshers preparing for placements.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 mt-1 text-xl">•</span>
                                <span className="text-gray-700">Early-career professionals polishing speaking skills.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 mt-1 text-xl">•</span>
                                <span className="text-gray-700">Anyone who freezes on camera or in GDs.</span>
                            </li>
                        </ul>
                    </div>

                    {/* What You Need */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">What you need</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 mt-1 text-xl">•</span>
                                <span className="text-gray-700">Zoom on laptop/phone, stable internet.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 mt-1 text-xl">•</span>
                                <span className="text-gray-700">Mic + camera (recommended for practice rooms).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 mt-1 text-xl">•</span>
                                <span className="text-gray-700">Willingness to speak & try!</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Enrollment Section */}
            <section id="enroll-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Enroll Now
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Step 1 - Payment */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 1 — Pay via UPI</h3>
                        <p className="text-gray-700 mb-6">Send ₹100 to the UPI ID below or scan the QR code.</p>

                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-gray-600 mb-2">UPI ID:</p>
                            <p className="text-xl font-mono font-semibold text-blue-600 break-all">ajveer.choudhry@oksbi</p>
                        </div>

                        <div className="flex justify-center mb-4">
                            {/* <div className="bg-white p-4 rounded-lg border-2 border-gray-200"> */}
                            <img
                                src={qr}
                                alt="UPI QR Code for Payment"
                                className="w-96 h-96 object-contain rounded"
                            />
                            {/* </div> */}
                        </div>

                        <p className="text-sm text-gray-600 text-center italic">
                            💡 Add your name in the payment note for faster verification.
                        </p>
                    </div>

                    {/* Step 2 - Google Form */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 2 — Submit Google Form</h3>
                        <p className="text-gray-700 mb-6">
                            Share your details & upload payment screenshot. You'll get the Zoom link on WhatsApp/email within a few hours.
                        </p>

                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmKVYfSSSGoHJ3cTK2xUc28MaDvsV_s-xYsdmo5FhRrJLhPw/viewform?usp=dialog', '_blank')}
                            className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 mb-6 text-lg"
                        >
                            Open Registration Form
                        </button>

                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="flex items-start">
                                <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">•</span>
                                <span>Seats are confirmed only after form submission.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">•</span>
                                <span>Fee is non-refundable; transfer allowed to next batch if you inform 24h prior.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">FAQs</h2>

                <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button
                            onClick={() => toggleFaq(0)}
                            className="w-full p-6 bg-gray-50 text-left flex items-center justify-between transition duration-300 focus:outline-none"
                        >
                            <h4 className="text-lg font-semibold text-gray-900">Will sessions be recorded?</h4>
                            <ChevronDown
                                className={`text-gray-600 transition-transform duration-300 ${openFaqs.includes(0) ? 'rotate-180' : ''}`}
                                size={24}
                            />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqs.includes(0) ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="text-gray-700 px-6 pt-4 pb-8">
                                Core sections may be recorded, but most learning happens in live practice rooms. Recordings (if any) are shared only with participants.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button
                            onClick={() => toggleFaq(1)}
                            className="w-full p-6 bg-gray-50 text-left flex items-center justify-between transition duration-300 focus:outline-none"
                        >
                            <h4 className="text-lg font-semibold text-gray-900">Do I get a certificate?</h4>
                            <ChevronDown
                                className={`text-gray-600 transition-transform duration-300 ${openFaqs.includes(1) ? 'rotate-180' : ''}`}
                                size={24}
                            />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqs.includes(1) ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="text-gray-700 px-6 pt-4 pb-8">
                                Yes, an e-certificate of participation from Grow100x.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button
                            onClick={() => toggleFaq(2)}
                            className="w-full p-6 bg-gray-50 text-left flex items-center justify-between transition duration-300 focus:outline-none"
                        >
                            <h4 className="text-lg font-semibold text-gray-900">How are breakout rooms managed?</h4>
                            <ChevronDown
                                className={`text-gray-600 transition-transform duration-300 ${openFaqs.includes(2) ? 'rotate-180' : ''}`}
                                size={24}
                            />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqs.includes(2) ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="text-gray-700 px-6 pt-4 pb-8">
                                2-3 facilitators moderate for timing and feedback. Expect 5–8 participants per room.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-gray-50 to-white text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-4">
                        <p className="text-sm text-black mb-4">© 2025 Grow100x.ai All rights reserved.</p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                            <span className="text-black">Connect with me:</span>
                            <a href="https://wa.me/917983151059" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition">
                                <Phone
                                    size={16}
                                    style={{
                                        background: 'linear-gradient(to right, #60a5fa, #22d3ee, #4ade80)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">WhatsApp: +91-7983151059</span>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ajveer.choudhry@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition">
                                <Mail
                                    size={16}
                                    style={{
                                        background: 'linear-gradient(to right, #60a5fa, #22d3ee, #4ade80)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">Email: ajveer.choudhry@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}