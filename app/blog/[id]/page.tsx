import BlogPostDetails from "@/components/blog/BlogPostDetails";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(), // Ensure it's a string
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <BlogPostDetails post={post} />
          </div>
          <div className="lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
