# 🔧 Troubleshooting Guide - Toko Oleh-Oleh

## ✅ Error yang Sudah Diperbaiki

### 1. ❌ TypeScript `any` Type Error

**File**: `utils/helpers.ts`

**Error**:

```
Unexpected any. Specify a different type.
```

**Solusi**:

```typescript
// ❌ SEBELUM
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void;

// ✅ SESUDAH
export function debounce<T extends (...args: never[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void;
```

---

### 2. ❌ Framer Motion Type Conflict

**File**: `components/ui/Button.tsx`

**Error**:

```
Type conflict dengan HTMLMotionProps
```

**Solusi**:

```typescript
// ❌ SEBELUM
import { motion, HTMLMotionProps } from "framer-motion";
// HTMLMotionProps tidak digunakan

// ✅ SESUDAH
import { motion } from "framer-motion";

// Dan gunakan Component variable
const Component = motion.button;
return (
  <Component
    ref={ref}
    className={combinedClassName}
    disabled={disabled || isLoading}
    whileHover={{ scale: disabled ? 1 : 1.02 }}
    whileTap={{ scale: disabled ? 1 : 0.98 }}
  >
    {children}
  </Component>
);
```

---

### 3. ❌ setState di dalam useEffect

**File**: `app/products/page.tsx`

**Error**:

```
Calling setState synchronously within an effect can trigger cascading renders
```

**Solusi**:

```typescript
// ❌ SEBELUM
const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

useEffect(() => {
  let result = [...products];
  // filtering logic
  setFilteredProducts(result);
}, [searchQuery, selectedCategory, sortBy, priceRange]);

// ✅ SESUDAH - Gunakan computed value
const filteredProducts = (() => {
  let result = [...products];
  // filtering logic
  return result;
})();
```

**Perbaikan tambahan**:

```typescript
// Untuk category dari URL
useEffect(() => {
  const category = searchParams.get("category");
  if (category && category !== selectedCategory) {
    setSelectedCategory(category);
  }
}, [searchParams, selectedCategory]); // Tambahkan selectedCategory ke dependency
```

---

### 4. ❌ TailwindCSS Deprecated Classes

**Error**: `bg-gradient-to-*` dan `flex-shrink-0` adalah deprecated di TailwindCSS 4

**Solusi**:

```css
/* ❌ SEBELUM */
className="bg-gradient-to-br from-orange-500 to-amber-600"
className="flex-shrink-0"

/* ✅ SESUDAH */
className="bg-linear-to-br from-orange-500 to-amber-600"
className="shrink-0"
```

**File yang sudah diperbaiki**:

- ✅ `components/layout/Navbar.tsx`
- ✅ `components/layout/Footer.tsx`
- ✅ `components/cart/CartDrawer.tsx`
- ✅ `app/page.tsx`
- ✅ `app/about/page.tsx`
- ✅ `app/contact/page.tsx`
- ✅ `app/tracking/page.tsx`

---

### 5. ❌ Unused Import

**File**: `app/products/page.tsx`

**Error**:

```
'Product' is defined but never used
```

**Solusi**:

```typescript
// ❌ SEBELUM
import { products, categories } from "@/data/products";
import { Product } from "@/types";

// ✅ SESUDAH
import { products, categories } from "@/data/products";
// Hapus Product karena tidak digunakan setelah refactor
```

---

## 🚨 Cara Cek Error

### Menggunakan VS Code

1. Buka **Problems Panel** (`Ctrl + Shift + M`)
2. Filter by **Errors** dan **Warnings**
3. Klik error untuk jump ke baris yang bermasalah

### Menggunakan Terminal

```bash
# Build project untuk cek error
npm run build

# Run linter
npm run lint

# Fix auto-fixable errors
npm run lint -- --fix
```

---

## 🔍 Common Issues & Solutions

### Issue: Port 3000 Already in Use

```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Or gunakan port lain
npm run dev -- -p 3001
```

### Issue: Module Not Found

