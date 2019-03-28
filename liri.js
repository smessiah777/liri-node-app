require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var inquirer = require("inquirer");
var moment = require("moment");
var searchInput = "";

function concertResults() {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        searchInput +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      for (i = 0; i < 3; i++)
        console.log(
          "VENUE: " +
            response.data[i].venue.name +
            "\nLOCATION: " +
            response.data[i].venue.city +
            "\nDATE: " +
            moment(response.data[i].datetime).format("MM/DD/YYYY") +
            "\n"
        );
    });
}

function spotifyResults() {
  // searchTerm.toString
  spotify.search({ type: "track", query: searchInput }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(
      "ARTIST: " +
        data.tracks.items[0].artists[0].name +
        "\nSONG: " +
        data.tracks.items[0].name +
        "\nALBUM: " +
        data.tracks.items[0].album.name +
        "\nPREVIEW: " +
        data.tracks.items[0].preview_url +
        "\n"
    );
  });
}

function movieResults() {
  axios
    .get(
      "http://www.omdbapi.com/?t=" +
        searchInput +
        "&y=&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      console.log(
        "\nTitle: " +
          response.data.Title +
          "\nRelease Year: " +
          response.data.Year +
          "\nIMDB Rating: " +
          response.data.imdbRating +
          "\nRotten Tomatoes Rating: " +
          response.data.Ratings[1].Value +
          "\nLocation: " +
          response.data.Country +
          "\nLanguage: " +
          response.data.Language +
          "\nPlot: " +
          response.data.Plot +
          "\nCast: " +
          response.data.Actors
      );
    });
}

inquirer
  .prompt([
    {
      type: "list",
      name: "liri choices",
      message: "What can liri search for you?",
      choices: ["Concert", "Music by track", "Movie", "Do What It Says"],

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
            name: "searchInput",
            message: "What concert info do you want?"
          }
        ])
        .then(answers => {
          concertResults();
        });
    } else if (answers.input === "Music by track") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "searchInput",
            message: "What song info do you want?"
          }
        ])
        .then(answers => {
          spotifyResults();
        });
    } else if (answers.input === "Movie") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "searchInput",
            message: "What movie info do you want?"
          }
        ])
        .then(answers => {
          movieResults(answers);
        });
    } else if (answers.input === "Do What It Says") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "searchInput",
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
