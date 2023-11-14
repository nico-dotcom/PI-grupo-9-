let apikey = "42737f60c529bfe7e9586db8cb132a1c";
let cardSeriesP = document.querySelector("#seriesP");


fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
.then(function(response){
    return response.json();


}).then(function(data){


    let series = data.results;
   


    let contenido = "";
    for (let i = 0; i < 5; i++){


        contenido += `<article class="index-item">
                        <a href="./detail-serie.html?id=${series[i].id} " class="hipervinculo-index" >
                        <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Titulo pelicula 5" />
                        <p class="index-item-title">${series[i].original_name}</p>
                        <p class="index-item-date">Fecha de Estreno: ${series[i].first_air_date}</p>
                        </a>
                    </article>`
 
                 
       
    };


    let indexCard = document.querySelector("#seriesP");
    indexCard.innerHTML = contenido;




}).catch(function(error){
    console.log(error)
    return error;
})




// Peliculas populares


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
.then(function(response){
    return response.json();


}).then(function(data){


    let pelicula = data.results;
    console.log(pelicula)


    let contenido = "";
    for (let i = 0; i < 5; i++){


        contenido += `<article class="index-item">
                        <a href="./detail-movie.html?id=${pelicula[i].id} " class="hipervinculo-index" >
                        <img src="https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path}" alt="Titulo pelicula 5" />
                        <p class="index-item-title">${pelicula[i].original_title}</p>
                        <p class="index-item-date">Fecha de Estreno: ${pelicula[i].release_date}</p>
                        </a>
                    </article>`


       
    };


    let indexCard = document.querySelector("#PeliculasP");
    indexCard.innerHTML = contenido;




}).catch(function(error){
    console.log(error)
    return error;
})




// Series mas vistas


fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
.then(function(response){
    return response.json();


}).then(function(data){


    let series = data.results;


    let contenido = "";
    for (let i = 0; i < 5; i++){


        contenido += `<article class="index-item">
                    <a href="./detail-serie.html?id=${series[i].id} " class="hipervinculo-index" >
                    <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Titulo pelicula 5" />
                        <p class="index-item-title">${series[i].original_name}</p>
                        <p class="index-item-date">Fecha de Estreno: ${series[i].first_air_date}</p>
                        </a>
                    </article>`


       
    };


    let indexCard = document.querySelector("#seriesPP");
    indexCard.innerHTML = contenido;
   




}).catch(function(error){
    console.log(error)
    return error;
})





