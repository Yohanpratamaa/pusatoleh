"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Social media platforms data
const socialMediaPlatforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "📸",
    color: "from-purple-500 to-pink-500",
    username: "@bampiasrengat",
    followers: "15.2K",
    url: "https://www.instagram.com/bampiasrengat",
    posts: [
      {
        image: "/bg.png",
        caption: "Bakpia kacang hijau special! 🥟✨",
        likes: "1.2K",
        comments: "89",
      },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "👍",
    color: "from-blue-600 to-blue-700",
    username: "Pusat Oleh Oleh Bampia Srengat",
    followers: "23.5K",
    url: "https://www.facebook.com/bampiasrengat",
    posts: [
      {
        image: "/bg.png",
        caption: "Testimoni pelanggan setia kami! ❤️",
        likes: "856",
        comments: "47",
      },
    ],
  },
  {
    id: "shopee",
    name: "Shopee",
    icon: "🛍️",
    color: "from-orange-500 to-red-500",
    username: "Bampia Srengat Official",
    followers: "8.7K",
    url: "https://shopee.co.id/bampiasrengat",
    rating: "4.9",
    sold: "12K+",
    posts: [
      {
        image: "/bg.png",
        caption: "Flash Sale Bampia Kacang Hijau",
        price: "Rp 35.000",
        discount: "20%",
      },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "🎵",
    color: "from-black to-gray-800",
    username: "@bampiasrengat",
    followers: "32.1K",
    url: "https://www.tiktok.com/@bampiasrengat",
    posts: [
      {
        image: "/bg.png",
        caption: "Behind the scenes pembuatan bakpia! 🎬",
        views: "125K",
        likes: "8.9K",
      },
    ],
  },
];

export default function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPlatforms =
    activeTab === "all"
      ? socialMediaPlatforms
      : socialMediaPlatforms.filter((p) => p.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500 py-20 overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl">🌟</span>
            <span className="text-sm font-semibold text-white">
              Terhubung Dengan Kami
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Temukan Kami Di
            <br />
            <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Social Media & Marketplace
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ikuti aktivitas terbaru kami, dapatkan promo eksklusif, dan belanja
            langsung di platform favorit Anda!
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-white">
              <div className="text-3xl font-bold">79K+</div>
              <div className="text-sm text-white/80">Total Followers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">4.9⭐</div>
              <div className="text-sm text-white/80">Rating Rata-rata</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">12K+</div>
              <div className="text-sm text-white/80">Produk Terjual</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Customer Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === "all"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              🌐 Semua Platform
            </button>
            {socialMediaPlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === platform.id
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {platform.icon} {platform.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlatforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-amber-300">
                {/* Platform Header */}
                <div
                  className={`bg-gradient-to-r ${platform.color} p-6 text-white relative overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-4xl mb-2">{platform.icon}</div>
                        <h3 className="text-2xl font-bold mb-1">
                          {platform.name}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {platform.username}
                        </p>
                      </div>
                      <motion.a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    </div>

                    {/* Platform Stats */}
                    <div className="flex gap-4 text-sm">
                      {platform.followers && (
                        <div>
                          <div className="font-bold text-lg">
                            {platform.followers}
                          </div>
                          <div className="text-white/80">Followers</div>
                        </div>
                      )}
                      {platform.rating && (
                        <div>
                          <div className="font-bold text-lg">
                            {platform.rating}⭐
                          </div>
                          <div className="text-white/80">Rating</div>
                        </div>
                      )}
                      {platform.sold && (
                        <div>
                          <div className="font-bold text-lg">
                            {platform.sold}
                          </div>
                          <div className="text-white/80">Terjual</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="p-6">
                  <div className="space-y-4">
                    {platform.posts.map((post, postIndex) => (
                      <motion.div
                        key={postIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        {/* Post Image */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span className="text-6xl">{platform.icon}</span>
                          </div>
                        </div>

                        {/* Post Info */}
                        <div className="p-4 bg-gray-50">
                          <p className="text-sm text-gray-800 font-medium mb-2 line-clamp-2">
                            {post.caption}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            {"likes" in post && post.likes && (
                              <div className="flex items-center gap-1">
                                <span>❤️</span>
                                <span>{post.likes}</span>
                              </div>
                            )}
                            {"comments" in post && post.comments && (
                              <div className="flex items-center gap-1">
                                <span>💬</span>
                                <span>{post.comments}</span>
                              </div>
                            )}
                            {"views" in post && post.views && (
                              <div className="flex items-center gap-1">
                                <span>👁️</span>
                                <span>{post.views}</span>
                              </div>
                            )}
                            {"price" in post && post.price && (
                              <div className="flex items-center gap-2 ml-auto">
                                <span className="font-bold text-amber-600">
                                  {post.price}
                                </span>
                                {"discount" in post && post.discount && (
                                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                                    -{post.discount}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 w-full block text-center bg-gradient-to-r ${platform.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {platform.id === "instagram" ||
                    platform.id === "facebook" ||
                    platform.id === "tiktok"
                      ? `Kunjungi ${platform.name}`
                      : `Belanja di ${platform.name}`}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Jangan Lewatkan Promo Spesial!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Follow social media kami untuk mendapatkan update promo, diskon
              eksklusif, dan produk terbaru dari Bampia Srengat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button
                  className="bg-white text-amber-600 font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🛍️ Lihat Produk
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Hubungi Kami
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
