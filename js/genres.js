let apikey = "42737f60c529bfe7e9586db8cb132a1c";



fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
)
.then(function(response){
  return response.json();
})


.then(function (data){
    let genres = data.genres;
    console.log(genres);
    let contenido="";
    for(let i=0 ; i < 6 ; i++){

    
    contenido += `
    <div class="genre-div"> <li> <a class="genreA" href="./detail-genres.html?idgenero=${genres[i].id}&genero=${genres[i].name}&tipo=movie">${genres[i].name}</a></li></div>
                ` ;
    }
let genero_lista=document.querySelector('.genresList1') ;
    genero_lista.innerHTML=contenido;


     } )
   






.catch(function(error){
    console.log(error);
    return error
}


);




fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}`)
.then(function(response){
  return response.json();
})


.then(function (data){
    let genres = data.genres;
    console.log(genres);
    let contenido="";
    for(let i=0 ; i < 6 ; i++){


    contenido += `
    <div class="genre-div"> <li> <a class="genreA" href="./detail-genres.html?idgenero=${genres[i].id}&genero=${genres[i].name}&tipo=tv">${genres[i].name}</a></li></div>
                ` ;
    }
let genero_lista=document.querySelector('.genresList') ;
    genero_lista.innerHTML=contenido;


     } )
   






.catch(function(error){
    console.log(error);
    return error
}


);



