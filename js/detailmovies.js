let apikey = "42737f60c529bfe7e9586db8cb132a1c";


let qs = location.search;
let qsObj = new URLSearchParams(qs);


let id = qsObj.get("id");


fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
    .then(function (response) {
        return response.json();


    }).then(function (data) {


        let pelicula = data;
        console.log(pelicula)


        let contenido = "";


            contenido = ` <img class="imgdetail" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="Titulo pelicula 1">
            <article class="Detail-Movie-Titulo-Icon">
                <p class="Detail-title">${pelicula.original_title}</p>
                <p class="Detail-item-date">Fecha de Estreno: ${pelicula.release_date}</p>
                <p class="Detail-Movie-sinopsis">${pelicula.overview}</p>
                <a href="./detail-genres.html" class="subrayado">
                <p class="Detail-Movie-genero">Genero: ${pelicula.genres[0].name}</p></a>
                <p class="Detail-Movie-Duracion">Duracion: ${pelicula.runtime}</p>
                <p>${pelicula.vote_average}/10</p>
            `  


        let indexCard = document.querySelector(".Detail-item");
        indexCard.innerHTML = contenido;




    }).catch(function (error) {
        console.log(error)
        return error;
    })






