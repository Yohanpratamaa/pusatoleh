"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";
import { products, categories, testimonials } from "@/data/products";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/bg.png)" }}
          />
          {/* Dark overlay untuk keterbacaan teks */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 mb-32 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-5 h-5 text-green-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-white">
                Terpercaya Sejak 2022
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pusat Oleh Oleh Terbaik
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Bampia Srengat
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Oleh-oleh khas daerah dengan kualitas terbaik. Dari kue kering
              hingga makanan basah, semua ada di sini!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/products">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-black text-amber-500 hover:bg-amber-400 hover:text-gray-900"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Belanja Sekarang
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-amber-400 hover:text-gray-900 hover:border-amber-400"
                >
                  Tentang Kami
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="text-white">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                  500+
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/80">
                  Produk Tersedia
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                  10K+
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/80">
                  Pelanggan Puas
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                  100%
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/80">
                  Produk Asli
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                  24/7
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/80">
                  Customer Service
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm font-medium">Scroll</span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div> */}
        </motion.div>
      </section>

      {/* Categories Section */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-yellow-100 text-amber-600 rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              ✨ Kategori Populer
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Jelajahi Produk Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Temukan berbagai macam oleh-oleh khas Indonesia dari seluruh
              Nusantara
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-yellow-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-3"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Products Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              ⭐ Best Sellers
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Produk Terpopuler
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Produk pilihan terbaik yang paling banyak dibeli oleh pelanggan
              kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                Lihat Semua Produk
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Location Section */}
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

        {/* Animated background shapes */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Location Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-bold text-lg">Kunjungi Toko Kami</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Pusat Oleh Oleh Bampia Srengat
            </h2>

            {/* Location Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              {/* Address Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Alamat</h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  Jl. Raya Bagelenan, Krajan, Bagelenan
                  <br />
                  Kec. Srengat, Kabupaten Blitar,
                  <br />
                  Jawa Timur 66152
                </p>
              </motion.div>

              {/* Operating Hours Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Jam Buka</h3>
                <p className="text-white/90 leading-relaxed">
                  Setiap Hari
                  <br />
                  07:00 - 21:00 WIB
                  <br />
                  <span className="text-xs opacity-80">Buka Tanpa Libur</span>
                </p>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Kontak</h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  WhatsApp: +62 851-1995-5641
                  <br />
                  Email: pusatoleholehbampia@gmail.com
                  <br />
                  <span className="text-xs opacity-80">Fast Response</span>
                </p>
              </motion.div>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              className="max-w-5xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                {/* Map Header */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent z-10 p-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-semibold text-sm flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                        Jl. Raya Bagelenan, Krajan, Bagelenan, Kec. Srengat,
                        Kabupaten Blitar, Jawa Timur 66152
                      </span>
                    </div>
                  </div>
                </div>

                {/* Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3479881291973!2d112.084601!3d-8.0659429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ef1a8f7c2981%3A0x310eb2f0fa210b0b!2sPusat%20Oleh-Oleh%20Bampia%20Srengat!5e0!3m2!1sid!2sid!4v1767507548415!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-xl"></div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://maps.google.com/?q=Jl.%20Raya%20Bagelenan%2C%20Krajan%2C%20Bagelenan%2C%20Kec.%20Srengat%2C%20Kabupaten%20Blitar%2C%20Jawa%20Timur%2066152"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-50 hover:scale-105 transition-all shadow-xl border-2 border-white font-bold"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Buka di Google Maps
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/20 font-bold"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              💬 Testimonials
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ribuan pelanggan puas telah mempercayai kami untuk kebutuhan
              oleh-oleh mereka
            </p>
          </motion.div>

          {/* Slider Container with Overflow Hidden */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            {/* Animated Slider Track */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -100 * testimonials.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-amber-200 transition-all duration-300 group flex-shrink-0 w-[380px]"
                  whileHover={{ y: -5 }}
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-amber-200 group-hover:text-amber-300 transition-colors">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* About Us Section */}
      <SectionWrapper className="bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang Toko Oleh-Oleh
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Kami adalah toko oleh-oleh terpercaya yang menyediakan berbagai
                macam produk khas Indonesia. Dari makanan ringan tradisional
                hingga kerajinan tangan berkualitas, semua tersedia dengan harga
                terjangkau.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun, kami berkomitmen untuk
                memberikan produk berkualitas tinggi dan pelayanan terbaik
                kepada pelanggan kami di seluruh Indonesia.
              </p>
              <Link href="/about">
                <Button variant="primary" size="lg">
                  Selengkapnya
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/ngobrol.png"
                alt="Toko Oleh-Oleh - Pusat Oleh Oleh Banyuwis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Glowing badge */}
            <motion.div
              className="inline-block mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(251, 146, 60, 0.3)",
                  "0 0 40px rgba(251, 146, 60, 0.5)",
                  "0 0 20px rgba(251, 146, 60, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-white rounded-full font-semibold text-sm">
                🚀 Mulai Petualangan Belanja Anda
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Siap Berbelanja?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Dapatkan oleh-oleh terbaik untuk keluarga dan teman-teman Anda.
              <br />
              <span className="text-amber-400 font-semibold">
                Pengiriman Cepat ke Seluruh Indonesia!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button variant="primary" size="lg">
                  Mulai Belanja
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
