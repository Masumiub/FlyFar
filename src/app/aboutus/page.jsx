"use client";

import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import Lottie from 'lottie-react';
import Animation from '../../../public/assets/Man Planning A Sightseeing Route.json';

const teamMembers = [
    {
        name: "Ayesha Rahman",
        role: "Founder & CEO",
        image: "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
        bio: "Passionate about travel and building meaningful experiences for explorers.",
    },
    {
        name: "Tanvir Hasan",
        role: "CTO",
        image: "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
        bio: "Ensures FlyFar stays cutting-edge with scalable and secure technology.",
    },
    {
        name: "Mithila Akter",
        role: "Head of Marketing",
        image: "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
        bio: "Loves connecting travelers with unforgettable journeys through creative campaigns.",
    },
    {
        name: "Rahul Chowdhury",
        role: "Tour Manager",
        image: "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
        bio: "Dedicated to making every FlyFar trip seamless, safe, and memorable.",
    },
];

export default function AboutUsPage() {
    return (
        <div className="w-full md:w-10/12 mx-auto py-12">
            {/* Hero Section */}

            <Fade>
                <h1 className="text-5xl md:text-5xl font-bold text-center mt-35 mb-10">
                    About <span className="text-blue-500">FlyFar</span>
                </h1>
            </Fade>

            {/* Description */}
            <section className="mx-auto py-10  bg-linear-to-r from-sky-500 to-blue-700 px-10 rounded-2xl shadow-lg text-white">
                <Slide direction="up">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div>
                            <Image src={logo} className="w-55" alt='logo'></Image>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 ">Who We Are</h2>
                            <p className="text-lg FlyFar">
                                FlyFar is your trusted tour booking companion, helping you explore the world with ease.
                                From exotic adventures to luxury escapes, our mission is to make travel simple, affordable,
                                and unforgettable.
                            </p>
                        </div>
                    </div>
                </Slide>
            </section>

            {/* Features */}
            <section className=" py-16">
                <div className=" mx-auto ">
                    <Zoom>
                        <h2 className="text-4xl font-bold mb-12 text-center">Our Features</h2>
                    </Zoom>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Easy Booking", desc: "Book your tours in just a few clicks with our seamless platform.", icon: "✈️" },
                            { title: "Secure Payments", desc: "Your transactions are safe and protected at all times at seamless platform.", icon: "💳" },
                            { title: "24/7 Support", desc: "We’re here for you anytime, anywhere. All times at seamless platform.", icon: "📞" },
                        ].map((f, i) => (
                            <Fade key={i}>
                                <div className="p-6  rounded-2xl shadow hover:shadow-lg transition bg-gradient-to-t from-base-100 to-base-300">
                                    <div className="text-4xl mb-4">{f.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                                    <p className="FlyFar">{f.desc}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-base-100">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <Slide direction="left">
                       <Lottie animationData={Animation} loop={true} className="w-[300px] md:w-[400px] mx-auto" />
                    </Slide>
                    <Slide direction="right">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Choose FlyFar?</h2>
                            <ul className="space-y-4 text-lg FlyFar">
                                <li> Affordable travel packages tailored for you</li>
                                <li> Wide network of trusted travel partners</li>
                                <li> Personalized experiences with top-rated guides</li>
                                <li> Transparent pricing & no hidden fees</li>
                            </ul>
                        </div>
                    </Slide>
                </div>
            </section>

            {/* Team Members */}
            <section className=" py-16">
                <Zoom>
                    <h2 className="text-5xl font-bold mb-12 text-center">Meet Our Team</h2>
                </Zoom>
                <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, i) => (
                        <Fade key={i}>
                            <div className=" rounded-2xl shadow hover:shadow-lg transition overflow-hidden text-center p-6 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <Image src={member.image} alt={member.name} width={100} height={100} className="mx-auto rounded-full mb-4 object-cover h-20 w-20 border-2 border-blue-500" />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-blue-600 mb-2">{member.role}</p>
                                <p className="FlyFar text-sm mt-4">{member.bio}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            {/* Footer Note */}
            {/* <section className="bg-yellow-400 py-10">
                <Fade>
                    <p className="text-center text-lg font-semibold text-gray-900">
                        FlyFar – Making Your Travel Dreams Come True ✨
                    </p>
                </Fade>
            </section> */}
        </div>
    );
}


//   <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/about-hero.jpg')" }}>
//     <div className="absolute inset-0 bg-black/50"></div>