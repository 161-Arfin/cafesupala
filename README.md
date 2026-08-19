# ☕ Cafeko — Website Template Coffee Shop & Cafe (Modern Luxury Dark Mode)

Template website modern dan responsif untuk **Coffee Shop, Cafe, Restoran, atau F&B Business** berbasis **Next.js 16**, **React 19**, dan **Tailwind CSS v4**. Dilengkapi dengan desain *Luxury Dark Mode*, aksen emas, katalog menu dinamis, dan sistem **Reservasi Langsung via WhatsApp**.

---

## ✨ Fitur Unggulan

- 🎨 **Modern Luxury Dark Theme**: Palet warna gelap elegan (`#121214`) dengan aksen emas bercahaya (`#c69a52`).
- 📱 **100% Mobile Responsive**: Tampilan mulus dan rapi di Smartphone, Tablet, hingga Desktop/Monitor lebar.
- 💬 **Booking via WhatsApp Otomatis**: Form reservasi langsung memformat pesan WhatsApp lengkap (Nama, Tanggal, Jam, Jumlah Tamu, Catatan).
- ☕ **Featured & Full Menu Catalog**: Showcase menu unggulan (badge *Cafeko Pick*) dan kategori lengkap (Classic, Flavoured, Signature, Non-Coffee, Pastry).
- 📍 **Lokasi & Google Maps**: Integrasi Google Maps embed, jam operasional, dan galeri suasana.
- ⚡ **Super Fast & Lightweight**: Dibangun dengan Next.js + Turbopack untuk performa loading secepat kilat.
- 🔍 **SEO & Social Share Ready**: Sudah dilengkapi OpenGraph, Twitter Card, Schema.org (`CafeOrCoffeeShop`), dan meta tags lengkap.

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### 1. Persyaratan Sistem
Pastikan komputer Anda sudah terinstall:
- **Node.js** (Versi 18 atau 20+) — [Download Node.js](https://nodejs.org/)
- **npm**, **yarn**, atau **pnpm**

### 2. Instalasi Dependensi
Buka folder project di terminal / VS Code, lalu jalankan:

```bash
npm install
```

### 3. Menjalankan Server Lokal (Development)
```bash
npm run dev
```

Buka browser Anda di `http://localhost:3000`.

### 4. Build untuk Production
```bash
npm run build
npm run start
```

---

## ⚙️ Panduan Kustomisasi (Mudah & Cepat)

> 📖 **Panduan Kustomisasi Lengkap & Detail**: Silakan baca file [**`CUSTOMIZATION_GUIDE.md`**](./CUSTOMIZATION_GUIDE.md) untuk instruksi lengkap langkah-demi-langkah (ganti menu, ganti nomor WA, edit Google Maps, ganti logo, ganti warna tema, format pesan booking WA, hingga setting custom domain).

Semua pengaturan utama telah dipusatkan agar mudah diedit tanpa perlu mengubah kode yang rumit:

### 1. Ganti Nama Kafe, Nomor WhatsApp, dan Kontak
Buka file **`src/config/site.ts`**:
```typescript
export const siteConfig = {
  name: "Nama Kafe Anda",
  tagline: "Coffee & Space",
  description: "Deskripsi singkat kafe Anda untuk SEO...",
  contact: {
    whatsappNumber: "628123456789", // ⚠️ Ganti dengan nomor WhatsApp aktif (awali 62 tanpa +/spasi)
    whatsappDisplay: "+62 812-3456-789",
    email: "kontak@kafeanda.com",
    address: "Alamat lengkap kafe Anda...",
    hoursWeekday: "Senin–Kamis: 09.00–00.00 WIB",
    hoursWeekend: "Jumat–Minggu: 16.00–00.00 WIB",
  },
  social: {
    instagram: "https://instagram.com/akunanda",
    facebook: "https://facebook.com/akunanda",
    twitter: "https://twitter.com/akunanda",
    youtube: "https://youtube.com/akunanda",
  },
  // ...
};
```

### 2. Ganti Daftar Menu & Harga
Buka file **`src/data/menu.ts`**:
Anda bisa menambah, menghapus, atau mengubah item menu, harga, dan kategori:
```typescript
{
  name: "Signature Flat White",
  description: "Espresso ganda dengan microfoam susu lembut.",
  price: "38K",
  coldPrice: "38K",
  hotPrice: "35K",
  featured: true, // Beri tanda true untuk tampil di Menu Unggulan
}
```

### 3. Ganti Logo & Foto
Semua gambar tersimpan di folder **`public/images/`**:
- `public/images/cafeko-logo.png` : Logo kafe (PNG transparan)
- `public/images/hero-barista.jpg` : Foto utama barista di hero
- `public/images/flat-white.jpg`, `spanish-latte.jpg`, dll. : Foto menu unggulan
- Cukup timpa file dengan nama yang sama atau ganti path di `src/config/site.ts` dan `src/data/menu.ts`.

---

## 🌐 Panduan Deploy Gratis ke Vercel (Hanya 3 Menit)

Website ini sangat optimal jika di-deploy ke **Vercel** secara gratis:

1. Buat akun di [Vercel.com](https://vercel.com) (login menggunakan akun GitHub).
2. Push repository/folder ini ke **GitHub** Anda.
3. Di dashboard Vercel, klik **"Add New..."** → **"Project"** → Pilih repository project ini.
4. Klik tombol **"Deploy"**.
5. Tunggu 1–2 menit, website Anda sudah aktif secara online dan memiliki link gratis (contoh: `https://kafe-anda.vercel.app`)!

---

## 📁 Struktur Folder Project

```
├── public/               # File statis (gambar, logo, icon)
│   └── images/           # Aset foto kafe & menu
├── src/
│   ├── components/       # Komponen UI
│   │   ├── layout/       # Navbar, Footer, MainLayout
│   │   ├── sections/     # Home, Menu, Lokasi, Reservasi, Cerita, Galeri
│   │   └── ui/           # Button, Container, BrandLockup
│   ├── config/           # site.ts (Konfigurasi terpusat nama kafe & WA)
│   ├── data/             # menu.ts, business.ts, navigation.ts
│   ├── pages/            # Next.js Pages (_app.tsx, index.tsx, 404.tsx)
│   ├── styles/           # globals.css (Tema Dark Luxury & Tailwind)
│   └── types/            # TypeScript type definitions
├── package.json
└── README.md
```

---

## 📄 Lisensi & Hak Penggunaan

Template ini dilisensikan untuk penggunaan pribadi maupun proyek komersial klien Anda (Freelance). Dilarang menjual ulang (*resell*) template mentah ini secara langsung tanpa nilai tambah.
