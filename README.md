# JakmallApp

JakmallApp adalah aplikasi berbasis **React Native** yang menyajikan berbagai kategori lelucon dari **JokeAPI**. Aplikasi ini memungkinkan pengguna untuk melihat, menyematkan, dan menambahkan lebih banyak lelucon dalam setiap kategori.

## 📌 Fitur Utama
- **Menampilkan kategori lelucon** secara dinamis dari API.
- **Menyematkan kategori ke atas daftar** untuk akses cepat.
- **Mendukung refresh data** untuk mendapatkan lelucon terbaru.

## 🛠️ Teknologi yang Digunakan
- **React Native** - Framework utama untuk pengembangan aplikasi mobile.
- **Axios** - Untuk mengambil data dari **JokeAPI**.
- **React Navigation** - Untuk navigasi antar layar.
- **React Native Gesture Handler** - Untuk interaksi pengguna yang lebih halus.
- **FastImage** - Untuk optimasi pemuatan gambar.

## 🚀 Instalasi dan Menjalankan Aplikasi

1. **Clone Repository**
   ```sh
   git clone https://github.com/username/JakmallApp.git
   cd JakmallApp
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Jalankan Aplikasi di Emulator atau Perangkat**
   ```sh
   npx react-native run-android   # Untuk Android
   npx react-native run-ios       # Untuk iOS
   ```

## 📷 Tampilan Aplikasi
- **Splash Screen**
- **Halaman Utama dengan Daftar Kategori**
- **Tampilan Detail Lelucon**

## 🔧 Konfigurasi API
Aplikasi mengambil data dari **JokeAPI**. Jika ingin menggunakan endpoint yang berbeda, ubah bagian berikut di **HomeScreen.js**:
```js
const fetchCategories = async () => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/categories');
    const categories = response.data.categories || [];
    setDataCategories(response.data || {});
    fetchAllJokes(categories);
  } catch (error) {
    console.log('Error fetching categories:', error);
  }
};
```

## 📄 Lisensi
Proyek ini menggunakan lisensi **MIT**. Silakan gunakan dan kembangkan lebih lanjut.

---
💡 **Dikembangkan oleh Naufal Arkan Lutfiansyah**

