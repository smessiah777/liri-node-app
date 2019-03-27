require("dotenv").config();

var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "liri choices",
      message: "What can liri search for you?",
      choices: [
        "Concert Info",
        "Search for a Song",
        "Search for a Movie",
        "Do What It Says"
      ]
    }
  ])
  .then(answers => {
    if (inquirer.prompt[0].choices[0] === true) {
      console.log("concerts");

      // inquirer
      // .prompt([
      //   /* Pass your questions in here */
      // ])
      // .then(answers => {
      //   // Use user feedback for... whatever!!
      // });
    } else if (choices[1] === true) {
      console.log("spotify");
    } else if (choices[2] === true) {
      console.log("movie");
    } else if (choices[3] === true) {
      console.log("just do it");
    } else {
      console.log("make a selection, please....");
    }
    console.log("you made a choice");
  });
