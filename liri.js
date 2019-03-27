require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
// var bands =
var inquirer = require("inquirer");

var spotifySearch = function() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "userInput",
        message: "What song would you like to search for?"
      }
    ])
    .then(function(search) {
      // console.log(location.userInput);

      // Then use the Google Geocoder to Geocode the address
      keys.spotify(search.userInput, function(err, data) {
        console.log(JSON.stringify(data, null, 2));
      });
    });
};
spotifySearch();

////////////tried to nest inquirer prompts but i guess i can't
// inquirer
//   .prompt([
//     {
//       type: "list",
//       name: "liri choices",
//       message: "What can liri search for you?",
//       choices: ["Concert", "Song", "Movie", "Do What It Says"]
//     }
//   ])
//   .then(answers => {
//     if (inquirer.Concert === true) {
//       console.log("concerts");

//       inquirer
//         .prompt([
//           {
//             type: "input",
//             name: "concert",
//             message: "What concert info do you want?"
//           }
//         ])
//         .then(answers => {
//           console.log("concert info here");
//         });
//     } //else if (choices[1] === true) {
//     //   console.log("spotify");
//     // } else if (choices[2] === true) {
//     //   console.log("movie");
//     // } else if (choices[3] === true) {
//     //   console.log("just do it");
//     // }
//     else {
//       console.log("make a selection, please....");
//     }
//     console.log("you made a choice");
//   });
