import { Request, Response } from "express";
import { CreateMangaService } from "../services/CreateMangaService";

class CreateMangaController {
  async handle(request: Request, response: Response) {
    const { name, num_acquired, num_released, periodicity, finished } =
      request.body;

    const createMangaService = new CreateMangaService();

    const manga = createMangaService.execute(
      name,
      num_acquired,
      num_released,
      periodicity,
      finished
    );

    return response.json(manga);
  }
}

export { CreateMangaController };
