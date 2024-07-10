console.log('Advanced debugging example running.')
debugger

function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      
      debugger

      
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}


goodPractices()
