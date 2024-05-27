const findFavMovies = (FavMovies, id) => {
        console.log(FavMovies)
        const foundMovies = FavMovies.filter(movie => movie.movieid === id);
        return foundMovies.length > 0;
  };
  
  export default findFavMovies;