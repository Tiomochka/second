'use strict';

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMovieDb.count = +prompt('how many films did you watch?',"");
    
      while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN
      (personalMovieDb.count)) {
        personalMovieDb.count = +prompt('how many films did you watch?',"");
      }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLeve: function() {
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
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDb.privat) {
        personalMovieDb.privat = false;
      } else {
       personalMovieDb.privat = true;
    }
    },

    ShowMyBD: function(hidden) {
      if (!hidden) {
        console.log(personalMovieDb);
      }
    },

    writeYourGenres: function() {
      for (let i=1; i<=3; i++) {
        personalMovieDb.genres[i-1] = prompt(`What is your favorite Genre # ${i}`);
        if (personalMovieDb.genres[i-1] != null && personalMovieDb.genres[i-1] != '') {
          console.log('done');
      } else {
          console.log('error');
          i--;  
      }
        if (i == 3) {
          personalMovieDb.genres.forEach((item, i) => {
            console.log(`Favorite Genre # ${i + 1} - это ${item}`);
          });
          }
        }
    },
};
// personalMovieDb.writeYourGenres();
personalMovieDb.toggleVisibleMyDB();
personalMovieDb.ShowMyBD(personalMovieDb.privat);


