const Content = document.getElementById("Content");
let pages = 1;
let Movies = "";
let LastMovie;

const pagination = (option) => {
  if (option === "next" && pages < 500) {
    pages++;
    LoaderPelis();
  }
};

//Observador de eventos
const Observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pagination("next");
      }
    });
  },
  {
    rootMargin: "0px 0px 200px 0px",
    threshold: 1.0,
  }
);

const LoaderPelis = async () => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=84714705b35576f84838321bb12b67f3&language=es-ES&page=${pages}`
    );
    //console.log(resp);

    switch (resp.status) {
      case 200:
        const data = await resp.json();
        
        data.results.forEach((Movie) => {
          Movies += `
                <div class="Movie" id="${Movie.id}">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${Movie.poster_path}" alt="${Movie.title}">
                <h3 class="title">${Movie.title}</h3>
                </div>`;
        });

        Content.innerHTML = Movies;

        if (LastMovie) {
          Observer.unobserve(LastMovie);
        }

        //Observador
        const MoviesOnScreen = document.querySelectorAll(".Content .Movie");
        LastMovie = MoviesOnScreen[MoviesOnScreen.length - 1];
        Observer.observe(LastMovie);

        break;
      case 404:
        console.log("No se encontro la pelicula");
        break;
      case 401:
        console.log("Error api key");
        break;
      default:
        console.log("Error desconocido");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

LoaderPelis();


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});