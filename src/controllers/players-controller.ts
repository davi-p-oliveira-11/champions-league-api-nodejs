import { Request, Response } from "express";
import * as service from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
