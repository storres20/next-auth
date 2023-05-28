/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb+srv://demo:2ZS91XrwfQqNbFyU@cluster0.8kaczfr.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "123456"
  }
}

module.exports = nextConfig
