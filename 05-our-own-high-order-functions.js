//Ask them what array and theme they want 

const array = [
    'Lebron', 
    'Curry', 
    'Kyrie'
]


// for (const player of array) {
//     console.log(`My favourite player is: ${player}`)
// }


const ShowPlayers = (array, callback) => {
    for (const player of array) {
        callback(player)
    }
}

const myFavourite = player =>     console.log(`My favourite player is: ${player}`)

const myHater = player =>     console.log(`My least favourite player is: ${player}`)

ShowPlayers(array, myFavourite)

ShowPlayers(array, myHater)