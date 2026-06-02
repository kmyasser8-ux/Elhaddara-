let currentCategory = null;

Storage.init();

/* HOME */
function renderHome(){
  const box = document.getElementById("categories");
  box.innerHTML = "";

  Storage.getCategories().forEach(c=>{
    const count = Storage.getArticles(c.id).length;

    box.innerHTML += `
      <div class="card" onclick="openCategory('${c.id}','${c.title}')">
        <h3>${c.title}</h3>
        <small>${count} مقالات</small>
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
