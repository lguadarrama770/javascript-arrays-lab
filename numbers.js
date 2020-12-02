//EXCERSICE 2:
//Declare an array of at least 6 integers. 
let int = [1,2,3,4,5,6] 
//Create a function that will sort the integer array in ascending and descending order
//?????

//EXCERCISE 3:
//Create a list of your favorite movies, music, or video games using a multidimensional array
let multiDimensionalArray = [
    ['Divergent', 'Insurgent', 'Allegiant'],//sci-fi
    ['Thor ragnarok', 'Avengers Infinity War', 'Guardians of the Galaxy Vol. 2'],//superhero
    ['Bloodshot', 'Gemini Man', 'Terminator Dark Fate']//action
]
//Access the second element of the third array
console.log(multiDimensionalArray[2][1])

//Replace the first element of the second array with another
multiDimensionalArray[1].shift();
multiDimensionalArray[1].unshift('SpiderMan Far from Home');

//Using for loops, iterate through the arrays and print the elements to the console.
for(i = 0; i < multiDimensionalArray.length; i++){
    let innerArrays = multiDimensionalArray[i].length;
    for(m = 0; m < innerArrays; i++){
        console.log(multiDimensionalArray[i][m]);
    }
}