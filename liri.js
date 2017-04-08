//Declare Variables
var keys = require("./keys.js");
// console.log(keys.twitterKeys);
var Twitter = require('twitter');
var spotify = require('spotify');
var command = process.argv[2];
var values = process.argv[3];


//Find out what your commands are
switch(command) {
    case "my-tweets":
        tweetsFunction(values);
        break;
    case "spotify-this-song":
        spotifyFunction(values);
        break;
    case "movie-this":
        movieFunction();
        break;
    case "do-what-it-says":
        sayFunction(values);
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
 // console.log("Here is a tweet")
}
//Function for getting Spotify
function spotifyFunction(values) {
     spotify.search({type: 'track', query: values},function (err, data) {
         if (err) {
             console.log('Error occurred: ' + err);
            return;
         }

         var artists = data['tracks']['items'][1]['artists'][0]['name'];
         var album = data['tracks']['items'][1]['album']['name'];
         var songPreview = data['tracks']['items'][1]['external_urls']['spotify'];for (var i = 0; i<3; i++) {
         var track = data['tracks']['items'][1]['name'];

             console.log("\n===========================\n");
             console.log('Artist: ' + artists);
             console.log('Track: ' + track);
             console.log('Album ' + album);
             console.log('Song Preview: ' + songPreview);


         }
     });
}


//Function for getting Movies
function movieFunction() {
    console.log("Here is a movie")

}
//Function for getting Things
function sayFunction() {
    console.log("Here is something")

}