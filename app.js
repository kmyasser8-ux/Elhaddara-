let currentCategory = null;

Storage.init();

/* 🎨 محرك حقن واستدعاء الخطوط والألوان ديناميكياً بدون حدود */
function applyDynamicSettings() {
  const data = Storage.get();
  
  if (data && data.settings) {
    const settings = data.settings;
    
    // 1. هندسة الاستدعاء الحر والذكي لأي خط من خوادم Google Fonts
    if (settings.fontName) {
      const formattedFont = settings.fontName.trim().replace(/\s+/g, '+');
      const fontId = `dynamic-google-font-${formattedFont.toLowerCase()}`;
      
      // إذا لم يكن الخط مستدعى مسبقاً في الـ Head، قم بإنشائه وحقنه فوراً
      if (!document.getElementById(fontId)) {
        const link = document.createElement('link');
        link.id = fontId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}:wght@400;600;700&display=swap`;
        document.head.appendChild(link);
      }
      
      // تطبيق الخط على الجسد بالكامل
      document.body.style.fontFamily = `'${settings.fontName}', sans-serif`;
    }
    
    // 2. تطبيق أي لون خلفية يتم اختياره حراً
    if (settings.bgColor) {
      document.body.style.backgroundColor = settings.bgColor;
    }
    
    // 3. تطبيق أي لون هوية وتحديث كافة العناصر والبطاقات والنصوص بها حراً
    if (settings.themeColor) {
      // إرسال قيم الألوان المخصصة للإطارات والبطاقات عبر خصائص ستايل الكروم
      const cards = document.querySelectorAll('.grid .card');
      cards.forEach(card => {
        card.style.borderColor = `${settings.themeColor}33`; // إطار شفاف خفيف بلون الهوية
      });

      const icons = document.querySelectorAll('.card-icon');
      icons.forEach(ico => {
        ico.style.color = settings.themeColor;
        ico.style.backgroundColor = `${settings.themeColor}1a`; // خلفية أيقونة شفافة خفيفة جداً
      });

      const headers = document.querySelectorAll('h2, h3, h4, .logo');
      headers.forEach(h => {
        if (!h.closest('.nav')) { // حماية شعار الهيدر العلوي
          h.style.color = settings.themeColor;
        }
      });
    }
  }
}

/* 🏠 HOME VIEW */
function renderHome(){
  const box = document.getElementById("categories");
  if (!box) return;
  box.innerHTML = "";

  Storage.getCategories().forEach(c => {
    const count = Storage.getArticles(c.id).length;

    const icons = {
      islamic: "🕌",
      politics: "⚖️",
      psychology: "🧠",
      philosophy: "📜"
    };
    const currentIcon = icons[c.id] || "📚";

    box.innerHTML += `
      <div class="card" onclick="openCategory('${c.id}','${c.title}')">
        <div class="card-icon">${currentIcon}</div>
        <h3>${c.title}</h3>
        <small><i class="fa-solid fa-file-lines ml-1"></i> ${count} مقالات</small>
      </div>
    `;
  });

  applyDynamicSettings();
}

/* 📂 CATEGORY VIEW */
function openCategory(id, title){
  currentCategory = id;
  switchView("categoryView");

  if (!title) {
    const cat = Storage.getCategories().find(c => c.id === id);
    title = cat ? cat.title : "";
  }

  document.getElementById("categoryTitle").innerText = title;

  const box = document.getElementById("articles");
  if (!box) return;
  box.innerHTML = "";

  const articles = Storage.getArticles(id);

  if (articles.length === 0) {
    box.innerHTML = `<div style="color: #94a3b8; padding: 20px; text-align: center;">لا توجد مقالات منشورة حالياً.</div>`;
    return;
  }

  articles.forEach((a, i) => {
    box.innerHTML += `
      <div class="card" onclick="openArticle(${i})" style="margin-bottom: 12px; display: block; width: 100%; text-align: right; border-radius: 12px; padding: 18px;">
        <h4 style="margin: 0; font-size: 1.1rem;">${a.title}</h4>
      </div>
    `;
  });

  applyDynamicSettings();
}

/* 📄 ARTICLE VIEW */
function openArticle(i){
  const articles = Storage.getArticles(currentCategory);
  const article = articles[i];
  if (!article) return;

  switchView("articleView");
  document.getElementById("articleTitle").innerText = article.title;
  document.getElementById("articleContent").innerText = article.text;
  
  applyDynamicSettings();
}

/* 🧭 NAVIGATION */
function goHome(){
  switchView("homeView");
  renderHome();
}

function goCategory(){
  if (currentCategory) openCategory(currentCategory);
  else goHome();
}

/* ⚙️ VIEW ENGINE */
function switchView(id){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const targetView = document.getElementById(id);
  if (targetView) targetView.classList.add("active");
}

/* 🌓 THEME CONTROL */
function toggleTheme(){
  document.body.classList.toggle("light");
}

/* 🚀 START SYSTEM */
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  applyDynamicSettings();
});
