const database = "https://api.themoviedb.org/3/search/tv?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query="
var app = new Vue({
  el: '#app',
  data: {
    userInput: "",
    media: []
  },

  methods: {
    search: function () {
      axios.get(database + this.userInput).then(risposta => {
        let movies = risposta.data.results;
        this.media = movies;
      })
    },
  }
});
