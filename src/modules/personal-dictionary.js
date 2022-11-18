let words = [];

export function search(word){
    for(let i = 0; i < words.length; i++){
        if(word == words[i]){
            return true;
        }
    }

    return false;
}

export function addWord(word){
    words.push(word);

}