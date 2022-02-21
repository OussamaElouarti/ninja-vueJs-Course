const app = Vue.createApp({
    data() {
        return {
            url: "http://radarai.live",
            showgames: true,
            games: [
                { title: "dark souls", player: "tesla", img: 'assets/1.jpeg', isFav: true},
                { title: "dark souls2", player: "tesla2", img: 'assets/2.jpeg', isFav: false},
                { title: "dark souls3", player: "tesla3", img: 'assets/3.jpeg', isFav: true}
            ]
        }
    },
    methods : {
        ToogleShowgames(){
            this.showgames = !this.showgames
        },
        favHandler(game) {
            game.isFav = !game.isFav
        }
    },
    computed: {
        filtredGames() {
            return this.games.filter((game) => game.isFav)
        }
    }
})

app.mount('#app')