"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { formatPrice, generateOrderNumber } from "@/utils/helpers";
import { Courier, PaymentMethod } from "@/types";
import toast from "react-hot-toast";

const couriers: Courier[] = [
  {
    id: "1",
    name: "JNE",
    service: "Reguler",
    cost: 0,
    estimatedDays: "",
  },
  {
    id: "2",
    name: "J&T (JNT)",
    service: "Reguler",
    cost: 0,
    estimatedDays: "",
  },
  {
    id: "3",
    name: "PAXEL",
    service: "Reguler",
    cost: 0,
    estimatedDays: "",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    name: "Transfer Bank BCA",
    type: "bank_transfer",
    accountNumber: "1234567890",
    accountName: "Toko Oleh-Oleh",
  },
  {
    id: "2",
    name: "Transfer Bank Mandiri",
    type: "bank_transfer",
    accountNumber: "0987654321",
    accountName: "Toko Oleh-Oleh",
  },
  { id: "3", name: "QRIS", type: "qris" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [selectedCourier, setSelectedCourier] = useState<Courier>(couriers[0]);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(
    paymentMethods[0],
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    notes: "",
  });

  const subtotal = getTotalPrice();
  const shippingCost = selectedCourier.cost;
  const total = subtotal + shippingCost;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Mohon lengkapi semua data yang diperlukan");
      return;
    }

    // Build order items list
    const orderItems = items
      .map((item) => {
        return `${item.quantity}x ${item.product.name} - ${formatPrice(
          item.product.price * item.quantity,
        )}`;
      })
      .join("\n");

    // Build WhatsApp message
    const message = `Halo Admin, saya ingin pesan oleh-oleh dengan informasi sebagai berikut:

Nama Lengkap: ${formData.name}
No. Telepon: ${formData.phone}
Alamat Lengkap: ${formData.address}
Kode Pos: ${formData.postalCode || "-"}
Kota/Kabupaten: ${formData.city || "-"}
Provinsi: ${formData.province || "-"}
Catatan: ${formData.notes || "-"}

*Pesanan:*
*${orderItems}*

Subtotal: ${formatPrice(subtotal)}
Metode Pengiriman: ${selectedCourier.name} - ${selectedCourier.service}
*Total: ${formatPrice(total)}*
(Belum Termasuk ongkir)

Terima kasih`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp Business number (ganti dengan nomor WhatsApp Business Anda)
    const whatsappNumber = "6285119955641"; // Format: 62xxx tanpa +

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Store order in localStorage for tracking
    const orderNumber = generateOrderNumber();
    localStorage.setItem(
      "lastOrder",
      JSON.stringify({
        orderNumber,
        items,
        shippingInfo: formData,
        courier: selectedCourier,
        paymentMethod: selectedPayment,
        subtotal,
        shippingCost,
        total,
        createdAt: new Date().toISOString(),
      }),
    );

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Show success message
    toast.success("Mengarahkan ke WhatsApp...");

    // Clear cart and redirect after a short delay
    setTimeout(() => {
      clearCart();
      router.push(`/success?order=${orderNumber}`);
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="text-center">
          <svg
            className="w-24 h-24 text-gray-300 mx-auto mb-4"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Keranjang Belanja Kosong
          </h2>
          <p className="text-gray-600 mb-6">
            Silakan tambahkan produk ke keranjang terlebih dahulu
          </p>
          <Button onClick={() => router.push("/products")}>
            Belanja Sekarang
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Checkout
        </motion.h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Info */}
              <motion.div
                className="bg-white rounded-2xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Informasi Pengiriman
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Nama Lengkap *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="No. Telepon *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="Kode Pos"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Alamat Lengkap *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      required
                      className="px-4 py-2.5 text-black border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border-gray-300"
                    />
                  </div>
                  <Input
                    label="Kota/Kabupaten"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <Input
                    label="Provinsi"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catatan (Opsional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="Catatan untuk penjual..."
                      className="px-4 py-2.5 text-black border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border-gray-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Method */}
              <motion.div
                className="bg-white rounded-2xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Metode Pengiriman
                </h2>
                <div className="space-y-3">
                  {couriers.map((courier) => (
                    <label
                      key={courier.id}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedCourier.id === courier.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-4 w-full">
                        <input
                          type="radio"
                          name="courier"
                          value={courier.id}
                          checked={selectedCourier.id === courier.id}
                          onChange={() => setSelectedCourier(courier)}
                          className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                        />
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">
                            {courier.name}
                          </span>
                          {courier.service && (
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                              {courier.service}
                            </span>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Ringkasan Pesanan
                </h2>

                {/* Order Items */}
                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.quantity} x {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <div className="flex flex-col items-end">
                      <span>{formatPrice(total)}</span>
                      <span className="text-xs text-gray-600">
                        Belum termasuk ongkir*
                      </span>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="mt-6"
                >
                  Buat Pesanan
                </Button>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
