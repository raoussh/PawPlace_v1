/* =====================================================
   PAWPLACE Simple v1 — main.js
   ===================================================== */

/* ── TRANSLATIONS (AR + EN) ─────────────────────────── */
const translations = {
  ar: {
    nav_about:'من نحن', nav_services:'الخدمات', nav_packages:'الباقات',
    nav_gallery:'المعرض', nav_team:'الفريق', nav_faq:'الأسئلة الشائعة',
    nav_book:'احجز الآن',
    hero_eyebrow:'فندق الكلاب الأفضل في هونغ كونغ',
    hero_title_1:'رعاية استثنائية', hero_title_2:'لأصدقائكم المخلصين',
    hero_desc:'نقدم لكلابكم إقامة فاخرة تجمع بين الرعاية البيطرية المتخصصة والراحة التامة.',
    hero_btn1:'احجز إقامة', hero_btn2:'تعرف علينا',
    hero_s1:'كلب سعيد', hero_s2:'سنة خبرة', hero_s3:'رعاية دائمة',
    about_tag:'من نحن',
    about_title1:'نهتم بكلبك كما', about_title2:'نهتم بأهلنا',
    about_p:'بدأنا PawPlace عام 2018 بهدف واحد: مكان آمن وسعيد لكل كلب. اليوم نخدم أكثر من 500 عائلة في هونغ كونغ.',
    svc_tag:'خدماتنا',
    svc_title1:'كل ما يحتاجه', svc_title2:'كلبك',
    svc1_h:'إقامة فندقية', svc1_p:'غرف مريحة مكيفة بأسرّة فاخرة',
    svc2_h:'تجميل', svc2_p:'استحمام وتقليم أظافر وتصفيف احترافي',
    svc3_h:'نقل آمن', svc3_p:'استقبال وتوصيل مجاني في هونغ كونغ',
    svc4_h:'رعاية بيطرية', svc4_p:'فحوصات يومية وطبيب متواجد 24/7',
    pkg_tag:'الباقات',
    pkg_title1:'اختر الباقة', pkg_title2:'المناسبة',
    pkg1_name:'الأساسية', pkg2_name:'الذهبية', pkg2_best:'الأشهر', pkg3_name:'الماسية',
    pkg_book:'احجز',
    gal_tag:'معرضنا',
    gal_title1:'لحظات', gal_title2:'من حياتهم معنا',
    vid_tag:'فيديو',
    team_tag:'فريقنا',
    team_title1:'فريق', team_title2:'يحب الكلاب',
    testi_tag:'آراء العملاء',
    testi_title:'ماذا يقولون؟',
    faq_tag:'الأسئلة الشائعة',
    faq_title1:'لديك سؤال؟', faq_title2:'نحن هنا',
    map_tag:'موقعنا',
    map_title1:'نحن في', map_title2:'تايبو — هونغ كونغ',
    map_gps:'موقعي',
    contact_tag:'تواصل معنا',
    contact_title1:'احجز أو', contact_title2:'تواصل معنا',
    c_submit:'إرسال الحجز',
    c_success_h:'شكرًا! 🐾',
    c_success_p:'سنتواصل معك خلال ساعتين.',
    footer_tag:'فندق الكلاب · هونغ كونغ',
    f_rights:'جميع الحقوق محفوظة',
  },
  en: {
    nav_about:'About', nav_services:'Services', nav_packages:'Packages',
    nav_gallery:'Gallery', nav_team:'Team', nav_faq:'FAQ',
    nav_book:'Book Now',
    hero_eyebrow:"Hong Kong's Premier Dog Hotel",
    hero_title_1:'Exceptional Care', hero_title_2:'for Your Loyal Companions',
    hero_desc:'A luxury stay combining expert veterinary care and total comfort for your dog.',
    hero_btn1:'Book a Stay', hero_btn2:'Learn More',
    hero_s1:'Happy Dogs', hero_s2:'Years Exp.', hero_s3:'Always Here',
    about_tag:'About Us',
    about_title1:'We care for', about_title2:'your dog like family',
    about_p:'We founded PawPlace in 2018 with one goal: a safe and happy place for every dog. Today we proudly serve 500+ families in Hong Kong.',
    svc_tag:'Services',
    svc_title1:'Everything', svc_title2:'your dog needs',
    svc1_h:'Hotel Stay', svc1_p:'Comfortable AC rooms with luxury beds',
    svc2_h:'Grooming', svc2_p:'Bath, nail trim & professional styling',
    svc3_h:'Safe Transport', svc3_p:'Free pickup & drop-off across HK',
    svc4_h:'Vet Care', svc4_p:'Daily checkups & 24/7 vet on-site',
    pkg_tag:'Packages',
    pkg_title1:'Choose the right', pkg_title2:'package',
    pkg1_name:'Basic', pkg2_name:'Gold', pkg2_best:'Most Popular', pkg3_name:'Diamond',
    pkg_book:'Book',
    gal_tag:'Gallery',
    gal_title1:'Moments', gal_title2:'with us',
    vid_tag:'Video',
    team_tag:'Our Team',
    team_title1:'A team that', team_title2:'loves dogs',
    testi_tag:'Reviews',
    testi_title:'What they say',
    faq_tag:'FAQ',
    faq_title1:'Have a question?', faq_title2:"We're here",
    map_tag:'Location',
    map_title1:"We're in", map_title2:'Tai Po, Hong Kong',
    map_gps:'My Location',
    contact_tag:'Contact',
    contact_title1:'Book or', contact_title2:'get in touch',
    c_submit:'Send',
    c_success_h:'Thank you! 🐾',
    c_success_p:"We'll contact you within 2 hours.",
    footer_tag:'Dog Hotel · Hong Kong',
    f_rights:'All rights reserved',
  }
};

