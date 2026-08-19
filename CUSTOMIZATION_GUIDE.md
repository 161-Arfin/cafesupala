# 🛠️ Panduan Kustomisasi Lengkap (Customization Guide)

Dokumen ini berisi panduan langkah demi langkah untuk mengubah seluruh teks, kontak WhatsApp, daftar menu, foto, logo, hingga warna tema pada website **Cafeko Coffee & Space**.

---

## 📋 Daftar Isi
1. [Mengubah Identitas Kafe & Nomor WhatsApp](#1-mengubah-identitas-kafe--nomor-whatsapp)
2. [Mengubah Daftar Menu & Harga](#2-mengubah-daftar-menu--harga)
3. [Mengubah Alamat & Google Maps](#3-mengubah-alamat--google-maps)
4. [Mengganti Logo & Foto Website](#4-mengganti-logo--foto-website)
5. [Mengubah Link Menu Navigasi](#5-mengubah-link-menu-navigasi)
6. [Kustomisasi Teks Per Section](#6-kustomisasi-teks-per-section)
7. [Kustomisasi Format Pesan WhatsApp](#7-kustomisasi-format-pesan-whatsapp)
8. [Mengubah Warna & Font Tema](#8-mengubah-warna--font-tema)
9. [Deploy & Pasang Custom Domain (.com / .id)](#9-deploy--pasang-custom-domain-com--id)

---

## 1. Mengubah Identitas Kafe & Nomor WhatsApp

Semua data utama kafe tersimpan di file:
📁 **`src/config/site.ts`**

Buka file tersebut dan sesuaikan bagian berikut:

```typescript
export const siteConfig = {
  name: "Nama Kafe Anda",                  // Nama brand kafe
  shortName: "NamaPendek",                 // Nama singkat
  tagline: "Coffee & Space",               // Slogan / tagline
  title: "Nama Kafe Anda | Coffee & Space", // Judul website di tab browser & Google
  description: "Deskripsi kafe Anda untuk pencarian Google...",

  contact: {
    // ⚠️ PENTING: Nomor WhatsApp untuk menerima booking
    // Format: Kode negara 62 diikuti nomor tanpa tanda + atau spasi (contoh: 6281234567890)
    whatsappNumber: "6281234567890",
    whatsappDisplay: "+62 812-3456-7890", // Teks nomor yang ditampilkan di layar
    email: "kontak@kafeanda.com",
    address: "Jl. Contoh Alamat Kafe No. 123, Kota Anda",
    hoursWeekday: "Senin–Kamis: 09.00–00.00 WIB",
    hoursWeekend: "Jumat–Minggu: 16.00–00.00 WIB",
  },

  // Link Media Sosial (muncul di Footer)
  social: {
    instagram: "https://instagram.com/akunkafeanda",
    facebook: "https://facebook.com/akunkafeanda",
    twitter: "https://twitter.com/akunkafeanda",
    youtube: "https://youtube.com/akunkafeanda",
  },

  // Link Google Maps
  links: {
    maps: "https://maps.app.goo.gl/linkMapsKafeAnda",
  },
};
```

---

## 2. Mengubah Daftar Menu & Harga

Daftar kategori dan item menu tersimpan di file:
📁 **`src/data/menu.ts`**

### A. Menambah / Mengedit Item Menu:
Setiap item menu memiliki struktur seperti ini:
```typescript
{
  name: "Nama Minuman / Makanan",
  description: "Deskripsi singkat rasa dan bahan...",
  price: "28K",           // Harga tampil umum
  coldPrice: "28K",       // Harga varian dingin (opsional)
  hotPrice: "25K",        // Harga varian panas (opsional)
  featured: true,         // Set 'true' jika ingin tampil di 4 Kartu "MENU UNGGULAN" teratas
}
```

### B. Mengatur Menu Unggulan (Featured Cards):
Item dengan properti `featured: true` akan otomatis ditampilkan di kartu besar bagian atas menu. Disarankan memilih **4 item** terbaik.

### C. Menambah Kategori Baru:
Anda bisa menambahkan blok kategori baru di dalam array `menuCategories`:
```typescript
{
  id: "pastry",
  title: "Pastry & Bakery",
  subtitle: "Camilan panggang segar pendamping kopi.",
  items: [
    { name: "Croissant Butter", description: "Croissant renyah berlapis butter premium.", price: "28K" },
  ],
},
```

---

## 3. Mengubah Alamat & Google Maps

Data alamat dan jam operasional juga direferensikan pada file:
📁 **`src/data/business.ts`**

```typescript
export const business = {
  address: "Alamat lengkap kafe Anda...",
  mapsUrl: "https://maps.app.goo.gl/linkMapsAnda",
  hours: [
    { days: "Senin–Kamis", hours: "09.00–00.00" },
    { days: "Jumat–Minggu", hours: "16.00–00.00" },
  ],
};
```

### Mengubah Iframe Peta Interaktif di Section Lokasi:
Buka file **`src/components/sections/lokasi/LocationSection.tsx`** dan cari tag `<iframe>`:
1. Buka Google Maps di browser → Cari lokasi kafe Anda.
2. Klik **Share (Bagikan)** → Pilih tab **Embed a map (Sematkan peta)**.
3. Salin URL di dalam atribut `src="..."` dan tempelkan ke atribut `src` pada iframe tersebut.

---

## 4. Mengganti Logo & Foto Website

Semua gambar tersimpan di folder:
📁 **`public/images/`**

| Nama File | Fungsi | Rekomendasi Format & Ukuran |
|---|---|---|
| `cafeko-logo.png` | Logo kafe di Navbar & Footer | PNG Transparan (rasio 1:1, min 400x400 px) |
| `hero-barista.jpg` | Foto utama di Hero Section | JPG/WebP (rasio landscape 16:9 / 4:3, min 1200x800 px) |
| `flat-white.jpg` | Foto Menu Unggulan 1 | JPG/WebP (rasio 4:3 / 1:1) |
| `spanish-latte.jpg` | Foto Menu Unggulan 2 | JPG/WebP (rasio 4:3 / 1:1) |
| `almond-croissant.jpg` | Foto Menu Unggulan 3 | JPG/WebP (rasio 4:3 / 1:1) |
| `manual-brew.jpg` | Foto Menu Unggulan 4 | JPG/WebP (rasio 4:3 / 1:1) |
| `lyons-workspace-hd.png` | Foto area tempat duduk / WFC | JPG/WebP (min 1000x700 px) |

> 💡 **Tips Praktis:** Cukup ganti file foto di folder `public/images/` dengan nama file yang persis sama, maka foto di website akan otomatis berubah!

---

## 5. Mengubah Link Menu Navigasi

Tautan menu pada header navbar diatur di file:
📁 **`src/data/navigation.ts`**

```typescript
export const navigation = [
  { label: "BERANDA", href: "#home" },
  { label: "MENU", href: "#menu" },
  { label: "LOKASI", href: "#location" },
  { label: "RESERVASI", href: "#reservation" },
  { label: "CERITA", href: "#story" },
  { label: "TENTANG KAMI", href: "#about" },
];
```

---

## 6. Kustomisasi Teks Per Section

Jika ingin mengubah kalimat promosi atau narasi cerita kafe, buka komponen masing-masing section di folder **`src/components/sections/`**:

- **Hero Section**: `src/components/sections/home/HomeSection.tsx`  
  *(Headline: "Ritual Dalam Setiap Seduhan", subheadline, tombol "Lihat Menu")*
- **Cerita Kafe**: `src/components/sections/cerita/StorySection.tsx`  
  *(Narasi filosofi kopi, kutipan tentang rasa & ruang singgah)*
- **Nilai / Layanan Kafe**: `src/components/sections/cerita/ExperienceSection.tsx`  
  *(Biji Pilihan, Giling Presisi, Seduh Perlahan, Rasa Otentik)*
- **Tentang Kami**: `src/components/sections/about-us/AboutUsSection.tsx`  
  *(Fasilitas WiFi, colokan listrik, area WFC, ruangan ber-AC)*
- **Galeri Foto**: `src/components/sections/galeri/GallerySection.tsx`  
  *(Grid foto-foto suasana kafe)*

---

## 7. Kustomisasi Format Pesan WhatsApp

Saat pelanggan menekan tombol **"Booking via WhatsApp"**, format pesan otomatis disusun di file:
📁 **`src/components/sections/reservasi/ReservationSection.tsx`**

Cari fungsi `buildWAMessage`:
```typescript
function buildWAMessage(data: FormData): string {
  const lines = [
    `Halo ${siteConfig.name}! Saya ingin melakukan reservasi 🙏`,
    ``,
    `*Nama:* ${data.name}`,
    `*Tanggal:* ${data.date}`,
    `*Jam:* ${data.time}`,
    `*Jumlah Tamu:* ${data.guests} orang`,
    data.note ? `*Catatan:* ${data.note}` : null,
    ``,
    `Mohon konfirmasi ketersediaan meja. Terima kasih!`,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return encodeURIComponent(lines);
}
```
Anda bisa menambah atau menyesuaikan kata-kata sesuai standar operasional (SOP) kafe Anda.

---

## 8. Mengubah Warna & Font Tema

### A. Mengubah Warna Aksen & Background:
Buka file **`src/styles/globals.css`**:
```css
:root {
  --background: #121214;   /* Warna latar belakang utama website (gelap) */
  --surface: #18181c;      /* Warna kartu/card container */
  --accent: #c89b3c;       /* Warna aksen emas */
  --accent-light: #eed07c; /* Warna gradient emas terang */
  --text-main: #f4f4f5;    /* Warna teks utama (putih terang) */
  --text-muted: #a1a1aa;   /* Warna teks sekunder (abu-abu halus) */
}
```

### B. Mengubah Font Tipografi:
Buka file **`src/pages/_app.tsx`**:
Website ini menggunakan Google Fonts (*Playfair Display* untuk judul klasik dan *Plus Jakarta Sans* untuk teks modern). Anda bisa mengganti font melalui modul `next/font/google`.

---

## 9. Deploy & Pasang Custom Domain (.com / .id)

### Langkah Deploy ke Vercel (Gratis):
1. Buat akun di [Vercel.com](https://vercel.com).
2. Hubungkan repository GitHub project ini ke Vercel.
3. Klik **Deploy**. Website langsung online dalam 1–2 menit.

### Langkah Menghubungkan Domain Sendiri:
1. Beli domain di penyedia domain (Niagahoster, DomaiNesia, Rumahweb, Namecheap, dll).
2. Di dashboard Vercel, masuk ke **Project Settings** → **Domains**.
3. Masukkan nama domain Anda (misal: `kafesaya.com` atau `www.kafesaya.com`).
4. Ikuti instruksi DNS Record (masukkan **CNAME** atau **A Record**) yang diberikan Vercel ke panel DNS domain Anda.
5. Tunggu propagasi DNS (biasanya 5–30 menit). Website kafe Anda sudah aktif di domain resmi!

---

💡 *Butuh bantuan lebih lanjut? Silakan hubungi kontak penjual melalui link pembelian.*
