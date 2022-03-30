'use strict';

let numberoffilms;

function start() {
  numberoffilms = +prompt('how many films did you watch?',"");

  while (numberoffilms == '' || numberoffilms == null || isNaN(numberoffilms)) {
    numberoffilms = +prompt('how many films did you watch?',"");
  }
}

start();

const personalMovieDb = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
  for(let i=0; i<2; i++) {
    const a = prompt("What is the last film did you watch?", ""),
          b = prompt("What is it level?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
  }
} 

// rememberMyFilms();
 
function detectPersonalLevel() {
  if (personalMovieDb.count < 10) {
    console.log("bad skill");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log("Good skill");
  } else if (personalMovieDb.count >= 30) {
    console.log("Beautifull skill");
  } else {
    console.log("Not a number");
    console.log('error');
  }
}

// detectPersonalLevel();

function ShowMyBD(hidden) {
  if (!hidden) {
    console.log(personalMovieDb);
  }
}

ShowMyBD(personalMovieDb.privat);

function writeYourGenres1() {
  let genre;
  const text = "What is your favorite Genre #";
  let x = 1;
  do {genre = prompt(text + x++, "");
  personalMovieDb.genres[x - 2] = genre;
  }
  while (x <= 3);
}
// writeYourGenres1();

function writeYourGenres() {
  for (let i=1; i<=3; i++) {
    personalMovieDb.genres[i-1] = prompt(`What is your favorite Genre # ${i}`);
  }
}

writeYourGenres();