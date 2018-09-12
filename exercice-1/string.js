function ucfirst(word){

    return word.slice(0, 1).toUpperCase() + (word.slice(1)).toLowerCase()

}

console.log(ucfirst("hello word"));


function capitalize(word) {

    let words = word.split(" ");

    words = words.map((w)=>{

        return ucfirst(w)

    });

    return words.join(" ")
}

console.log(capitalize("hello word"));

function camelCase(word) {

    return capitalize(word).split(" ").join("")

}

function snake_case(word) {

    return capitalize(word).split(" ").join("_").toLowerCase()

}

console.log(snake_case("hello word"));


var prairie = {
    animal: {
        type: {
            name: "anaconda"
        }
    }
};

function prop_access(ob, key) {

    let keys = key.split(".");

    keys.map((k)=>{

        if (ob.hasOwnProperty(k)) {
            ob = ob[k];
            key = k;
        }

    });

    return ob
}

console.log(prop_access(prairie, "animal.type.name"));


function reverseWord(word) {
    return word.split('').reverse().join('')
}

function verlan(word) {

    let words = word.split(" ");

    words = words.map((w)=>{
        return reverseWord(w)
    });

    return words.join(" ")
}

console.log(verlan("hello world"));

function yoda(word) {

    let words = word.split(" ");

    let l = parseInt(words.length / 2);

    for (let i = 0; i < l; i++){
        let a = words[i];
        words[i] = words[words.length - i - 1];

        words[words.length - i - 1] = a;
    }
    return words.join(" ");
}

console.log(yoda("Hello world"));





