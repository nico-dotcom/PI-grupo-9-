let apikey = "42737f60c529bfe7e9586db8cb132a1c";


let qs = location.search;
let qsObj = new URLSearchParams(qs);


let id = qsObj.get("id");




fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
    .then(function (response) {
        return response.json();


    }).then(function (data) {


        let series = data;
        console.log(series)


        let contenido = "";


            contenido = ` <img class="imgdetail" src="https://image.tmdb.org/t/p/w500/${series.poster_path}" alt="Titulo pelicula 1">
        <article class="Detail-Movie-Titulo-Icon">
            <p class="Detail-title">${series.original_name}</p>
            <p class="Detail-item-date">Fecha de Estreno: ${series.first_air_date}</p>
            <p class="Detail-Movie-sinopsis">${series.overview}</p>
            <a href="./detail-genres.html" class="subrayado"><p class="Detail-Movie-genero">Genero:  ${series.genres[0].name}</p></a>
            <p class="Detail-Movie-Duracion">Episodios: ${series.number_of_episodes} </p>
            <p>${series.vote_average}/10</p>
        </article>`  


        let indexCard = document.querySelector(".Detail-item");
        indexCard.innerHTML = contenido;




    }).catch(function (error) {
        console.log(error)
        return error;
    })






