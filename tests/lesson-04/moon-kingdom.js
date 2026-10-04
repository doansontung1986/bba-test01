function createCharacters(characters) {
  const charactersPowerUp = characters.map((character) => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3,
  }));

  const possibleWinners = charactersPowerUp.filter(
    (character) => character.health > 1000,
  );

  return possibleWinners;
}

function printLeaderboard(players) {
  const sortedPlayers = [...players];
  sortedPlayers.sort((a, b) => b.score - a.score);

  for (let i = 0; i < sortedPlayers.length; i++) {
    let player = sortedPlayers[i];
    let badge;
    if (i === 0) {
      badge = "🥇";
    } else if (i === 1) {
      badge = "🥈";
    } else if (i === 2) {
      badge = "🥉";
    } else {
      badge = "  ";
    }
    console.log(
      `${badge} ${i + 1}. ${player.name} - ${player.score.toLocaleString("en-US")} pts`,
    );
  }
}

const characters = [
  {
    name: "Mario",
    level: 5,
    health: 800,
  },
  {
    name: "Luigi",
    level: 3,
    health: 600,
  },
  {
    name: "Peach",
    level: 2,
    health: 200,
  },
  {
    name: "Bowser",
    level: 10,
    health: 3000,
  },
  {
    name: "Toad",
    level: 1,
    health: 300,
  },
];

const players = [
  {
    name: "Mario",
    score: 1000,
  },
  {
    name: "Luigi",
    score: 900,
  },
  {
    name: "Peach",
    score: 850,
  },
  {
    name: "Yoshi",
    score: 800,
  },
  {
    name: "Phong",
    score: 500,
  },
];

const winners = createCharacters(characters);
console.log(winners);
console.log("-----------------------");
printLeaderboard(players);
