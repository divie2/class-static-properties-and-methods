class Movie {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
    this.isAvailable = true;
  }

  rentMovie() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`You've successfully rented "${this.title}". Enjoy your movie!`);
    } else {
      console.log(`Sorry, "${this.title}" is currently not available for rent.`);
    }
  }

  returnMovie() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`Thank you for returning "${this.title}".`);
    } else {
      console.log(`"${this.title}" is already available. No need to return.`);
    }
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(title, genre) {
    const movie = new Movie(title, genre);
    this.movies.push(movie);
    console.log(`"${title}" has been added to the movie store.`);
  }

  rentMovie(title) {
    const movie = this.findMovie(title);

    if (movie) {
      movie.rentMovie();
    } else {
      console.log(`Movie "${title}" not found in the store.`);
    }
  }

  returnMovie(title) {
    const movie = this.findMovie(title);

    if (movie) {
      movie.returnMovie();
    } else {
      console.log(`Movie "${title}" not found in the store.`);
    }
  }

  findMovie(title) {
    return this.movies.find((movie) => movie.title === title);
  }
}

// Example Usage
const movieStore = new MovieStore();

movieStore.addMovie("Inception", "Sci-Fi");
movieStore.addMovie("The Shawshank Redemption", "Drama");
movieStore.addMovie("The Matrix", "Action");

movieStore.rentMovie("Inception");
movieStore.rentMovie("The Matrix");
movieStore.rentMovie("The Matrix");

movieStore.returnMovie("Inception");
movieStore.returnMovie("The Shawshank Redemption");
