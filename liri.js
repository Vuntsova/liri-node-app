//Declare Variables
var keys = require("./keys.js");
// console.log(keys.twitterKeys);
var Twitter = require('twitter');
var command = process.argv[2];
var values = process.argv[3];


//Find out what your commands are
switch(command) {
    case "my-tweets":
        tweetsFunction();
        break;
    case "spotify-this-song":
        spotifyFunction();
        break;
    case "movie-this":
        movieFunction();
        break;
    case "do-what-it-says":
        sayFunction();
        break;
    default: console.log("Command Not Found!")
}
//Function for getting Tweets
function tweetsFunction() {
    var client = new Twitter(keys.twitterKeys);
    var params = {screen_name: 'nyt',
                    count:21
                 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if(error){
            console.log(error);
        }else if (!error) {
        for (var i = 0; i<21; i++){
            console.log("\n--------------------------------\n");
            console.log("Tweet Number: " + i);
            console.log(tweets[i]["text"]);
            console.log("\n--------------------------------\n");
        }

        }
    });
 console.log("Here is a tweet")
}
//Function for getting Spotify
function spotifyFunction() {
    console.log("Here is spotify")
}
//Function for getting Movies
function movieFunction() {
    console.log("Here is a movie")

}
//Function for getting Things
function sayFunction() {
    console.log("Here is something")

}