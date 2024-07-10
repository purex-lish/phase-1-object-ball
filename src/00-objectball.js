// const game = gameObject()

// const homePlayers = game.home.players

// const awayPlayers = game.away.players

// const allPlayers = players()

// function teamColors(input){

//     const colors = []
    
//     if (input === homeTeamName()){
    
//     colors.push (game.home.colors)
    
//     }
    
//     if (input === awayTeamName()){
    
//     colors.push (game.away.colors)
    
//     }
    
//     return colors
    
//     }

//     function teamScore(team){

//         let score = 0
        
//         for (const player in team){
        
//         score += (team[player].points)
        
//         }
        
//         return score
        
//         }

//         console.log(gameObject());

function gameObject() {
    return {
        home: {
            players: [
                { name: "Player A", points: 20 },
                { name: "Player B", points: 15 }
            ],
            colors: "blue"
        },
        away: {
            players: [
                { name: "Player C", points: 18 },
                { name: "Player D", points: 12 }
            ],
            colors: "red"
        }
    };
}

// Now you can use gameObject() to get the game object
const game = gameObject();

// Example usage of the game object
const homePlayers = game.home.players;
const awayPlayers = game.away.players;

console.log("Home Team Players:", homePlayers);
console.log("Away Team Players:", awayPlayers);