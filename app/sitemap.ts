import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  // Map blog posts
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  // Add static routes: Home, Blog, Contact
  let routes = ['', '/blog', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
