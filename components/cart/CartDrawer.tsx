"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/utils/helpers";
import Button from "../ui/Button";
import { useEffect } from "react";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getTotalPrice,
  } = useCartStore();
  const totalPrice = getTotalPrice();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Keranjang Belanja
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-full text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <svg
                    className="w-24 h-24 text-gray-300 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-gray-500 mb-6">
                    Keranjang belanja Anda masih kosong
                  </p>
                  <Link href="/products" onClick={closeCart}>
                    <Button variant="primary">Mulai Belanja</Button>
                  </Link>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        className="flex gap-4 bg-gray-50 p-4 rounded-xl"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        layout
                      >
                        {/* Image */}
                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-white">
                          <Image
                            src={
                              item.product.images[0] ||
                              "/placeholder-product.jpg"
                            }
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-orange-600 font-semibold text-sm mb-2">
                            {formatPrice(item.product.price)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                            >
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
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>

                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                              disabled={item.quantity >= item.product.stock}
                            >
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
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>

                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="ml-auto text-red-500 hover:text-red-700 p-1"
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
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-6 py-4 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-xl font-bold text-gray-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                {/* Info */}
                <p className="text-xs text-gray-500 text-center">
                  Biaya pengiriman akan dihitung di halaman checkout
                </p>

                {/* Checkout Button */}
                <Link href="/checkout" onClick={closeCart}>
                  <Button variant="primary" size="lg" fullWidth>
                    Lanjut ke Checkout
                  </Button>
                </Link>

                {/* Continue Shopping */}
                <button
                  onClick={closeCart}
                  className="w-full text-center text-sm text-gray-600 hover:text-gray-900 py-2"
                >
                  Lanjut Belanja
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
