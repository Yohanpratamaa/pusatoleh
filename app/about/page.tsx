"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-orange-600 to-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tentang Kami
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Menyediakan oleh-oleh khas Indonesia berkualitas sejak 2014
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Toko Oleh-Oleh berdiri sejak tahun 2014 dengan misi untuk
                  melestarikan dan mempromosikan produk-produk tradisional
                  Indonesia ke seluruh nusantara.
                </p>
                <p>
                  Berawal dari sebuah toko kecil di Jakarta, kini kami telah
                  melayani ribuan pelanggan dari berbagai kota di Indonesia
                  melalui platform online.
                </p>
                <p>
                  Kami berkomitmen untuk hanya menyediakan produk berkualitas
                  tinggi dari produsen lokal yang terpercaya, dengan harga yang
                  terjangkau untuk semua kalangan.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                <span className="text-white text-8xl font-bold opacity-20">
                  2014
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform e-commerce terdepan untuk produk oleh-oleh
                tradisional Indonesia yang terpercaya dan berkualitas di seluruh
                nusantara.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Melestarikan produk tradisional Indonesia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Memberdayakan UMKM lokal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Memberikan pelayanan terbaik kepada pelanggan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Menjamin kualitas produk yang dijual</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kualitas",
                icon: "⭐",
                description:
                  "Kami hanya menjual produk berkualitas tinggi yang telah melewati seleksi ketat.",
              },
              {
                title: "Kepercayaan",
                icon: "🤝",
                description:
                  "Membangun kepercayaan pelanggan adalah prioritas utama kami.",
              },
              {
                title: "Pelayanan",
                icon: "💝",
                description:
                  "Pelayanan ramah dan responsif untuk kepuasan pelanggan.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
