const optionsrps = ["rock", "paper", "scissors"];
const optionsrpsls = ["rock", "paper", "scissors", "lizard", "spock"];


export {optionsrps, optionsrpsls};

export function rps(playerShot = null) {
     const opponentshot = rand(optionsrps);
     if(!playerShot) {
          return { player: opponentshot };
     } else if (optionsrps.includes(playerShot)) {
          const result = gameLogic(playerShot, opponentshot);
          return { player: playerShot, opponent: opponentshot, result: result};
     } else {
          throw new Error('Invalid input');
          return null;
     }
}

export function rpsls(playerShot = null) {
     const opponentshot = rand(optionsrpsls);
     if(!playerShot) {
          return { player: opponentshot};
     } else if (optionsrpsls.includes(playerShot)) {
          const result = gameLogic(playerShot, opponentshot);
          return { player: playerShot, opponent:opponentshot, result:result};
     } else {
          throw new Error('Invalid input');
          return null;
     }
     }

function rand(args) {
     return args[Math.floor(Math.random() * args.length)];
}


function gameLogic(playerShot, opponentshot) {
     if (playerShot === opponentshot) {
          return 'tie'
     } else if (
          (playerShot === "scissors" && opponentshot === "paper") ||
          (playerShot === "paper" && opponentshot === "rock") ||
          (playerShot === "rock" && opponentshot === "lizard") ||
          (playerShot === "lizard" && opponentshot === "spock") ||
          (playerShot === "spock" && opponentshot === "scissors") ||
          (playerShot === "scissors" && opponentshot === "lizard") ||
          (playerShot === "lizard" && opponentshot === "paper") ||
          (playerShot === "paper" && opponentshot === "spock") ||
          (playerShot === "spock" && opponentshot === "rock") ||
          (playerShot === "rock" && opponentshot === "scissors")
     ) {
          return 'win';
     } else {
          return 'lose';
     }
}