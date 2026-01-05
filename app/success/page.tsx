"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/utils/helpers";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const orderNumber = searchParams.get("order");

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder));

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, []);

  if (!order || !orderNumber) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Pesanan tidak ditemukan</p>
          <Button onClick={() => router.push("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Success Icon */}
          <motion.div
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Pesanan Berhasil!
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Terima kasih telah berbelanja. Pesanan Anda sedang diproses.
          </motion.p>

          {/* Order Number */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-600 mb-2">Nomor Pesanan</p>
            <p className="text-2xl font-bold text-amber-600">{orderNumber}</p>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className="border-t border-gray-200 pt-6 mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">
              Ringkasan Pesanan
            </h3>

            <div className="space-y-2 mb-4">
              {order.items?.map((item: any) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-sm"
                >
                  <span className="text-gray-600">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-3 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ongkir ({order.courier?.name})</span>
                <span>{formatPrice(order.shippingCost)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </motion.div>

          {/* Payment Info */}
          <motion.div
            className="bg-yellow-50 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">
              Informasi Pembayaran
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Metode:{" "}
              <span className="font-medium">{order.paymentMethod?.name}</span>
            </p>
            {order.paymentMethod?.accountNumber && (
              <div className="text-sm text-gray-700">
                <p>
                  No. Rekening:{" "}
                  <span className="font-medium">
                    {order.paymentMethod.accountNumber}
                  </span>
                </p>
                <p>
                  Atas Nama:{" "}
                  <span className="font-medium">
                    {order.paymentMethod.accountName}
                  </span>
                </p>
              </div>
            )}
            <p className="text-xs text-gray-600 mt-3">
              Silakan lakukan pembayaran dalam 24 jam
            </p>
          </motion.div>

          {/* Shipping Address */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">
              Alamat Pengiriman
            </h3>
            <p className="text-sm text-gray-700">
              <strong>{order.shippingInfo?.name}</strong>
              <br />
              {order.shippingInfo?.phone}
              <br />
              {order.shippingInfo?.address}
              <br />
              {order.shippingInfo?.city}, {order.shippingInfo?.province}{" "}
              {order.shippingInfo?.postalCode}
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href={`/tracking?order=${orderNumber}`} className="flex-1">
              <Button variant="primary" fullWidth>
                Lacak Pesanan
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button variant="outline" fullWidth>
                Kembali ke Beranda
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
