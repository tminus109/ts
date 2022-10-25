class bot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  takeSomeMatchesAway(matchCount: number, maxTake: number): number {
    const randomTake = Math.floor(Math.random() * maxTake + 1);
    let take: number;

    if (randomTake > matchCount) {
      take = matchCount;
    } else {
      take = randomTake;
    }

    matchCount -= take;

    console.log(
      this.name +
        " has taken " +
        take +
        " match(es). There are " +
        matchCount +
        " match(es) left."
    );

    if (matchCount === 0) {
      console.log(this.name + " lost : (");
    }

    return matchCount;
  }
}

function play(matchCount: number, maxTake: number, bot1: bot, bot2: bot) {
  console.log(
    "There are " +
      matchCount +
      " match(es) on the table. The maximum take is: " +
      maxTake +
      "."
  );

  while (matchCount > 0) {
    matchCount = bot1.takeSomeMatchesAway(matchCount, maxTake);

    if (matchCount > 0) {
      matchCount = bot2.takeSomeMatchesAway(matchCount, maxTake);
    }
  }
}

const matchCount = 20;
const maxTake = 7;
const bot1 = new bot("R2D2");
const bot2 = new bot("C3PO");

play(matchCount, maxTake, bot1, bot2);
