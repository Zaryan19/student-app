# Student Management App

Aplikasi berbasis web sederhana yang dikembangkan menggunakan **ReactJS** untuk memenuhi tugas pemrograman web, dengan fokus pada penerapan _React Hooks_ (`useState`, `useEffect`) serta perulangan data menggunakan fungsi `.map()`.

---

## Fitur Utama

1. **Manajemen Data Mahasiswa (`useState`)**: Menyimpan data statis berupa _array of objects_ (minimal 5 data mahasiswa) yang mencakup NIM, Nama, No. HP, Email, Alamat, Program Studi, dan Tahun Masuk.
2. **Perulangan Tabel Dinamis (`.map()`)**: Menampilkan daftar mahasiswa ke dalam tabel HTML secara otomatis dengan kunci unik (`key={nim}`) untuk efisiensi _Virtual DOM_.
3. **Jam Digital Waktu Nyata (_Live Clock_ dengan `useEffect`)**: Fitur pewaktu waktu saat ini yang diperbarui setiap 1 detik menggunakan `setInterval` lengkap dengan fungsi pembersihan (_cleanup_) `clearInterval` saat komponen ditutup (_unmount_).
4. **Informasi Ringkas**: Menampilkan jumlah total mahasiswa secara dinamis berdasarkan panjang data state.

---

## Teknologi yang Digunakan

- **ReactJS** (JavaScript Library)
- **Vite** (Development Server & Bundler)
- **Vanilla CSS** (Styling dasar antarmuka)

---

## Petunjuk Instalasi dan Pengaturan

Pastikan komputer Anda telah terinstal **Node.js** sebelum menjalankan langkah-langkah berikut:

1. **Clone atau Buka Direktori Proyek**
   Buka terminal/command prompt pada folder proyek `student-app` Anda.

2. **Instalasi Pustaka (Dependencies)**
   Jalankan perintah berikut untuk mengunduh modul yang diperlukan:

   ```bash
   npm install
   ```

3. **Menjalankan Server Pengembangan (Development Server)**
   Jalankan perintah berikut untuk memulai aplikasi secara lokal:

   ```bash
   npm run dev
   ```

4. **Akses di Peramban (Browser)**
   Buka tautan lokal yang muncul di terminal (biasanya `http://localhost:5173`) untuk melihat hasil aplikasi.

---

## Struktur Berkas Utama

- `src/App.jsx` : Berkas utama yang berisi logika state, efek samping jam digital, dan struktur rendering tabel.
- `src/App.css` : Berkas penataan gaya (_stylesheet_) untuk mempercantik tata letak tabel dan informasi halaman.
