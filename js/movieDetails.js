const api_key = "f8f886bc4bbb97fb0e7b951589d574df"; //TODO insert your unique API KEY here
var base_url = "https://api.themoviedb.org/3";
var posterFullUrl = "https://image.tmdb.org/t/p/w185//"; 


$(document).ready(function() {
    var parameter=new URLSearchParams(window.location.search);
    var myMovieId=parameter.get("movieId");
    getMovieById(myMovieId);
    getMovieVideoDetails(myMovieId);
    getMovieCastDetails(myMovieId);
    getRelatedMovies(myMovieId);
    

    $("#video-play").on("click",function(){
           console.log(myMovieId);
           //var clickedMovieId=movies[movieIndex].id;
           window.location="./videoPanel.html?movieId="+myMovieId;
    });
});

function getMovieById(movieId){

    var api_url = base_url+"/movie/"+movieId+"?api_key=" + api_key;
    $.getJSON( api_url, function( data )
    {
        console.log(data);
        let genreName = data.genres;
        let language = data.spoken_languages;
        var posterFullUrl = "https://image.tmdb.org/t/p/w300//" + data.poster_path;
        $('.movie-image').append($('<img width="80%" src="' + posterFullUrl + '">'))
        $('.movie-title').append(data.title);
        $('.movie-tagline').append(data.tagline);
        $('.movie-overview').append(data.overview);
        $('.movie-rating-value').append(data.vote_average+"/10");
        $('.movie-releaseDate').append(data.release_date);
        $('.movie-runtime').append(data.runtime+"minutes");
        $('.movie-homepage').append("<a href="+data.homepage+">"+data.homepage+"</a>");
        genreName.forEach(item => $('.movie-genre').append(item.name+", "));
        language.forEach(item => $('.movie-language').append(item.english_name+", "));
    });
}

function getMovieCastDetails(myMovieId){
    var api_videoUrl = base_url+"/movie/"+myMovieId+"/credits?api_key="+api_key;    
    $.getJSON( api_videoUrl, function( data ) {
        //console.log(data.cast)
        let cast = data.cast;
        $.each(cast, function( i, item ) {
            var castUrl = "https://image.tmdb.org/t/p/w185//" +cast[i].profile_path;
            //console.log(cast[i].name)
            $('.movie-cast').append(item.name+",  ")
            $(".castSlider").append(`<div class="figure">
                                    <img id="castImage" src="${castUrl}">
                                
                                    <figcaption id="castName">
                                            ${cast[i].name}
                                    </figcaption>
            
                                </div>`)
            $(".figure img").on("click",function(){
                var castIndex = $(".figure img").index(this);
                    console.log(castIndex);
                    var clickedCastName=cast[castIndex].name;
                    window.location="https://en.wikipedia.org/wiki/"+clickedCastName;
            });
        });
    });
}

function getMovieVideoDetails(myMovieId){
    var api_videoUrl = base_url+"/movie/"+myMovieId+"/videos?api_key="+api_key;
    $.getJSON( api_videoUrl, function( data ) {
    console.log(data)
        try {
            $('.video').append($('<iframe width="420" height="315"src="https://www.youtube.com/embed/'+data.results[0].key+'"></iframe>'));
        }
        catch(err) {
            $('.video').append($('<iframe width="420" height="315"src="https://www.youtube.com/embed/'+data.results[1].key+'"></iframe>'));
        }
        
    });
}

function getRelatedMovies(myMovieId){
    var api_videoUrl = base_url+"/movie/"+myMovieId+"/similar?api_key="+api_key;    
    $.getJSON( api_videoUrl, function( data ) {
        //console.log(data.results)
        var movies= data.results;
        $.each(movies, function( i, item ) {
            var posterUrl = "https://image.tmdb.org/t/p/w185//" +item.poster_path;
            
            $(".relatedMovie").append(`<div id="figure">
                                    <img id="movieImage" src="${posterUrl}">
                                
                                    <figcaption id="castName">
                                            ${movies[i].original_title}
                                    </figcaption>
            
                                </div>`)
            $("#figure img").on("click",function(){
                var movieIndex = $("#figure img").index(this);
                   //console.log(movieIndex);
                   var clickedMovieId=movies[movieIndex].id;
                   window.location="./movie-details.html?movieId="+clickedMovieId;
            });
        });
    });
}









