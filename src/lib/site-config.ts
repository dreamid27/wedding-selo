/**
 * Konfigurasi utama Wedding Selo.
 *
 * Semua informasi kontak, harga, dan teks penting yang mungkin berubah
 * dikumpulkan di sini — cukup edit file ini untuk memperbarui seluruh situs.
 */

export const siteConfig = {
  name: "Wedding Selo",
  url: "https://wedding.selo.my.id",
  tagline: "Undangan pernikahan digital yang elegan & berkesan",
  description:
    "Wedding Selo membantu pasangan membuat undangan pernikahan digital yang elegan, personal, dan mudah dibagikan — lengkap dengan RSVP, galeri foto, peta lokasi, dan amplop digital.",

  contact: {
    email: "muh.alfaris@gmail.com",
    // Nomor lokal (ditampilkan ke pengunjung)
    whatsappDisplay: "0819-1037-3275",
    // Nomor format internasional tanpa tanda +, dipakai untuk tautan wa.me
    whatsappNumber: "6281910373275",
    instagram: "weddingselo",
    address: "Jakarta, Indonesia",
  },
} as const

/** Bangun tautan WhatsApp dengan pesan yang sudah terisi. */
export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Pesan default untuk tombol CTA umum. */
export const waGeneralMessage =
  "Halo Wedding Selo! Saya sedang mempersiapkan pernikahan dan ingin bertanya tentang undangan digital."

/** Pesan saat pengunjung tertarik dengan template tertentu. */
export function waTemplateMessage(templateName: string): string {
  return `Halo Wedding Selo! Saya tertarik dengan template "${templateName}". Boleh dibantu untuk info pemesanannya?`
}

export const pricing = [
  {
    name: "Hemat",
    price: "Rp 99rb",
    originalPrice: "Rp 149rb",
    description: "Pilihan tepat untuk undangan sederhana yang tetap elegan.",
    highlight: false,
    features: [
      "Pilih 1 template katalog",
      "Masa aktif 3 bulan",
      "Detail acara & hitung mundur",
      "Peta lokasi (Google Maps)",
      "Galeri hingga 6 foto",
      "Nama tamu personal (hingga 100 tamu)",
    ],
  },
  {
    name: "Favorit",
    price: "Rp 149rb",
    originalPrice: "Rp 249rb",
    description: "Paket terlengkap dengan fitur interaktif favorit pasangan.",
    highlight: true,
    features: [
      "Semua fitur paket Hemat",
      "Masa aktif 1 tahun",
      "RSVP & buku tamu digital",
      "Musik latar pilihan",
      "Galeri hingga 20 foto + video",
      "Amplop digital (transfer & e-wallet)",
      "Nama tamu personal tanpa batas",
      "Revisi hingga 3x",
    ],
  },
  {
    name: "Eksklusif",
    price: "Rp 299rb",
    originalPrice: "Rp 449rb",
    description: "Desain custom sesuai tema pernikahanmu, dikerjakan personal.",
    highlight: false,
    features: [
      "Semua fitur paket Favorit",
      "Masa aktif selamanya",
      "Desain custom sesuai tema",
      "Domain nama pasangan (opsional)",
      "Filter Instagram story (opsional)",
      "Revisi tanpa batas",
      "Prioritas pengerjaan < 24 jam",
    ],
  },
] as const

export const testimonials = [
  {
    name: "Sarah & Yoga",
    city: "Bandung",
    quote:
      "Undangannya cantik banget, banyak tamu yang memuji. Prosesnya cepat, revisi juga dilayani dengan sabar. Nggak nyesel pilih Wedding Selo!",
  },
  {
    name: "Intan & Reza",
    city: "Yogyakarta",
    quote:
      "Fitur RSVP-nya sangat membantu kami memperkirakan jumlah tamu. Tinggal kirim link lewat WhatsApp, semua keluarga langsung bisa buka.",
  },
  {
    name: "Dinda & Fikri",
    city: "Surabaya",
    quote:
      "Kami pilih paket custom dan hasilnya melebihi ekspektasi. Detail kecil seperti musik dan animasi bikin undangan terasa sangat personal.",
  },
] as const

export const faqs = [
  {
    q: "Berapa lama proses pembuatan undangannya?",
    a: "Untuk template katalog, undangan selesai dalam 1x24 jam setelah data lengkap kami terima. Untuk desain custom, pengerjaan membutuhkan 2–4 hari kerja.",
  },
  {
    q: "Apakah saya bisa merevisi undangan setelah jadi?",
    a: "Tentu. Setiap paket sudah termasuk revisi — mulai dari perbaikan penulisan nama, perubahan jadwal, hingga penggantian foto. Jumlah revisi menyesuaikan paket yang dipilih.",
  },
  {
    q: "Bagaimana cara membagikan undangan ke tamu?",
    a: "Undangan berupa tautan (link) yang bisa dibagikan lewat WhatsApp, Instagram, email, atau media apa pun. Kami juga menyediakan teks pengantar dengan nama tamu yang bisa dipersonalisasi otomatis.",
  },
  {
    q: "Apakah tamu perlu mengunduh aplikasi untuk membuka undangan?",
    a: "Tidak. Undangan dibuka langsung lewat browser di HP atau komputer, tanpa aplikasi tambahan. Tampilannya otomatis menyesuaikan ukuran layar.",
  },
  {
    q: "Data apa saja yang perlu saya siapkan?",
    a: "Cukup siapkan nama pasangan, nama orang tua, jadwal & lokasi acara, foto-foto pilihan, dan (opsional) kisah cinta kalian. Kami akan pandu lewat formulir sederhana di WhatsApp.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran dilakukan lewat transfer bank atau e-wallet setelah kamu memilih paket. Pengerjaan dimulai setelah pembayaran dikonfirmasi, dan tidak ada biaya tersembunyi.",
  },
] as const
