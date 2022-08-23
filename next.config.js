/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com", 
      "storage.googleapis.com/",
      "c.ndtvimg.com",
      "www.mlive.com",
      "townsquare.media",
      "media-cldnry.s-nbcnews.com",
      'i.imgflip.com',
      'www.dailynews.com',
      'www.foxnews.com',
      'static.foxnews.com'
    ]
 }
}

module.exports = nextConfig
