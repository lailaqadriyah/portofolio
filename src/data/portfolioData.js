export const PROFILE = {
  name: "Laila Qadriyah",
  roleLine:
    "Mahasiswa Sistem Informasi Universitas Andalas yang merancang, mengelola konten, dan memelihara sistem web agar tetap terstruktur dan akuntabel.",
  location: "Padang, Indonesia",
  email: "lailaqdr04@gmail.com",
  phone: "082171130060",
  phoneDisplay: "0821-7113-0060",
  github: "https://github.com/lailaqadriyah",
  githubLabel: "github.com/lailaqadriyah",
  gpa: "3,76 / 4,00",
};

export const PROJECT_TYPES = [
  "Semua",
  "Web App",
  "GIS",
  "Dashboard",
  "Sistem Internal",
];

export const PROJECTS = [
  {
    id: "jejakberkas",
    index: "01",
    title: "JejakBerkas",
    subtitle: "Sistem Pemantauan Layanan Birokrasi",
    type: "Web App",
    year: "2026",
    featured: true,
    award: "Juara 3 IST.CO 2026 Vol. III — Smart Innovation Solution",
    role: "Perancang Alur Sistem & Antarmuka Web",
    image: "/img/jejakberkas.jpg",
    placeholderFile: null,
    url: null,
    urlLabel: null,
    summary:
      "Memantau alur pengajuan dokumen masyarakat dari kantor kecamatan hingga instansi terkait secara real-time untuk transparansi dan akuntabilitas layanan.",
    skillsContext: [
      "Pemodelan alur proses birokrasi",
      "Perancangan antarmuka portal & autentikasi",
      "Pengelolaan struktur informasi layanan publik",
    ],
    caseStudy: {
      problem:
        "Masyarakat sering kehilangan kejelasan mengenai posisi dan status dokumen administrasi setelah diajukan di tingkat kecamatan hingga diteruskan ke dinas terkait.",
      approach:
        "Menyusun alur pelacakan berkas lintas instansi berbasis web dan seluler dengan antarmuka portal yang ringkas, status progres yang terbaca jelas, dan integrasi akses SSO.",
      outcome:
        "Meraih Juara 3 kategori Smart Innovation Solution pada Information System Technology Competition (IST.CO) 2026 Volume III yang diselenggarakan HMSI Universitas Malikussaleh.",
    },
  },
  {
    id: "student-connect",
    index: "02",
    title: "My Unand Student Connect",
    subtitle: "Platform Pengelolaan Kegiatan Mahasiswa",
    type: "Sistem Internal",
    year: "2025",
    featured: true,
    award: null,
    role: "Pengembang & Pengelola Sistem Informasi",
    image: "/img/student-connect.jpg",
    placeholderFile: null,
    url: "https://studentconnect.unand.ac.id",
    urlLabel: "studentconnect.unand.ac.id",
    summary:
      "Platform terintegrasi untuk pengajuan kegiatan, verifikasi poin, dan rekapitulasi capaian mahasiswa Universitas Andalas secara transparan dan akuntabel.",
    skillsContext: [
      "Pengelolaan konten & pembaruan informasi kampus",
      "Perancangan alur verifikasi poin kemahasiswaan",
      "Dokumentasi sistem & koordinasi tim pengembang",
    ],
    caseStudy: {
      problem:
        "Rekapitulasi keaktifan dan poin capaian mahasiswa sebelumnya tersebar di banyak berkas terpisah, menyulitkan proses verifikasi oleh pihak kampus.",
      approach:
        "Membangun alur pengajuan kegiatan terpusat di mana mahasiswa mengunggah bukti kegiatan dan validator meninjau serta mengesahkan poin secara terstruktur.",
      outcome:
        "Tersedia sebagai portal resmi kemahasiswaan di studentconnect.unand.ac.id dengan pencatatan capaian yang lebih tertib dan mudah diaudit.",
    },
  },
  {
    id: "vensi",
    index: "03",
    title: "VENSI",
    subtitle: "Sistem Informasi Manajemen Inventaris",
    type: "Sistem Internal",
    year: "2025",
    featured: true,
    award: null,
    role: "Analisis Sistem & Pengembangan Web",
    image: "/img/vensi.png",
    placeholderFile: null,
    url: null,
    urlLabel: null,
    summary:
      "Website pengelolaan aset, peminjaman dan pengembalian barang, ruangan, asisten laboratorium, kalender aktivitas, dan laporan inventaris terintegrasi.",
    skillsContext: [
      "Perancangan basis data aset & peminjaman",
      "Pengelolaan jadwal ruangan & asisten lab",
      "Penyusunan modul laporan inventaris",
    ],
    caseStudy: {
      problem:
        "Pencatatan peminjaman peralatan laboratorium dan penggunaan ruangan masih rentan tumpang tindih serta sulit dilacak riwayat pengembaliannya.",
      approach:
        "Menggabungkan modul katalog aset, transaksi peminjaman-pengembalian, kalender aktivitas laboratorium, serta pelaporan berkala dalam satu aplikasi web.",
      outcome:
        "Memudahkan koordinasi asisten laboratorium dan memberikan rekapitulasi kondisi aset yang terdokumentasi rapi.",
    },
  },
  {
    id: "silyra",
    index: "04",
    title: "SILYRA",
    subtitle: "Manajemen SDM Perpustakaan Universitas Andalas",
    type: "Sistem Internal",
    year: "2025",
    featured: false,
    award: null,
    role: "Pengembang Sistem Internal",
    image: "/img/silyra.png",
    placeholderFile: null,
    url: null,
    urlLabel: null,
    summary:
      "Website pengelolaan data karyawan, absensi digital, penugasan, laporan harian, dan monitoring aktivitas tenaga kependidikan Perpustakaan UNAND.",
    skillsContext: [
      "Deteksi peran otomatis berbasis akun",
      "Pengelolaan alur absensi & laporan harian",
      "Pemeliharaan struktur data kepegawaian",
    ],
    caseStudy: {
      problem:
        "Pengelolaan data tenaga kependidikan dan pelaporan aktivitas harian di perpustakaan memerlukan sistem terpusat yang mudah digunakan oleh berbagai level pengguna.",
      approach:
        "Merancang sistem berbasis peran (role-based) dengan antarmuka masuk yang bersih, fitur absensi digital, serta rekapitulasi tugas harian.",
      outcome:
        "Monitoring aktivitas harian staf perpustakaan menjadi lebih terukur dan terdokumentasi secara digital.",
    },
  },
  {
    id: "siberta",
    index: "05",
    title: "SiberTA",
    subtitle: "Sistem Analisis Kemiripan Judul Tugas Akhir",
    type: "Web App",
    year: "2025",
    featured: false,
    award: null,
    role: "Perancang Antarmuka & Integrasi Repositori",
    image: "/img/siberta.jpg",
    placeholderFile: null,
    url: null,
    urlLabel: null,
    summary:
      "Menganalisis dan membandingkan judul serta abstrak usulan Tugas Akhir dengan repositori judul TA di Departemen Sistem Informasi Universitas Andalas.",
    skillsContext: [
      "Kurasi repositori judul & abstrak TA",
      "Perancangan antarmuka sistem akademik",
      "Validasi akses mahasiswa terdaftar",
    ],
    caseStudy: {
      problem:
        "Mahasiswa sering mengajukan topik Tugas Akhir yang memiliki kemiripan tinggi dengan penelitian terdahulu karena pengecekan manual memakan waktu.",
      approach:
        "Menyediakan portal khusus mahasiswa Sistem Informasi UNAND untuk menguji kemiripan judul dan abstrak terhadap arsip Tugas Akhir departemen.",
      outcome:
        "Membantu mahasiswa dan dosen pembimbing menyaring orisinalitas topik sejak tahap awal pengajuan.",
    },
  },
  {
    id: "aquamap",
    index: "06",
    title: "AquaMap",
    subtitle: "Direktori Kolam Renang Kota Padang Berbasis GIS",
    type: "GIS",
    year: "2025",
    featured: false,
    award: null,
    role: "Pengembang Web GIS",
    image: "/img/aquamap.jpg",
    placeholderFile: null,
    url: "https://aquamap-theta.vercel.app",
    urlLabel: "aquamap-theta.vercel.app",
    summary:
      "Aplikasi web berbasis GIS yang membantu masyarakat menemukan informasi kolam renang, filter lokasi terdekat, dan rute perjalanan di Kota Padang.",
    skillsContext: [
      "Pemetaan spasial interaktif (Leaflet & OSRM)",
      "Pengumpulan & pembaruan data 46 lokasi",
      "Perhitungan jarak dan estimasi rute berkendara",
    ],
    caseStudy: {
      problem:
        "Informasi mengenai lokasi, jam operasional, dan rute menuju fasilitas kolam renang di Kota Padang tersebar dan belum terpetakan secara terpusat.",
      approach:
        "Mengintegrasikan peta interaktif Leaflet dengan routing OSRM untuk menampilkan direktori 46 lokasi lengkap dengan estimasi waktu tempuh berkendara maupun berjalan kaki.",
      outcome:
        "Aplikasi publik aktif di aquamap-theta.vercel.app yang memudahkan pencarian lokasi terdekat secara langsung dari browser.",
    },
  },
  {
    id: "metro-dashboard",
    index: "07",
    title: "Metro Dashboard",
    subtitle: "Global Metro Analytics & Perbandingan Kebijakan",
    type: "Dashboard",
    year: "2025",
    featured: false,
    award: null,
    role: "Perancang Dashboard & Visualisasi Data",
    image: "/img/metro-dashboard.png",
    placeholderFile: null,
    url: "https://metro-dashboard-phi.vercel.app",
    urlLabel: "metro-dashboard-phi.vercel.app",
    summary:
      "Platform analitik interaktif yang membandingkan infrastruktur, tata kelola, dan layanan jaringan metro berbagai kota dunia sebagai referensi kebijakan.",
    skillsContext: [
      "Penyajian metrik komparatif (ridership, panjang jalur, stasiun)",
      "Filter multi-kriteria (region, negara, pencarian teks)",
      "Deployment aplikasi web di Vercel",
    ],
    caseStudy: {
      problem:
        "Perencana kebijakan transportasi massal membutuhkan rujukan data komparatif antar-jaringan metro dunia dalam format yang ringkas dan mudah disaring.",
      approach:
        "Menyusun dashboard analitik dengan ringkasan KPI utama, filter wilayah/negara, serta peringkat 10 jaringan metro teratas berdasarkan panjang jalur dan jumlah penumpang.",
      outcome:
        "Tersedia secara daring di metro-dashboard-phi.vercel.app sebagai alat bantu eksplorasi data transportasi massal.",
    },
  },
  {
    id: "bank-sampah",
    index: "08",
    title: "Website Profil Bank Sampah Handayani",
    subtitle: "Portal Informasi & Program Layanan Masyarakat",
    type: "Web App",
    year: "2024",
    featured: false,
    award: null,
    role: "Pengembang Web & Pengelola Konten",
    image: "/img/bank-sampah.png",
    placeholderFile: null,
    url: "https://webprofilebshandayani.vercel.app/",
    urlLabel: "webprofilebshandayani.vercel.app",
    summary:
      "Platform informatif yang memperkenalkan profil, visi-misi, dan program layanan bank sampah kepada masyarakat secara rapi dan mudah diakses.",
    skillsContext: [
      "Penulisan & penataan struktur konten informatif",
      "Pengembangan halaman profil responsif",
      "Pemeliharaan repositori kode di GitHub",
    ],
    caseStudy: {
      problem:
        "Bank Sampah Handayani membutuhkan media informasi digital yang jelas agar warga dapat memahami program layanan, visi-misi, dan alur partisipasi.",
      approach:
        "Membangun website profil dengan hirarki informasi yang sederhana, fokus pada keterbacaan program layanan dan profil lembaga.",
      outcome:
        "Kode sumber terdokumentasi di repositori GitHub dan siap digunakan sebagai identitas digital lembaga.",
    },
  },
];

