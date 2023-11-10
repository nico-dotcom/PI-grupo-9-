let apikey = "42737f60c529bfe7e9586db8cb132a1c";


fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=${apikey}`)
    .then(function (response) {
        return response.json();

    }).then(function (data) {

        let series = data;
        console.log(series)

        let contenido = "";
        for (let i = 0; i < 5; i++) {

            contenido += ` <img src="./img/portada5.jpg" alt="Titulo pelicula 1">
        <article class="Detail-Movie-Titulo-Icon">
            <p class="Detail-title">El encargado</p>
            <p class="Detail-item-date">Fecha de Estreno: 26/10/2022</p>
            <p class="Detail-Movie-sinopsis">Eliseo trabaja como encargado en un importante edificio y, cada vez que los dueños no están, aprovecha para disfrutar de las comodidades de sus apartamentos.</p>
            <a href="./detail-genres.html" class="subrayado"><p class="Detail-Movie-genero">Genero: Comedia </p></a>
            <p class="Detail-Movie-Duracion">Duracion: 30m </p>
            <p>4.5/5</p>
        </article>`


        };

        let indexCard = document.querySelector("#seriesP");
        indexCard.innerHTML = contenido;


    }).catch(function (error) {
        console.log(error)
        return error;
    })

