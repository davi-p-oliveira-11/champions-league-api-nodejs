import * as PlayerRespository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRespository.findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
