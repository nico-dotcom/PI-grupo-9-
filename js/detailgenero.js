
let apikey = "42737f60c529bfe7e9586db8cb132a1c";
let titulo = document.querySelector(".titDG");


let qs = location.search;
let qsObj = new URLSearchParams(qs);

let genero = qsObj.get("genero");
let tipo = qsObj.get("tipo");
let idgenero = qsObj.get("idgenero");
console.log(tipo)

if(tipo == "movie"){
    fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${idgenero}`)

    .then(function(response){
        return response.json();
    
        
    }).then(function(data){
    
        console.log(genero)
        let peliculas = data.results;
        console.log(peliculas);
    
    
        let contenido = "";
        for (let i = 0; i < 8; i++){
    
        
            contenido += ` 
           
            <article class="detail-genre-div">
                <a href="./detail-movie.html?id=${peliculas[i].id} " class="hipervinculo-index" >
                <img src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt="Titulo pelicula 5" />
                <p class="index-item-title">${peliculas[i].original_title}</p>
                </a>
            </article>
    
            
           `
     
                     
           
        };
    
    
        let indexCard = document.querySelector(".DGsection");
        indexCard.innerHTML = contenido;
        titulo.innerHTML = "Genero: " + genero;
    
    
    
    
    }).catch(function(error){
        console.log(error)
        return error;
    })
    
}else{
    fetch( `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_genres=${idgenero}`)

    .then(function(response){
        return response.json();
    
        
    }).then(function(data){
    
        console.log(genero)
        let serie = data.results;
        console.log(serie);
    
    
        let contenido = "";
        for (let i = 0; i < 8; i++){
    
        
            contenido += ` 
           
            <article class="detail-genre-div">
                <a href="./detail-serie.html?id=${serie[i].id} " class="hipervinculo-index" >
                <img src="https://image.tmdb.org/t/p/w500/${serie[i].poster_path}" alt="Titulo pelicula 5" />
                <p class="index-item-title">${serie[i].original_name}</p>
                </a>
            </article>
    
            
           `
     
                     
           
        };
    
    
        let indexCard = document.querySelector(".DGsection");
        indexCard.innerHTML = contenido;
        titulo.innerHTML = "Genero: " + genero;
    
    
    
    
    }).catch(function(error){
        console.log(error)
        return error;
    })
    
};





