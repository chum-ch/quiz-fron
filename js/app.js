var app = new Vue({
  el: "#app",
  data: {
    url: "http://127.0.0.1:8000/api/books",
    books: [],
    author: [],
    title:"",
    body: "",
   

  },
  methods: {
    getBooks(){
      axios.get(this.url)
          .then(res=>{
            this.books = res.data.data;
            console.log(this.books);
          })
    },
    
  },
  mounted() {
    this.getBooks();
  },
  
})