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