```bash
# Clear cache dan reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Issue: Hot Reload Tidak Bekerja

```bash
# Restart dev server dengan clean
npm run dev
```

### Issue: TypeScript Errors Setelah Install Package Baru

```bash
# Restart TypeScript server di VS Code
Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

### Issue: Styling Tidak Muncul

```bash
# Clear Next.js cache
Remove-Item -Recurse -Force .next
npm run dev
```

### Issue: Framer Motion Animation Tidak Smooth

**Solusi**: Pastikan `layout` prop tidak berlebihan

```typescript
// ❌ Hindari nested layout
<motion.div layout>
  <motion.div layout> // Berlebihan
  </motion.div>
</motion.div>

// ✅ Gunakan seperlunya
<motion.div layout>
  <div>
  </div>
</motion.div>
```

---

## 📊 Performance Optimization

### 1. Image Optimization

```typescript
// Gunakan Next.js Image dengan sizes
<Image
  src={product.image}
  alt={product.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 2. Code Splitting

```typescript
// Dynamic import untuk component berat
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

### 3. Memoization

```typescript
// Gunakan useMemo untuk computation berat
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

---

## 🐛 Debug Tips

### 1. Cek State di React DevTools

- Install **React Developer Tools** extension
- Buka Components tab untuk inspect state
- Gunakan Profiler untuk performance issues

### 2. Console Logging Strategy

```typescript
// Development only logging
if (process.env.NODE_ENV === "development") {
  console.log("Cart items:", items);
}
```

### 3. Network Issues

- Buka **Network Tab** di DevTools
- Cek failed requests
- Verify API endpoints

---

## 📚 Best Practices yang Sudah Diterapkan

### ✅ TypeScript Strict Mode

- Semua file menggunakan strict typing
- No `any` types (kecuali yang diperlukan)
- Interface definitions lengkap

### ✅ React Best Practices

- Proper use of `useState`, `useEffect`, `useMemo`
- No inline object/array creation di JSX
- Proper dependency arrays

### ✅ Performance

- Image optimization dengan Next.js Image
- Code splitting dengan dynamic imports (ready)
- Proper memo usage untuk expensive operations

### ✅ Accessibility

- Semantic HTML
- Proper ARIA labels (can be improved)
- Keyboard navigation support

---

## 🔄 Maintenance Checklist

### Weekly

- [ ] Update dependencies dengan `npm update`
- [ ] Check security vulnerabilities dengan `npm audit`
- [ ] Review dan fix linting warnings

### Monthly

- [ ] Update Next.js dan React ke latest stable
- [ ] Review performance dengan Lighthouse
- [ ] Clean up unused dependencies
- [ ] Update documentation

### Before Production

- [ ] Run full build: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Run full test suite (when implemented)
- [ ] Check SEO dengan Lighthouse
- [ ] Verify all images optimized
- [ ] Review console for errors/warnings

---

## 📞 Getting Help

Jika menemui masalah yang tidak tercantum:

1. **Check Documentation**:

   - Next.js: https://nextjs.org/docs
   - TailwindCSS: https://tailwindcss.com/docs
   - Framer Motion: https://www.framer.com/motion/
   - Zustand: https://github.com/pmndrs/zustand

2. **Search for Similar Issues**:

   - GitHub Issues untuk masing-masing library
   - Stack Overflow
   - Next.js Discussions

3. **Enable Verbose Logging**:

```bash
# Next.js dengan verbose
DEBUG=* npm run dev
```

---

## ✅ Verification Steps

Untuk memastikan semua error sudah diperbaiki:

```bash
# 1. Clear everything
Remove-Item -Recurse -Force .next, node_modules
Remove-Item package-lock.json

# 2. Fresh install
npm install

# 3. Run type check
npx tsc --noEmit

# 4. Run linter
npm run lint

# 5. Build production
npm run build

# 6. Start dev server
npm run dev
```

Jika semua step di atas berhasil tanpa error, aplikasi sudah siap! 🎉
