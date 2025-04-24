"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Broadband", count: 3 },
  { name: "Connections", count: 6 },
  { name: "Online TV", count: 6 },
  { name: "Satelite", count: 4 },
  { name: "Streaming", count: 5 },
];

const tags = [
  "broadband",
  "high-speed",
  "music",
  "satelite",
  "streaming",
  "tv",
  "ultra-resolution",
];

const recentComments = [
  { author: "Keara Walter", post: "Road to the Mountains" },
  { author: "Isidro Keeling III", post: "Road to the Mountains" },
  { author: "Mikayla Fay", post: "Trick or Treat" },
];

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="flex justify-between items-center text-gray-600 hover:text-red-600"
              >
                <span>{category.name}</span>
                <span className="text-sm">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Comments */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Comments</h3>
        <ul className="space-y-4">
          {recentComments.map((comment, index) => (
            <li key={index}>
              <Link href="#" className="text-gray-600 hover:text-red-600">
                <span className="text-red-600">{comment.author}</span>
                <span className="mx-2">|</span>
                <span>{comment.post}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
