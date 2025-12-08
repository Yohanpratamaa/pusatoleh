# 🛍️ Toko Oleh-Oleh - Modern E-Commerce Website

A complete, production-ready e-commerce website for traditional Indonesian souvenir store built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

### 🎯 Core Features
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Shopping Cart**: Real-time cart management with Zustand state management
- **Product Filtering**: Advanced filters by category, price range, and search
- **Product Details**: Dynamic product pages with image galleries and related products
- **Checkout Flow**: Complete checkout process with shipping and payment selection
- **Order Tracking**: Real-time order status tracking with animated progress
- **Contact & About**: Company information and customer contact form

### 🚀 Technical Features
- **Next.js 16** with App Router and Server Components
- **TypeScript** for type safety
- **TailwindCSS 4** for modern styling
- **Framer Motion** for smooth animations and transitions
- **Zustand** for lightweight state management with localStorage persistence
- **React Hook Form + Zod** for form validation
- **Hot Toast** for beautiful notifications
- **Canvas Confetti** for success celebrations

## 📦 Tech Stack

```json
{
  "framework": "Next.js 16.0.7",
  "language": "TypeScript 5",
  "styling": "TailwindCSS 4",
  "animation": "Framer Motion 12.23.25",
  "state": "Zustand 5.0.9",
  "forms": "React Hook Form 7.68.0 + Zod 4.1.13",
  "notifications": "React Hot Toast 2.6.0"
}
```

## 📁 Project Structure

```
pusatoleh/
├── app/
│   ├── layout.tsx           # Root layout with Navbar, Footer, Cart
│   ├── page.tsx             # Home page (8 sections)
│   ├── products/
│   │   ├── page.tsx         # Product listing with filters
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic product detail
│   ├── checkout/
│   │   └── page.tsx         # Checkout with forms
│   ├── success/
│   │   └── page.tsx         # Order confirmation
│   ├── about/
│   │   └── page.tsx         # About company
│   ├── contact/
│   │   └── page.tsx         # Contact form & info
│   └── tracking/
│       └── page.tsx         # Order tracking
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── ToastProvider.tsx
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── cart/
│   │   └── CartDrawer.tsx   # Sliding cart drawer
│   └── product/
│       └── ProductCard.tsx   # Product display card
├── lib/
│   └── store.ts             # Zustand cart store
├── data/
│   └── products.ts          # Dummy product data
├── types/
│   └── index.ts             # TypeScript interfaces
└── utils/
    └── helpers.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory**:
```bash
cd f:\TOKO\pusatoleh
```

2. **Dependencies are already installed** (verified ✅)

3. **Run development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

## 🎨 Pages & Routes

| Route | Description | Key Features |
|-------|-------------|--------------|
| `/` | Home page | Hero, categories, featured products, testimonials, about, CTA |
| `/products` | Product listing | Filters, search, sorting, pagination |
| `/products/[slug]` | Product detail | Image gallery, quantity selector, related products |
| `/checkout` | Checkout | Shipping form, courier selection, payment methods |
| `/success` | Order confirmation | Confetti animation, order summary, tracking |
| `/about` | About company | Story, mission & vision, values |
| `/contact` | Contact page | Contact form, WhatsApp, email, address, map |
| `/tracking` | Order tracking | Search by order number, animated progress |

## 🛒 Cart Management

The cart uses **Zustand** with localStorage persistence:

```typescript
// Available cart actions:
- addItem(product)          // Add product to cart
- removeItem(productId)     // Remove from cart
- updateQuantity(id, qty)   // Update item quantity
- clearCart()               // Clear all items
- toggleCart()              // Open/close cart drawer
- getTotalItems()           // Get total item count
- getTotalPrice()           // Calculate total price
```

## 📱 Key Components

### ProductCard
- Hover animations with Framer Motion
- Best Seller badge
- Stock indicator
- Add to cart with toast notification
- Rating display

### CartDrawer
- Slide animation from right
- Quantity controls
- Item removal
- Real-time price calculation
- Empty state handling

### Navbar
- Responsive mobile menu
- Cart badge with item count
- Active page indicator
- Scroll shadow effect

### Checkout Flow
1. Shipping information form
2. Courier selection (4 options)
3. Payment method selection
4. Order summary sidebar
5. Order confirmation with confetti

## 🎯 Product Data

Currently using **dummy data** with 12 Indonesian souvenir products:
- Keripik Singkong Balado
- Dodol Durian Medan
- Kopi Toraja Premium
- Batik Tulis Jogja
- Keripik Tempe Original
- And more...

### Adding Real Product Images
1. Add images to `/public/products/` folder
2. Update image paths in `/data/products.ts`
3. Use format: `/products/product-name.jpg`

## 🎨 Customization

### Colors (TailwindCSS)
Primary color scheme: **Orange/Amber**
- Edit `tailwind.config.ts` to change colors
- Current: `orange-500`, `amber-400`

### Animations
All animations use Framer Motion:
- Hover effects on cards and buttons
- Scroll reveal animations
- Page transitions
- Cart drawer slide
- Progress animations

### Dummy Data
Edit `/data/products.ts` to:
- Add/remove products
- Update categories
- Modify testimonials
- Change pricing

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - TailwindCSS customization
- `tsconfig.json` - TypeScript settings
- `eslint.config.mjs` - ESLint rules
- `postcss.config.mjs` - PostCSS plugins

## 📈 Future Enhancements (Optional)

- [ ] **Authentication**: NextAuth integration
- [ ] **Database**: Prisma + PostgreSQL
- [ ] **Admin Dashboard**: Product/order management
- [ ] **Dark Mode**: Theme toggle
- [ ] **Payment Integration**: Real payment gateway
- [ ] **Image Upload**: Cloudinary integration
- [ ] **Email Notifications**: Order confirmations
- [ ] **Analytics**: Google Analytics integration
- [ ] **SEO**: Enhanced meta tags and sitemap
- [ ] **PWA**: Progressive Web App features

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Clear localStorage (reset cart)
Open browser console and run:
```javascript
localStorage.clear()
```

### ESLint errors
```bash
npm run lint -- --fix
```

## 📝 Notes

- **Language**: Indonesian (IDR currency)
- **Cart Persistence**: Stored in localStorage
- **Images**: Using placeholder paths
- **Payments**: Currently simulation only
- **Orders**: Stored in localStorage

## 👨‍💻 Development

Built with ❤️ using modern web technologies. All components are **fully typed** with TypeScript and follow React best practices.

### Code Quality
- ✅ TypeScript strict mode
- ✅ ESLint configured
- ✅ Component-based architecture
- ✅ Reusable utilities
- ✅ Clean separation of concerns

## 🎉 Ready to Launch!

Your complete e-commerce website is ready to use. Just run:

```bash
npm run dev
```

And start exploring at **http://localhost:3000** 🚀
