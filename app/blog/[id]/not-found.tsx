import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
