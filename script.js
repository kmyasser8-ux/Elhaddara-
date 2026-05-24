console.log("تم ربط ملف الجافا سكريبت بنجاح!");
alert("مرحباً بك! المنصة الآن جاهزة للتفاعل.");
// ربط عناصر القائمة الجانبية من الـ HTML
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

// عند الضغط على زر ☰ (فتح القائمة)
menuToggle.addEventListener('click', () => {
    sidebar.classList.remove('-right-64');
    sidebar.classList.add('right-0');
});

// عند الضغط على زر ✕ (إغلاق القائمة)
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('right-0');
    sidebar.classList.add('-right-64');
});
// ===============================
// منصة الحضارة | ملف JavaScript
// ===============================

// ---------- الوضع الليلي ----------
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    // تغيير شكل الأيقونة
    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = `<i class="fas fa-sun"></i>`;

    } else {

        themeBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    }

});

// ---------- القائمة الجانبية ----------
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlayPage");

const menuBtn = document.getElementById("menuBtn");
const closeSidebarBtn = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");
    overlay.classList.add("active");

});

closeSidebarBtn.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

function closeSidebar() {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}

// ---------- الأقسام التفاعلية ----------
const sections = document.querySelectorAll(".section-panel");

function closeAllSections() {

    sections.forEach(section => {

        section.classList.remove("active");

    });

}

// فتح عنصر معين
function toggleSection(id) {

    const target = document.getElementById(id);

    // إذا العنصر مفتوح يغلق
    if (target.classList.contains("active")) {

        target.classList.remove("active");

    } else {

        closeAllSections();

        target.classList.add("active");

        // انتقال سلس
        setTimeout(() => {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 200);
    }

}

// ---------- تأثير دخول العناصر ----------
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

// العناصر التي ستظهر تدريجياً
document.querySelectorAll(".card, .article").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";

    observer.observe(el);

});

// ---------- تأثير حركة خفيفة للبطاقات ----------
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 25);
        const rotateY = ((centerX - x) / 25);

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

// ---------- تغيير الخط ----------
function changeFont(fontName) {

    document.body.style.fontFamily = fontName;

}

// ---------- زر العودة للأعلى ----------
const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = `<i class="fas fa-arrow-up"></i>`;

scrollBtn.className =
`
fixed bottom-8 left-8
w-14 h-14
rounded-full
bg-[#c7a86b]
text-white
shadow-2xl
z-50
hidden
hover:scale-110
transition
`;

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.remove("hidden");

    } else {

        scrollBtn.classList.add("hidden");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ---------- إغلاق القائمة بـ Escape ----------
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeSidebar();
        closeAllSections();

    }

});

// ---------- رسالة تحميل ----------
window.addEventListener("load", () => {

    console.log("منصة الحضارة جاهزة للعمل");

});

// ===================================
// طريقة الربط داخل HTML
// ===================================

// ضع هذا السطر قبل </body>

/*

<script src="script.js"></script>

*/

// ===================================
