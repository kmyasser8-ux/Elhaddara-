const Storage = {

  init(){
    if(!localStorage.getItem("platform_data")){
      localStorage.setItem(
        "platform_data",
        JSON.stringify(DEFAULT_DATA)
      );
    }
  },

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
