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
  /** Set dekorasi kustom (ornamen, pola, ikon) yang dirender di preview */
  decor?: "javanese" | "floral"
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
    groomPhoto: string
    bridePhoto: string
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
      "/images/couple-hands.jpg",
      "/images/kiss-suit.jpg",
      "/images/dance.jpg",
      "/images/field-kiss.jpg",
      "/images/table.jpg",
      "/images/first-dance.jpg",
      "/images/walking.jpg",
      "/images/kiss.jpg",
    ],
    couple: {
      groom: "Raka",
      bride: "Nadia",
      groomFull: "Raka Pradana Putra",
      brideFull: "Nadia Ayu Lestari",
      groomPhoto: "/images/groom-3.jpg",
      bridePhoto: "/images/bride-3.jpg",
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
      "/images/walk-field.jpg",
      "/images/rings.jpg",
      "/images/field-kiss.jpg",
      "/images/outdoor-table.jpg",
      "/images/carry.jpg",
      "/images/bridesmaids.jpg",
      "/images/garden.jpg",
    ],
    couple: {
      groom: "Bima",
      bride: "Sekar",
      groomFull: "Bima Arya Nugraha",
      brideFull: "Sekar Kinanti Prameswari",
      groomPhoto: "/images/groom-1.jpg",
      bridePhoto: "/images/bride-2.jpg",
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
      "/images/first-dance.jpg",
      "/images/table.jpg",
      "/images/kiss-suit.jpg",
      "/images/couple-hands.jpg",
      "/images/candles.jpg",
      "/images/night.jpg",
      "/images/hero.jpg",
    ],
    couple: {
      groom: "Dimas",
      bride: "Alana",
      groomFull: "Dimas Anggara Wijaya",
      brideFull: "Alana Puteri Maharani",
      groomPhoto: "/images/groom-2.jpg",
      bridePhoto: "/images/bride-1.jpg",
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
      "/images/walk-field.jpg",
      "/images/rings.jpg",
      "/images/carry.jpg",
      "/images/bridesmaids.jpg",
      "/images/kiss-suit.jpg",
      "/images/bride.jpg",
      "/images/couple-hands.jpg",
    ],
    couple: {
      groom: "Fajar",
      bride: "Kirana",
      groomFull: "Fajar Ramadhan Siregar",
      brideFull: "Kirana Larasati Hapsari",
      groomPhoto: "/images/groom-3.jpg",
      bridePhoto: "/images/bride-2.jpg",
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
      "/images/sunset-kiss.jpg",
      "/images/sunset.jpg",
      "/images/walking.jpg",
      "/images/confetti.jpg",
      "/images/field.jpg",
      "/images/carry.jpg",
      "/images/dance.jpg",
    ],
    couple: {
      groom: "Arka",
      bride: "Laras",
      groomFull: "Arka Samudra Wibowo",
      brideFull: "Larasati Candra Kirana",
      groomPhoto: "/images/groom-1.jpg",
      bridePhoto: "/images/bride-3.jpg",
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
      "/images/first-dance.jpg",
      "/images/table.jpg",
      "/images/confetti.jpg",
      "/images/couple-hands.jpg",
      "/images/kiss.jpg",
      "/images/candles.jpg",
      "/images/bouquet.jpg",
    ],
    couple: {
      groom: "Rey",
      bride: "Amara",
      groomFull: "Reynald Putra Santoso",
      brideFull: "Amara Cahaya Ningrum",
      groomPhoto: "/images/groom-2.jpg",
      bridePhoto: "/images/bride-1.jpg",
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
  {
    slug: "sekar-keraton",
    name: "Sekar Keraton",
    category: "Adat Jawa",
    decor: "javanese",
    tagline: "Keanggunan pawiwahan Jawa dalam balutan sogan dan emas",
    description:
      "Terinspirasi pernikahan keraton Yogyakarta–Solo: motif truntum dan kawung, ornamen gunungan, sulur gebyok, serta aksara Jawa — adat yang megah dalam desain modern.",
    cover: "/images/jawa-couple-sogan.jpg",
    hero: "/images/jawa-hero.jpg",
    gallery: [
      "/images/jawa-couple-green.jpg",
      "/images/jawa-ritual.jpg",
      "/images/jawa-siraman.jpg",
      "/images/jawa-rings.jpg",
      "/images/jawa-batik.jpg",
      "/images/jawa-couple-door.jpg",
      "/images/jawa-canting.jpg",
      "/images/jawa-gamelan.jpg",
      "/images/jawa-wayang.jpg",
      "/images/jawa-couple-sogan.jpg",
    ],
    couple: {
      groom: "Danan",
      bride: "Rukmi",
      groomFull: "Danandjaya Seno Adiwibowo",
      brideFull: "Rukmini Sekar Hapsari",
      groomPhoto: "/images/jawa-groom.jpg",
      bridePhoto: "/images/jawa-bride-paes.jpg",
      groomParents: "Putra dari Bapak Harjono Adiwibowo & Ibu Sri Kusumastuti",
      brideParents: "Putri dari Bapak Projo Hapsoro & Ibu Rara Widowati",
    },
    date: "2027-06-05T08:00:00+07:00",
    dateLabel: "Sabtu, 5 Juni 2027",
    events: [
      {
        name: "Akad Nikah",
        time: "08.00 – 09.30 WIB",
        venue: "Pendopo Agung Mangkubumen",
        address: "Jl. Rotowijayan No. 5, Kraton, Yogyakarta",
      },
      {
        name: "Panggih & Resepsi",
        time: "10.30 – 14.00 WIB",
        venue: "Bangsal Kepatihan",
        address: "Jl. Rotowijayan No. 5, Kraton, Yogyakarta",
      },
    ],
    story: [
      {
        when: "2019",
        title: "Sekar Pertemuan",
        text: "Kami bertemu di sanggar karawitan kampus — Danan menabuh gender, Rukmi belajar sinden. Gending pertama yang kami mainkan bersama tak pernah kami lupakan.",
      },
      {
        when: "2023",
        title: "Nyuwun Pangestu",
        text: "Danan sowan ke Yogyakarta menemui keluarga Rukmi. Dua keluarga bertemu dalam suasana hangat, dan niat baik pun mendapat restu.",
      },
      {
        when: "2026",
        title: "Lamaran Adat",
        text: "Dalam prosesi sederhana penuh makna, hantaran berisi kain truntum diserahkan — pertanda cinta yang akan terus bersemi, seperti doa para orang tua.",
      },
    ],
    theme: {
      bg: "#FBF7EE",
      surface: "#F2E9D6",
      ink: "#3B2A1A",
      sub: "#8B7355",
      accent: "#9C7327",
      accentInk: "#FFF9EC",
      line: "#E5D8BC",
      headingFont: "font-marcellus",
      scriptFont: "font-cormorant",
      bodyFont: "font-jost",
    },
  },
  {
    slug: "fleurette",
    name: "Fleurette",
    category: "Floral Elegan",
    decor: "floral",
    tagline: "Taman mawar yang bersemi di setiap lembar undangan",
    description:
      "Ornamen mawar gambar tangan, sulur daun, dan kelopak yang gugur perlahan — floral yang anggun dan sophisticated dengan sentuhan animasi yang hidup.",
    cover: "/images/floral-peony-rings.jpg",
    hero: "/images/floral-hero.jpg",
    gallery: [
      "/images/floral-bouquet.jpg",
      "/images/floral-couple-bouquet.jpg",
      "/images/floral-peony-rings.jpg",
      "/images/floral-cherry-blossom.jpg",
      "/images/floral-hands-rings.jpg",
      "/images/floral-white-blooms.jpg",
      "/images/floral-couple.jpg",
      "/images/floral-red-rose.jpg",
      "/images/floral-chairs.jpg",
      "/images/floral-rings.jpg",
    ],
    couple: {
      groom: "Galang",
      bride: "Melati",
      groomFull: "Galang Aditya Pratama",
      brideFull: "Melati Ayu Paramita",
      groomPhoto: "/images/groom-2.jpg",
      bridePhoto: "/images/bride-2.jpg",
      groomParents: "Putra dari Bapak Surya Pratama & Ibu Dewi Anggraini",
      brideParents: "Putri dari Bapak Wisnu Paramita & Ibu Sekar Arum",
    },
    date: "2027-04-24T09:00:00+07:00",
    dateLabel: "Sabtu, 24 April 2027",
    events: [
      {
        name: "Akad Nikah",
        time: "09.00 – 10.30 WIB",
        venue: "Rumah Kaca Amaryllis",
        address: "Jl. Dago Pakar Raya No. 28, Bandung, Jawa Barat",
      },
      {
        name: "Garden Reception",
        time: "11.30 – 14.00 WIB",
        venue: "Taman Mawar Amaryllis",
        address: "Jl. Dago Pakar Raya No. 28, Bandung, Jawa Barat",
      },
    ],
    story: [
      {
        when: "2020",
        title: "Toko Bunga Kecil",
        text: "Galang mampir membeli bunga untuk wisuda adiknya — dan Melati, sang florist, memilihkan seikat mawar putih. Ia kembali minggu depannya, kali ini tanpa alasan.",
      },
      {
        when: "2023",
        title: "Tumbuh Bersama",
        text: "Dari merawat kebun kecil di rumah Melati, kami belajar bahwa cinta seperti tanaman: butuh kesabaran, perhatian, dan musim untuk berbunga.",
      },
      {
        when: "2026",
        title: "Mekar Sempurna",
        text: "Di tengah taman mawar yang sedang mekar penuh, Galang berlutut dengan cincin yang diselipkan pada kuncup mawar — dan Melati menjawab ya.",
      },
    ],
    theme: {
      bg: "#FCF8F4",
      surface: "#F6EBE6",
      ink: "#4B3640",
      sub: "#95737F",
      accent: "#A85D6E",
      accentInk: "#FFFFFF",
      line: "#EBD8D2",
      headingFont: "font-italiana",
      scriptFont: "font-script",
      bodyFont: "font-cormorant",
    },
  },
]

export function getTemplate(slug: string): WeddingTemplate | undefined {
  return templates.find((t) => t.slug === slug)
}
