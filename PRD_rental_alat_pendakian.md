# Product Requirements Document (PRD): Landing Page & Kalkulator Sewa Alat Pendakian

* **Versi Dokumen:** 1.0
* **Status:** Draft / MVP Specification
* **Target Rilis:** 2–3 Minggu
* **Biaya Infrastruktur:** Rp0 (100% Free & Legal Commercial Stack)

---

## Ringkasan Eksekutif (TL;DR)

PRD ini dirancang untuk membantu pemilik usaha persewaan alat *outdoor*/pendakian mengatasi masalah kerumitan hitung tarif sewa harian di media sosial dan gesekan operasional saat pengambilan barang di *basecamp*. Solusinya adalah *high-performance landing page* yang dilengkapi dengan **Kalkulator Estimasi Sewa Interaktif**, **Katalog Paket Bundling**, dan **SOP Jaminan Transparan** yang meneruskan pesanan terformat langsung ke WhatsApp Admin.

---

## 1. Problem Statement & Context (WHY)

Usaha rental alat pendakian sering menghadapi kendala operasional berikut ketika hanya mengandalkan Instagram atau daftar harga berbentuk gambar/PDF:

* **Kalkulasi Tarif & Durasi yang Membingungkan:** Calon penyewa kesulitan menghitung total biaya sewa gabungan (banyak item dikalikan jumlah malam/hari), sehingga memenuhi *chat* admin hanya untuk bertanya total harga.
* **Kebingungan Pendaki Pemula:** Banyak penyewa pemula tidak tahu kombinasi alat apa saja yang wajib dibawa untuk mendaki atau berkemah, sehingga membutuhkan waktu konsultasi yang lama.
* **Keraguan atas Spesifikasi & Kebersihan Alat:** Penyewa ragu apakah tenda memiliki lapisan *waterproof* yang baik (*double layer*), kapasitas *carrier* mencukupi, atau apakah *sleeping bag* sudah dicuci bersih.
* **Gesekan Saat Pengambilan Alat di Basecamp:** Pelanggan sering datang mengambil barang tanpa membawa identitas asli (KTP/SIM/Kartu Pelajar) yang disyaratkan sebagai jaminan karena aturan sewa tidak terpampang jelas sejak awal.

---

## 2. Product Objectives & Success Metrics

* **Tujuan Utama:** Mengotomatisasi perhitungan estimasi biaya sewa oleh pelanggan sendiri dan mempercepat konversi *booking* melalui pesan WhatsApp yang sudah terstruktur rapi.
* **Target Launch (MVP):** Situs web *live* dalam 2–3 minggu menjelang musim pendakian/libur panjang.
* **Key Performance Indicators (KPIs):**
  * *Click-through-rate* (CTR) tombol *"Booking via WhatsApp"* dari keranjang estimasi $\ge 20\%$.
  * Google Core Web Vitals: LCP (*Largest Contentful Paint*) $< 2.0$ detik di jaringan seluler 4G.
  * Penurunan pertanyaan manual terkait "hitung total harga" dan "syarat jaminan" ke admin sebesar $\ge 50\%$.
  * Peningkatan pemesanan melalui opsi **Paket Bundling** sebesar $30\%$.

---

## 3. User Personas

| Persona | Profil & Kebiasaan | Kebutuhan Utama (Goals & Pain Points) |
| :--- | :--- | :--- |
| **Pendaki Pemula / Camper Keluarga** | Mahasiswa atau pekerja muda (18–35 tahun) yang ingin *camping* akhir pekan bersama teman/keluarga. | Butuh rekomendasi **Paket Siap Berangkat** tanpa pusing memilih alat satu per satu, serta kejelasan total biaya patungan. |
| **Pendaki Teknis / Berpengalaman** | Pegiat alam bebas yang hanya menyewa alat spesifik (*ultralight tent*, *carrier* 60L, *trekking pole*, *headlamp*). | Informasi spesifikasi teknis yang akurat (kapasitas, berat, ketahanan air) dan kepastian ketersediaan unit. |
| **Admin / Penjaga Basecamp** | Pengelola operasional toko rental dengan kesibukan mengecek dan mencuci barang. | Menerima *chat* pesanan yang sudah mencantumkan tanggal ambil, tanggal kembali, rincian barang, dan total harga secara otomatis. |

