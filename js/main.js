document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Custom Cursor Logic
       ========================================= */
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        cursorBlur.style.left = e.clientX + 'px';
        cursorBlur.style.top = e.clientY + 'px';
    });

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
    if (document.getElementById('particles-js')) {
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
        const typingElement = document.querySelector('.hero-text h3');
        if (typingElement) {
            typed = new Typed('.hero-text h3', {
                strings: strings,
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1000,
                loop: true
            });
        }
    }

    // Initial Typed.js
    initTyped(['Full-Stack Developer', 'Software Engineer', 'Creative Coder']);

    /* =========================================
       4. Vanilla Tilt Config
       ========================================= */
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });

    /* =========================================
       5. Language Toggle Logic
       ========================================= */
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'en';

    const translations = {
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            role: "Full-Stack Developer",
            roles: ['Full-Stack Developer', 'Software Engineer', 'Creative Coder'],
            greeting: "Hi, I'm Seif Hossam",
            desc: "A driven Computer Science Student and Junior Developer skilled in React, Java, and C++. Building scalable modern web applications.",
            cv: "Download CV",
            work: "See My Work",
            more: "More About Me",
            featuredProjects: "Featured <span>Projects</span>",
            technicalSkills: "Technical <span>Skills</span>",
            frontendTab: "Frontend Development",
            backendTab: "Backend Development",
            softSkillsTitle: "Soft <span>Skills</span>",
            getInTouch: "Get In Touch",
            footerDesc: "Currently looking for new opportunities. My inbox is always open.",
            sayHello: "Say Hello",
            openProject: "Open Project",
            rights: "© 2026 Seif Hossam. All rights reserved.",
            project1Title: "E-Commerce Dashboard",
            project1Desc: "A comprehensive seller dashboard built with React.js. Features real-time data visualization and sales reporting.",
            project2Title: "Farida Marketing Agency",
            project2Desc: "A premium advertising platform with high-impact cinematic design showcasing strategic branding services.",
            project3Title: "Study To-Do List",
            project3Desc: "A productivity application designed to help organize study schedules with persistent task storage.",
            sk1: "Problem Solving",
            sk1Desc: ["Ability to debug code and find effective solutions", "Tackling programming challenges in real projects"],
            sk2: "Analytical Thinking",
            sk2Desc: ["Understanding and analyzing system requirements", "Designing database schemas, ERDs and mapping diagrams"],
            sk3: "Time Management",
            sk3Desc: ["Managing multiple Front-End and Back-End tasks", "Organizing workflows and meeting deadlines"],
            sk4: "Attention to Detail",
            sk4Desc: ["Writing clean, maintainable code", "Following OOP and SOLID principles", "Implementing validation and error handling"],
            sk5: "Adaptability",
            sk5Desc: ["Learning multiple technologies (Angular, React, Laravel)", "Quickly adapting to new frameworks and tools"],
            sk6: "Communication",
            sk6Desc: ["Documenting projects on GitHub clearly", "Writing readable READMEs and technical notes", "Collaborating with teammates or clients"],
            sk7: "Teamwork",
            sk7Desc: ["Integrating Front-End and Back-End workflows", "Using Git/GitHub effectively for team projects", "Understanding MVC architecture in collaboration"],
            sk8: "Critical Thinking",
            sk8Desc: ["Making architectural and design decisions", "Implementing security measures and authentication", "Choosing the best UI/UX approaches"],
            sk9: "Creativity",
            sk9Desc: ["Designing modern and user-friendly interfaces", "Building innovative solutions using React or Angular"],
            sk10: "Professionalism",
            sk10Desc: ["Meeting project deadlines consistently", "Testing and reviewing final applications before delivery"],
            logo: "SEIF <span style='color: var(--primary);'>HOSSAM</span>"
        },
        ar: {
            home: "الرئيسية",
            about: "من أنا",
            skills: "المهارات",
            projects: "المشاريع",
            contact: "تواصل معي",
            role: "مطور برمجيات شامل",
            roles: ['مطور برمجيات شامل', 'مهندس برمجيات', 'مبرمج مبدع'],
            greeting: "أهلاً، أنا سيف حسام",
            desc: "طالب علوم حاسب ومطور مبتدئ متخصص في React و Java و C++. أقوم ببناء تطبيقات ويب حديثة وقابلة للتطوير.",
            cv: "تحميل السيرة الذاتية",
            work: "شاهد أعمالي",
            more: "المزيد عني",
            featuredProjects: "أهم <span>المشاريع</span>",
            technicalSkills: "المهارات <span>التقنية</span>",
            frontendTab: "تطوير الواجهة الأمامية",
            backendTab: "تطوير الواجهة الخلفية",
            softSkillsTitle: "المهارات <span>الشخصية</span>",
            getInTouch: "تواصل معي",
            footerDesc: "أبحث حالياً عن فرص جديدة. بريدي الإلكتروني متاح دائماً.",
            sayHello: "أرسل رسالة",
            openProject: "عرض المشروع",
            rights: "© 2026 سيف حسام. جميع الحقوق محفوظة.",
            project1Title: "لوحة تحكم التجارة الإلكترونية",
            project1Desc: "لوحة تحكم بائع شاملة مبنية بـ React.js. تتميز بعرض البيانات الفوري وتقارير المبيعات.",
            project2Title: "شركة فريدة للتسويق",
            project2Desc: "منصة إعلانية متميزة بتصميم سينمائي عالي التأثير تعرض خدمات العلامة التجارية الاستراتيجية.",
            project3Title: "قائمة مهام الدراسة",
            project3Desc: "تطبيق إنتاجية مصمم للمساعدة في تنظيم جداول الدراسة مع تخزين مستمر للمهام.",
            sk1: "حل المشكلات",
            sk1Desc: ["القدرة على حل مشكلات البرمجة وإيجاد حلول فعالة", "التعامل مع تحديات البرمجة في المشاريع الحقيقية"],
            sk2: "التفكير التحليلي",
            sk2Desc: ["فهم وتحليل متطلبات النظام", "تصميم قواعد البيانات ومخططات الـ ERD"],
            sk3: "إدارة الوقت",
            sk3Desc: ["إدارة مهام الواجهة الأمامية والخلفية المتعددة", "تنظيم سير العمل والالتزام بالمواعيد النهائية"],
            sk4: "الاهتمام بالتفاصيل",
            sk4Desc: ["كتابة كود نظيف وقابل للصيانة", "اتباع مبادئ OOP و SOLID", "تنفيذ عمليات التحقق ومعالجة الأخطاء"],
            sk5: "المرونة والتكيف",
            sk5Desc: ["تعلم تقنيات متعددة (Angular, React, Laravel)", "التكيف السريع مع الأطر والأدوات الجديدة"],
            sk6: "التواصل",
            sk6Desc: ["توثيق المشاريع على GitHub بشكل واضح", "كتابة ملفات README وملاحظات تقنية سهلة القراءة", "التعاون مع أعضاء الفريق أو العملاء"],
            sk7: "العمل الجماعي",
            sk7Desc: ["دمج سير عمل الواجهة الأمامية والخلفية", "استخدام Git/GitHub بفعالية في مشاريع الفريق", "فهم معمارية MVC في التعاون البرمجي"],
            sk8: "التفكير النقدي",
            sk8Desc: ["اتخاذ قرارات معمارية وتصميمية", "تنفيذ تدابير الأمان والمصادقة", "اختيار أفضل أساليب UI/UX"],
            sk9: "الإبداع",
            sk9Desc: ["تصميم واجهات حديثة وسهلة الاستخدام", "بناء حلول مبتكرة باستخدام React أو Angular"],
            sk10: "الاحترافية",
            sk10Desc: ["الالتزام بالمواعيد النهائية للمشاريع باستمرار", "اختبار ومراجعة التطبيقات النهائية قبل التسليم"],
            logo: "سيف <span style='color: var(--primary);'>حسام</span>"
        }
    };

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            langBtn.textContent = currentLang.toUpperCase();

            // Toggle RTL/LTR
            document.documentElement.lang = currentLang;
            document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

            const t = translations[currentLang];

            // Navbar
            const logoEl = document.querySelector('.logo');
            if (logoEl) logoEl.innerHTML = t.logo;

            const navLinksTexts = document.querySelectorAll('.nav-links a');
            navLinksTexts[0].textContent = t.home;
            navLinksTexts[1].textContent = t.about;
            navLinksTexts[2].textContent = t.skills;
            navLinksTexts[3].textContent = t.projects;
            navLinksTexts[4].textContent = t.contact;

            // Hero
            initTyped(t.roles);

            const heroH1 = document.querySelector('.hero-text h1');
            if (heroH1) heroH1.childNodes[0].nodeValue = t.greeting;
            const heroP = document.querySelector('.hero-text p');
            if (heroP) heroP.textContent = t.desc;

            // Hero Buttons
            const heroBtns = document.querySelectorAll('.cta-buttons .btn');
            if (heroBtns.length >= 2) {
                heroBtns[0].textContent = t.cv;
                heroBtns[1].textContent = t.work;
            }

            // Headings
            const skillsTitle = document.querySelector('#skills .section-title');
            if (skillsTitle) skillsTitle.innerHTML = t.technicalSkills;

            const projectsTitle = document.querySelector('#projects .section-title');
            if (projectsTitle) projectsTitle.innerHTML = t.featuredProjects;

            const softSkillsTitle = document.querySelector('#soft-skills .section-title');
            if (softSkillsTitle) softSkillsTitle.innerHTML = t.softSkillsTitle;

            // Tabs
            const tabBtnsEl = document.querySelectorAll('.tab-btn');
            if (tabBtnsEl.length >= 2) {
                tabBtnsEl[0].textContent = t.frontendTab;
                tabBtnsEl[1].textContent = t.backendTab;
            }

            // Project Items
            const projectCards = document.querySelectorAll('.project-card');
            if (projectCards.length >= 3) {
                // Project 1
                projectCards[0].querySelector('.project-title').textContent = t.project1Title;
                projectCards[0].querySelector('.project-description').textContent = t.project1Desc;

                // Project 2
                projectCards[1].querySelector('.project-title').textContent = t.project2Title;
                projectCards[1].querySelector('.project-description').textContent = t.project2Desc;
                projectCards[1].querySelector('.btn-sm').textContent = t.openProject;

                // Project 3
                projectCards[2].querySelector('.project-title').textContent = t.project3Title;
                projectCards[2].querySelector('.project-description').textContent = t.project3Desc;
                projectCards[2].querySelector('.btn-sm').textContent = t.openProject;
            }

            // Soft Skills Individual Titles & Lists
            const softSkillCards = document.querySelectorAll('#soft-skills .skill-category-card');
            const icons = [
                'fa-puzzle-piece', 'fa-brain', 'fa-clock', 'fa-magnifying-glass',
                'fa-bolt', 'fa-comments', 'fa-users', 'fa-chess', 'fa-lightbulb', 'fa-user-tie'
            ];

            softSkillCards.forEach((card, index) => {
                const head = card.querySelector('h4');
                const list = card.querySelector('ul');
                const key = `sk${index + 1}`;
                const descKey = `${key}Desc`;

                if (head) head.innerHTML = `<i class="fa-solid ${icons[index]}"></i> ${t[key]}`;

                if (list && t[descKey]) {
                    list.innerHTML = t[descKey].map(item => `<li>${item}</li>`).join('');
                }
            });

            // Footer
            const footerH2 = document.querySelector('footer h2');
            if (footerH2) footerH2.textContent = t.getInTouch;

            const footerPs = document.querySelectorAll('footer p');
            if (footerPs.length >= 2) {
                footerPs[0].textContent = t.footerDesc;
                footerPs[1].textContent = t.rights;
            }

            const sayHelloBtn = document.querySelector('footer .cta-buttons .btn');
            if (sayHelloBtn) sayHelloBtn.textContent = t.sayHello;
        });
    }

    /* =========================================
       7. Scroll To Top Logic
       ========================================= */
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    if (scrollTopBtn) {
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
});

