import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, ChevronDown, Target, BookOpen, Users, CheckSquare } from 'lucide-react';
import logo1 from '../assets/logo1.png';
import qr from '../assets/qr.jpg';
import day1 from '../assets/day1.jpg';
import day2 from '../assets/day2.jpg';

export default function Landing() {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [visibleElements, setVisibleElements] = useState(new Set());

    // Create refs for each section
    const heroRef = useRef(null);
    const curriculumRef = useRef(null);
    const day1Ref = useRef(null);
    const day2Ref = useRef(null);
    const whoShouldJoinRef = useRef(null);
    const whatYouNeedRef = useRef(null);
    const enrollRef = useRef(null);
    const faqRef = useRef(null);
    const footerRef = useRef(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleElements(prev => new Set([...prev, entry.target.id]));
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = [
            { ref: heroRef, id: 'hero' },
            { ref: curriculumRef, id: 'curriculum' },
            { ref: day1Ref, id: 'day1' },
            { ref: day2Ref, id: 'day2' },
            { ref: whoShouldJoinRef, id: 'who-should-join' },
            { ref: whatYouNeedRef, id: 'what-you-need' },
            { ref: enrollRef, id: 'enroll' },
            { ref: faqRef, id: 'faq' },
            { ref: footerRef, id: 'footer' }
        ];

        sections.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.id = id;
                observer.observe(ref.current);
            }
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

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

    // Animation classes
    const getAnimationClass = (elementId) => {
        const isVisible = visibleElements.has(elementId);
        return `transition-all duration-1000 ease-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`;
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
            <section ref={heroRef} className={`max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-8 pt-28 ${getAnimationClass('hero')}`}>
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
                    <div className="flex-1 text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        The Speaking Lab
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-3xl mx-auto ">
                            <span className="relative inline-block px-3">
                                <span className="absolute inset-0 transform -skew-x-12" style={{
                                    background: 'linear-gradient(104deg, rgba(254, 240, 138, 0.4) 0%, rgba(253, 224, 71, 0.8) 20%, rgba(254, 240, 138, 0.6) 39%, rgba(253, 224, 71, 0.7) 70%, rgba(254, 240, 138, 0.5) 100%)',
                                    borderRadius: '20% 25% 20% 24%',
                                    padding: '0.1em 0.3em',
                                    margin: '-0.1em -0.3em'
                                }}></span>
                                <span className="relative font-bold">2-day online bootcamp</span>
                            </span> to speak with confidence, fix everyday grammar slips, crack interviews & win group discussions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm sm:text-base text-black">
                            <span className="px-3 py-1 rounded-full font-bold">📅 Dates: 11-12 Oct</span>
                            <span className="px-3 py-1 rounded-full font-bold">💻 Mode: Google Meet</span>
                            <span className="px-3 py-1 rounded-full font-bold">⏱️ Course Duration: ~6 hours</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section ref={curriculumRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8  ${getAnimationClass('curriculum')}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    Curriculum & Schedule
                </h2>

                <div className="space-y-8">
                    {/* Day 1 */}
                    <div ref={day1Ref} className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 hover:cursor-pointer ${getAnimationClass('day1')}`}>
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 inline-block">
                                <span className="relative inline-block px-3">
                                    <span className="absolute inset-0 transform -skew-x-12" style={{
                                        background: 'linear-gradient(104deg, rgba(147, 197, 253, 0.3) 0%, rgba(147, 197, 253, 0.7) 20%, rgba(147, 197, 253, 0.5) 39%, rgba(147, 197, 253, 0.7) 70%, rgba(147, 197, 253, 0.4) 100%)',
                                        borderRadius: '20% 25% 20% 24%',
                                        padding: '0.1em 0.3em',
                                        margin: '-0.1em -0.3em'
                                    }}></span>
                                    <span className="relative">Day 1 - The Foundation</span>
                                </span>
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mobile: Image first, Desktop: Image second */}
                            <div className="flex justify-center items-center order-1 md:order-2">
                                <img
                                    src={day1}
                                    alt="Day 1 - The Foundation"
                                    className="w-full max-w-md h-auto rounded-lg border-2 w-full max-w-md h-auto rounded-lg border-cyan-500 shadow-lg hover:shadow-2xl transition duration-300 hover:shadow-cyan-700 shadow-lg "
                                />
                            </div>

                            {/* Mobile: Image first, Desktop: Text content */}
                            <div className="order-2 md:order-1">
                                <div className="flex items-center mb-4">
                                    <Target
                                        size={24}
                                        className="mr-3 text-blue-500"
                                    />
                                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">Skills You Will Master</h4>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Beat stage fear with mindset, breathing & grounding tools.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Project confidence using the <em>Preparation → Practice → Presence</em> approach.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Grammar that speaks: tense fixes, subject-verb agreement, transitions.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Hands-on: Extempore + "Spot & Fix" grammar game.</span>
                                    </li>
                                </ul>

                                {/* <div className="border-t pt-4">
                                    <p className="font-semibold text-gray-800 mb-2">What We Will Cover</p>
                                    <p className="text-sm text-gray-700 mb-2">• How to build confidence & overcome fear — mindset, quick hacks, extempore practice.</p>
                                    <p className="text-sm text-gray-700 mb-6">• How to make grammar speak — practical fixes + live "Spot & Fix".</p>
                                </div> */}
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-gray-800 mb-2">Duration</p>
                                    <p className="text-sm text-gray-700">2 sessions each lasting 90 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div ref={day2Ref} className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 hover:cursor-pointer ${getAnimationClass('day2')}`}>
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 inline-block">
                                <span className="relative inline-block px-3">
                                    <span className="absolute inset-0 transform -skew-x-12" style={{
                                        background: 'linear-gradient(104deg, rgba(147, 197, 253, 0.3) 0%, rgba(147, 197, 253, 0.7) 20%, rgba(147, 197, 253, 0.5) 39%, rgba(147, 197, 253, 0.7) 70%, rgba(147, 197, 253, 0.4) 100%)',
                                        borderRadius: '20% 25% 20% 24%',
                                        padding: '0.1em 0.3em',
                                        margin: '-0.1em -0.3em'
                                    }}></span>
                                    <span className="relative">Day 2 - Career Communication</span>
                                </span>
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left side - Image */}
                            <div className="flex justify-center items-center">
                                <img
                                    src={day2}
                                    alt="Day 2 - Career Communication"
                                    className="w-full max-w-md h-auto rounded-lg border-2 border-cyan-700 shadow-lg hover:shadow-2xl transition duration-300 hover:shadow-cyan-700"
                                />
                            </div>

                            {/* Right side - Text content */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <BookOpen
                                        size={24}
                                        className="mr-3 text-blue-500"
                                    />
                                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">Key Learning Areas</h4>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Answer "Tell me about yourself" with clarity using STAR.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Virtual interview do's & don'ts that actually matter.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Mock interviews in pairs with rapid feedback.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-2">•</span>
                                        <span className="text-gray-700">Group Discussion drills with a simple scoring rubric.</span>
                                    </li>
                                </ul>

                                {/* <div className="border-t pt-4">
                                    <p className="font-semibold text-gray-800 mb-2">What We Will Cover</p>
                                    <p className="text-sm text-gray-700 mb-2">• How to master interviews — STAR, TMAY structure, mock interview.</p>
                                    <p className="text-sm text-gray-700 mb-6">• How to excel in communication games & real-life practice — extempore, grammar game, GD with scoring.</p>
                                </div> */}
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-gray-800 mb-2">Duration</p>
                                    <p className="text-sm text-gray-700">2 sessions each lasting 90 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Who Should Join & What You Need */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Who Should Join */}
                    <div ref={whoShouldJoinRef} className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl ${getAnimationClass('who-should-join')}`}>
                        <div className="flex items-center mb-6">
                            <Users
                                size={24}
                                className="mr-3 text-blue-500"
                            />
                            <h3 className="text-2xl font-bold text-gray-900">Who should join</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 text-xl">•</span>
                                <span className="text-gray-700">Students & freshers preparing for placements.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 text-xl">•</span>
                                <span className="text-gray-700">Early-career professionals polishing speaking skills.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 text-xl">•</span>
                                <span className="text-gray-700">Anyone who freezes on camera or in GDs.</span>
                            </li>
                        </ul>
                    </div>

                    {/* What You Need */}
                    <div ref={whatYouNeedRef} className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl ${getAnimationClass('what-you-need')}`}>
                        <div className="flex items-center mb-6">
                            <CheckSquare
                                size={24}
                                className="mr-3 text-blue-500"
                            />
                            <h3 className="text-2xl font-bold text-gray-900">What you need</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 text-xl">•</span>
                                <span className="text-gray-700">Google Meet on laptop/phone, stable internet.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 text-xl">•</span>
                                <span className="text-gray-700">Mic + camera (recommended for practice rooms).</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 mr-3 text-xl">•</span>
                                <span className="text-gray-700">Willingness to speak & try!</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Enrollment Section */}
            <section ref={enrollRef} id="enroll-section" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20 ${getAnimationClass('enroll')}`}>
                <div className="text-center mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Secure Your Spot Now
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join 25+ students who are already transforming their communication skills. Limited seats available!
                    </p>
                </div>

                {/* Mobile-only Price Card */}
                <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-6 border-2 border-cyan-400 max-w-xs mx-auto relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                            LIMITED TIME
                        </div>
                        <div className="text-center mb-4">
                            <p className="text-sm text-gray-600 mb-2">Intro Price</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-5xl font-bold text-gray-800">₹99</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl text-gray-400 line-through">₹499</span>
                                    <span className="text-xs text-red-500 font-semibold">80% OFF</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-center text-gray-500">
                            ⚡ Only 8 seats left · First-come first-served
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Step 1 - Payment */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 relative">
                        <div className="absolute -top-3 left-6 bg-blue-500 text-white text-sm px-4 py-1 rounded-full font-semibold">
                            Step 1
                        </div>
                        <div className="flex items-center mb-6 mt-4">
                            <div className="bg-blue-500 p-3 rounded-xl mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Pay via UPI</h3>
                        </div>

                        <p className="text-gray-700 mb-6">Send ₹99 to the UPI ID below or scan the QR code.</p>

                        <div className="flex justify-center mb-6">
                            <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg">
                                <img
                                    src={qr}
                                    alt="UPI QR Code for Payment"
                                    className="w-64 h-64 object-contain rounded"
                                />
                            </div>
                        </div>


                    </div>

                    {/* Step 2 - Google Form */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 relative">
                        <div className="absolute -top-3 left-6 bg-blue-500 text-white text-sm px-4 py-1 rounded-full font-semibold">
                            Step 2
                        </div>
                        <div className="flex items-center mb-6 mt-4">
                            <div className="bg-blue-500 p-3 rounded-xl mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Submit Form</h3>
                        </div>

                        <p className="text-gray-700 mb-6">
                            Share your details & upload payment screenshot. You'll get the Google Meet link on WhatsApp/email within a few hours.
                        </p>

                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmKVYfSSSGoHJ3cTK2xUc28MaDvsV_s-xYsdmo5FhRrJLhPw/viewform?usp=dialog', '_blank')}
                            className="w-full bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 mb-6 text-lg shadow-lg hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Open Registration Form
                            </div>
                        </button>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                                <svg className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-blue-800">Seats are confirmed only after form submission</span>
                            </div>
                            <div className="flex items-start bg-orange-50 p-3 rounded-lg">
                                <svg className="w-4 h-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <span className="text-orange-800">Fee is non-refundable</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Instant Confirmation</span>
                        </div>
                        {/* <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Money-back Guarantee</span>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section ref={faqRef} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8 ${getAnimationClass('faq')}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

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
            <footer ref={footerRef} className={`bg-gradient-to-b from-gray-50 to-white text-white py-8 mt-12 ${getAnimationClass('footer')}`}>
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