---

## 4. Panduan Identitas Visual & Palet Warna (UI/UX)

Desain antarmuka mengusung kesan **tangguh (*rugged*), bersih, tepercaya, dan mudah dibaca di layar HP**:

1. **Forest Pine (Segar, Alami & Adventurous — Direkomendasikan):**
   * **Primary:** Deep Pine Green (`#1E3A2F`) — Navigasi, judul seksi, dan teks utama.
   * **Background:** Warm Stone / Mist (`#F4F5F0`) — Latar bersih agar foto tenda dan *carrier* terlihat kontras.
   * **Accent:** Campfire / Safety Orange (`#D96B27`) — Tombol utama *"Sewa Sekarang"*, *badge* harga harian, dan pengingat syarat KTP.
2. **Alpine Earth (Hangat, Kasual & Ramah Pemula):**
   * **Primary:** Charcoal Slate (`#2B2D2F`)
   * **Background:** Sand Khaki (`#F7F4EF`)
   * **Accent:** Ochre / Mustard Gold (`#E09F3E`)
3. **Tactical Dark Mode (Modern, Pro-Gear & Ekspedisi):**
   * **Primary / Surface:** Obsidian Charcoal (`#141619`) & Dark Slate (`#1F2421`)
   * **Text:** Crisp White (`#F3F4F6`)
   * **Accent:** Rescue Lime / Volt (`#84CC16`)

---

## 5. Feature Specifications (HOW)

### 5.1. Hero Section & Quick Date Picker (P0 - Wajib)
* Banner visual peralatan *outdoor* di alam bebas dengan *headline* nilai jual utama (contoh: *"Alat Bersih, Terawat & Siap Temani Puncakmu"*).
* Pemilih tanggal cepat (*Tanggal Ambil* & *Tanggal Kembali*) untuk langsung mengatur durasi malam sewa di seluruh halaman.

### 5.2. Interactive Rental Calculator / Keranjang Estimasi (P0 - Wajib)
* Pengunjung dapat menekan tombol `+ Tambah ke Daftar Sewa` pada beberapa alat sekaligus.
* *Floating Bottom Bar* yang menampilkan ringkasan instan: Jumlah alat dipilih $\times$ Durasi malam $=$ **Total Estimasi Biaya**.

### 5.3. Paket Bundling Siap Berangkat (P0 - Wajib)
* Seksi khusus paket hemat untuk mempermudah pemula, contoh:
  * **Paket Camping Ceria (4 Orang):** 1 Tenda Kapasitas 4P, 4 Matras, 4 *Sleeping Bag*, 1 Kompor + *Nesting*, 1 Lampu Tenda.
  * **Paket Solo/Duo Ultralight (2 Orang):** 1 Tenda 2P *Double Layer*, 2 *Carrier* 50L, 2 *Trekking Pole*.

### 5.4. Katalog Alat dengan Filter & Label Spesifikasi (P0 - Wajib)
* Filter kategori instan: *Tenda & Shelter*, *Tas & Carrier*, *Alat Tidur*, *Alat Masak*, *Penerangan & Navigasi*, *Pakaian & Sepatu*.
* Kartu produk memuat: Foto jelas, tarif per 24 jam/malam, spesifikasi kunci (misal: *PU 3000mm*, *Alloy Frame*, *60 Liter*), dan label jaminan *"Steril & Wangi"*.

