let currentCategory = null;

// تأمين تهيئة نظام التخزين الموحد للمنصة
Storage.init();

/* 🏠 HOME VIEW (عرض الصفحة الرئيسية) */
function renderHome(){
  const box = document.getElementById("categories");
  if (!box) return; // تأمين منع الأخطاء البرمجية في حال عدم وجود العنصر
  
  box.innerHTML = "";

  // جلب العلوم الحالية من المحرك الذكي الموحد
  Storage.getCategories().forEach(c => {
    const count = Storage.getArticles(c.id).length;

    // مصفوفة ذكية لتحديد الأيقونة المناسبة لكل علم تلقائياً
    const icons = {
      islamic: "🕌",
      politics: "⚖️",
      psychology: "🧠",
      philosophy: "📜"
    };
    // استخدام الأيقونة المخصصة أو أيقونة كتاب فخرية لأي علم جديد يتم إنشاؤه
    const currentIcon = icons[c.id] || "📚";

    // بناء البطاقات بتنسيق متناغم مع ستايل التعديل الأخير في styles.css
    box.innerHTML += `
      <div class="card" onclick="openCategory('${c.id}','${c.title}')">
        <div class="card-icon">${currentIcon}</div>
        <h3>${c.title}</h3>
        <small><i class="fa-solid fa-file-lines ml-1"></i> ${count} مقالات</small>
      </div>
    `;
  });
}

/* 📂 CATEGORY VIEW (عرض المقالات داخل العلم) */
function openCategory(id, title){
  currentCategory = id;

  switchView("categoryView");

  // إذا تم استدعاء الدالة من زر الرجوع بدون تمرير العنوان، نجلبه من الـ Storage
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
    box.innerHTML = `
      <div style="color: #94a3b8; padding: 20px; text-align: center;">
        لا توجد مقالات منشورة في هذا العلم حالياً.
      </div>`;
    return;
  }

  articles.forEach((a, i) => {
    box.innerHTML += `
      <div class="card" onclick="openArticle(${i})" style="margin-bottom: 12px; display: block; width: 100%; text-align: right;">
        <h4 style="margin: 0; color: #c7a86b; font-size: 1.1rem;">${a.title}</h4>
      </div>
    `;
  });
}

/* 📄 ARTICLE VIEW (عرض المقال التفصيلي) */
function openArticle(i){
  const articles = Storage.getArticles(currentCategory);
  const article = articles[i];

  if (!article) return;

  switchView("articleView");

  document.getElementById("articleTitle").innerText = article.title;
  document.getElementById("articleContent").innerText = article.text;
}

/* 🧭 NAVIGATION (محرك التنقل السلس) */
function goHome(){
  switchView("homeView");
  renderHome();
}

function goCategory(){
  if (currentCategory) {
    openCategory(currentCategory);
  } else {
    goHome();
  }
}

/* ⚙️ VIEW ENGINE */
function switchView(id){
  document.querySelectorAll(".view")
    .forEach(v => v.classList.remove("active"));

  const targetView = document.getElementById(id);
  if (targetView) {
    targetView.classList.add("active");
  }
}

/* 🌓 THEME CONTROL (التحكم في المظهر لضمان الاستقرار الداكن) */
function toggleTheme(){
  document.body.classList.toggle("light");
}

/* 🚀 START SYSTEM */
// التأكد من تحميل العناصر بالكامل قبل بدء الرندرة لمنع تداخل الألوان البيضاء الافتراضية للمتصفح
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
