class anime{
    constructor(title, studio,rating){
        this.title=title;
        this.studio=studio;
        setRating(rating);

    }
     setRating(rating){
        if(rating !== null || rating !== undefined)
        {
            this.rating = rating;
        }
        else{
            this.rating= "PG";
        }
     }

getPG(animeArray) {
    var pgAnimeArray = [];

    for (var i = 0; i < animeArray.length; i++) {
        var pgAnime = new anime(
            animeArray[i].title,
            animeArray[i].studio,
           "PG"
        );
            pgAnimeArray.push(pgAnime);
    }

    return pgAnimeArray;
}
}

var mv =new anime("Casino Royale", "Eon Productions", "PG­13")
console.log(mv);
var animeList = [
    {"title": "Gintama The Final", "studio": "Bandai Namco Pictures", "rating": "PG-13"},
    {"title": "Jujutsu Kaisen 0 Movie", "studio": "MAPPA", "rating": "R-17"},
    {"title": "Suzume", "studio": "CoMix Wave Films", "rating": "PG-13"}
];
var pgAnimeList = mv.getPG(animeList);
console.log(pgAnimeList);