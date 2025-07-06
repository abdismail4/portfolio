// انتظر حتى يتم تحميل DOM بالكامل قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', () => {

    // 1. نظام تبديل السمة (الوضع المظلم/الفاتح)
    // --------------------------------------------------
    const themeToggleBtn = document.querySelector('.theme-toggle'); // زر تبديل السمة
    const body = document.body; // عنصر body في الصفحة
    const localStorageTheme = localStorage.getItem('theme'); // جلب السمة المحفوظة

    // دالة لتطبيق السمة المحددة
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme'); // إضافة كلاس الوضع المظلم
        } else {
            body.classList.remove('dark-theme'); // إزالة كلاس الوضع المظلم
        }
    };

    // التحقق من وجود سمة محفوظة وتطبيقها
    if (localStorageTheme) {
        applyTheme(localStorageTheme);
    }
    // إذا لم توجد سمة محفوظة، نتحقق من تفضيلات النظام
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark'); // حفظ السمة المظلمة
    } else {
        applyTheme('light');
        localStorage.setItem('theme', 'light'); // حفظ السمة الفاتحة
    }

    // حدث النقر على زر تبديل السمة
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            applyTheme('light'); // تبديل إلى الوضع الفاتح
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark'); // تبديل إلى الوضع المظلم
            localStorage.setItem('theme', 'dark');
        }
    });


    // 2. زر العودة إلى الأعلى
    // --------------------------------------------------
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // إظهار/إخفاء الزر عند التمرير
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show'); // إظهار الزر
        } else {
            scrollToTopBtn.classList.remove('show'); // إخفاء الزر
        }
    });

    // حدث النقر للتمرير إلى الأعلى بسلاسة
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // تأثير سلس
        });
    });


    // 3. نظام القائمة الجانبية (للأجهزة المحمولة)
    // --------------------------------------------------
    const menuToggleBtn = document.querySelector('.mobile-header .menu-toggle');
    const leftSidebar = document.querySelector('.left-sidebar');
    const mainContent = document.querySelector('.main-content'); // Not directly used for hiding, but good to have
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // دالة لإغلاق القائمة الجانبية
    const closeSidebar = () => {
        leftSidebar.classList.remove('active');
        body.classList.remove('sidebar-active'); // Remove class from body to hide overlay
    };

    // دالة لفتح القائمة الجانبية
    const openSidebar = () => {
        leftSidebar.classList.add('active');
        body.classList.add('sidebar-active'); // Add class to body for overlay or to prevent scrolling
    };

    // حدث النقر على زر القائمة
    menuToggleBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent this click from immediately closing the sidebar via document click
        if (leftSidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // إغلاق القائمة عند النقر على أي رابط (للأجهزة المحمولة فقط)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the sidebar is active AND it's a small screen
            if (leftSidebar.classList.contains('active') && window.innerWidth <= 992) {
                closeSidebar();
            }
        });
    });

    // إغلاق القائمة عند النقر خارجها (للشاشات الصغيرة فقط)
    document.addEventListener('click', (event) => {
        // Only close if the sidebar is active, it's a small screen, and the click is outside the sidebar and the toggle button
        if (leftSidebar.classList.contains('active') && window.innerWidth >= 992 &&
            !leftSidebar.contains(event.target) && !menuToggleBtn.contains(event.target)) {
            closeSidebar();
        }
    });

    // إغلاق القائمة تلقائياً عند تغيير حجم الشاشة إلى حجم كبير
    window.addEventListener('resize', () => {
        // If screen becomes large, and sidebar is active (from mobile state), close it
        if (window.innerWidth > 992 && leftSidebar.classList.contains('active')) {
            closeSidebar();
        }
    });


    // 4. نظام تحديد الروابط النشطة
    // --------------------------------------------------
    const sections = document.querySelectorAll('section[id]'); // جميع الأقسام
    const sidebarNavLinks = document.querySelectorAll('.main-nav ul li a'); // روابط القائمة

    // دالة لتحديث الرابط النشط بناءً على القسم الظاهر
    const updateActiveLink = () => {
        let currentSectionId = '';

        // البحث عن القسم الحالي من الأسفل إلى الأعلى
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            // تحديد الـ offset بناءً على حجم الشاشة
            const offset = window.innerWidth <= 992 ? 70 : 100;
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;

            // التحقق إذا كان القسم ضمن نطاق الرؤية
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
                break;
            }
        }

        // تحديث حالة الروابط
        sidebarNavLinks.forEach(link => {
            link.classList.remove('active'); // إزالة النشاط من جميع الروابط

            // إذا كان الرابط يشير إلى القسم الحالي
            if (link.getAttribute('href').includes(`#${currentSectionId}`)) {
                link.classList.add('active'); // إضافة كلاس النشاط
            }
        });
    };

    // تحديث الروابط عند التمرير وعند التحميل
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // تنفيذ الدالة مرة أولية

    // 5. تهيئة مكتبة AOS للحركات عند التمرير
    // --------------------------------------------------
    AOS.init({
        offset: 120,     // مسافة التفعيل من أسفل الشاشة
        delay: 0,        // تأخير الحركة
        duration: 800,   // مدة الحركة
        easing: 'ease',  // نوع الحركة
        once: false,     // هل يتم التشغيل مرة واحدة فقط؟
        mirror: true,    // هل يتم تكرار الحركة عند التمرير لأعلى؟
        anchorPlacement: 'top-bottom', // نقطة تفعيل الحركة
    });


});