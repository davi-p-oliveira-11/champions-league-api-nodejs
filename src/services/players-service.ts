import { PlayerModel } from "../models/player-model";
import * as PlayerRespository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRespository.findAllPlayers();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  // pédir pro repositório de dados
  const data = await PlayerRespository.findPlayerById(id);
  let response = null;

  if (data) {
    response = HttpResponse.ok(data);
  } else {
    response = HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  // vetrify if it's empty
  if (Object.keys(player).length !== 0) {
    await PlayerRespository.insertPlayer(player);
    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
};
