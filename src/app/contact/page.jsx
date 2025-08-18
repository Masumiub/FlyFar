"use client";

import { useForm } from "react-hook-form";
import { Fade, Slide } from "react-awesome-reveal";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from 'lottie-react';
import Img from '../../../public/assets/Animation - contact.json'

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Message sent successfully!");
        reset();
    };

    return (
        <div className="w-full md:w-10/12 py-12  mt-35 mx-auto">
            {/* Page Heading */}
            <Fade direction="down" triggerOnce>
                <h1 className="text-5xl font-bold text-center  mb-4">
                    Contact Us
                </h1>
                <p className="text-center bg-base-100  mb-10 max-w-2xl mx-auto">
                    Have questions or need support? We’d love to hear from you! Reach out
                    via the form or through our contact details below.
                </p>
            </Fade>


            <div className="my-10 bg-linear-to-r from-sky-500 to-blue-700 p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold  mb-4 text-white">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <Fade>
                        <div className="flex items-center gap-4 shadow-lg rounded-2xl p-6 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                            <FaPhoneAlt className="text-blue-600 text-2xl" />
                            <div>
                                <h3 className="text-lg font-medium ">Phone</h3>
                                <p className="bg-base-100 ">+880 1234 567 890</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 shadow-lg rounded-2xl p-6 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                            <FaEnvelope className="text-blue-600 text-2xl" />
                            <div>
                                <h3 className="text-lg font-medium ">Email</h3>
                                <p className="bg-base-100 ">support@flyfar.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 shadow-lg rounded-2xl p-6 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                            <div>
                                <h3 className="text-lg font-medium ">Location</h3>
                                <p className="bg-base-100 ">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div>


            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Contact Form */}
                <Slide direction="left" triggerOnce>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=" shadow-lg rounded-2xl p-8"
                    >
                        <h2 className="text-2xl font-semibold  mb-6">
                            Send Us a Message
                        </h2>

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block  mb-2">Your Name</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    Name is required.
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block  mb-2">Your Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    Email is required.
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label className="block  mb-2">Your Message</label>
                            <textarea
                                rows="5"
                                {...register("message", { required: true })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Write your message here..."
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    Message is required.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                </Slide>

                {/* Contact Info */}
                <Slide direction="right" triggerOnce>
                    <div>
                        <Lottie className="w-full mx-auto" animationData={Img} loop={true} ></Lottie>
                    </div>
                </Slide>
            </div>
        </div>
    );
}
