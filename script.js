const isUserLoggedIn = true

isUserLoggedIn ? console.log("logged in") : console.log('logged out')

const welcomeMessage = isUserLoggedIn ? "welcome" : "please log in"

console.log(welcomeMessage)