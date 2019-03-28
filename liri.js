require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var bands =
var fs = require("fs");
var inquirer = require("inquirer");
var moment = require("moment");

inquirer
  .prompt([
    {
      type: "list",
      name: "liri choices",
      message: "What can liri search for you?",
      choices: ["Concert", "Song", "Movie", "Do What It Says"],

      name: "input"
    }
  ])
  .then(answers => {
    if (answers.input === "Concert") {
      console.log("concerts selected");

      inquirer
        .prompt([
          {
            type: "input",
            name: "concert-search",
            message: "What concert info do you want?"
          }
        ])
        .then(answers => {
          console.log("concert info here");
        });
    } else if (answers.input === "Song") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "spotify-search",
            message: "What song info do you want?"
          }
        ])
        .then(answers => {
          console.log("spotify info here");
        });
    } else if (answers.input === "Movie") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "movie-search",
            message: "What movie info do you want?"
          }
        ])
        .then(answers => {
          console.log("movie info here");
        });
    } else if (answers.input === "Do What It Says") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "do-it-search",
            message: "Search for text file?"
          }
        ])
        .then(answers => {
          console.log("text file info here");
        });
    } else {
      console.log("make a selection, please....");
    }
  });
