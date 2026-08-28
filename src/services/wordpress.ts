import axios from "axios";

const BLOG_API_URL = "https://blog.amigoacademy.in/wp-json/wp/v2";
const CONTENT_API_URL = "https://content.amigoacademy.in/wp-json/wp/v2";

// In-memory cache for SEO pages
const seoPageCache: Record<string, WPPost> = {};
let seoPagesCache: WPPost[] | null = null;

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    author?: Array<{ name: string }>;
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ name: string; slug: string }>>;
  };
  featured_media_src_url?: string;
  jetpack_featured_media_url?: string;
}

// Fallback mock data for blogs to keep page working if server is down or not yet configured
export const mockBlogPosts = [
  {
    id: 1,
    title: { rendered: "How to Become a Cabin Crew After 12th: A Complete Guide" },
    slug: "how-to-become-a-cabin-crew-after-12th",
    date: "2026-05-24T00:00:00",
    excerpt: { rendered: "If you're interested in building a career in aviation after completing 12th, becoming a Cabin Crew professional can be an exciting career option." },
    content: { rendered: "" }, // populated via the InnerBlog template structure if fallback
    categoryName: "Aviation Insights",
    readTime: "8 min read",
    imageUrl: ""
  },
  {
    id: 2,
    title: { rendered: "Cabin Crew Eligibility, Skills & Requirements Explained" },
    slug: "cabin-crew-eligibility-skills-requirements-explained",
    date: "2026-05-20T00:00:00",
    excerpt: { rendered: "Understand the requirements of airlines, including physical criteria, age limits, and essential soft skills." },
    content: { rendered: "" },
    categoryName: "Aviation Insights",
    readTime: "5 min read",
    imageUrl: ""
  },
  {
    id: 3,
    title: { rendered: "Airport Ground Staff Career Guide: Roles, Salary & Growth" },
    slug: "airport-ground-staff-career-guide-roles-salary-growth",
    date: "2026-05-16T00:00:00",
    excerpt: { rendered: "Airports depend on skilled professionals to ensure smooth passenger experiences." },
    content: { rendered: "" },
    categoryName: "Aviation Insights",
    readTime: "5 min read",
    imageUrl: ""
  },
  {
    id: 4,
    title: { rendered: "Top AI Skills to Learn in 2026 for a Future-Ready Career" },
    slug: "top-ai-skills-to-learn-in-2026-for-a-future-ready-career",
    date: "2026-08-12T00:00:00",
    excerpt: { rendered: "Technology is shaping the future of every industry. Our AI & Data Science program helps students build practical knowledge." },
    content: { rendered: "" },
    categoryName: "AI & Technology",
    readTime: "5 min read",
    imageUrl: ""
  }
];

export const mockSeoLinks = [
  "Best Aviation Institute Near Bhandup",
  "Best Aviation Institute Near Powai",
  "Best Aviation Institute Near Mulund",
  "Best Aviation Institute Near Vikhroli",
  "Best Aviation Institute Near Kanjurmarg",
  "Best Aviation Institute Near Chembur",
  "Air Hostess Course Near Bhandup",
  "Air Hostess Course Near Powai",
  "Air Hostess Course Near Mulund",
  "Cabin Crew Course Near Bhandup",
  "Cabin Crew Course Near Powai",
  "Cabin Crew Course Near Vikhroli",
  "Airport Ground Staff Course Near Bhandup",
  "Airport Ground Staff Course Near Powai",
  "Airport Ground Staff Course Near Mulund",
  "Airport Ground Staff Course Near Vikhroli",
  "Airport Ground Staff Course Near Kanjurmarg",
  "Airport Ground Staff Course Near Chembur",
  "AI & Data Science Course Near Bhandup",
  "AI & Data Science Course Near Powai",
  "AI & Data Science Course Near Mulund",
  "AI & Data Science Course Near Vikhroli",
  "AI & Data Science Course Near Kanjurmarg",
  "AI & Data Science Course Near Chembur",
  "Best Courses After 12th Near Bhandup",
  "Aviation Courses Near Powai",
  "Aviation Courses Near Mulund",
  "Aviation Career Guidance Near Bhandup",
  "Aviation Career Guidance Near Powai",
  "Aviation Career Guidance Near Mulund"
];

// Helper to convert plain text to slug
export const toSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export async function fetchBlogPosts(): Promise<WPPost[]> {
  try {
    const response = await axios.get<WPPost[]>(`${BLOG_API_URL}/posts?_embed&per_page=20`);
    return response.data;
  } catch (error) {
    console.warn("Failed to fetch blog posts from WordPress, using fallback mock data:", error);
    // Return mock data formatted to resemble WP REST API posts
    return mockBlogPosts.map(post => ({
      id: post.id,
      date: post.date,
      slug: post.slug,
      link: `/blog/${post.slug}`,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      _embedded: {
        author: [{ name: "Amigo Academy" }],
        "wp:term": [[{ name: post.categoryName, slug: toSlug(post.categoryName) }]]
      }
    })) as WPPost[];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const response = await axios.get<WPPost[]>(`${BLOG_API_URL}/posts?slug=${slug}&_embed`);
    if (response.data && response.data.length > 0) {
      return response.data[0];
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch blog post for slug ${slug} from WordPress:`, error);
    const mock = mockBlogPosts.find(p => p.slug === slug);
    if (mock) {
      return {
        id: mock.id,
        date: mock.date,
        slug: mock.slug,
        link: `/blog/${mock.slug}`,
        title: mock.title,
        content: mock.content,
        excerpt: mock.excerpt,
        _embedded: {
          author: [{ name: "Amigo Academy" }],
          "wp:term": [[{ name: mock.categoryName, slug: toSlug(mock.categoryName) }]]
        }
      } as WPPost;
    }
    return null;
  }
}

export async function fetchSEOPages(): Promise<WPPost[]> {
  if (seoPagesCache) {
    return seoPagesCache;
  }
  try {
    const response = await axios.get<WPPost[]>(`${CONTENT_API_URL}/posts?_embed&per_page=100`);
    seoPagesCache = response.data;
    // Populate individual slug cache too
    response.data.forEach(post => {
      seoPageCache[post.slug] = post;
    });
    return response.data;
  } catch (error) {
    console.warn("Failed to fetch SEO pages from WordPress, using fallback mock data:", error);
    const mockData = mockSeoLinks.map((title, index) => ({
      id: index + 100,
      date: new Date().toISOString(),
      slug: toSlug(title),
      link: `/${toSlug(title)}`,
      title: { rendered: title },
      content: { rendered: "" },
      excerpt: { rendered: "" }
    })) as WPPost[];
    seoPagesCache = mockData;
    return mockData;
  }
}

export async function fetchSEOPageBySlug(slug: string): Promise<WPPost | null> {
  if (seoPageCache[slug]) {
    return seoPageCache[slug];
  }
  try {
    const response = await axios.get<WPPost[]>(`${CONTENT_API_URL}/posts?slug=${slug}&_embed`);
    if (response.data && response.data.length > 0) {
      seoPageCache[slug] = response.data[0];
      return response.data[0];
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch SEO page for slug ${slug} from WordPress:`, error);
    const mockTitle = mockSeoLinks.find(title => toSlug(title) === slug);
    if (mockTitle) {
      const mockPost = {
        id: 999,
        date: new Date().toISOString(),
        slug: slug,
        link: `/${slug}`,
        title: { rendered: mockTitle },
        content: { rendered: "" },
        excerpt: { rendered: "" }
      } as WPPost;
      seoPageCache[slug] = mockPost;
      return mockPost;
    }
    return null;
  }
}
