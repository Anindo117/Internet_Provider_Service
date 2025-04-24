"use client";

import { BlogPost } from "@/lib/blog-data";
import {
  Calendar,
  Facebook,
  Linkedin,
  MessageCircle,
  Share2,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface BlogPostDetailsProps {
  post: BlogPost;
}

export default function BlogPostDetails({ post }: BlogPostDetailsProps) {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log("Comment submitted:", comment);
    setComment("");
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        {/* Post Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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

        {/* Post Title */}
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        {/* Post Content */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nunc id aliquam tincidunt, nisl nunc tincidunt nunc, vitae
            aliquam nunc nunc vitae nunc. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 border-t border-b border-gray-200 py-4 mb-8">
          <span className="font-semibold flex items-center gap-2">
            <Share2 className="w-5 h-5" /> Share:
          </span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition duration-300">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition duration-300">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition duration-300">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Comments ({post.comments})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <textarea
              rows={4}
              placeholder="Write your comment..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300"
            >
              Post Comment
            </button>
          </form>

          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              </div>
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-gray-500 text-sm mb-2">2 days ago</p>
                <p className="text-gray-600">
                  Great article! Very informative and well-written. Looking
                  forward to more content like this.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
