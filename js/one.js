const api_key = 'e4ca80527f93162248953ed89d20a5fa';
var base_url = "https://api.themoviedb.org/3";
var posterFullUrl = "https://image.tmdb.org/t/p/w185//"; 


$(document).ready(function() {
    var parameter=new URLSearchParams(window.location.search);
    var myMovieId=parameter.get("movieId");
    getMovieById(myMovieId);
    getMovieVideoDetails(myMovieId);

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

function getMovieVideoDetails(myMovieId){
    var api_videoUrl = base_url+"/movie/"+myMovieId+"/videos?api_key="+api_key;
    $.getJSON( api_videoUrl, function( data ) {
    console.log(data)
        try {
            $('.video').append($('<iframe width="1000" height="600"src="https://www.youtube.com/embed/'+data.results[2].key+'"></iframe>'));
            $(".movie-title").append(`<h3>${data.results[2].name}</h3>`)
            $(".moviedate").append(data.results[2].published_at)
            $(".rating").append(`<h5>Total Rating:${data.results[2].vote_average}</h5>`)
        }
        catch(err) {
            $('.video').append($('<iframe width="1000" height="600"src="https://www.youtube.com/embed/'+data.results[0].key+'"></iframe>'));
            $(".movie-title").append(`<h3>${data.results[0].name}</h3>`)
            $(".moviedate").append(data.results[0].published_at)
            $(".rating").append(`<h5>Total Rating:${data.results[0].vote_average}</h5>`)
        }
    });
}


