export interface EquipmentItem {
  id: string;
  name: string;
  category: 'tenda' | 'carrier' | 'tidur' | 'masak' | 'teknis' | 'santai';
  pricePerNight: number;
  image: string;
  specs: string[];
  badge?: string;
  description: string;
}

export interface BundlingPackage {
  id: string;
  name: string;
  target: string;
  badge: string;
  pricePerNight: number;
  originalPricePerNight: number;
  items: string[];
  description: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'Semua Alat' },
  { id: 'tenda', label: '⛺ Tenda & Shelter' },
  { id: 'carrier', label: '🎒 Tas & Carrier' },
  { id: 'tidur', label: '🛌 Alat Tidur' },
  { id: 'masak', label: '🍳 Alat Masak' },
  { id: 'teknis', label: '🔦 Penerangan & Teknis' },
  { id: 'santai', label: '🪑 Kursi & Meja' },
] as const;

export const BUNDLING_PACKAGES: BundlingPackage[] = [
  {
    id: 'bundle-ceria-4p',
    name: 'Paket Camping Ceria (4 Orang)',
    target: 'Cocok untuk Rombongan / Keluarga',
    badge: 'Paling Laris 🔥',
    pricePerNight: 120000,
    originalPricePerNight: 155000,
    items: [
      '1x Tenda Dome Kapasitas 4P (Double Layer PU3000)',
      '4x Sleeping Bag Dacron Tebal (Steril & Wangi)',
      '4x Matras Foil Alumunium 2 Sisi',
      '1x Kompor Windproof + Cooking Set Nesting DS-308',
      '1x Lampu Tenda LED Magnetik Rechargeable',
    ],
    description: 'Solusi lengkap tanpa ribet sewa eceran. Tinggal bawa bahan makanan dan pakaian ganti!',
  },
  {
    id: 'bundle-solo-duo-2p',
    name: 'Paket Duo Summit (2 Orang)',
    target: 'Favorit Pendaki Cepat / Pasangan',
    badge: 'Hemat 26%',
    pricePerNight: 85000,
    originalPricePerNight: 115000,
    items: [
      '1x Tenda Ultralight 2P Double Layer (Alloy Frame)',
      '2x Sleeping Bag Hangat Hangat Comfort 10°C',
      '2x Matras Alumunium Foil',
      '2x Trekking Pole Duralumin Anti-Shock',
      '2x Headlamp Waterproof 350 Lumens',
    ],
    description: 'Ringan dan tangguh untuk jalur summit gunung-gunung tinggi di Jawa & sekitarnya.',
  },
  {
    id: 'bundle-gourmet-masak',
    name: 'Paket Masak & Santai Basecamp',
    target: 'Buat yang Suka Kulineran Estetik',
    badge: 'Praktis & Higienis',
    pricePerNight: 50000,
    originalPricePerNight: 70000,
    items: [
      '1x Kompor Portable Bunga Windproof + Adaptor',
      '1x Nesting Cooking Set DS-308 (Panci, Wajan, Teko)',
      '1x Meja Lipat Alumunium Roll-top',
      '2x Kursi Lipat Camping Sandaran Nyaman',
    ],
    description: 'Bikin kopi dan masak hangat di depan tenda sambil menikmati kabut pagi.',
  },
];

