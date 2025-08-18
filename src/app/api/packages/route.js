import clientPromise from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "9", 10);
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "asc";

  const client = await clientPromise;
  const db = client.db("tourNestDB");

  const query = search
    ? {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { tourType: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const total = await db.collection("packages").countDocuments(query);

  const packages = await db
    .collection("packages")
    .find(query)
    .sort({ price: sort === "asc" ? 1 : -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

  return NextResponse.json({
    packages,
    pagination: {
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    },
  });
}
