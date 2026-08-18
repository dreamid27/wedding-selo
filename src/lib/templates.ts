/**
 * Katalog template undangan Wedding Selo.
 *
 * Setiap template berisi data contoh (pasangan fiktif) dan token tema
 * (warna + font) yang menggerakkan halaman preview di /template/$slug.
 * Menambah template baru cukup dengan menambah satu objek di array ini.
 */

export type TemplateTheme = {
  /** Warna latar utama halaman undangan */
  bg: string
  /** Warna latar kartu/section selang-seling */
  surface: string
  /** Warna teks utama */
  ink: string
  /** Warna teks sekunder */
  sub: string
  /** Warna aksen (tombol, ornamen) */
  accent: string
  /** Warna teks di atas aksen */
  accentInk: string
  /** Warna garis/border halus */
  line: string
  /** Kelas font Tailwind untuk judul */
  headingFont: string
  /** Kelas font Tailwind untuk nama pasangan (script/display) */
  scriptFont: string
  /** Kelas font Tailwind untuk teks isi */
  bodyFont: string
  /** true jika tema gelap (mengatur overlay foto) */
  dark?: boolean
}

export type WeddingTemplate = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  cover: string
  hero: string
  gallery: string[]
  couple: {
    groom: string
    bride: string
    groomFull: string
    brideFull: string
    groomParents: string
    brideParents: string
  }
  /** Tanggal contoh acara (ISO) — dipakai untuk hitung mundur */
  date: string
  dateLabel: string
  events: { name: string; time: string; venue: string; address: string }[]
  story: { when: string; title: string; text: string }[]
  theme: TemplateTheme
}

