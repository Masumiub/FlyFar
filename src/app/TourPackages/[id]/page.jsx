import clientPromise from "@/app/lib/db";
import Image from "next/image";
import { ObjectId } from "mongodb";
import { FaMoneyBillWave, FaClock, FaUsers, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { MdTour } from "react-icons/md";

export const revalidate = 60;

// Pre-generate all pkg pages at build time
export async function generateStaticParams() {
    const client = await clientPromise;
    const db = client.db("tourNestDB");

    const packages = await db.collection("packages").find({}, { projection: { _id: 1 } }).toArray();

    return packages.map(pkg => ({
        id: pkg._id.toString(),
    }));
}


// Dynamic metadata per pkg
export async function generateMetadata({ params }) {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("tourNestDB");
    const pkg = await db.collection("packages").findOne({ _id: new ObjectId(id) });

    if (!pkg) {
        return {
            title: "pkg Not Found - FlyFar",
            description: "This package could not be found.",
        };
    }

    return {
        title: `${pkg.title} - FlyFar`,
        description: pkg.description?.slice(0, 160) || "FlyFar pkg details",
        openGraph: {
            title: `${pkg.title} - FlyFar`,
            description: pkg.description?.slice(0, 160) || "FlyFar pkg details",
            url: `https://s-global.vercel.app/pkgs/${id}`,
            siteName: "FlyFar",
            images: [
                {
                    url: pkg.bannerURL || "https://s-global.vercel.app/default-og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: pkg.title,
                },
            ],
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: `${pkg.title} - FlyFar`,
            description: pkg.description?.slice(0, 160) || "FlyFar pkg details",
            images: [pkg.banner || "hhttps://s-global.vercel.app/default-og-image.jpg"],
            site: "@FlyFarTwitterHandle",
            creator: "@FlyFarTwitterHandle",
        },
    };
}



export default async function page({ params }) {

    const { id } = await params;

    const client = await clientPromise;
    const db = client.db("tourNestDB");

    const pkg = await db.collection("packages").findOne({ _id: new ObjectId(id) });

    //console.log(pkg.photos);


    return (
        <div>
            <div className="mx-auto py-10 w-full md:w-10/12">

                <div className="flex flex-col md:flex-row gap-10 mt-35 items-center justify-between">

                    {/* Title + Info */}
                    <div className="w-full md:w-1/2 ">
                        <h1 className="text-4xl font-bold ">{pkg.title}</h1>
                        <p className="mt-5">{pkg.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 ">
                            <div className="p-4 rounded-xl shadow bg-base-100 flex items-center gap-3 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <FaMoneyBillWave className="text-blue-500 text-2xl" />
                                <div>
                                    <p className="text-sm FlyFar">Price</p>
                                    <p className="font-semibold text-lg">৳ {pkg.price}</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl shadow bg-base-100 flex items-center gap-3 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <FaClock className="text-blue-500 text-2xl" />
                                <div>
                                    <p className="text-sm FlyFar">Duration</p>
                                    <p className="font-semibold">{pkg.duration}</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl shadow bg-base-100 flex items-center gap-3 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <FaUsers className="text-blue-500 text-2xl" />
                                <div>
                                    <p className="text-sm FlyFar">Group Size</p>
                                    <p className="font-semibold">{pkg.groupSize} people</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl shadow bg-base-100 flex items-center gap-3 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <FaStar className="text-blue-500 text-2xl" />
                                <div>
                                    <p className="text-sm FlyFar">Rating</p>
                                    <p className="font-semibold">{pkg.rating}</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl shadow bg-base-100 flex items-center gap-3 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <MdTour className="text-blue-500 text-2xl" />
                                <div>
                                    <p className="text-sm FlyFar">Tour Type</p>
                                    <p className="font-semibold">{pkg.tourType}</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl shadow bg-base-100 flex items-center gap-3 transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-t from-base-100 to-base-300">
                                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                                <div>
                                    <p className="text-sm FlyFar">Location</p>
                                    <p className="font-semibold">{pkg.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={pkg.banner}
                            alt={pkg.title}
                            width={850}
                            height={850}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                {/* Tour Plan */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Tour Plan</h2>
                    <p className="">{pkg.tourPlan}</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        {pkg.days.slice(0,2).map((day, i) => (
                            <li key={i} className="">{day}</li>
                        ))}
                    </ul>
                </div>



                {/* Photos */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Tour Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pkg.photos.map((photo, i) => (
                            <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                                <Image src={photo} alt={`Photo ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}
