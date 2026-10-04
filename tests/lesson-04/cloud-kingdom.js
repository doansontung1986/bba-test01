let playerName = "Mario";
let currentLives = 3;

const COIN_LEVEL_1 = 25;
const COIN_LEVEL_2 = 30;
const COIN_LEVEL_3 = 45;

const totalCoins = COIN_LEVEL_1 + COIN_LEVEL_2 + COIN_LEVEL_3;
const averageCoins = totalCoins / 3;
const remainingCoins = totalCoins % 3;

console.log(
  "Remaining coins after dividing total coins by average coins:",
  remainingCoins,
);