export const EQUIPMENT_LIST: EquipmentItem[] = [
  // Tenda
  {
    id: 'tenda-4p-dl',
    name: 'Tenda Dome 4-5 Orang Double Layer',
    category: 'tenda',
    pricePerNight: 40000,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
    specs: ['Kapasitas 4-5 Orang', 'Waterproof PU 3000mm', 'Double Layer + Vestibule', 'Frame Fiber Tebal'],
    badge: 'Steril & Wangi',
    description: 'Tahan terpaan angin dan hujan deras pegunungan tropis tanpa rembes.',
  },
  {
    id: 'tenda-2p-ul',
    name: 'Tenda 2 Orang Ultralight Double Layer',
    category: 'tenda',
    pricePerNight: 35000,
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80',
    specs: ['Kapasitas 2 Orang', 'Alloy Frame Ringan', 'Berat hanya 1.8 kg', 'PU 3000mm Tahan Badai'],
    badge: 'Pilihan Summit',
    description: 'Sangat praktis dan ringkas, tidak membebani ransel untuk pendakian tektok/cepat.',
  },
  {
    id: 'flysheet-4x3',
    name: 'Flysheet Waterproof 4 x 3 Meter',
    category: 'tenda',
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
    specs: ['Ukuran 400 x 300 cm', '19 Titik Tali Gantung', 'Coating Silver UV Block', 'Termasuk 6 Pasak'],
    badge: 'Anti Rembes',
    description: 'Atap peneduh kanopi dapur dan perlindungan ekstra di atas tenda utama.',
  },

  // Tas & Carrier
  {
    id: 'carrier-60l',
    name: 'Carrier 60 Liter + Rain Cover',
    category: 'carrier',
    pricePerNight: 30000,
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=600&q=80',
    specs: ['Kapasitas 60L', 'Backsystem Busa Ergonomis', 'Torso Adjustable', 'Free Rain Cover Waterproof'],
    badge: 'Busa Nyaman',
    description: 'Beban terdistribusi sempurna ke pinggul, mengurangi pegal di pundak.',
  },
  {
    id: 'carrier-45l',
    name: 'Carrier / Daypack 45 Liter',
    category: 'carrier',
    pricePerNight: 25000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    specs: ['Kapasitas 45L', 'Saku Samping Stretch', 'Kompartemen Kantong Air (Hydration)', 'Free Rain Cover'],
    badge: 'Pas 2 Hari 1 Malam',
    description: 'Ukuran ideal untuk pendakian singkat atau summit push.',
  },

  // Alat Tidur
  {
    id: 'sb-dacron',
    name: 'Sleeping Bag Dacron Tebal Hangat',
    category: 'tidur',
    pricePerNight: 12000,
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=600&q=80',
    specs: ['Model Kepompong (Mummy)', 'Comfort 10°C / Limit 5°C', 'Lapisan Polar Hangat', 'Laundry Higienis Tiap Kembali'],
    badge: 'Wangi & Higienis',
    description: 'Dicuci dan disterilkan secara profesional setelah setiap pemakaian.',
  },
  {
    id: 'matras-foil',
    name: 'Matras Alumunium Foil 2 Sisi',
    category: 'tidur',
    pricePerNight: 6000,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    specs: ['Ukuran 200 x 100 cm', 'Double Sided Foil', 'Penahan Dingin Tanah Efektif', 'Ringan & Anti Air'],
    badge: 'Isolator Dingin',
    description: 'Mencegah dinginnya tanah merembes ke tubuh saat tidur di dalam tenda.',
  },
  {
    id: 'kasur-angin',
    name: 'Matras Angin Inflatable + Pompa Kaki',
    category: 'tidur',
    pricePerNight: 20000,
    image: 'https://images.unsplash.com/photo-1533873942090-d4c914f33d98?auto=format&fit=crop&w=600&q=80',
    specs: ['Ketebalan 8-10 cm', 'Built-in Foot Pump', 'Bahan Nylon TPU Kuat', 'Ada Bantal Terintegrasi'],
    badge: 'Tidur Super Nyaman',
    description: 'Sensasi tidur empuk di gunung tanpa rasa pegal punggung.',
  },

  // Alat Masak
  {
    id: 'kompor-windproof',
    name: 'Kompor Portable Windproof (Mawar)',
    category: 'masak',
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    specs: ['Pelindung Angin Bentuk Bunga', 'Pemantik Api Otomatis (Piezo)', 'Daya Api Biru Merata', 'Cocok Gas Kaleng Butana'],
    badge: 'Tahan Angin',
    description: 'Api tetap stabil menyala kencang meski angin lereng gunung bertiup kencang.',
  },
  {
    id: 'nesting-cooking-set',
    name: 'Nesting Cooking Set DS-308 + Teko Air',
    category: 'masak',
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1496540779679-16d8973049b9?auto=format&fit=crop&w=600&q=80',
    specs: ['Panci Utama + Tutup', 'Wajan Anti-Lengket', 'Teko Rebus Air 0.8L', 'Bahan Hard Anodized Aluminium'],
    badge: 'Food Grade',
    description: 'Set alat masak lengkap anti karat untuk 2-4 orang porsi makan.',
  },

  // Alat Teknis & Penerangan
  {
    id: 'headlamp-rechargeable',
    name: 'Headlamp LED 350 Lumens Rechargeable',
    category: 'teknis',
    pricePerNight: 10000,
    image: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=600&q=80',
    specs: ['Kekuatan 350 Lumens', 'Baterai Cas USB Type-C', 'Sensor Gerak (Wave on/off)', 'Waterproof IPX4'],
    badge: 'Baterai Penuh',
    description: 'Wajib untuk pendakian malam hari dan persiapan summit push dini hari.',
  },
  {
    id: 'lampu-tenda-led',
    name: 'Lampu Tenda LED Magnetik Lentera',
    category: 'teknis',
    pricePerNight: 8000,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
    specs: ['3 Level Kecerahan (Warm/White)', 'Magnet Kuat & Gantungan Kait', 'Daya Tahan hingga 18 Jam', 'Bisa Jadi Powerbank Darurat'],
    badge: 'Cahaya Hangat',
    description: 'Penerangan lembut nyaman di dalam tenda agar tidak menyilaukan mata.',
  },
  {
    id: 'trekking-pole',
    name: 'Trekking Pole Duralumin Anti-Shock (Sepasang)',
    category: 'teknis',
    pricePerNight: 12000,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    specs: ['Duralumin 7075 Kuat', 'Sistem Peredam Kejut (Anti-shock)', 'Panjang 65-135 cm Adjustable', 'Grip Busa EVA Ergonomis'],
    badge: 'Lindungi Lutut',
    description: 'Membantu menopang 30% beban tubuh saat mendaki dan mencegah cedera lutut saat turun gunung.',
  },

  // Meja & Kursi Santai
  {
    id: 'kursi-lipat-portable',
    name: 'Kursi Lipat Camping Sandaran Nyaman',
    category: 'santai',
    pricePerNight: 12000,
    image: 'https://images.unsplash.com/photo-1533873942090-d4c914f33d98?auto=format&fit=crop&w=600&q=80',
    specs: ['Beban Max 120 kg', 'Kain Oxford 600D Tebal', 'Frame Pipa Baja Ringan', 'Termasuk Tas Jinjing'],
    badge: 'Kokoh & Nyaman',
    description: 'Bikin nongkrong santai di depan tenda jadi jauh lebih berkelas dan nyaman.',
  },
  {
    id: 'meja-lipat-camp',
    name: 'Meja Lipat Camping Aluminium Roll-Top',
    category: 'santai',
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    specs: ['Dimensi 50 x 50 x 50 cm', 'Alas Roll-top Aluminium Tahan Panas', 'Beban Maksimal 30 kg', 'Ringkas Saat Dilipat'],
    badge: 'Tahan Panas Kompor',
    description: 'Aman untuk ditaruh kompor panas dan wadah makanan di atas tanah yang tidak rata.',
  },
];