export const templates: WeddingTemplate[] = [
  {
    slug: "eternal-rose",
    name: "Eternal Rose",
    category: "Romantis Klasik",
    tagline: "Sentuhan blush dan aksara indah untuk kisah yang abadi",
    description:
      "Palet blush lembut dengan tipografi script yang anggun — pilihan paling populer untuk nuansa romantis yang tak lekang waktu.",
    cover: "/images/night.jpg",
    hero: "/images/kiss.jpg",
    gallery: [
      "/images/aisle.jpg",
      "/images/dance.jpg",
      "/images/table.jpg",
      "/images/walking.jpg",
    ],
    couple: {
      groom: "Raka",
      bride: "Nadia",
      groomFull: "Raka Pradana Putra",
      brideFull: "Nadia Ayu Lestari",
      groomParents: "Putra dari Bapak Hendra Pradana & Ibu Sri Wahyuni",
      brideParents: "Putri dari Bapak Bambang Lesmana & Ibu Ratna Dewi",
    },
    date: "2026-12-12T09:00:00+07:00",
    dateLabel: "Sabtu, 12 Desember 2026",
    events: [
      {
        name: "Akad Nikah",
        time: "09.00 – 10.30 WIB",
        venue: "Balai Sarwono",
        address: "Jl. Kemang Raya No. 12, Jakarta Selatan",
      },
      {
        name: "Resepsi",
        time: "11.00 – 14.00 WIB",
        venue: "The Glass House",
        address: "Jl. Kemang Raya No. 12, Jakarta Selatan",
      },
    ],
    story: [
      {
        when: "2019",
        title: "Pertama Bertemu",
        text: "Kami dipertemukan di sebuah acara komunitas fotografi. Obrolan singkat tentang senja berubah menjadi percakapan yang tak pernah selesai.",
      },
      {
        when: "2022",
        title: "Menjalin Komitmen",
        text: "Setelah tiga tahun saling mengenal, kami memutuskan untuk serius melangkah bersama menuju jenjang yang lebih tinggi.",
      },
      {
        when: "2025",
        title: "Lamaran",
        text: "Di bawah langit senja yang sama seperti pertemuan pertama, Raka melamar Nadia disaksikan kedua keluarga.",
      },
    ],
    theme: {
      bg: "#FDF8F6",
      surface: "#F9EEEA",
      ink: "#5C3A45",
      sub: "#96707C",
      accent: "#C4707F",
      accentInk: "#FFFFFF",
      line: "#EAD5D3",
      headingFont: "font-cormorant",
      scriptFont: "font-script",
      bodyFont: "font-jost",
    },
  },
  {
    slug: "verdant-garden",
    name: "Verdant Garden",
    category: "Rustic & Garden",
    tagline: "Kesegaran taman hijau untuk pesta di alam terbuka",
    description:
      "Nuansa sage green dan tipografi serif hangat, cocok untuk pernikahan garden party atau tema rustic yang natural.",
    cover: "/images/flowers-table.jpg",
    hero: "/images/dance.jpg",
    gallery: [
      "/images/flowers-table.jpg",
      "/images/rings.jpg",
      "/images/outdoor-table.jpg",
      "/images/bridesmaids.jpg",
    ],
    couple: {
      groom: "Bima",
      bride: "Sekar",
      groomFull: "Bima Arya Nugraha",
      brideFull: "Sekar Kinanti Prameswari",
      groomParents: "Putra dari Bapak Agus Nugraha & Ibu Endah Palupi",
      brideParents: "Putri dari Bapak Joko Prameswara & Ibu Sulastri",
    },
    date: "2026-11-07T08:00:00+07:00",
    dateLabel: "Sabtu, 7 November 2026",
    events: [
      {
        name: "Pemberkatan",
        time: "08.00 – 09.30 WIB",
        venue: "Kebun Raya Puncak",
        address: "Jl. Raya Puncak KM 77, Bogor, Jawa Barat",
      },
      {
        name: "Garden Party",
        time: "10.00 – 13.00 WIB",
        venue: "Amphitheater Kebun Raya",
        address: "Jl. Raya Puncak KM 77, Bogor, Jawa Barat",
      },
    ],
    story: [
      {
        when: "2018",
        title: "Teman Sekelas",
        text: "Kami duduk bersebelahan di kelas biologi kampus. Dari tugas kelompok, tumbuh rasa yang perlahan bersemi seperti taman di musim hujan.",
      },
      {
        when: "2021",
        title: "Jarak yang Menguatkan",
        text: "Dua kota memisahkan kami selama tiga tahun, tapi setiap panggilan malam membuat kami yakin: rumah adalah satu sama lain.",
      },
      {
        when: "2025",
        title: "Sebuah Janji",
        text: "Di tengah kebun teh yang berkabut, Bima berlutut dan mengucap janji untuk menemani Sekar selamanya.",
      },
    ],
    theme: {
      bg: "#F6F8F3",
      surface: "#EBF0E4",
      ink: "#3D4A3A",
      sub: "#6E7D68",
      accent: "#7A8B6F",
      accentInk: "#FFFFFF",
      line: "#D9E1D0",
      headingFont: "font-marcellus",
      scriptFont: "font-script",
      bodyFont: "font-jost",
    },
  },
  {
    slug: "noir-elegante",
    name: "Noir Élégante",
    category: "Luxury Malam",
    tagline: "Kemewahan hitam-emas untuk perayaan yang megah",
    description:
      "Tema gelap dengan aksen emas dan tipografi Cinzel yang berwibawa — untuk resepsi malam yang mewah dan dramatis.",
    cover: "/images/bouquet.jpg",
    hero: "/images/hero.jpg",
    gallery: [
      "/images/bouquet.jpg",
      "/images/table.jpg",
      "/images/couple-hands.jpg",
      "/images/aisle.jpg",
    ],
    couple: {
      groom: "Dimas",
      bride: "Alana",
      groomFull: "Dimas Anggara Wijaya",
      brideFull: "Alana Puteri Maharani",
      groomParents: "Putra dari Bapak Surya Wijaya & Ibu Diah Permata",
      brideParents: "Putri dari Bapak Rudi Maharaja & Ibu Citra Kirana",
    },
    date: "2027-01-23T18:30:00+07:00",
    dateLabel: "Sabtu, 23 Januari 2027",
    events: [
      {
        name: "Akad Nikah",
        time: "16.00 – 17.30 WIB",
        venue: "Grand Ballroom Hotel Mulia",
        address: "Jl. Asia Afrika, Senayan, Jakarta Pusat",
      },
      {
        name: "Gala Dinner",
        time: "18.30 – 21.00 WIB",
        venue: "Grand Ballroom Hotel Mulia",
        address: "Jl. Asia Afrika, Senayan, Jakarta Pusat",
      },
    ],
    story: [
      {
        when: "2020",
        title: "Rekan Kerja",
        text: "Kami bertemu sebagai rekan satu proyek. Deadline yang panjang berubah menjadi makan malam yang tak terhitung jumlahnya.",
      },
      {
        when: "2023",
        title: "Langkah Serius",
        text: "Dimas memberanikan diri bertemu keluarga Alana, dan sejak itu dua keluarga menjadi semakin dekat.",
      },
      {
        when: "2026",
        title: "Malam Lamaran",
        text: "Di rooftop berhias lilin dan lampu kota, Dimas mengajukan pertanyaan yang dijawab Alana dengan air mata bahagia.",
      },
    ],
    theme: {
      bg: "#14120F",
      surface: "#1E1B16",
      ink: "#EFE6D6",
      sub: "#A99D87",
      accent: "#C9A24B",
      accentInk: "#14120F",
      line: "#3A342A",
      headingFont: "font-cinzel",
      scriptFont: "font-cormorant",
      bodyFont: "font-cormorant",
      dark: true,
    },
  },
  {
    slug: "azure-minimal",
    name: "Azure Minimal",
    category: "Modern Minimalis",
    tagline: "Desain bersih dan modern bagi pasangan masa kini",
    description:
      "Ruang putih yang lega, tipografi Italiana yang tipis elegan, dan aksen biru keabuan — minimalis yang tetap terasa hangat.",
    cover: "/images/rings.jpg",
    hero: "/images/couple-hands.jpg",
    gallery: [
      "/images/garden.jpg",
      "/images/rings.jpg",
      "/images/bridesmaids.jpg",
      "/images/bride.jpg",
    ],
    couple: {
      groom: "Fajar",
      bride: "Kirana",
      groomFull: "Fajar Ramadhan Siregar",
      brideFull: "Kirana Larasati Hapsari",
      groomParents: "Putra dari Bapak Amir Siregar & Ibu Yanti Nasution",
      brideParents: "Putri dari Bapak Bagus Hapsoro & Ibu Wulan Sari",
    },
    date: "2026-10-10T10:00:00+07:00",
    dateLabel: "Sabtu, 10 Oktober 2026",
    events: [
      {
        name: "Akad Nikah",
        time: "10.00 – 11.00 WIB",
        venue: "Masjid Istiqlal",
        address: "Jl. Taman Wijaya Kusuma, Jakarta Pusat",
      },
      {
        name: "Resepsi",
        time: "12.30 – 15.00 WIB",
        venue: "Artotel Ballroom",
        address: "Jl. Sunda No. 3, Thamrin, Jakarta Pusat",
      },
    ],
    story: [
      {
        when: "2021",
        title: "Aplikasi Kencan",
        text: "Sebuah 'match' sederhana di aplikasi berubah menjadi kopi pertama yang berlangsung lima jam tanpa terasa.",
      },
      {
        when: "2023",
        title: "Perjalanan Pertama",
        text: "Perjalanan backpacking ke Bromo membuat kami sadar: kami bisa tersesat bersama dan tetap tertawa.",
      },
      {
        when: "2026",
        title: "Ya, Aku Mau",
        text: "Fajar melamar Kirana di tempat kopi pertama mereka, di meja yang sama, jam yang sama.",
      },
    ],
    theme: {
      bg: "#FFFFFF",
      surface: "#F3F6F8",
      ink: "#2A3138",
      sub: "#6B7783",
      accent: "#6E8CA0",
      accentInk: "#FFFFFF",
      line: "#E2E8ED",
      headingFont: "font-italiana",
      scriptFont: "font-italiana",
      bodyFont: "font-geist",
    },
  },
  {
    slug: "golden-hour",
    name: "Golden Hour",
    category: "Boho Senja",
    tagline: "Kehangatan cahaya senja dalam balutan terakota",
    description:
      "Gradasi terakota dan amber yang hangat dengan sentuhan boho — bagi pasangan yang jatuh cinta pada matahari terbenam.",
    cover: "/images/field.jpg",
    hero: "/images/field.jpg",
    gallery: [
      "/images/candles.jpg",
      "/images/aisle.jpg",
      "/images/walking.jpg",
      "/images/dance.jpg",
    ],
    couple: {
      groom: "Arka",
      bride: "Laras",
      groomFull: "Arka Samudra Wibowo",
      brideFull: "Larasati Candra Kirana",
      groomParents: "Putra dari Bapak Teguh Wibowo & Ibu Sri Handayani",
      brideParents: "Putri dari Bapak Candra Wijaya & Ibu Murni Astuti",
    },
    date: "2026-09-19T15:30:00+07:00",
    dateLabel: "Sabtu, 19 September 2026",
    events: [
      {
        name: "Pemberkatan",
        time: "15.30 – 16.30 WITA",
        venue: "Uluwatu Cliff Chapel",
        address: "Jl. Pantai Suluban, Uluwatu, Bali",
      },
      {
        name: "Sunset Dinner",
        time: "17.30 – 20.00 WITA",
        venue: "Ocean Terrace",
        address: "Jl. Pantai Suluban, Uluwatu, Bali",
      },
    ],
    story: [
      {
        when: "2020",
        title: "Senja di Pantai",
        text: "Kami sama-sama memotret senja di pantai yang sama. Kamera boleh berbeda, tapi arah lensa kami ternyata sama: satu sama lain.",
      },
      {
        when: "2022",
        title: "Petualangan Bersama",
        text: "Dari gunung ke pantai, kami mengoleksi ribuan kilometer perjalanan dan satu kesimpulan — perjalanan terbaik adalah bersamamu.",
      },
      {
        when: "2025",
        title: "Lamaran di Uluwatu",
        text: "Tepat saat matahari menyentuh laut, Arka mengeluarkan cincin yang sudah dua tahun ia simpan diam-diam.",
      },
    ],
    theme: {
      bg: "#FBF4EC",
      surface: "#F5E7D8",
      ink: "#5A4632",
      sub: "#95805F",
      accent: "#C07A45",
      accentInk: "#FFFFFF",
      line: "#EBD9C3",
      headingFont: "font-cormorant",
      scriptFont: "font-script",
      bodyFont: "font-jost",
    },
  },
  {
    slug: "pearl-royale",
    name: "Pearl Royale",
    category: "Klasik Mewah",
    tagline: "Putih gading dan emas lembut, anggun tanpa berlebihan",
    description:
      "Nuansa ivory dan champagne dengan tipografi Cinzel — kemewahan klasik yang cocok untuk resepsi ballroom maupun adat.",
    cover: "/images/table.jpg",
    hero: "/images/bride.jpg",
    gallery: [
      "/images/flowers-table.jpg",
      "/images/table.jpg",
      "/images/couple-hands.jpg",
      "/images/candles.jpg",
    ],
    couple: {
      groom: "Rey",
      bride: "Amara",
      groomFull: "Reynald Putra Santoso",
      brideFull: "Amara Cahaya Ningrum",
      groomParents: "Putra dari Bapak Budi Santoso & Ibu Lina Marlina",
      brideParents: "Putri dari Bapak Aryo Ningrat & Ibu Kartika Sari",
    },
    date: "2027-02-14T09:00:00+07:00",
    dateLabel: "Minggu, 14 Februari 2027",
    events: [
      {
        name: "Akad Nikah",
        time: "09.00 – 10.30 WIB",
        venue: "The Ritz-Carlton Ballroom",
        address: "Jl. DR. Ide Anak Agung Gde Agung, Mega Kuningan, Jakarta",
      },
      {
        name: "Resepsi",
        time: "11.30 – 14.00 WIB",
        venue: "The Ritz-Carlton Ballroom",
        address: "Jl. DR. Ide Anak Agung Gde Agung, Mega Kuningan, Jakarta",
      },
    ],
    story: [
      {
        when: "2017",
        title: "Sahabat Lama",
        text: "Sepuluh tahun bersahabat membuat kami hafal satu sama lain — ternyata cinta memang tumbuh paling subur dari persahabatan.",
      },
      {
        when: "2023",
        title: "Lebih dari Sahabat",
        text: "Sebuah pengakuan sederhana di malam tahun baru mengubah segalanya. Kami tidak pernah menoleh ke belakang.",
      },
      {
        when: "2026",
        title: "Restu Keluarga",
        text: "Dua keluarga yang sudah lama saling mengenal berkumpul, dan lamaran Rey diterima dengan haru dan doa.",
      },
    ],
    theme: {
      bg: "#FBFAF7",
      surface: "#F3F0E8",
      ink: "#3E3A34",
      sub: "#847C6E",
      accent: "#A88C5F",
      accentInk: "#FFFFFF",
      line: "#E7E2D6",
      headingFont: "font-cinzel",
      scriptFont: "font-script",
      bodyFont: "font-cormorant",
    },
  },
]

export function getTemplate(slug: string): WeddingTemplate | undefined {
  return templates.find((t) => t.slug === slug)
}
