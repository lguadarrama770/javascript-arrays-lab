let songs = [ "Dakiti", "Hawai","ADMV","Cuidao","A Tu Merced"]
 console.log(songs[0]);
 console.log(songs[2]);

songs[4] = "Happy";

let jamFour = songs[3];

songs.push("Dile a El");
songs.unshift("Viento");

console.log(songs.length);

songs.pop();
console.log(songs.length);

//for loop to iterate through every song in the array and print each song's value to the console.
for(let i = 0; i <= songs.length; i++){
    console.log(i);
}
    

//each song and value
for(let i = 0; i <= songs.length; i++){
    for(let j = 0; j <= songs[i].length; j++){
        console.log(i + ": " + songs[j]);
    }
}