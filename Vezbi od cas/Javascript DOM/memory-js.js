let images = [
    {id: 1, animal: "cat", src: "images/cat.webp",},
    {id: 2, animal: "dog", src: "images/dog.webp",},
    {id: 3, animal: "elephant", src: "images/elephant.webp",},
    {id: 4, animal: "fish", src: "images/fish.webp",},
    {id: 5, animal: "giraffe", src: "images/giraffe.webp",},
    {id: 6, animal: "gopher", src: "images/gopher.webp",},
    {id: 7, animal: "monkey", src: "images/monkey.webp",},
    {id: 8, animal: "pig", src: "images/pig.webp",},
    {id: 9, animal: "raccoon", src: "images/raccoon.webp",},
    {id: 10, animal: "zebra", src: "images/zebra.webp",}
]

let defaultImage= "images/default.webp";

// let arr_imgs= 
// ["images/cat.webp", "images/cat.webp",
// "images/dog.webp","images/dog.webp",
// "images/elephant.webp","images/elephant.webp",
// "images/fish.webp","images/fish.webp",
// "images/giraffe.webp","images/giraffe.webp",
// "images/gopher.webp","images/gopher.webp",
// "images/monkey.webp","images/monkey.webp",
// "images/pig.webp","images/pig.webp",
// "images/raccoon.webp","images/raccoon.webp",
// "images/zebra.webp","images/zebra.webp"]

let arr_imgs= [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

let shuffled_imgs= shuffle(arr_imgs);

for (let index = 0; index < shuffled_imgs.length; index++) {
    const element = shuffled_imgs[index];
    document.createElement("div");
    
}

