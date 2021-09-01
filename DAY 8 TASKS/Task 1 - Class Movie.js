class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(...movies) {
      let pgs = movies.filter(movie => movie.rating === "PG");
      return pgs;
  }
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Harry potter", "Warner Bros.");
let movie3 = new Movie("Iron Man", "Marvel");

console.log(Movie.getPG(movie1, movie2, movie3));
// returns array of instances of Movie which have rating "PG"
/* Output is 
[
    {
        title: "Harry potter", 
        studio: "Warner Bros.", 
        rating: "PG"
    }, 
    {
        title: "Iron Man", 
        studio: "Marvel", 
        rating: "PG"
] 
*/
