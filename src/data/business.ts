export const business = {
  name: 'Reverse Gym & Elixir Coffee',
  slug: 'reverse-gym-elixir-coffee-jambi',
  category: 'Medical & Family Gym + Kafe',
  city: 'Kota Jambi',
  // TERVERIFIKASI IG @reverse.fitnessindonesia (16 Okt 2026): centang verifikasi, 2.291 pengikut
  // Bio: "REVERSE Medical & Family Gym — Recovery • Performance • Longevity, Fatloss Specialist,
  // Personalized program by experts". Highlight: InBody, Training center, Coach, Physio, EnglishClub.
  instagram: 'https://www.instagram.com/reverse.fitnessindonesia',
  followers: '2,2rb pengikut IG (terverifikasi)',
  phone: '628137000780', // TERVERIFIKASI dari tombol WA bio IG (wa.me/628137000780)
  // TERVERIFIKASI IG @elixir.coffeexperience (16 Okt 2026): 1.274 pengikut
  // Bio: Weekday 06.00-22.00, Weekend 06.00-23.00, tersedia di GrabFood,
  // Jl. Nias Kota Baru Jambi (samping SMP Ahmad D...)
  elixirInstagram: 'https://www.instagram.com/elixir.coffeexperience',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Reverse+Gym+Jambi+Elixir+Coffee',
  mapsEmbed: 'https://maps.google.com/maps?q=Reverse%20Gym%20Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Jl. Nias, Kota Baru, Jambi (samping SMP Ahmad Dahlan — konfirmasi)',
  hours: 'Elixir: Weekday 06.00–22.00, Weekend 06.00–23.00 • Gym: konfirmasi via WA',
  title: 'Reverse Gym Jambi — Medical Family Gym + Elixir Coffee Kota Baru',
  description:
    'Reverse Medical & Family Gym Jambi: fatloss specialist, InBody check, physio, personalized program. Satu lokasi dengan Elixir Coffee Jl Nias — konsultasi via WA 0813-7000-780.',
  canonicalPath: '/',
  ogImage: '/images/reverse-1.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const programs = [
  {
    name: 'Personalized Program by Experts',
    badge: 'Terverifikasi',
    desc: 'Program personal sesuai hasil asesmen — klaim bio IG resmi. Cocok fatloss & performance.',
    img: '/images/reverse-1.jpg',
    alt: 'Area beban training center Reverse Gym Jambi',
  },
  {
    name: 'InBody Check',
    badge: 'Terverifikasi',
    desc: 'Highlight InBody di IG resmi — ukur komposisi tubuh sebelum program.',
    img: '/images/reverse-2.jpg',
    alt: 'Asesmen komposisi tubuh InBody di Reverse Gym Jambi',
  },
  {
    name: 'Fatloss Specialist',
    badge: 'Terverifikasi',
    desc: 'Spesialis fatloss — klaim bio IG resmi. Target & progres dipantau coach.',
    img: '/images/reverse-3.jpg',
    alt: 'Coach Reverse Gym mendampingi program fatloss member',
  },
  {
    name: 'Recovery: Physio & Pemulihan',
    badge: 'Terverifikasi',
    desc: 'Highlight Physio + pilar Recovery di bio IG. Detail layanan via WA.',
    img: '/images/reverse-4.jpg',
    alt: 'Area pemulihan dan physio Reverse Gym Jambi',
  },
  {
    name: 'Elixir Coffee — Kopi & Nongkrong Sehat',
    badge: 'Terverifikasi',
    desc: 'Weekday 06.00–22.00, weekend 06.00–23.00. Tersedia di GrabFood.',
    img: '/images/reverse-5.jpg',
    alt: 'Interior Elixir Coffee Kota Baru Jambi',
  },
  {
    name: 'Protein Bar & Makan Sehat',
    badge: 'Estimasi',
    desc: 'Kopi + opsi makan pendamping latihan. Menu pasti cek IG Elixir/GrabFood.',
    img: '/images/reverse-6.jpg',
    alt: 'Kopi susu dan minuman protein Elixir Coffee Jambi',
  },
];

export const coaches = [
  { role: 'Coach Fatloss & Performance', badge: 'Terverifikasi (klaim bio)', desc: 'Fatloss Specialist + personalized program — klaim IG resmi terverifikasi.' },
  { role: 'Physio / Recovery', badge: 'Terverifikasi (highlight)', desc: 'Highlight Physio di IG resmi. Keluhan cedera/nyeri konsultasi dulu via WA.' },
  { role: 'Coach Training Center', badge: 'Terverifikasi (highlight)', desc: 'Highlight Coach & Training center di IG resmi.' },
];

export const prices = [
  { name: 'InBody Check + Konsultasi', price: 'Konfirmasi WA', badge: 'Klaim — cek IG', desc: 'Highlight InBody di IG. Tarif cek via WA 0813-7000-780.' },
  { name: 'Harian — 1 Sesi Gym', price: 'Rp 50.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Bulanan — Gym + Program', price: 'Rp 350.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Personal Training 4 Sesi', price: 'Rp 600.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Paket Fatloss 12 Minggu', price: 'Konfirmasi WA', badge: 'Estimasi', desc: 'Program specialist — konsultasi dulu via WA.' },
  { name: 'Bundling Gym + Elixir', price: 'Konfirmasi WA', badge: 'Estimasi', desc: 'Gym + kafe satu lokasi. Promo cek IG.' },
];
