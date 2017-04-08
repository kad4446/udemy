var movies = [
   {
      title: "The Fantastic Four",
      rating: 2,
      hasWatched: false
   },
   {
      title: "Get Out",
      rating: 5,
      hasWatched: true
   },
   {
      title: "Power Rangers",
      rating: 3.5,
      hasWatched: false
   },
   {
      title: "Life",
      rating: 4.5,
      hasWatched: true
   }
];

function printMovie(movie) {
   var watched = "watched ";
   if (!movie.hasWatched) {
      watched = "not seen ";
   }
   console.log("You have " + watched + "\"" + movie.title + "\" - " + movie.rating + " stars");
};

movies.forEach(function(movie) {
   printMovie(movie);
});