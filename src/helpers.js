function choice(items) {
    let choice = items[Math.floor(Math.random()*items.length)]
    return choice
}
function remove(items, item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            items.splice(i,1)
            return items
        }
    }
    return undefined
}
export { choice, remove };
