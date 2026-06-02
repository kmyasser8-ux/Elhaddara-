let currentCategory = null;

Storage.init();

/* HOME */
function renderHome(){
  const box = document.getElementById("categories");
  box.innerHTML = "";

  Storage.getCategories().forEach(c=>{
    const count = Storage.getArticles(c.id).length;

    // مصفوفة افتراضية لتحديد أيقونة ذكية بناءً على المعرف، وإذا لم يجدها يضع أيقونة الكتاب الفخرية
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
        <small><i class="fa-solid fa-file-lines"></i> ${count} مقالات</small>
      </div>
    `;
  });
}

/* CATEGORY */
function openCategory(id,title){
  currentCategory = id;

  switchView("categoryView");

  document.getElementById("categoryTitle").innerText = title;

  const box = document.getElementById("articles");
  box.innerHTML = "";

  Storage.getArticles(id).forEach((a,i)=>{
    box.innerHTML += `
      <div class="card" onclick="openArticle(${i})">
        ${a.title}
      </div>
    `;
  });
}

/* ARTICLE */
function openArticle(i){
  const article = Storage.getArticles(currentCategory)[i];

  switchView("articleView");

  document.getElementById("articleTitle").innerText = article.title;
  document.getElementById("articleContent").innerText = article.text;
}

/* NAV */
function goHome(){
  switchView("homeView");
  renderHome();
}

function goCategory(){
  openCategory(currentCategory);
}

/* VIEW ENGINE */
function switchView(id){
  document.querySelectorAll(".view")
    .forEach(v=>v.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

/* THEME (بسيط) */
function toggleTheme(){
  document.body.classList.toggle("light");
}

/* START */
renderHome();