### 5.5. Smart WhatsApp Booking Integration (P0 - Wajib)
* Tombol *checkout* pada keranjang estimasi yang menghasilkan pesan WhatsApp terformat otomatis ke nomor admin:
  > *"Halo Admin [Nama Rental], saya ingin booking alat pendakian:*
  > *📅 Ambil: Jumat, 15 Mei (Sore)*
  > *📅 Kembali: Minggu, 17 Mei (Sore) — [2 Malam]*
  > *🎒 Daftar Alat:*
  > *- 1x Tenda Kapasitas 4P (Rp40.000/mlm)*
  > *- 2x Carrier 60L (Rp30.000/mlm)*
  > *💰 Total Estimasi: Rp200.000*
  > *Apakah stok untuk tanggal tersebut masih tersedia?"*

### 5.6. Seksi SOP, Syarat Jaminan & Denda (P0 - Wajib)
* Informasi berikon tegas dan mudah dipahami mengenai aturan sewa:
  * Wajib meninggalkan **KTP / SIM / Identitas Asli** yang masih berlaku saat pengambilan barang.
  * Ketentuan jam toleransi pengembalian dan denda keterlambatan/kerusakan alat.
  * Ketentuan uang muka (*Down Payment* / DP) untuk mengunci jadwal *booking*.

### 5.7. Basecamp Locator & Jam Operasional (P1 - Penting)
* Peta interaktif Google Maps (*embed*) menuju lokasi *basecamp* tempat ambil dan kembalikan alat.
* Patokan jalan/gang, area parkir motor/mobil, serta jam buka operasional *basecamp*.

---

## 6. Technical & Non-Functional Requirements (100% Gratis & Legal)

* **Frontend Framework:** **Astro** + **Tailwind CSS** untuk kecepatan muat halaman maksimal dan optimasi SEO lokal (misal kata kunci: *"Sewa Alat Outdoor [Nama Kota]"*).
* **Client-Side State (Kalkulator Sewa):** **Alpine.js** (~7KB) atau **Preact** (*Astro Islands*) untuk menghitung penjumlahan keranjang sewa dan selisih hari langsung di *browser* pengunjung tanpa memerlukan *backend server* berbayar.
* **Content Management System (CMS):** **Keystatic** atau **Decap CMS** (*Git-based CMS* gratis) agar admin *basecamp* dapat menambah alat baru, mengubah tarif harian, atau menandai stok habis melalui halaman `/admin`.
* **Hosting & CDN:** **Cloudflare Pages (Free Plan)** — 100% gratis, legal untuk penggunaan bisnis/komersial, *unlimited static bandwidth*, dan dilengkapi SSL/HTTPS otomatis.

---

## 7. Trade-offs & Pertimbangan Operasional

1. **Kalkulator Estimasi + WhatsApp vs. Sistem Booking Real-Time Database**
   * **Keputusan:** Menggunakan kalkulator estimasi yang diteruskan ke WhatsApp pada tahap MVP.
   * **Alasan:** Di bisnis rental *outdoor*, stok fisik sangat dinamis (ada barang yang terlambat dikembalikan penyewa sebelumnya atau sedang diperbaiki *frame*-nya). Konfirmasi akhir oleh admin via WhatsApp mencegah terjadinya *double-booking* (bentrok jadwal) sekaligus menghemat biaya sewa *database server* bulanan.
2. **Paket Bundling vs. Sewa Satuan (*A La Carte*)**
   * **Keputusan:** Menampilkan Paket Bundling di bagian atas sebelum katalog satuan.
   * **Alasan:** Meningkatkan nilai rata-rata transaksi (*Average Order Value*) dan mempercepat pengambilan keputusan bagi penyewa pemula.

---

## 8. Roadmap Implementasi Singkat

* **Minggu 1:** Pendataan daftar alat beserta tarif sewa per malam, foto produk, penyusunan aturan SOP jaminan, dan desain antarmuka (*Forest Pine* / *Alpine Earth* / *Tactical Dark*).
* **Minggu 2:** Pembuatan halaman Astro + Tailwind CSS, pengembangan logika kalkulator keranjang sewa dengan Alpine.js, dan integrasi Keystatic CMS.
* **Minggu 3:** Pengujian akurasi format pesan WhatsApp di perangkat *mobile*, optimasi Google Maps & SEO lokal, serta peluncuran resmi (*Go-Live*).