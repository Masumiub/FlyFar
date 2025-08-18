"use client";

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaMoneyBillWave, FaClock } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Link from "next/link";

export default function TourPackages() {
    const [packages, setPackages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const limit = 9;

    const fetchPackages = async () => {
        const res = await fetch(
            `/api/packages?page=${page}&limit=${limit}&search=${search}&sort=${sort}`
        );
        const data = await res.json();
        setPackages(data.packages);
        setTotalPages(data.pagination.totalPages);
    };

    useEffect(() => {
        fetchPackages();
    }, [page, sort]);

    // Debounced search
    useEffect(() => {
        const delay = setTimeout(() => {
            setPage(1);
            fetchPackages();
        }, 500);
        return () => clearTimeout(delay);
    }, [search]);

    return (
        <div className="w-full md:w-10/12 mx-auto py-12 mt-35">
            <h1 className="text-5xl font-bold mb-20 text-center">Explore Our Tour Packages</h1>

            {/* Search + Sort */}
            <div className="flex flex-col md:flex-row gap-5 items-center justify-between my-10 bg-linear-to-r from-sky-500 to-blue-700 p-10 rounded-2xl shadow-lg">
                <div>
                    <p className="text-white mb-2 font-bold">Search Tours</p>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            placeholder="Search by Title/Type"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="grow"
                        />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>
                </div>


                <div>
                    <p className="text-white mb-2 font-bold">Sort Tours</p>
                    <select
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value);
                            setPage(1);
                        }}
                        className="select"
                    >
                        <option value="asc">Price: Ascending</option>
                        <option value="desc">Price: Descending</option>
                    </select>
                </div>
            </div>

            {/* Packages */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {packages.map((pkg) => (
                    <Fade key={pkg._id} triggerOnce>
                        <div className="FlyFar shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={pkg.banner}
                                    alt={pkg.title}
                                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <MdCardTravel /> {pkg.tourType}
                                </span>
                            </div>

                            <div className="p-5 space-y-3">
                                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                                    {pkg.title}
                                </h2>
                                <p className="mb-3 line-clamp-2">{pkg.description}</p>

                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-yellow-500" />
                                        <span>{pkg.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaMoneyBillWave className="text-green-500" />
                                        <span className="font-medium">${pkg.price}</span>
                                    </div>
                                </div>

                                <Link
                                    href={`/TourPackages/${pkg._id}`}
                                    className="mt-3 w-full btn bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 gap-2">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                    className="btn px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setPage(idx + 1)}
                        className={`px-4 py-2 rounded ${page === idx + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                    className="btn px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div >
    );
}
