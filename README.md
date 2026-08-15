# Web Portfolio & Resume — Marcellinus Aditya

Website portofolio dan resume pribadi yang dibangun menggunakan **Next.js**, **React**, **TypeScript**, dan **Tailwind CSS**.

Didesain dengan gaya minimalis dan profesional untuk menampilkan profil, keahlian, proyek, pengalaman, dan kontak dalam satu halaman (single page application).

## Fitur

- **Hero** — Intro developer lengkap dengan panel terminal dan daftar teknologi.
- **About** — Cerita singkat, foto profil, dan area fokus.
- **Projects** — Studi kasus editorial (gaya case-study) dengan peran, highlight kontribusi, dan tautan live/PDF.
- **Experience & Education** — Timeline pengalaman, riwayat pendidikan, sertifikasi, dan unduhan CV PDF.
- **Skills** — Daftar tech stack yang dikelompokkan (Frontend, Backend, Database & API, DevOps).
- **Contact** — CTA akhir dengan email, WhatsApp, GitHub, dan LinkedIn.
- **Responsive** — Tampilan menyesuaikan perangkat mobile, tablet, dan desktop.

## Teknologi

| Bagian           | Teknologi                                              |
| ---------------- | ------------------------------------------------------ |
| Framework        | Next.js 15 (App Router)                                |
| Bahasa           | TypeScript                                             |
| Styling          | Tailwind CSS 3                                         |
| Font             | Inter + JetBrains Mono (next/font/google)              |
| Deployment       | Static export (`output: "export"`) + GitHub Pages      |

## Struktur Proyek

```
web profile/
├── public/
│   ├── image/                  # Gambar avatar, screenshot proyek
│   ├── logos/                  # Logo (tidak dipakai di UI utama)
│   ├── CV-MarcellinusAditya-V2.pdf
│   ├── Porto-Portal_DB_Klik.pdf
│   └── resume-1.pdf
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles + Tailwind (design tokens)
│   │   ├── layout.tsx          # Root layout, font, metadata
│   │   ├── page.tsx            # Halaman utama (merangkai semua section)
│   │   ├── hero.tsx            # Section Hero (intro + terminal)
│   │   ├── about.tsx           # Section About
│   │   ├── skills.tsx          # Section Tech Stack
│   │   ├── projects.tsx        # Section Projects (editorial)
│   │   ├── resume.tsx          # Section Experience & Education
│   │   └── contact-form.tsx    # Section Contact
│   └── components/
│       ├── navbar.tsx          # Navigasi sticky + active state
│       ├── footer.tsx          # Footer minimal
│       ├── layout.tsx          # Wrapper layout (ThemeProvider)
│       └── project-card.tsx    # Kartu proyek editorial
├── utils/
│   └── utils.ts                # Helper (prefix path gambar)
├── out/                        # Hasil build statis (export)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Cara Menjalankan

### Prasyarat

- Node.js 18 atau lebih baru
- npm (biasanya sudah termasuk dengan Node.js)

### Instalasi

```bash
npm install
```

### Mode Development

```bash
npm run dev
```

Buka http://localhost:3000 di browser.

### Build Produksi

```bash
npm run build
```

Hasil build statis akan di-generate ke folder `out/`.

### Menjalankan Build

```bash
npm start
```

### Deploy ke GitHub Pages

```bash
npm run deploy
```

Script ini melakukan build terlebih dahulu lalu publish folder `out/` ke branch `gh-pages`.

## Scripts

| Perintah          | Deskripsi                                 |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Menjalankan server development            |
| `npm run build`   | Build produksi (static export)            |
| `npm start`       | Menjalankan hasil build                   |
| `npm run lint`    | Menjalankan ESLint                        |
| `npm run deploy`  | Deploy hasil build ke GitHub Pages        |

## Proyek yang Ditampilkan

| Proyek                                             | Tahun | Teknologi                     | Tautan                    |
| -------------------------------------------------- | ----- | ----------------------------- | ------------------------- |
| Item Portal Web (DB Klik Intern)                   | 2025  | Laravel                       | `/Porto-Portal_DB_Klik.pdf` |
| Omnichannel Web (DB Klik Intern)                   | 2025  | Laravel                       | —                         |
| Storage App (Vitro Storage)                        | 2026  | Laravel + React               | [vitrostorage.vitroweb.my.id](https://vitrostorage.vitroweb.my.id/) |
| Tickox                                            | 2025  | Laravel + Filament            | [tickox.vitroweb.my.id](https://tickox.vitroweb.my.id/) |
| Diabetes Detection (KNN + Genetic Algorithm)       | 2025  | Python                        | [deteksi-diabetes.vitroweb.my.id](https://deteksi-diabetes.vitroweb.my.id/) |
| Soccer Field Rent (Microservice)                   | 2025  | Golang + React + Midtrans     | [fe.vitroweb.site](https://fe.vitroweb.site/) |
| Prima Apotek E-commerce                            | 2023  | Laravel + Midtrans            | [primaapotek.vitroweb.my.id](http://primaapotek.vitroweb.my.id/) |

## Kontak

- **WhatsApp:** 0896-9242-5060
- **Email:** marcellinusaditya.official@gmail.com
- **GitHub:** [MarcellinusAditya](https://github.com/MarcellinusAditya)
- **LinkedIn:** [Marcellinus Aditya](https://www.linkedin.com/in/marcellinus-aditya)

## Lisensi

Proyek ini berbasis template dari [Creative Tim — Next.js Tailwind Portfolio Page](https://www.creative-tim.com) (lihat `LICENSE.md`).