export const AWARDS = [
  {
    year: "15 Juni 2026",
    title: "Juara 3 — Information System Technology Competition (IST.CO) 2026 Vol. III",
    detail: "Kategori Smart Innovation Solution dengan proyek JejakBerkas",
    organizer: "HMSI Universitas Malikussaleh",
  },
];

export const EDUCATION = [
  {
    period: "2023 – Sekarang",
    institution: "Universitas Andalas",
    program: "Sarjana Sistem Informasi",
    note: "IPK 3,76 / 4,00 — Padang",
  },
  {
    period: "2020 – 2023",
    institution: "SMA Negeri 4 Padang",
    program: "Jurusan MIPA",
    note: "Padang",
  },
];

export const ORGANIZATIONS = [
  {
    year: "2026",
    role: "Sekretaris Umum",
    org: "Himpunan Mahasiswa Sistem Informasi, Universitas Andalas",
    note: "Mengelola surat-menyurat dan arsip resmi organisasi.",
  },
  {
    year: "2026",
    role: "Koordinator Divisi Kesekretariatan",
    org: "UKM Neo Telemetri, Universitas Andalas",
    note: "Mengoordinasi staf Divisi Kesekretariatan.",
  },
  {
    year: "2025",
    role: "Koordinator Divisi Rumah Tangga",
    org: "Asisten Kelompok Keilmuan System Development, UNAND",
    note: "Mengoordinasi staf dan kebutuhan operasional kelompok keilmuan.",
  },
  {
    year: "2024",
    role: "Kepala Divisi Rumah Tangga dan Kesekretariatan",
    org: "Himpunan Mahasiswa Sistem Informasi, Universitas Andalas",
    note: "Memimpin staf dalam tata kelola kesekretariatan himpunan.",
  },
  {
    year: "2024",
    role: "Staf Divisi Rumah Tangga",
    org: "Asisten Laboratorium of Enterprise Application, UNAND",
    note: "Melaksanakan program kerja dan pemeliharaan fasilitas lab.",
  },
];

