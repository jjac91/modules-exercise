import fruits from "./foods";
import {choice, remove} from "./helpers.js"

let chosen = choice(fruits)
console.log(`I'd like one ${chosen}, please`)
console.log(`Here you go: ${chosen}`)
console.log("Delicious! May I have another?")
let remaining = remove(fruits, chosen)
console.log(`I'm sorry, we're all out. We have ${remaining} left`)