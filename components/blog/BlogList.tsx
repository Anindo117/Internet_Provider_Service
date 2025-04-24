"use client";

import { ArrowLeft, ArrowRight, Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock blog data - in a real app, this would come from an API or database
const blogPosts = [
  {
    id: 1,
    title: "How to Choose a WiFi Router for Online TV?",
    excerpt:
      "Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.",
    image: "/images/blog-1.jpg",
    date: "January 3, 2019",
    comments: 5,
    category: "Connections",
  },
  {
    id: 2,
    title: "The Future of Streaming Services",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "/images/blog-2.jpg",
    date: "January 5, 2019",
    comments: 3,
    category: "Streaming",
  },
  {
    id: 3,
    title: "5G Technology: What to Expect",
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    image: "/images/blog-3.jpg",
    date: "January 7, 2019",
    comments: 7,
    category: "Broadband",
  },
  {
    id: 4,
    title: "Smart Home Integration Guide",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/images/blog-4.jpg",
    date: "January 10, 2019",
    comments: 4,
    category: "Technology",
  },
  {
    id: 5,
    title: "Experience Ultra-Resolution Streaming",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/images/blog-5.jpg",
    date: "January 10, 2019",
    comments: 4,
    category: "Technology",
  },
];

const POSTS_PER_PAGE = 4;

interface BlogListProps {
  currentPage: number;
}

export default function BlogList({ currentPage }: BlogListProps) {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="space-y-8">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments} Comments
                </span>
                <span className="text-red-600">{post.category}</span>
              </div>

              <h2 className="text-2xl font-bold mb-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-red-600 transition duration-300"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <Link
                href={`/blog/${post.id}`}
                className="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className={`p-2 rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-red-600 hover:bg-red-50"
            }`}
            aria-disabled={currentPage === 1}
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/blog?page=${page}`}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-red-50"
              }`}
            >
              {page}
            </Link>
          ))}

          <Link
            href={`/blog?page=${currentPage + 1}`}
            className={`p-2 rounded ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-red-600 hover:bg-red-50"
            }`}
            aria-disabled={currentPage === totalPages}
          >
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      )}
    </div>
  );
}