export const SOP_RULES = [
  {
    icon: '🪪',
    title: 'Wajib Identitas Asli (KTP / SIM)',
    desc: 'Wajib meninggalkan 1 KTP / SIM / Kartu Pelajar asli yang masih aktif saat pengambilan alat di basecamp sebagai jaminan fisik.',
  },
  {
    icon: '🔒',
    title: 'DP 30% untuk Mengunci Jadwal',
    desc: 'Untuk mengamankan ketersediaan stok alat di tanggal pendakian Anda, diperlukan uang muka (Down Payment) sebesar 30%.',
  },
  {
    icon: '🔍',
    title: 'Cek Fisik Bersama Saat Serah Terima',
    desc: 'Kondisi alat diperiksa kelengkapannya bersama admin sebelum dibawa keluar dari basecamp. Pastikan pasak, frame, dan ritsleting aman.',
  },
  {
    icon: '✨',
    title: 'Alat Tidak Perlu Dicuci (Free Laundry)',
    desc: 'Cukup kibas kotoran tanah kasar dan pastikan alat kering. Proses pencucian, sterilisasi, dan pewangi adalah standar layanan gratis kami.',
  },
  {
    icon: '⏱️',
    title: 'Hitungan Sewa 24 Jam & Toleransi 2 Jam',
    desc: 'Hitungan 1 hari sewa adalah 24 jam / 1 malam. Diberikan batas toleransi keterlambatan 2 jam sebelum diberlakukan biaya penyesuaian sewa.',
  },
];

export const BASECAMP_INFO = {
  name: 'Puncak Raya Outdoor Rental & Basecamp',
  tagline: 'Sewa Perlengkapan Pendakian & Camping Terpercaya Sejak 2019',
  address: 'Jl. Kaliurang KM 14.5, Besi, Sukoharjo, Kec. Ngaglik, Sleman, D.I. Yogyakarta 55581',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7744391299943!2d110.4137!3d-7.6975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDEnNTEuMCJTIDExMMKwMjQnNDkuMyJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid',
  hours: 'Buka Setiap Hari: 07.30 - 22.00 WIB',
  phoneDisplay: '+62 812-3456-7890',
  whatsappNumber: '6281234567890',
  landmarks: '100m utara Pasar Besi Kaliurang, depan minimarket, area parkir luas untuk mobil & motor.',
};

