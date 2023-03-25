const optionsrps = ["rock", "paper", "scissors"];
const optionsrpsls = ["rock", "paper", "scissors", "lizard", "spock"];

export { rps, rpsls }

export default {
     optionsrps: optionsrps,
     optionsrpsls: optionsrpsls, 

     rpsStandard: function () {
     
          return (
               { player: rand(optionsrps) }
          );
     },

     rps: function (playeroption) {
          
          const whatopponentchooses = rand(optionsrps);
           
          return (
               {
                  player: playeroption,
                  opponent: whatopponentchooses,  
                  result: gameLogic(playeroption,whatopponentchooses)
               }
           );
      },
      rpslsStandard: function () {
           return (
                { player: rand(optionsrpsls) }
           );
      },
      
      rpsls: function (playeroption) {
             const whatopponentchooses = rand(optionsrpsls); 
      
      return (
         {
                 player: playeroption, 
                 opponent: whatopponentchooses,
                 result: gameLogic(playeroption, whatopponentchooses)
         }
      );
     },
}

function rand(arg) {
      return arg[(Math.random() * arg.length) | 0];
} 

function gameLogic(player, opponent) {
      
      if (player === "rock") {
          if (opponent === "rock") return "lose";
          if (opponent === "paper") return "lose";
          if (opponent === "scissors") return "win";
          if (opponent === "lizard") return "win";
          if (opponent === "spock") return "lose";
      }
      
      if (player === "paper") {
          if (opponent === "rock") return "win";
          if (opponent === "paper") return "lose";
          if (opponent === "scissors") return "lose";
          if (opponent === "lizard") return "lose";
          if (opponent === "spock") return "win";
      } 

     if (player === "scissors") {
         if (opponent === "rock") return "lose";
         if (opponent === "paper") return "win";
         if (opponent === "scissors") return "lose";
         if (opponent === "lizard") return "win";
         if (opponent === "spock") return "lose";
      }

     if (player === "lizard") {
         if (opponent === "rock") return "lose";
         if (opponent === "paper") return "win"; 
         if (opponent === "scissors") return "lose";
         if (opponent === "lizard") return "lose";
         if (opponent === "spock") return "win";
      }

     if (player === "spock") {
        if (opponent === "rock") return "win";
        if (opponent === "paper") return "lose";
        if (opponent === "scissors") return "win";
        if (opponent === "lizard") return "lose";
        if (opponent === "spock") return "lose";
      }

     return "lose";
} 
