export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  comments: number;
  category: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
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
