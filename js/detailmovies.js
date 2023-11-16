let apikey = "42737f60c529bfe7e9586db8cb132a1c";
let titulo = document.querySelector(".Detail-title");
let sinopsis = document.querySelector(".Detail-Movie-sinopsis");
let date = document.querySelector(".Detail-item-date");
let duracion = document.querySelector(".Detail-Movie-Duracion");
let imagen = document.querySelector(".imagenmovie");
let calificacion = document.querySelector(".calificaciones");











let qs = location.search;
let qsObj = new URLSearchParams(qs);


let id = qsObj.get("id");


fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
    .then(function (response) {
        return response.json();


    }).then(function (data) {
        console.log(data)

       
       
        titulo.innerText = data.title;
        sinopsis.innerText = data.overview;
        date.innerText = data.release_date;
        duracion.innerText = "Minutos de duracion: " + data.runtime;
        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        calificacion.innerText = data.vote_average + "/10";








    }).catch(function (error) {
        console.log(error)
        return error;
    })







