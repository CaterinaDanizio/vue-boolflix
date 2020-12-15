const apiKey = "0b739e8a0353e6df48b40dbc54ebd08e"
var app = new Vue({
  el: '#app',
  data: {
    userInput: "",
    // mediaMovie: [],
    // mediaTv: [],
    databaseUnico: [],
    locandina: "https://image.tmdb.org/t/p/w185",
    locandinaMancante: "https://fomantic-ui.com/images/wireframe/white-image.png",
    castUnico: [],
    mediaActive: {id: ""}
  },

// Funzione che contiene chiamata API collegata all'inserimento di una query di ricerca nell'input
  methods: {
    search: function () {
//       axios.get(databaseMovie + this.userInput).then(risposta => {
//         let movies = risposta.data.results;
//         this.mediaMovie = movies;
//       });
//
//
// // Chiamata API per le serie TV
//       axios.get(databaseTv + this.userInput).then(risposta => {
//         let serieTv = risposta.data.results;
//         this.mediaTv = serieTv;
//       });
//       this.userInput = "";

      // Chiamata multipla

      let movies = "https://api.themoviedb.org/3/search/movie?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query=" + this.userInput;

      let seriesTv = "https://api.themoviedb.org/3/search/tv?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query=" + this.userInput;


      let queryMovie = axios.get(movies);
      let queryTv = axios.get(seriesTv);

      axios.all([queryMovie, queryTv]).then(axios.spread((...risposta) => {
      this.databaseUnico = [...risposta[0].data.results, ...risposta[1].data.results];
    }));
    this.userInput = "";
 },


// Funzione per portare il voto in un range da 1 a 5 e arrotondarlo per eccesso
     rating: function (vote) {
             return Math.round(vote / 2);
           },

// Funzione per far comparire i primi 5 interpreti del cast

    learnMore: function (id) {
    // this.mediaActive = this.databaseUnico[index];
    axios.get("https://api.themoviedb.org/3/movie" + "/" + id + "/credits?api_key=0b739e8a0353e6df48b40dbc54ebd08e").then(risposta => {
    let crew = risposta.data.cast;
    for(let i = 0;i < 5; i++){
    this.castUnico.push(crew[i]);
    }
    console.log(this.castUnico);
  });
 },
},
});
