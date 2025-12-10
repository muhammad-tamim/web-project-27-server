import { Router } from "express";
import { recipeControllers } from "./recipe.controllers.js";

const router = Router()

router.post("/", recipeControllers.createRecipe)

export const recipeRoutes = router