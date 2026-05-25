// القائمة الجانبية
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlayPage');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeSidebar');
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

if(menuBtn) {
    menuBtn.onclick = () => { sidebar.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; };
}
function closeSidebarFunc() { sidebar.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; }
if(closeBtn) closeBtn.onclick = closeSidebarFunc;
if(overlay) overlay.onclick = closeSidebarFunc;

// الوضع المظلم
if(localStorage.getItem('theme') === 'dark') { body.classList.add('dark'); if(themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>'; }
if(themeBtn) {
    themeBtn.onclick = () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };
}

// فتح وإغلاق الأقسام
window.toggleSection = function(sectionId) {
    const panels = ['politicsPanel', 'psyPanel', 'philPanel'];
    const target = document.getElementById(sectionId);
    panels.forEach(p => { if(p !== sectionId) document.getElementById(p)?.classList.remove('active'); });
    target?.classList.toggle('active');
    if(target?.classList.contains('active')) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
};

// روابط القائمة
const navHome = document.getElementById('navHome');
const navArticles = document.getElementById('navArticles');
if(navHome) {
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        ['politicsPanel','psyPanel','philPanel'].forEach(p => document.getElementById(p)?.classList.remove('active'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeSidebarFunc();
    });
}
if(navArticles) {
    navArticles.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
        closeSidebarFunc();
    });
}
