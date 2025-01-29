interface PlayerModel {
  id: number;
  name: string;
}

const database: PlayerModel[] = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Ronaldo" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};
