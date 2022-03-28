const numberoffilms = prompt('how many films did you watch?',"");

const personalMovieDb = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What is the last film did you watch?", ""),
      b = prompt("What is it level?", ""),
      c = prompt("What is the last film did you watch?", ""),
      d = prompt("What is it level?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