/* ── STATE ──────────────────────────────────────────── */
let currentLang = localStorage.getItem('pp-lang') || 'ar';

/* ── APPLY LANGUAGE ─────────────────────────────────── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('pp-lang', lang);
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-key]').forEach(el => {
    if (t[el.dataset.key] !== undefined) el.textContent = t[el.dataset.key];
  });
  const sel = document.getElementById('lang-sel');
  if (sel) sel.value = lang;
}

/* ── PROGRESS BAR ───────────────────────────────────── */
function initProgressBar() {
  const bar = document.getElementById('pg-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }, { passive: true });
}

/* ── NAVBAR ─────────────────────────────────────────── */
function initNavbar() {
  const nav = document.querySelector('nav');
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
  if (ham && links) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        links.classList.remove('open');
      }));
  }
}

/* ── HERO GALLERY ───────────────────────────────────── */
function initHeroGallery() {
  const slides = document.querySelectorAll('.hg-slide');
  const dots   = document.querySelectorAll('.hg-dot');
  if (!slides.length) return;
  let cur = 0, timer;
  function goTo(i) {
    slides[cur].classList.remove('active');
    dots[cur]?.classList.remove('on');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur]?.classList.add('on');
  }
  function start() { timer = setInterval(() => goTo(cur + 1), 5000); }
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); start(); }));
  goTo(0); start();
}

/* ── SCROLL REVEALS ─────────────────────────────────── */
function initReveals() {
  const els = document.querySelectorAll('.rv, .rv-l, .rv-r');
  const io  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── TESTIMONIALS ───────────────────────────────────── */
function initTestimonials() {
  const slides = document.querySelectorAll('.t-slide');
  const dots   = document.querySelectorAll('.t-dot');
  if (!slides.length) return;
  let cur = 0;
  function show(i) {
    slides[cur].classList.remove('on');
    dots[cur]?.classList.remove('on');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('on');
    dots[cur]?.classList.add('on');
  }
  dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
  show(0);
  setInterval(() => show(cur + 1), 5000);
}

/* ── FAQ ────────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
}

/* ── LIGHTBOX ───────────────────────────────────────── */
function initLightbox() {
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  if (!lb || !lbImg) return;
  document.querySelectorAll('[data-lightbox]').forEach(el =>
    el.addEventListener('click', () => {
      lbImg.src = el.dataset.lightbox || el.querySelector('img')?.src;
      lb.classList.add('open');
    }));
  document.getElementById('lb-close')?.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
}

/* ── SCROLL TOP ─────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () =>
    btn.classList.toggle('vis', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── MAP ────────────────────────────────────────────── */
function initMap() {
  const el = document.getElementById('leaflet-map');
  if (!el || typeof L === 'undefined') return;
  const lat = 22.4498, lng = 114.1647;
  const map = L.map('leaflet-map').setView([lat, lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
  const icon = L.divIcon({
    className: '',
    html: `<div style="width:34px;height:34px;background:#9B5040;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center">
      <span style="transform:rotate(45deg);font-size:15px">🐾</span></div>`,
    iconSize:[34,34], iconAnchor:[17,34], popupAnchor:[0,-38]
  });
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup('<strong style="color:#9B5040">🐾 PawPlace</strong><br><small>Tai Po, Hong Kong</small>', { className:'custom-popup' })
    .openPopup();

  document.getElementById('map-gps-btn')?.addEventListener('click', () => {
    navigator.geolocation?.getCurrentPosition(pos => {
      const { latitude: ulat, longitude: ulng } = pos.coords;
      L.marker([ulat, ulng], {
        icon: L.divIcon({ html:'<div style="width:12px;height:12px;background:#4A7255;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 4px rgba(74,114,85,.3)"></div>', className:'', iconSize:[12,12], iconAnchor:[6,6] })
      }).addTo(map);
      L.polyline([[ulat, ulng],[lat, lng]], { color:'#9B5040', weight:2, dashArray:'4 5', opacity:.7 }).addTo(map);
      map.fitBounds([[ulat, ulng],[lat, lng]], { padding:[40, 40] });
    });
  });
}

/* ── CONTACT FORM ───────────────────────────────────── */
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });
}

/* ── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  document.getElementById('lang-sel')?.addEventListener('change', e => applyLang(e.target.value));
  initProgressBar();
  initNavbar();
  initHeroGallery();
  initReveals();
  initTestimonials();
  initFaq();
  initLightbox();
  initScrollTop();
  initForm();
  setTimeout(initMap, 200);
});
