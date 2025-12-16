 // Data ya movies kama JSON
const movies = [
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    poster: "assets/images/inception.jpg",
    trailer: "assets/trailers/inception.mp4",
  },
  {
    title: "The Dark Knight",
    description: "The rise of the dark vigilante, directed by Christopher Nolan.",
    poster: "assets/images/dark-knight.jpg",
    trailer: "assets/trailers/dark-knight.mp4",
  },
  {
    title: "Avengers: Endgame",
    description: "The epic conclusion of the Avengers saga.",
    poster: "assets/images/endgame.jpg",
    trailer: "assets/trailers/endgame.mp4",
  },
  {
    title: "Joker",
    description: "A psychological thriller about the Joker's origin.",
    poster: "assets/images/joker.jpg",
    trailer: "assets/trailers/joker.mp4",
  },
  {
    title: "Interstellar",
    description: "A journey beyond space and time, by Christopher Nolan.",
    poster: "assets/images/interstellar.jpg",
    trailer: "assets/trailers/interstellar.mp4",
  },
  {
    title: "Titanic",
    description: "A timeless love story that meets disaster at sea.",
    poster: "assets/images/titanic.jpg",
    trailer: "assets/trailers/titanic.mp4",
  },
];

// Function ya kuongeza movie kwa HTML
function loadMovies() {
  const movieContainer = document.getElementById("movie-container");

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title} Poster" class="poster">
      <h3>${movie.title}</h3>
      <p>${movie.description}</p>
      <button onclick="playTrailer('${movie.trailer}')">Watch Trailer</button>
    `;

    movieContainer.appendChild(movieCard);
  });
}

// Function ya kupakia trailer
function playTrailer(trailerURL) {
  const trailerWindow = window.open("", "Trailer", "width=800,height=600");
  trailerWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Movie Trailer</title>
    </head>
    <body style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: black;">
      <video src="${trailerURL}" controls autoplay style="width: 100%; height: auto;"></video>
    </body>
    </html>
  `);
}

// Load movies on page load
document.addEventListener("DOMContentLoaded", loadMovies);
