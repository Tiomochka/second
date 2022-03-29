const numberoffilms = +prompt('how many films did you watch?',"");

const personalMovieDb = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDb.count < 10) {
    alert("bad skill");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    alert("Good skill");
  } else if (personalMovieDb.count >= 30) {
    alert("Beautifull skill");
  } else {
    alert ("Not a number");
    console.log('error');
  }



// const a = prompt("What is the last film did you watch?", ""),
//       b = +prompt("What is it level?", "");
    //   c = prompt("What is the last film did you watch?", ""),
    //   d = +prompt("What is it level?", "");

// personalMovieDb.movies[a] = b;
// personalMovieDb.movies[c] = d;

for(let i=0; i<2; i++) {
    const a = prompt("What is the last film did you watch?", ""),
          b = prompt("What is it level?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
    }  else {
     console.log('error');
     i--;
    }    

    
}

console.log(personalMovieDb);
