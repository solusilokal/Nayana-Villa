# Nayana Villa - Website Preview & Setup Guide

Proyek mini website landing page & reservasi Nayana Villa berbasis **React**, **Vite**, **TypeScript**, dan **Tailwind CSS**.

---

## 🚀 Cara Melihat Preview Website

Ada 3 cara mudah untuk melihat preview website ini:

### 1. Langsung Lewat Browser (Server Sedang Berjalan Aktif)
Server development Vite saat ini **sudah aktif dan berjalan**. Silakan buka link berikut di browser (Chrome / Edge / Firefox):
👉 **[http://localhost:3004/](http://localhost:3004/)**

---

### 2. Buka Langsung File Standalone (Tanpa Perlu Terminal)
File `preview.html` telah dibuat dalam bentuk *single-file standalone* (sudah mengemas seluruh script, gaya CSS, dan icon).
- Buka File Explorer di folder proyek ini: `c:\Users\U S E R\Downloads\Tugas Magang Solusilokal.Id\Mini Website\wisata villa`
- **Klik dua kali file `preview.html`** untuk langsung membukanya di browser favorit Anda.

---

### 3. Menjalankan Ulang Server Dev (Kapan Saja)
Jika server dimatikan dan ingin dijalankan kembali:
- **Cara Praktis:** Klik dua kali file `start-dev.bat` di File Explorer.
- **Cara Lewat Terminal / PowerShell:**
  ```powershell
  npm.cmd run dev
  ```
  *(Gunakan `npm.cmd` jika PowerShell Anda memiliki pembatasan policy script).*

---

## 🛠️ Perintah Tersedia
- `npm.cmd run dev` : Menjalankan development server lokal dengan Hot Module Replacement (HMR).
- `npm.cmd run build` : Membangun output produksi dan membuat bundle ke folder `dist/` serta `preview.html`.
- `npm.cmd run preview` : Menjalankan server preview dari build produksi.

---

## 📂 Struktur Berkas
- `nayana_villa.tsx` : Komponen utama React landing page Nayana Villa.
- `preview.html` : Berkas preview siap buka langsung di browser.
- `start-dev.bat` : Script batch Windows untuk menjalankan server sekali klik.
- `src/main.tsx` : Titik masuk utama React DOM.
- `src/index.css` : Konfigurasi font dan Tailwind CSS directives.
- `tailwind.config.js` & `postcss.config.js` : Konfigurasi styling Tailwind CSS.
- `vite.config.ts` : Konfigurasi Vite & SingleFile bundler.
