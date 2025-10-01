# BAPENDA Kabupaten Garut

Situs web resmi **Badan Pendapatan Daerah (BAPENDA) Kabupaten Garut** - Badan Pengelola Pendapatan Daerah Kabupaten Garut, Indonesia.

BAPENDA Garut adalah institusi pemerintah daerah yang bertanggung jawab mengelola pajak daerah dan mengkoordinasikan retribusi daerah di Kabupaten Garut. Situs web ini menyediakan informasi komprehensif tentang pengelolaan pajak daerah, jenis pajak, dan layanan publik.

## Tentang Proyek Ini

Platform ini berfungsi sebagai antarmuka digital utama bagi masyarakat dan pelaku usaha untuk:

- Mempelajari jenis-jenis pajak daerah yang dikelola BAPENDA Garut
- Mengakses layanan dan informasi terkait pajak
- Memahami regulasi dan prosedur perpajakan
- Menghubungi BAPENDA untuk pertanyaan dan bantuan

### Pajak Daerah yang Dikelola

BAPENDA Garut mengelola pajak daerah berikut:

- **PBB-P2** - Pajak Bumi dan Bangunan Perkotaan dan Perdesaan
- **BPHTB** - Bea Perolehan Hak atas Tanah dan Bangunan
- **PBJT** - Pajak Barang dan Jasa Tertentu (makanan/minuman, listrik, perhotelan, parkir, hiburan)
- **Pajak Mineral Bukan Logam dan Batuan**
- **Pajak Sarang Burung Walet**
- **Pajak Reklame**
- **Pajak Air Tanah**

## Mengapa Open Source?

Proyek ini bersifat **open source** untuk mempromosikan **transparansi dan akuntabilitas** dalam layanan digital pemerintah. Dengan membuat kode kami tersedia untuk publik, kami bertujuan untuk:

- **Membangun Kepercayaan Publik** - Masyarakat dapat melihat secara langsung bagaimana situs web pemerintah mereka beroperasi
- **Memastikan Transparansi** - Kode terbuka memungkinkan pengawasan dan verifikasi komunitas
- **Mendorong Kolaborasi** - Pengembang dapat berkontribusi perbaikan dan mengidentifikasi masalah
- **Menetapkan Standar** - Menjadi referensi untuk inisiatif digital pemerintah lainnya
- **Mendorong Inovasi** - Memungkinkan komunitas menyarankan solusi modern dan praktik terbaik
- **Mengurangi Biaya** - Memanfaatkan kontribusi komunitas untuk perbaikan berkelanjutan

Kami percaya bahwa layanan pemerintah harus terbuka, transparan, dan dapat diakses oleh semua orang.

## Teknologi yang Digunakan

Proyek ini dibangun dengan teknologi web modern:

- **Framework**: [Next.js 15](https://nextjs.org) (App Router) dengan React 19
- **Bahasa**: TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Komponen UI**: [shadcn/ui](https://ui.shadcn.com) dengan Radix UI primitives
- **Kualitas Kode**: [Biome](https://biomejs.dev) untuk linting dan formatting
- **Penegakan Kualitas**: [Ultracite](https://ultracite.dev) untuk type safety ketat dan standar kode
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (Next.js)

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- **Node.js** 20.x atau lebih tinggi
- **pnpm** 9.x atau lebih tinggi (atau npm/yarn/bun)

## Memulai

### Instalasi

1. **Clone repositori**

   ```bash
   git clone https://github.com/your-org/bapenda.garutkab.go.id.git
   cd bapenda.garutkab.go.id
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Development

Jalankan development server:

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

Halaman akan otomatis terupdate saat Anda mengedit file di direktori `app`.

### Kualitas Kode

Proyek ini menerapkan standar kualitas kode yang ketat:

```bash
# Periksa kualitas kode dan linting
pnpm lint

# Format kode secara otomatis
pnpm format

# Perbaiki dan format otomatis (direkomendasikan sebelum commit)
npx ultracite fix
```

### Build untuk Production

```bash
pnpm build
pnpm start
```

## Cara Berkontribusi

Kami menyambut kontribusi dari komunitas! Berikut cara Anda dapat membantu:

### Panduan Kontribusi

1. **Fork Repositori**

   - Klik tombol "Fork" di kanan atas repositori ini
   - Clone fork Anda secara lokal

2. **Buat Branch**

   ```bash
   git checkout -b feature/nama-fitur-anda
   # atau
   git checkout -b fix/perbaikan-bug-anda
   ```

3. **Ikuti Standar Kode**

   - Tulis TypeScript dengan type safety ketat (tanpa tipe `any`)
   - Ikuti praktik terbaik aksesibilitas (a11y)
   - Pastikan semua kode lolos pengecekan Biome dan Ultracite
   - Tulis kode yang semantik dan self-documenting
   - Tambahkan komentar untuk logika yang kompleks

4. **Test Perubahan Anda**

   - Jalankan `pnpm dev` dan verifikasi perubahan Anda bekerja dengan benar
   - Jalankan `pnpm lint` untuk memastikan kualitas kode
   - Test fitur aksesibilitas
   - Verifikasi desain responsif di berbagai ukuran layar

5. **Commit Perubahan Anda**

   ```bash
   git add .
   git commit -m "feat: tambah deskripsi fitur anda"
   # atau
   git commit -m "fix: perbaiki deskripsi bug"
   ```

   Gunakan pesan commit konvensional:

   - `feat:` untuk fitur baru
   - `fix:` untuk perbaikan bug
   - `docs:` untuk perubahan dokumentasi
   - `style:` untuk perubahan formatting
   - `refactor:` untuk refactoring kode
   - `test:` untuk menambah test
   - `chore:` untuk tugas maintenance

6. **Push dan Buat Pull Request**
   ```bash
   git push origin feature/nama-fitur-anda
   ```
   - Buka repositori di GitHub
   - Klik "New Pull Request"
   - Berikan deskripsi yang jelas tentang perubahan Anda
   - Referensikan issue terkait jika ada

### Apa yang Bisa Dikontribusikan

Kami menghargai kontribusi di area berikut:

- 🐛 **Perbaikan Bug** - Laporkan dan perbaiki bug
- ✨ **Fitur Baru** - Tingkatkan fungsionalitas yang ada
- 📝 **Dokumentasi** - Perbaiki README, tambahkan komentar kode
- ♿ **Aksesibilitas** - Tingkatkan kepatuhan a11y
- 🎨 **UI/UX** - Perbaikan desain dan pengalaman pengguna
- 🌐 **Lokalisasi** - Dukungan bahasa Indonesia yang lebih baik
- ⚡ **Performa** - Perbaikan optimisasi
- 🔒 **Keamanan** - Identifikasi dan perbaiki masalah keamanan

### Proses Review Kode

1. Semua pull request akan direview oleh maintainer
2. Perubahan mungkin diminta untuk memenuhi standar kualitas kode
3. Setelah disetujui, kontribusi Anda akan di-merge
4. Anda akan dikreditkan dalam daftar kontributor

### Butuh Bantuan?

- 📧 Hubungi kami melalui tombol "Tanya Kami" di website
- 🐛 Buka issue untuk bug atau permintaan fitur
- 💬 Diskusikan ide sebelum mengimplementasikan perubahan besar

## Lisensi

Proyek ini bersifat open source dan tersedia di bawah [Lisensi MIT](LICENSE).

## Ucapan Terima Kasih

- Dibangun dengan [Next.js](https://nextjs.org) oleh Vercel
- Komponen UI dari [shadcn/ui](https://ui.shadcn.com)
- Ikon dari [Lucide](https://lucide.dev)
- Font: [Geist](https://vercel.com/font) dan Geist Mono

## Kontak

**Badan Pendapatan Daerah Kabupaten Garut**

- Website: [bapenda.garutkab.go.id](https://bapenda.garutkab.go.id)
- Untuk pertanyaan, gunakan fitur "Tanya Kami" di website kami

---

Dibuat dengan ❤️ untuk masyarakat Kabupaten Garut
