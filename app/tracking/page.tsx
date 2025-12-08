"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const orderStatuses = [
  { id: "processing", label: "Diproses", icon: "📦" },
  { id: "packed", label: "Dikemas", icon: "📋" },
  { id: "shipped", label: "Dikirim", icon: "🚚" },
  { id: "completed", label: "Selesai", icon: "✅" },
];

function TrackingContent() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState(
    searchParams.get("order") || ""
  );
  const [currentStatus, setCurrentStatus] = useState(2); // Simulated status

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking
    const randomStatus = Math.floor(Math.random() * 4);
    setCurrentStatus(randomStatus);
  };

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
            Lacak Pesanan
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Masukkan nomor pesanan Anda untuk melacak status pengiriman
          </motion.p>
        </div>
      </section>

      {/* Tracking Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleTrack} className="flex gap-4">
            <Input
              type="text"
              placeholder="Masukkan nomor pesanan (contoh: ORD-ABC123)"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              fullWidth
              required
            />
            <Button type="submit" variant="primary" size="lg">
              Lacak
            </Button>
          </form>
        </motion.div>

        {/* Tracking Status */}
        {orderNumber && (
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Status Pesanan
              </h2>
              <p className="text-gray-600">
                Nomor Pesanan:{" "}
                <span className="font-semibold text-orange-600">
                  {orderNumber}
                </span>
              </p>
            </div>

            {/* Progress Steps */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div
                className="absolute left-8 top-0 w-0.5 bg-orange-600 transition-all duration-1000"
                style={{
                  height: `${
                    (currentStatus / (orderStatuses.length - 1)) * 100
                  }%`,
                }}
              />

              {/* Steps */}
              <div className="space-y-8">
                {orderStatuses.map((status, index) => {
                  const isCompleted = index <= currentStatus;
                  const isCurrent = index === currentStatus;

                  return (
                    <motion.div
                      key={status.id}
                      className="relative flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Icon */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full text-2xl transition-all duration-300 ${
                          isCompleted
                            ? "bg-orange-600 shadow-lg scale-110"
                            : "bg-gray-200"
                        }`}
                      >
                        {isCompleted ? "✓" : status.icon}
                      </div>

                      {/* Content */}
                      <div className="ml-6 flex-1">
                        <h3
                          className={`text-xl font-bold ${
                            isCompleted ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {status.label}
                        </h3>
                        <p
                          className={`text-sm ${
                            isCompleted ? "text-gray-600" : "text-gray-400"
                          }`}
                        >
                          {isCompleted
                            ? isCurrent
                              ? "Sedang dalam proses"
                              : "Selesai"
                            : "Menunggu"}
                        </p>
                        {isCompleted && (
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date().toLocaleString("id-ID")}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            {currentStatus === orderStatuses.length - 1 && (
              <motion.div
                className="mt-8 p-6 bg-green-50 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-900">
                      Pesanan Telah Diterima
                    </p>
                    <p className="text-sm text-green-700">
                      Terima kasih telah berbelanja di Toko Oleh-Oleh!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Courier Info (if shipped) */}
            {currentStatus >= 2 && (
              <motion.div
                className="mt-8 p-6 bg-blue-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Informasi Pengiriman
                </h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    Kurir: <span className="font-medium">JNE Express</span>
                  </p>
                  <p>
                    No. Resi: <span className="font-medium">JNE1234567890</span>
                  </p>
                  <p>
                    Estimasi Tiba:{" "}
                    <span className="font-medium">1-2 hari kerja</span>
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function TrackingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <TrackingContent />
    </Suspense>
  );
}
