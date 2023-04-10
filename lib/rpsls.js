const optionsrps = ["rock", "paper", "scissors"];
const optionsrpsls = ["rock", "paper", "scissors", "lizard", "spock"];


export {optionsrps, optionsrpsls};

export function rps(playershot = null) {
     const opponentshot = rand(optionsrps);
     if(!playershot) {
          return { playershot: opponentshot };
     } else if (optionsrps.includes(playershot)) {
          const result = gameLogic(playershot, opponentshot);
          return { player: playershot, opponent: opponentshot, result: result};
     } else {
          throw new Error('Invalid input');
          return null;
     }
}

export function rpsls(playershot = null) {
     const opponentshot = rand(optionsrpsls);
     if(!playershot) {
          return { player: opponentshot};
     } else if (optionsrpsls.includes(playershot)) {
          const result = gameLogic(playershot, opponentshot);
          return { player: playershot, opponent:opponentshot, result:result};
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
          (playershot === "scissors" && opponentshot === "paper") ||
          (playershot === "paper" && opponentshot === "rock") ||
          (playershot === "rock" && opponentshot === "lizard") ||
          (playershot === "lizard" && opponentshot === "spock") ||
          (playershot === "spock" && opponentshot === "scissors") ||
          (playershot === "scissors" && opponentshot === "lizard") ||
          (playershot === "lizard" && opponentshot === "paper") ||
          (playershot === "paper" && opponentshot === "spock") ||
          (playershot === "spock" && opponentshot === "rock") ||
          (playershot === "rock" && opponentshot === "scissors")
     ) {
          return 'win';
     } else {
          return 'lose';
     }
}