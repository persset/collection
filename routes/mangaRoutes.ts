import { Router } from "express";
import { CreateMangaController } from "../src/controllers/CreateMangaController";

const router = Router();

const createMangaController = new CreateMangaController();

router.post("/mangas", createMangaController.handle);

export { router as mangaRouter };
