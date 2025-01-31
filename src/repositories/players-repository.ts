import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Thibaut Courtois",
    club: "Real Madrid",
    nationality: "Belgium",
    position: "Goalkeeper",
    statistics: {
      Overall: 90,
      Pace: 50,
      Shooting: 25,
      Passing: 70,
      Dribbling: 60,
      Defending: 40,
      Physical: 85,
    },
  },
  {
    id: 2,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 52,
      Shooting: 28,
      Passing: 75,
      Dribbling: 65,
      Defending: 45,
      Physical: 83,
    },
  },
  {
    id: 3,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 78,
      Shooting: 60,
      Passing: 75,
      Dribbling: 70,
      Defending: 92,
      Physical: 88,
    },
  },
  {
    id: 4,
    name: "Sergio Ramos",
    club: "Sevilla",
    nationality: "Spain",
    position: "Defender",
    statistics: {
      Overall: 88,
      Pace: 71,
      Shooting: 73,
      Passing: 80,
      Dribbling: 75,
      Defending: 92,
      Physical: 87,
    },
  },
  {
    id: 5,
    name: "Antonio Rüdiger",
    club: "Real Madrid",
    nationality: "Germany",
    position: "Defender",
    statistics: {
      Overall: 86,
      Pace: 82,
      Shooting: 55,
      Passing: 72,
      Dribbling: 68,
      Defending: 89,
      Physical: 88,
    },
  },
  {
    id: 6,
    name: "João Cancelo",
    club: "Barcelona",
    nationality: "Portugal",
    position: "Defender",
    statistics: {
      Overall: 87,
      Pace: 85,
      Shooting: 70,
      Passing: 84,
      Dribbling: 86,
      Defending: 80,
      Physical: 78,
    },
  },
  {
    id: 7,
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 87,
      Shooting: 94,
      Passing: 82,
      Dribbling: 88,
      Defending: 38,
      Physical: 85,
    },
  },
  {
    id: 8,
    name: "Luka Modric",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 74,
      Shooting: 82,
      Passing: 90,
      Dribbling: 89,
      Defending: 70,
      Physical: 72,
    },
  },
  {
    id: 9,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 78,
      Shooting: 94,
      Passing: 82,
      Dribbling: 86,
      Defending: 40,
      Physical: 85,
    },
  },
  {
    id: 10,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 92,
      Passing: 91,
      Dribbling: 96,
      Defending: 35,
      Physical: 70,
    },
  },
  {
    id: 11,
    name: "Neymar Jr",
    club: "Al-Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 89,
      Shooting: 85,
      Passing: 87,
      Dribbling: 95,
      Defending: 38,
      Physical: 70,
    },
  },
  {
    id: 12,
    name: "Vinícius Jr",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 95,
      Shooting: 82,
      Passing: 80,
      Dribbling: 94,
      Defending: 35,
      Physical: 74,
    },
  },
  {
    id: 13,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 89,
      Shooting: 95,
      Passing: 78,
      Dribbling: 84,
      Defending: 40,
      Physical: 92,
    },
  },
  {
    id: 14,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 92,
      Pace: 76,
      Shooting: 88,
      Passing: 94,
      Dribbling: 87,
      Defending: 62,
      Physical: 78,
    },
  },
  {
    id: 15,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 82,
      Shooting: 80,
      Passing: 86,
      Dribbling: 88,
      Defending: 75,
      Physical: 83,
    },
  },
  {
    id: 16,
    name: "Bruno Fernandes",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 77,
      Shooting: 85,
      Passing: 90,
      Dribbling: 84,
      Defending: 60,
      Physical: 79,
    },
  },
  {
    id: 17,
    name: "Rodri",
    club: "Manchester City",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 70,
      Shooting: 78,
      Passing: 88,
      Dribbling: 82,
      Defending: 87,
      Physical: 85,
    },
  },
  {
    id: 18,
    name: "Declan Rice",
    club: "Arsenal",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 75,
      Shooting: 76,
      Passing: 82,
      Dribbling: 80,
      Defending: 88,
      Physical: 86,
    },
  },
  {
    id: 19,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 82,
      Passing: 90,
      Dribbling: 84,
      Defending: 70,
      Physical: 72,
    },
  },
  {
    id: 20,
    name: "Zinedine Zidane",
    club: "Retired",
    nationality: "France",
    position: "Midfielder",
    statistics: {
      Overall: 94,
      Pace: 80,
      Shooting: 90,
      Passing: 95,
      Dribbling: 92,
      Defending: 60,
      Physical: 85,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  //find player
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
