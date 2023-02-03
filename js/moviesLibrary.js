const api_key = "f8f886bc4bbb97fb0e7b951589d574df"; //TODO insert your unique API KEY here
var base_url = "https://api.themoviedb.org/3";
var posterFullUrl = "https://image.tmdb.org/t/p/w185//";
var popularMoviesData=null;
var topRatedMovies=null;

$(document).ready(function() {
    
    $(".popular-movies img").click(function() {
    var index = $(".popular-movies img").index(this);
    //console.log(index);
    //console.log(popularMoviesData[index].id);
    var movieId= popularMoviesData[index].id;
    window.location="./movie-details.html?movieId="+movieId;
    });

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("figure").filter(function() {
            console.log(this)
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});


function getPopularMovies(){
    let api_url = base_url+"/movie/popular?api_key=" + api_key;
    $.getJSON( api_url, function( data ) {
    //console.log(data.results);
    popularMoviesData=data.results;
    $.each( data.results, function( i, item ) {
        var posterFullUrl = "https://image.tmdb.org/t/p/w185//"+item.poster_path;
        $('.popular-movies').append($(`<figure id="figure"><img id="movieImage" src=" ${posterFullUrl}">
        <figcaption>${popularMoviesData[i].title}</figcaption>
        </figure>`))
    });
    
    });
}

function getTopRatedMovies(){
    let api_url = base_url+"/movie/top_rated?api_key=" + api_key;
    $.getJSON( api_url, function( data ) {
    topRatedMovies=data.results;
    console.log(topRatedMovies)
    $.each( topRatedMovies, function( i, item ) {
        var posterFullUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
        $('.top-rated-movies').append($(`<figure id="figure"><img id="movieImage" src="${posterFullUrl}">
        <figcaption>${data.results[i].title}</figcaption></figure>`))
    });

    $(".top-rated-movies img").on("click",function() {
        var index = $(".top-rated-movies img").index(this);
        //console.log(index);
        var movieId= topRatedMovies[index].id;
        window.location="./movie-details.html?movieId="+movieId;
        });
    });
}

function getLatestMovies(){
    let api_url = base_url+"/movie/now_playing?api_key=" + api_key;
    $.getJSON( api_url, function( data ) {
    //console.log(data.results);
    let latestMovieElement = data.results
    $.each( latestMovieElement, function( i, item ) {
        var backdropUrl = "https://image.tmdb.org/t/p/original//" + item.backdrop_path;
        var posterUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
        $(".latest-movies").append(`<figure id="figure">
                                    <img id="movieImage" src="${posterUrl}">
                                    <figcaption>${data.results[i].title}</figcaption>
                                   </figure>`)

        $(".carousel-inner").append(`<div class="carousel-item">
                                        <img src="${backdropUrl}"  width="1000" height="500"> 
                                        <div class="carousel-caption">
                                        <h1>${latestMovieElement[i].original_title}</h1>
                                        </div> 
                                    </div>`)
                                    
    });
    $(".latest-movies img").on("click",function() {
        var index = $(".latest-movies img").index(this);
        //console.log(index);
        var movieId= latestMovieElement[index].id;
        window.location="./movie-details.html?movieId="+movieId;
        });
    });     
}






