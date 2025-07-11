const favoriteAnimal = 'shark'

if (favoriteAnimal === 'cat') {
    console.log('cats are pretty cool')
} else if (favoriteAnimal === 'dog') {
    console.log('they are pretty cool')
} else if (favoriteAnimal === 'shark') {
    console.log('interesting choice')
} else {
    console.log('that is cool but I am unfamiliar with that animal')
}

switch (favoriteAnimal) {
    case "cat":
        console.log("cats are pretty cool")
    case "dog":
        console.log("they are kinda loud")
    case "shark":
        console.log("that is an interesting choice")
}