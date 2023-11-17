let apikey = "42737f60c529bfe7e9586db8cb132a1c";
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get("buscador");




fetch( `https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=${busqueda}`)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        let series = data.results;
        console.log(series)
        let contenido = "";
        let logintud = "";
        logintud = (data.results).length;




        if (logintud==0){
            let titulo = document.querySelector("#tituloS");
            titulo.innerText = "No hay resultado para su búsqueda ";
            let titulop = document.querySelector("#titulop");
            titulop.innerText = "";
       
        }
     
        for (let i = 0; i < 5; i++){
   
            contenido += `<article class="index-item">
                            <a href="./detail-serie.html?id=${series[i].id} " class="hipervinculo-index" >
                            <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Titulo pelicula 5" />
                            <p class="index-item-title">${series[i].original_name                            }</p>
                            <p class="index-item-date">Fecha de Estreno: ${series[i].first_air_date
                            }</p>
                            </a>
                        </article>`
        };


        let indexCard = document.querySelector("#seriesP");
        indexCard.innerHTML = contenido;
       
        let titulo = document.querySelector("#tituloS");
        titulo.innerText = "Resultados series para la busqueda: " + busqueda;
       
       


    }).catch(function (error) {
        console.log(error)
        return error;
    })


    fetch( `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${busqueda}`)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        let pelicula = data.results;
        console.log(pelicula);
        let contenido = "";
        for (let i = 0; i < 5; i++){
   
            contenido += `<article class="index-item">
                            <a href="./detail-movie.html?id=${pelicula[i].id} " class="hipervinculo-index" >
                            <img src="https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path}" alt="Titulo pelicula 5" />
                            <p class="index-item-title">${pelicula[i].title
                            }</p>
                            <p class="index-item-date">Fecha de Estreno: ${pelicula[i].release_date
                            }</p>
                            </a>
                        </article>`
        };
        let indexCard = document.querySelector("#peliculasP");
        indexCard.innerHTML = contenido;


        let titulop = document.querySelector("#titulop");
        titulop.innerText = "Resultados pelicula para la busqueda: " + busqueda;




    }).catch(function (error) {
        console.log(error)
        return error;
    })



















