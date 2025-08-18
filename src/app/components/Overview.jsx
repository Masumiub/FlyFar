import React from 'react';
import { FaMapMarkedAlt, FaUtensils, FaUsers } from 'react-icons/fa';


const Overview = () => {
    return (
        <section className="py-16 px-4 md:px-8 mb-20">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-5xl font-bold  mb-6">Why Choose <span className="text-blue-500">FlyFar</span></h2>
                <p className="">Experience the best of Bangladesh with a platform built for every traveler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Card 1 */}
                <div className="shadow-md rounded-2xl px-6 py-15 flex flex-col items-center text-center h-full  transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                    <FaMapMarkedAlt className="text-blue-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Destination Guide</h3>
                    <p className="text-sm">
                        Explore popular spots and hidden gems across Bangladesh with detailed, up-to-date travel insights.
                    </p>
                </div>

                {/* Card 2 */}
                <div className=" shadow-md rounded-2xl px-6 py-15 flex flex-col items-center text-center h-full  transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                    <FaUtensils className="text-blue-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Local Culture & Cuisine</h3>
                    <p className="text-sm">
                        Discover authentic food, traditions, and experiences that make each region of Bangladesh unique.
                    </p>
                </div>

                {/* Card 3 */}
                <div className=" shadow-md rounded-2xl px-6 py-15 flex flex-col items-center text-center h-full  transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                    <FaUsers className="text-blue-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Built for Every Traveler</h3>
                    <p className="text-sm">
                        Whether you're a solo adventurer or planning a family trip, FlyFar provides the tools to plan it all.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
