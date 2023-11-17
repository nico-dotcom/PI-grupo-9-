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

        let generoHTML = "";

        for (let i = 0; i < data.genres.length; i++) {
            genero = data.genres[i].name;
            console.log(genero);
            genero = data.genres[i].name;
            idgenero = data.genres[i].id;
            console.log(idgenero);
            console.log(genero);
            generoHTML += `<a href="./detail-genres.html?idgenero=${idgenero}&genero=${genero}&tipo=movie"> ${genero}  </a>`
        }
        let generosE = document.querySelector("#Detail-Movie-genero");
        generosE.innerHTML = generoHTML;
   
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

// RECOMENDACIONES

let btn = document.querySelector("#boton");
btn.addEventListener("click", function(){
    console.log(id);
   
fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apikey}`)
.then(function(response){
    return response.json();
}).then(function(data){
    let series = data.results;
    console.log(series[0])

    let contenido = "";
    for (let i = 0; i < 5; i++){


        if (series[i].poster_path!=null) {
            contenido += `<article class="index-item">
            <a href="./detail-movie.html?id=${series[i].id} " class="hipervinculo-index" >
            <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Titulo pelicula 5" />
            <p class="index-item-title">${series[i].title}</p>
            <p class="index-item-date">Fecha de Estreno: ${series[i].release_date}</p>
            </a>
        </article>`
        }

    };

    let indexCard = document.querySelector("#seriesP");
    indexCard.innerHTML = contenido;

}).catch(function(error){
    console.log(error)
    return error;
})
















});





