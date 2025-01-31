import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
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
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  // vetrify if it's empty
  if (Object.keys(player).length !== 0) {
    await PlayerRespository.insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await PlayerRespository.deleteOnePlayer(id);
  response = await HttpResponse.ok({ message: "deleted" });
  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await PlayerRespository.findAndModifyPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.ok(data);
  }

  return response;
};
