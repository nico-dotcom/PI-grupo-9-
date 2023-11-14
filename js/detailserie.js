let apikey = "42737f60c529bfe7e9586db8cb132a1c";
let titulo = document.querySelector(".Detail-title");
let sinopsis = document.querySelector(".Detail-Movie-sinopsis");
let date = document.querySelector(".Detail-item-date");
let duracion = document.querySelector(".Detail-Movie-Duracion");
let calificacion = document.querySelector(".calificacion");
let imagen = document.querySelector(".imagenmovie");
let generos = document.querySelector(".Detail-Movie-genero");

let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get("id");

fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
.then(function (response) {
        return response.json();

    }).then(function (data) {

        console.log(data)
       
        titulo.innerText = data.original_name;
        sinopsis.innerText = data.overview;
        date.innerText = data.last_air_date;            ;
        duracion.innerText = "Numero de episodios: " + data.number_of_episodes;
        calificacion.innerText = data.vote_average + "/10";
        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        generos.innerHTML = "Generos: " + data.genres[0].name

    }).catch(function (error) {
        console.log(error)
        return error;
    })





