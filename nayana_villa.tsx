import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Map,
  Leaf,
  Info,
  History,
  Home,
  HelpCircle,
  Users,
  Calendar,
  Star,
  Quote,
  Wifi,
  Waves,
  Utensils,
  Coffee,
  ChevronDown
} from 'lucide-react';
import profileImg from './src/assets/logo.png';
import heroImg from './src/assets/hero.jpg';
import suiteImg from './src/assets/villa-suite.webp';
import familyImg from './src/assets/villa-family.webp';
import grandImg from './src/assets/villa-grand.webp';

const villaData = {
  name: "Nayana Villa",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Oase Ketenangan di Tengah Alam",
  description: "Lepaskan penat dari hiruk-pikuk kota dan temukan kedamaian di Nayana Villa. Nikmati fasilitas premium dengan pemandangan alam yang asri, destinasi sempurna untuk liburan keluarga dan staycation Anda.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Kota+Palangka+Raya,+Kalimantan+Tengah", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  locationHighlights: [
    { text: "Pemandangan Alam", icon: "Leaf" },
    { text: "15 Menit dari Pusat Kota", icon: "Clock" },
    { text: "Akses Jalan Mudah", icon: "Map" }
  ],
  about: "Nayana Villa adalah destinasi *staycation* eksklusif yang memadukan arsitektur tropis modern dengan keindahan alam pegunungan. Kami berdedikasi memberikan pengalaman menginap yang privat, nyaman, dan menyegarkan bagi setiap tamu yang datang.",
  history: "Berdiri sejak tahun 2018, Nayana Villa berawal dari impian sebuah keluarga kecil yang menginginkan tempat persembunyian yang tenang di akhir pekan. Membangun sebuah pondok kayu sederhana, tempat ini perlahan dikenal oleh kerabat. Kini, Nayana telah berkembang menjadi komplek villa favorit bagi mereka yang mencari keharmonisan dengan alam tanpa mengorbankan kemewahan.",
  catalog: [
    {
      id: "suite",
      name: "Villa Suite (1 Kamar)",
      price: "Rp 1.500.000",
      period: "per malam",
      capacity: "2 Orang",
      features: ["Private Pool", "King Bed", "Bathtub", "Smart TV"],
      image: suiteImg
    },
    {
      id: "family",
      name: "Family Villa (2 Kamar)",
      price: "Rp 2.800.000",
      period: "per malam",
      capacity: "4-5 Orang",
      features: ["Private Pool", "BBQ Grill", "Kitchen", "Living Room"],
      image: familyImg
    },
    {
      id: "grand",
      name: "Grand Villa (3 Kamar)",
      price: "Rp 4.500.000",
      period: "per malam",
      capacity: "6-8 Orang",
      features: ["Big Pool", "Karaoke", "Full Kitchen", "Spacious Garden"],
      image: grandImg
    }
  ],
  faq: [
    { q: "Pukul berapa waktu check-in dan check-out?", a: "Waktu check-in standar kami adalah pukul 14:00 WIB, dan check-out paling lambat pukul 12:00 WIB." },
    { q: "Apakah diperbolehkan membawa hewan peliharaan?", a: "Demi kenyamanan seluruh tamu, saat ini kami tidak memperkenankan tamu membawa hewan peliharaan." },
    { q: "Apakah tersedia fasilitas dapur untuk memasak?", a: "Ya, Tipe Family Villa dan Grand Villa kami lengkapi dengan fasilitas dapur modern beserta peralatannya." },
    { q: "Apakah harga sudah termasuk sarapan?", a: "Harga sewa villa kami sudah termasuk sarapan (floating breakfast) untuk kapasitas maksimal tiap villa." }
  ],
  testimonials: [
    { name: "Keluarga Santoso", rating: 5, text: "Villa yang luar biasa nyaman. Suasananya sejuk banget, anak-anak puas berenang di private pool-nya. Pasti akan kembali lagi!" },
    { name: "Siti Rahma", rating: 5, text: "Fasilitas lengkap, bersih, dan pelayanan penjaga villa sangat sigap. BBQ malam hari di taman jadi pengalaman tak terlupakan." },
    { name: "Ahmad & Teman", rating: 4, text: "Tempat healing yang pas. Pemandangannya langsung ke bukit hijau. Grand Villa sangat luas untuk kumpul bersama sahabat." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky CTA Logic
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }

      // Simple active nav highlighter logic
      const sections = ['tentang', 'sejarah', 'katalog', 'lokasi', 'faq'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (image) => {
    setLightbox({ isOpen: true, images: [image], currentIndex: 0 });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky nav
      const y = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const checkin = formData.get('checkin');
    const checkout = formData.get('checkout');
    const guests = formData.get('guests');
    const villaType = formData.get('villaType');
    const notes = formData.get('notes');
    
    const waText = `Halo Admin ${villaData.name},%0A%0ASaya ingin mengecek ketersediaan villa:%0A- Nama: ${name}%0A- Check-in: ${checkin}%0A- Check-out: ${checkout}%0A- Jumlah Tamu: ${guests} Orang%0A- Tipe Villa: ${villaType}%0A- Catatan: ${notes || '-' }%0A%0AMohon info ketersediaan dan total harganya. Terima kasih!`;
    const waUrl = `https://wa.me/${villaData.phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: villaData.name,
      text: villaData.title,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try { await navigator.share(shareData); } catch (err) { console.error('Error sharing:', err); }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
        
        body {
          background-color: #e5e5e5; /* Desktop background */
          color: #1c1917; /* stone-900 */
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#fafaf9] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#064e3b]">
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#064e3b]/40 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-[#064e3b]/70 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img src={villaData.heroImg} alt={villaData.name} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-2 bg-white backdrop-blur-md mb-6 shadow-2xl border-2 border-emerald-300/40 flex items-center justify-center overflow-hidden">
              <img src={villaData.profileImg} alt="Profile" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-4xl font-serif text-[#ecfdf5] mb-3 leading-tight tracking-wide drop-shadow-md">
              {villaData.name}
            </h1>
            <p className="text-emerald-100/90 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {villaData.description}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8 justify-center px-4">
              <div className="flex gap-3 w-full">
                <a href={villaData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm flex-1 text-sm font-medium tracking-wide">
                  <Instagram size={18} /> Instagram
                </a>
                <a href={villaData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm flex-1 text-sm font-medium tracking-wide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a href={villaData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm w-full text-sm font-medium tracking-wide">
                <MapPin size={18} /> Lokasi
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('katalog')}
              className="group relative flex items-center justify-center gap-2 w-full max-w-sm py-4 bg-[#ecfdf5] text-[#064e3b] rounded-2xl font-bold text-sm tracking-wide hover:bg-white transition-all shadow-xl"
            >
              Lihat Pilihan Villa
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* TENTANG KAMI */}
        <section id="tentang" className="py-12 px-6">
          <div className="flex flex-col items-start text-left w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-[#064e3b] shrink-0">
                <Leaf size={24} />
              </div>
              <h2 className="text-3xl font-serif text-[#064e3b]">Tentang Kami</h2>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed text-left">
              {villaData.about}
            </p>
          </div>
        </section>

        {/* SEJARAH */}
        <section id="sejarah" className="py-10 px-6 bg-stone-100/50">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <History className="text-[#b45309]" size={24} />
              <h2 className="text-2xl font-serif text-stone-800">Kisah Kami</h2>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed relative z-10 text-justify">
              {villaData.history}
            </p>
          </div>
        </section>

        {/* KATALOG & HARGA */}
        <section id="katalog" className="py-12 px-6 bg-[#fafaf9]">
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-serif text-[#064e3b] mb-2">Katalog & Harga</h2>
            <p className="text-stone-500 text-sm">Pilih villa sesuai dengan kebutuhan liburan Anda.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 no-scrollbar">
            {villaData.catalog.map((villa) => (
              <div key={villa.id} className="snap-center shrink-0 w-[310px] bg-white rounded-[2rem] border border-stone-200 overflow-hidden shadow-md group">
                <div 
                  className="w-full h-52 relative cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(villa.image)}
                >
                  <img 
                    src={villa.image} 
                    alt={villa.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[11px] font-semibold border border-white/30 flex items-center gap-1">
                      <Users size={12}/> {villa.capacity}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-stone-900 leading-tight mb-1.5">{villa.name}</h3>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[#b45309] font-bold text-xl whitespace-nowrap">{villa.price}</span>
                        <span className="text-xs text-stone-500 font-medium">/{villa.period.replace('per ', '')}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mb-5 min-h-[52px] content-start">
                      {villa.features.map((feat, idx) => (
                        <span key={idx} className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-md font-medium border border-stone-200/50">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                      const select = document.querySelector('select[name="villaType"]');
                      if (select) (select as HTMLSelectElement).value = villa.name;
                    }}
                    className="w-full py-3 bg-[#064e3b] text-white rounded-xl text-sm font-bold tracking-wide hover:bg-[#047857] transition-all shadow-sm active:scale-[0.98]"
                  >
                    Pilih {villa.name.split(' (')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI */}
        <section id="lokasi" className="py-10 px-6 bg-[#064e3b] text-white">
          <div className="mb-6 flex flex-col items-center text-center">
             <MapPin className="text-emerald-300 mb-2" size={28} />
             <h2 className="text-2xl font-serif text-white mb-2">Lokasi Strategis</h2>
             <p className="text-emerald-100 text-xs w-4/5">{villaData.address}</p>
          </div>
          
          <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mb-6">
            {villaData.locationHighlights.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="bg-emerald-800/50 p-2 rounded-lg">
                  {loc.icon === 'Leaf' ? <Leaf size={16} className="text-emerald-300"/> : 
                   loc.icon === 'Clock' ? <Clock size={16} className="text-emerald-300"/> : 
                   <Map size={16} className="text-emerald-300"/>}
                </div>
                <span className="text-sm text-emerald-50 font-medium">{loc.text}</span>
              </div>
            ))}
          </div>

          <a href={villaData.links.maps} target="_blank" rel="noreferrer" className="block w-full text-center py-4 rounded-xl border-2 border-emerald-400 text-emerald-50 font-bold text-sm hover:bg-emerald-400/20 transition-all">
            Buka di Google Maps
          </a>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 px-6">
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="text-[#b45309]" size={24} />
            <h2 className="text-2xl font-serif text-stone-800">Tanya Jawab (FAQ)</h2>
          </div>

          <div className="flex flex-col gap-3">
            {villaData.faq.map((item, idx) => (
              <div key={idx} className="border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="text-sm font-bold text-stone-800 pr-4">{item.q}</span>
                  <ChevronDown size={18} className={`text-stone-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 bg-stone-50 ${activeFaq === idx ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="p-4 pt-0 text-sm text-stone-600 leading-relaxed border-t border-stone-100 mt-2 pt-3">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI PELANGGAN */}
        <section className="py-10 px-6 bg-[#064e3b]/5 border-t border-stone-200">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="text-[#b45309]" size={24} />
              <h2 className="text-2xl font-serif text-stone-800">Kata Mereka</h2>
            </div>
            <p className="text-stone-500 text-sm">Ulasan tamu yang telah berkunjung.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {villaData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-5 rounded-3xl border border-emerald-100 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#b45309] text-[#b45309]" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed font-serif italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#064e3b] font-bold text-sm border border-emerald-200">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-stone-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM CTA */}
        <section id="booking-form" className="py-12 px-6">
          <div className="bg-white border border-stone-200 rounded-[2rem] p-7 shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-50 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-6">
              <h2 className="text-2xl font-serif text-[#064e3b] mb-2">Reservasi Villa</h2>
              <p className="text-stone-500 text-sm leading-relaxed">Cek ketersediaan jadwal dan booking langsung dengan admin kami via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide ml-1">Nama Pemesan</label>
                <input type="text" name="name" required placeholder="Ketik nama lengkap" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-800 focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-all"/>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide ml-1">Check-In</label>
                  <input type="date" name="checkin" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-3.5 text-sm text-stone-800 focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-all"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide ml-1">Check-Out</label>
                  <input type="date" name="checkout" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-3.5 text-sm text-stone-800 focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-all"/>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide ml-1">Tipe Villa</label>
                  <select name="villaType" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-800 focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-all appearance-none">
                    <option value="">Pilih villa...</option>
                    {villaData.catalog.map(v => (
                      <option key={v.id} value={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide ml-1">Jumlah Tamu</label>
                  <input type="number" name="guests" min="1" required placeholder="Berapa orang" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-800 focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-all"/>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide ml-1">Catatan Tambahan (Opsional)</label>
                <textarea name="notes" rows="2" placeholder="Cth: Request extra bed, BBQ set..." className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-800 focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full mt-4 bg-[#064e3b] text-[#ecfdf5] font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#047857] transition-colors shadow-md">
                Kirim via WhatsApp
                <MessageCircle size={18} className="text-[#25D366]" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-stone-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-stone-200 flex items-center justify-center mb-4 p-2 overflow-hidden">
            <img src={villaData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-stone-500 flex flex-col gap-1 items-center">
            <span className="font-serif font-bold text-stone-800 text-lg">{villaData.name}</span>
            <span className="max-w-[250px] text-xs">{villaData.address}</span>
          </div>

          <p className="text-stone-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {villaData.name}. All rights reserved.
          </p>
          
          <a href="https://www.solusilokal.id" target="_blank" rel="noopener noreferrer" className="text-stone-400 text-[10px] mt-2 tracking-wide font-medium hover:text-stone-600 transition-colors">
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
          <button 
            onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#064e3b] backdrop-blur-xl border border-emerald-700 rounded-2xl text-white shadow-[0_10px_30px_rgba(6,78,59,0.3)] hover:bg-[#047857] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-white">Booking Sekarang</span>
            <div className="bg-white/20 text-white p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50" onClick={closeLightbox}>
            <X size={20} />
          </button>
          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.currentIndex]} alt="Lightbox View" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"/>
          </div>
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center transition-opacity" onClick={() => setShowShareModal(false)}>
          <div className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-stone-900 font-bold text-[15px]">Bagikan {villaData.name}</h3>
              <button onClick={() => setShowShareModal(false)} className="absolute right-0 p-1 text-stone-500 hover:bg-stone-100 rounded-full transition-all">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar justify-center items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button onClick={copyToClipboard} className="w-[60px] h-[60px] rounded-full bg-stone-100 flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-all shadow-sm border border-stone-200">
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-stone-600 text-center">{copied ? 'Tersalin' : 'Salin Tautan'}</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(villaData.title + ' ' + window.location.href)}`, '_blank')} className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm">
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-stone-600 text-center">WhatsApp</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}