export const COMMITTEES = [
  { year: "2026", role: "Sekretaris Umum", event: "FIRETECH 2026", note: "Mengelola surat-menyurat acara." },
  { year: "2025", role: "Sekretaris", event: "HMSI-FEST 2025", note: "Menyiapkan proposal dan kebutuhan surat-menyurat." },
  { year: "2025", role: "Sekretaris", event: "BAKTI SI 2025", note: "Membantu ketua dalam pelaksanaan bakti departemen." },
  { year: "2025", role: "Sekretaris Divisi Kestari", event: "BAKTI FTI 2025", note: "Menyusun RAB, LPJ, dan sertifikat peserta/panitia." },
  { year: "2025", role: "Sekretaris Divisi Perlengkapan", event: "TECHNOFEST 2025", note: "Menyusun RAB, LPJ, dan kebutuhan perlengkapan acara." },
  { year: "2025", role: "Sekretaris Divisi Perlengkapan", event: "FRAMEXTION 1.0", note: "Menyusun RAB, LPJ, dan kebutuhan perlengkapan acara." },
  { year: "2025", role: "Seksi Humas", event: "FIRETECH 2025", note: "Menyambut dan menghubungi tamu undangan." },
  { year: "2024", role: "Sekretaris Divisi Konsumsi", event: "TECHNOFEST 2024", note: "Menyusun RAB, LPJ, dan kebutuhan konsumsi." },
  { year: "2024", role: "Seksi Humas", event: "HMSI-FEST 2024", note: "Menyambut dan menghubungi tamu undangan." },
  { year: "Nov 2023", role: "Seksi Humas", event: "Techno Sport FTI 2023", note: "Melakukan sosialisasi acara (18–19 Nov 2023)." },
  { year: "Okt 2023", role: "Seksi Perlengkapan", event: "Keakraban Neo Telemetri", note: "Menyiapkan perlengkapan acara (15 Okt 2023)." },
];
