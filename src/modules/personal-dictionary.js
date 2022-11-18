/**
 * This module defines a personal dictionary. It exports
 * a search function, and an addWord function that may be
 * used to add a word.
 * 
 * It is initially empty.
 * Search is case sensitive.
 */
//making a note so i can commit and push
//An array of words, initially empty
let words = [];

//This function searches the words array for the word
//parameter and returns true if it is found, false
//otherwise
function search(needle){    
    let start = 0; 
    let end = words.length; 
    
    for (let i = start; i < end; i++) {
        if (needle == words[i]) {
            return true;
        }
    }
    return false;
}

//This function adds the provided word to the words
//array
function addWord(word){
    words.push(word);
}

export {search, addWord};