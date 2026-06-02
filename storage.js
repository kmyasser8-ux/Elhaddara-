const Storage = {

 init() {
  // إذا كانت قاعدة البيانات غير موجودة تماماً
  if (!localStorage.getItem("platform_data")) {
    const data = typeof DEFAULT_DATA !== 'undefined' ? DEFAULT_DATA : { categories: [], articles: {} };
    // إضافة الإعدادات الافتراضية للنواة
    data.settings = {
      themeColor: "#c7a86b",
      bgColor: "#0b1020",
      fontName: "Cairo"
    };
    localStorage.setItem("platform_data", JSON.stringify(data));
  } else {
    // إذا كانت قاعدة البيانات موجودة ولكن كائن settings ناقص (وهذا هو الأرجح في حالتك)
    const data = JSON.parse(localStorage.getItem("platform_data"));
    if (!data.settings) {
      data.settings = {
        themeColor: "#c7a86b",
        bgColor: "#0b1020",
        fontName: "Cairo"
      };
      localStorage.setItem("platform_data", JSON.stringify(data));
    }
  }
}

  get(){
    return JSON.parse(localStorage.getItem("platform_data"));
  },

  save(data){
    localStorage.setItem("platform_data", JSON.stringify(data));
  },

  getCategories(){
    return this.get().categories;
  },

  getArticles(catId){
    return this.get().articles[catId] || [];
  },

  addArticle(catId, article){
    const data = this.get();
    data.articles[catId].push(article);
    this.save(data);
  }
};
