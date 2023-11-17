let apikey = "42737f60c529bfe7e9586db8cb132a1c";
let titulo = document.querySelector(".Detail-title");
let sinopsis = document.querySelector(".Detail-Movie-sinopsis");
let date = document.querySelector(".Detail-item-date");
let duracion = document.querySelector(".Detail-Movie-Duracion");
let calificacion = document.querySelector(".calificacion");
let imagen = document.querySelector(".imagenmovie");


let qs = location.search;
let qsObj = new URLSearchParams(qs);


let id = qsObj.get("id");


fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
.then(function (response) {
        return response.json();


    }).then(function (data) {


        console.log(data)
        let generoHTML = "";


        for (let i = 0; i < data.genres.length; i++) {
            genero = data.genres[i].name;
            idgenero = data.genres[i].id;
            console.log(idgenero);
            console.log(genero);
            generoHTML += `<a href="./detail-genres.html?idgenero=${idgenero}&genero=${genero}&tipo=tv"> ${genero}  </a>`


        }


        let generosE = document.querySelector("#Detail-Movie-genero");
        generosE.innerHTML = generoHTML;
   




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






// RECOMENDACIONES


let btn = document.querySelector("#boton");
btn.addEventListener("click", function(){
    console.log(id);
   
fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apikey}`)
.then(function(response){
    return response.json();
}).then(function(data){
    let series = data.results;
    console.log(series[0])


    let contenido = "";
    for (let i = 0; i < 5; i++){


        if (series[i].poster_path!=null) {
            contenido += `<article class="index-item">
            <a href="./detail-serie.html?id=${series[i].id} " class="hipervinculo-index" >
            <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Titulo pelicula 5" />
            <p class="index-item-title">${series[i].original_name}</p>
            <p class="index-item-date">Fecha de Estreno: ${series[i].first_air_date}</p>
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





