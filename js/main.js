document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Custom Cursor Logic
       ========================================= */
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');

    const moveCursor = (x, y) => {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

        cursorBlur.style.left = x + 'px';
        cursorBlur.style.top = y + 'px';
    };

    document.addEventListener('mousemove', (e) => moveCursor(e.clientX, e.clientY));

    // On touch screens the circle follows the finger
    const followTouch = (e) => {
        const touch = e.touches[0];
        if (!touch) return;
        document.body.classList.add('touch-active');
        moveCursor(touch.clientX, touch.clientY);
    };
    document.addEventListener('touchstart', followTouch, { passive: true });
    document.addEventListener('touchmove', followTouch, { passive: true });

    // Hover Effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-category-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = 'rgba(0, 255, 249, 0.1)';
            cursorBlur.style.opacity = '0.3';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'transparent';
            cursorBlur.style.opacity = '0.15';
        });
    });

    /* =========================================
       2. Particles.js Config
       ========================================= */
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00fff9" },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00fff9",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    /* =========================================
       3. Typed.js Config
       ========================================= */
    let typed;
    function initTyped(strings) {
        if (typed) typed.destroy();
        const typingElement = document.querySelector('.hero-text .typed-text');
        if (typingElement && typeof Typed !== 'undefined') {
            typed = new Typed(typingElement, {
                strings: strings,
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1000,
                loop: true
            });
        }
    }

    const roles = {
        en: ['Senior Full-Stack Engineer', 'React Native Mobile Engineer', 'Software Architect'],
        ar: ['مهندس برمجيات أول Full-Stack', 'مهندس تطبيقات React Native', 'معماري برمجيات']
    };

    // Initial Typed.js
    initTyped(roles.en);

    /* =========================================
       4. Vanilla Tilt Config
       ========================================= */
    // Tilt is a hover effect; skip it on touch screens where it only gets in the way of scrolling
    if (typeof VanillaTilt !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
        VanillaTilt.init(document.querySelectorAll(".project-card:not(.voltfit-featured)"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });
    }

    /* =========================================
       5. Language Toggle Logic
       English lives in the HTML; elements marked data-i18n="key" are
       swapped from the `ar` dictionary below. Arrays render as <li> items.
       ========================================= */
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'en';

    const ar = {
        logo: "سيف <span style='color: var(--primary);'>حسام</span>",
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navSkills: "الخبرات",
        navProjects: "الأعمال",
        navServices: "الخدمات",
        navContact: "تواصل معي",
        greeting: "أهلاً، أنا سيف حسام",
        heroDesc: "<strong>مهندس برمجيات أول Full-Stack وتطبيقات موبايل</strong>، أصمم وأطلق برمجيات إنتاجية من البداية للنهاية — من المعمارية والـ APIs لحد تطبيقات منشورة على Google Play. أبني تطبيقات موبايل تعمل بدون إنترنت (Offline-First) ومنصات ويب قابلة للتوسع باستخدام React و React Native و Laravel و Firebase.",
        cv: "تحميل السيرة الذاتية",
        work: "شاهد أعمالي",
        aboutTitle: "الخبرة <span>وأسلوب العمل</span>",
        expDate: "2023 — حتى الآن",
        expCompany: "عمل حر (Freelance)",
        expRole: "مهندس برمجيات أول Full-Stack وتطبيقات موبايل",
        expList: [
            "صممت وبنيت ونشرت تطبيق VOLT FIT — منصة لياقة وتدريب تعمل بنظام Offline-First (React Native و Zustand و Firebase) ومتاحة على Google Play.",
            "سلّمت مواقع ومنصات ويب لعملاء من البداية للنهاية، منها شركة فريدة للتسويق.",
            "مسؤول عن دورة المشروع كاملة: تحليل المتطلبات والأنظمة، المعمارية، تصميم الـ APIs، النشر والدعم بعد الإطلاق.",
            "أبني منتجات ثنائية اللغة (عربي/إنجليزي RTL) مع تركيز على الأداء والأمان والـ SEO."
        ],
        pr1: "المعمارية أولاً",
        pr1Desc: "أبدأ من نماذج البيانات واستراتيجية المزامنة وحالات الفشل — عشان المنتج يكبر من غير إعادة كتابة.",
        pr2: "الإطلاق للإنتاج",
        pr2Desc: "مستخدمين حقيقيين ومتاجر حقيقية ومواعيد حقيقية. مسؤول عن الإصدارات والمتابعة والإصلاحات بعدها.",
        pr3: "كود قابل للصيانة",
        pr3Desc: "هيكلة واضحة وعقود بيانات محددة وتحقق من المدخلات في كل مكان — كود يقدر أي مهندس بعدي يطوّره.",
        technicalSkills: "الخبرات <span>التقنية</span>",
        mobileTab: "الموبايل",
        frontendTab: "الواجهة الأمامية",
        backendTab: "الخلفية والمعمارية",
        skRn: ["تطبيقات متعددة المنصات من كود واحد", "تنقل معقد بين شاشات متعددة (+24 شاشة)", "أداء أصلي وحركات سلسة", "نشر وتحديث التطبيقات على Google Play"],
        skStateTitle: "إدارة الحالة و Offline-First",
        skState: ["معمارية الحالة باستخدام Zustand", "تخزين محلي مع مزامنة في الخلفية", "مستمعات Firestore الفورية", "تجربة مستخدم ثابتة مع الاتصال الضعيف"],
        skFirebase: ["نمذجة بيانات Firestore", "المصادقة والصلاحيات حسب الدور", "تحديثات فورية ومحادثات مشفرة", "قواعد الأمان والاستضافة"],
        skReact: ["معمارية مكونات وواجهات قابلة لإعادة الاستخدام", "إدارة الحالة (Context و Zustand)", "توجيه الصفحات وجلب البيانات", "تحسين الأداء"],
        skAngular: ["تصميم تطبيقات بـ TypeScript و OOP", "النماذج التفاعلية والتحقق", "الخدمات وربط الـ APIs", "المصادقة باستخدام JWT"],
        skWebTitle: "منصات الويب",
        skWeb: ["واجهات متجاوبة وسهلة الوصول", "تصميمات ثنائية اللغة ودعم RTL", "SEO تقني وبيانات منظمة", "تسليم تصميمات UI/UX"],
        skLaravel: ["تصميم RESTful APIs", "المصادقة والـ Middleware والصلاحيات", "Eloquent ORM ومعمارية MVC", "التحقق من المدخلات وأمان الويب"],
        skDataTitle: "البيانات",
        skData: ["تصميم قواعد بيانات علائقية (MySQL)", "نمذجة NoSQL (Firestore)", "تحسين الاستعلامات والفهارس", "ترحيل البيانات وسلامتها"],
        skArchTitle: "المعمارية والتسليم",
        skArch: ["تحليل الأنظمة ومخططات ERD وحالات الاستخدام", "تصميم عقود الـ APIs والتكامل", "Git و CI/CD (GitHub Actions)", "النشر والاستضافة (Firebase و Hostinger)"],
        featuredProjects: "أبرز <span>الأعمال</span>",
        voltfitTitle: "VOLT FIT — منصة لياقة وتدريب",
        voltfitDesc: "تطبيق لياقة وتدريب منشور على Google Play، مسؤول عنه بالكامل: معمارية المنتج، طبقة بيانات Offline-First مع مزامنة فورية عبر Firebase، تصميم الحالة بـ Zustand، 24 شاشة، تتبع التمارين واكتشاف الأرقام القياسية (PR)، تتبع الماكروز، حاسبة 1RM، ونظام مدرب ومتدرب بمحادثات مشفرة.",
        caseStudy: "اقرأ دراسة الحالة",
        downloadApp: "حمّل التطبيق",
        watchVideo: "شاهد على تيك توك",
        privacyPolicy: "سياسة الخصوصية",
        project2Title: "شركة فريدة للتسويق",
        project2Desc: "مشروع عميل تم تسليمه بالكامل لوكالة إعلانية متكاملة: موقع سينمائي بتصميم داكن عالي التأثير، متجاوب بالكامل ومحسّن للسرعة ومحركات البحث.",
        openProject: "عرض المشروع",
        project1Title: "لوحة تحكم البائع للتجارة الإلكترونية",
        project1Desc: "لوحة تحليلات للبائعين مبنية بـ React: عرض بيانات فوري، إدارة حالة المخزون، وتقارير مبيعات متجاوبة مبنية على مكونات رسوم بيانية قابلة لإعادة الاستخدام.",
        servicesTitle: "إزاي أقدر <span>أساعدك</span>",
        sv1: "تطبيقات الموبايل",
        sv1List: ["تطبيقات Android و iOS بـ React Native", "بيانات Offline-First ومزامنة فورية", "النشر على المتاجر والإصدارات المستمرة"],
        sv2: "منصات الويب",
        sv2List: ["مواقع شركات ولوحات تحكم", "REST APIs وأنظمة إدارة", "مواقع ثنائية اللغة وجاهزة للـ SEO"],
        sv3: "استشارات تقنية",
        sv3List: ["تحليل الأنظمة والمعمارية", "مراجعة تصميم قواعد البيانات والـ APIs", "تحويل الفكرة لخطة تنفيذ"],
        getInTouch: "يلا نبني حاجة سوا",
        footerDesc: "متاح لأدوار هندسية أولى (Senior)، مشاريع حرة، واستشارات تقنية.",
        sayHello: "ابدأ محادثة",
        whatsapp: "راسلني واتساب",
        rights: "© 2026 سيف حسام. جميع الحقوق محفوظة."
    };

    // Pages can add their own Arabic strings before loading this script
    Object.assign(ar, window.pageTranslationsAr || {});

    const i18nEls = document.querySelectorAll('[data-i18n]');
    const englishHtml = new Map();
    i18nEls.forEach(el => englishHtml.set(el, el.innerHTML));

    // Images with a localized version (e.g. Arabic store screenshots)
    const i18nImgs = document.querySelectorAll('img[data-src-ar]');
    i18nImgs.forEach(img => img.dataset.srcEn = img.getAttribute('src'));

    function applyLang(lang) {
        currentLang = lang;
        if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
        document.documentElement.lang = lang;
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

        i18nEls.forEach(el => {
            const value = lang === 'ar' ? ar[el.dataset.i18n] : englishHtml.get(el);
            if (value === undefined) return;
            el.innerHTML = Array.isArray(value) ? value.map(item => `<li>${item}</li>`).join('') : value;
            if (el.hasAttribute('data-text')) el.setAttribute('data-text', el.textContent);
        });

        i18nImgs.forEach(img => img.setAttribute('src', lang === 'ar' ? img.dataset.srcAr : img.dataset.srcEn));

        initTyped(roles[lang]);

        const privacyBtn = document.querySelector('.privacy-btn');
        if (privacyBtn) privacyBtn.setAttribute('href', `privacy-policy.html?lang=${lang}`);

        try {
            localStorage.setItem('portfolio_lang', lang);
        } catch (e) {}
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => applyLang(currentLang === 'en' ? 'ar' : 'en'));

        // Initialize from saved preference if available
        try {
            if (localStorage.getItem('portfolio_lang') === 'ar') applyLang('ar');
        } catch (e) {}
    }

    /* =========================================
       6. Page Scrollbar
          Drawn in the page so the custom cursor shows over it (CSS hides it on touch screens)
       ========================================= */
    const scrollbar = document.createElement('div');
    scrollbar.className = 'page-scrollbar';
    const thumb = document.createElement('div');
    thumb.className = 'page-scrollbar-thumb';
    scrollbar.appendChild(thumb);
    document.body.appendChild(scrollbar);

    const scrollRoot = document.documentElement;
    const maxScroll = () => scrollRoot.scrollHeight - window.innerHeight;
    const scrollToInstant = (top) => window.scrollTo({ top, behavior: 'instant' });

    const updateThumb = () => {
        const max = maxScroll();
        scrollbar.style.visibility = max > 0 ? 'visible' : 'hidden';
        if (max <= 0) return;
        const trackHeight = scrollbar.clientHeight;
        const thumbHeight = Math.max(40, trackHeight * window.innerHeight / scrollRoot.scrollHeight);
        thumb.style.height = thumbHeight + 'px';
        thumb.style.top = (trackHeight - thumbHeight) * (window.scrollY / max) + 'px';
    };

    window.addEventListener('scroll', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);
    window.addEventListener('load', updateThumb);
    updateThumb();

    let dragOffset = null;
    const scrollFromPointer = (clientY) => {
        const free = scrollbar.clientHeight - thumb.offsetHeight;
        if (free <= 0) return;
        const ratio = Math.min(1, Math.max(0, (clientY - dragOffset) / free));
        scrollToInstant(ratio * maxScroll());
    };

    thumb.addEventListener('mousedown', (e) => {
        e.preventDefault();
        dragOffset = e.clientY - thumb.offsetTop;
        scrollbar.classList.add('dragging');
    });

    // Clicking the track jumps there, centring the thumb under the pointer
    scrollbar.addEventListener('mousedown', (e) => {
        if (e.target !== scrollbar) return;
        e.preventDefault();
        dragOffset = thumb.offsetHeight / 2;
        scrollbar.classList.add('dragging');
        scrollFromPointer(e.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        if (dragOffset !== null) scrollFromPointer(e.clientY);
    });

    document.addEventListener('mouseup', () => {
        dragOffset = null;
        scrollbar.classList.remove('dragging');
    });

    /* =========================================
       7. Scroll To Top Logic
       ========================================= */
    const scrollTopBtn = document.getElementById('scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
        }, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =========================================
       8. Mobile Menu & Scroll Animations
       ========================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close the mobile menu after picking a section
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    /* =========================================
       8. Skills Tabs Logic
       ========================================= */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    /* =========================================
       9. Mobile Menu & Scroll Animations
       ========================================= */
    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .zoom-in, .slide-in-left, .slide-in-right, .fade-in').forEach(el => observer.observe(el));

    /* =========================================
       10. VOLT FIT Video Scroll-Triggered Autoplay
           (Starts ONLY on scroll, plays 2 times, then freezes on last frame)
       ========================================= */
    const voltfitCard = document.querySelector('.voltfit-card');
    const voltfitVideo = document.querySelector('.voltfit-video-bg');

    if (voltfitCard && voltfitVideo) {
        let playCount = 0;
        const maxPlays = 2;
        let hasStarted = false;

        const startVideo = () => {
            if (playCount < maxPlays) {
                const playPromise = voltfitVideo.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                }
            }
        };

        voltfitVideo.addEventListener('ended', () => {
            playCount++;
            if (playCount < maxPlays) {
                voltfitVideo.currentTime = 0;
                voltfitVideo.play().catch(() => {});
            } else {
                // Freeze on the last frame
                voltfitVideo.pause();
            }
        });

        // Trigger ONLY when the user scrolls down to the VOLT FIT card
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasStarted) {
                        hasStarted = true;
                        startVideo();
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.25 // Starts when 25% of the card is visible in the viewport
            });

            videoObserver.observe(voltfitCard);
        } else {
            startVideo();
        }
    }
});

