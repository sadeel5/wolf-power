(() => {
  const translations = {
    en: {
      nav: ['Engineering', 'All Cars', 'Our Work', 'Services'],
      hero1: 'Beyond.',
      hero2: 'Limits.',
      heroSub: 'Specialists in all car makes and models. Comprehensive automotive care, diagnostics and maintenance.',
      primary: 'Our Services',
      secondary: 'Explore Our Expertise',
      eyebrow: 'AUTOMOTIVE EXPERTISE',
      engineTitle: 'ENGINEERING WITHOUT LIMITS.',
      engineText: 'Every vehicle deserves precision, care and attention to detail.',
      cards: [
        ['Diagnostics', 'Professional vehicle inspection and fault diagnosis.'],
        ['Mechanical Services', 'Mechanical inspection, repair and maintenance.'],
        ['Electrical Systems', 'Electrical fault diagnosis and automotive electronics.'],
        ['Vehicle Programming', 'Electronic systems and vehicle programming services.']
      ],
      manifesto: 'At WOLF POWER, every car matters. From everyday vehicles to luxury and performance models, our focus is quality, precision and dependable automotive care.',
      reveal1: 'Every',
      reveal2: 'Car Matters.',
      galleryTitle: 'EXCELLENCE IN EVERY DETAIL.',
      galleryText: 'Specialized automotive care for all makes and models.',
      gallery: [
        ['Diagnostics', 'Inspection and analysis'],
        ['Maintenance', 'Care for every journey'],
        ['Electrical', 'Precision and expertise'],
        ['Performance', 'Attention to detail']
      ],
      techTitle: 'COMPLETE AUTOMOTIVE CARE.',
      techCards: [
        ['Vehicle Diagnostics', 'Identifying faults with a systematic approach.'],
        ['Maintenance Services', 'Comprehensive care for different vehicle needs.'],
        ['Mechanical Expertise', 'Professional attention to mechanical systems.'],
        ['All Makes & Models', 'A service experience designed for different vehicles.'],
        ['Service Solutions', 'Explore the services available at WOLF POWER.']
      ],
      booking: 'REQUEST AN APPOINTMENT.',
      bookingText: 'Tell us about your vehicle and the service you need.',
      formButton: 'Request Appointment',
      demo: 'Demo form — online appointment requests are not connected yet.',
      footer: 'Automotive care and services for all car makes and models.',
      brands: 'ALL MAKES. ALL MODELS.',
      contact: 'Contact WOLF POWER',
      tagline: 'PRECISION / EXPERTISE / ALL CARS'
    },
    ar: {
      nav: ['خبرتنا', 'جميع السيارات', 'أعمالنا', 'خدماتنا'],
      hero1: 'خبرة.',
      hero2: 'بلا حدود.',
      heroSub: 'متخصصون في جميع أنواع وماركات السيارات. خدمات متكاملة للفحص والصيانة والعناية بالسيارات.',
      primary: 'خدماتنا',
      secondary: 'اكتشف خبرتنا',
      eyebrow: 'خبرة في عالم السيارات',
      engineTitle: 'هندسة بلا حدود.',
      engineText: 'كل سيارة تستحق الدقة والعناية والاهتمام بأدق التفاصيل.',
      cards: [
        ['فحص وتشخيص', 'فحص السيارات وتشخيص الأعطال.'],
        ['خدمات ميكانيكية', 'فحص وإصلاح وصيانة الأنظمة الميكانيكية.'],
        ['كهرباء السيارات', 'تشخيص الأعطال الكهربائية والأنظمة الإلكترونية.'],
        ['برمجة السيارات', 'خدمات الأنظمة الإلكترونية وبرمجة السيارات.']
      ],
      manifesto: 'في WOLF POWER، نهتم بكل سيارة. من السيارات اليومية إلى السيارات الفاخرة والرياضية، نركز على الجودة والدقة والعناية الاحترافية.',
      reveal1: 'كل سيارة',
      reveal2: 'بتهمنا.',
      galleryTitle: 'التميّز في كل تفصيل.',
      galleryText: 'عناية متخصصة بمختلف أنواع وماركات السيارات.',
      gallery: [
        ['الفحص', 'تشخيص وتحليل الأعطال'],
        ['الصيانة', 'عناية بكل رحلة'],
        ['الكهرباء', 'خبرة ودقة'],
        ['الأداء', 'اهتمام بالتفاصيل']
      ],
      techTitle: 'خدمات متكاملة للسيارات.',
      techCards: [
        ['فحص السيارات', 'تشخيص الأعطال بطريقة منهجية.'],
        ['خدمات الصيانة', 'عناية شاملة باحتياجات السيارات المختلفة.'],
        ['خبرة ميكانيكية', 'اهتمام احترافي بالأنظمة الميكانيكية.'],
        ['جميع أنواع السيارات', 'خدمات لمختلف الماركات والموديلات.'],
        ['حلول متخصصة', 'تعرّف على خدمات WOLF POWER.']
      ],
      booking: 'اطلب موعدًا.',
      bookingText: 'احكيلنا عن سيارتك والخدمة اللي بتحتاجها.',
      formButton: 'طلب موعد',
      demo: 'نموذج تجريبي — استقبال طلبات المواعيد إلكترونيًا غير مفعّل بعد.',
      footer: 'خدمات وعناية بالسيارات من مختلف الأنواع والماركات.',
      brands: 'جميع الماركات. جميع الموديلات.',
      contact: 'تواصل مع WOLF POWER',
      tagline: 'دقة / خبرة / جميع السيارات'
    }
  };

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const set = (selector, value) => {
    const el = $(selector);
    if (el) el.textContent = value;
  };

  const style = document.createElement('style');
  style.textContent = `
    .rs-language {
      border: 1px solid #d71920;
      color: #fff;
      background: #151517;
      border-radius: 999px;
      padding: 9px 15px;
      cursor: pointer;
      font: inherit;
      font-weight: 700;
      white-space: nowrap;
    }
    .rs-language:hover { background: #d71920; }
    .rs-note { color: #aaa; font-size: 13px; margin: 12px 0; }
    body.rs-ar .hero-side,
    body.rs-ar .explode-intro,
    body.rs-ar .part,
    body.rs-ar .tech-head,
    body.rs-ar .hz-intro,
    body.rs-ar .reserve-form,
    body.rs-ar footer {
      text-align: right;
    }
    body.rs-ar .hero-sub,
    body.rs-ar .part p,
    body.rs-ar .card-body { direction: rtl; }
    body.rs-ar .hero h1 { letter-spacing: 0; }
    body.rs-ar .hero h1 .line { line-height: 1.35; }
    .rs-disabled-demo { opacity: .55; cursor: not-allowed !important; }
  `;
  document.head.appendChild(style);

  const langButton = document.createElement('button');
  langButton.type = 'button';
  langButton.className = 'rs-language';
  langButton.setAttribute('aria-label', 'Switch language');

  const nav = $('.nav-links');
  if (nav) nav.insertAdjacentElement('afterend', langButton);

  // Replace misleading motorcycle statistics with a service message.
  const stats = $('.reveal .stats');
  if (stats) {
    stats.innerHTML = '<div class="rs-brands" style="font-size:clamp(20px,3vw,44px);font-weight:800"></div>';
  }

  // Keep the existing section structure for GSAP/ScrollTrigger.
  // Hide motorcycle-only simulators rather than claiming their data is real.
  const motorcycleReadout = $('.explode-readout');
  if (motorcycleReadout) motorcycleReadout.style.visibility = 'hidden';

  const launch = $('.launch');
  if (launch) {
    launch.style.visibility = 'hidden';
    launch.setAttribute('aria-hidden', 'true');
  }

  const bento = $('.tech .bento');
  if (bento) {
    // Preserve the DOM required by the template's existing animations.
    $$('.tech .big-num, .tech .charge-meta, .tech .segs, .tech .mode-tabs, .tech .mode-stats, .tech .curve-wrap')
      .forEach(el => { el.style.visibility = 'hidden'; });
  }

  // Prevent the old motorcycle purchase form from simulating a real booking.
  const form = $('#rform');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      e.stopImmediatePropagation();
    }, true);
    const submit = form.querySelector('[type="submit"]');
    if (submit) {
      submit.disabled = true;
      submit.classList.add('rs-disabled-demo');
    }
  }

  const demo = document.createElement('p');
  demo.className = 'rs-note';
  if (form) form.insertAdjacentElement('beforebegin', demo);

  function applyLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.body.classList.toggle('rs-ar', lang === 'ar');
    langButton.textContent = lang === 'en' ? 'العربية' : 'English';

    $$('.nav-links a').forEach((el, i) => {
      if (t.nav[i]) el.textContent = t.nav[i];
    });

    set('.hero h1 .line:nth-child(1) span', t.hero1);
    set('.hero h1 .line:nth-child(2) span', t.hero2);
    set('.hero-sub', t.heroSub);

    const heroButtons = $$('.hero-ctas a');
    [t.primary, t.secondary].forEach((value, i) => {
      if (!heroButtons[i]) return;
      const ico = heroButtons[i].querySelector('.ico');
      heroButtons[i].textContent = value;
      if (ico) heroButtons[i].appendChild(ico);
    });

    set('.explode .eyebrow', t.eyebrow);
    set('.explode h2', t.engineTitle);
    set('.explode-intro p', t.engineText);

    $$('.parts .part').forEach((el, i) => {
      if (!t.cards[i]) return;
      setWithin(el, 'h3', t.cards[i][0]);
      setWithin(el, 'p', t.cards[i][1]);
    });

    set('#mtext', t.manifesto);
    const revealLines = $$('.reveal-title .line span');
    if (revealLines[0]) revealLines[0].textContent = t.reveal1;
    if (revealLines[1]) revealLines[1].textContent = t.reveal2;
    set('.rs-brands', t.brands);

    set('.hz-intro h2', t.galleryTitle);
    set('.hz-intro p', t.galleryText);
    $$('.hz-card').forEach((el, i) => {
      if (!t.gallery[i]) return;
      setWithin(el, 'figcaption strong', t.gallery[i][0]);
      setWithin(el, 'figcaption span', t.gallery[i][1]);
    });
    set('.hz-end span', t.brands);

    set('.tech-head h2', t.techTitle);
    const titles = $$('.tech .card-title');
    const bodies = $$('.tech .card-body');
    t.techCards.forEach((item, i) => {
      if (titles[i]) titles[i].textContent = item[0];
      if (bodies[i]) bodies[i].textContent = item[1];
    });

    set('.reserve h2', t.booking);
    set('.reserve .lead', t.bookingText);
    set('#rlabel', t.formButton);
    demo.textContent = t.demo;

    set('footer .foot-row > div:first-child p', t.footer);
    set('footer .legal span:first-child', '© 2026 WOLF POWER');
    set('footer .legal span:last-child', t.tagline);

    // Remove product-purchase pricing and misleading confirmation.
    const price = $('.reserve .price');
    if (price) price.style.display = 'none';
    const success = $('.reserve .success');
    if (success) success.style.display = 'none';

    const mark = $('.wordmark');
    if (mark) mark.textContent = 'WOLF POWER';

    // Browser tab and accessibility.
    document.title = 'WOLF POWER | ' + (lang === 'ar' ? 'خدمات جميع أنواع السيارات' : 'Automotive Services');
    localStorage.setItem('realscore-lang', lang);
  }

  function setWithin(parent, selector, value) {
    const el = parent.querySelector(selector);
    if (el) el.textContent = value;
  }

  langButton.addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
  });

  applyLanguage(localStorage.getItem('realscore-lang') || 'en');
})();
