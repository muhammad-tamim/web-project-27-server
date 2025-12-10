import { Request, Response } from "express";
import { recipeServices } from "./recipe.services.js";

const createRecipe = async (req: Request, res: Response) => {
    try {
        const result = await recipeServices.sendRecipeToDB(req.body)
        res.send(result)
    }
    catch (err: any) {
        res.status(500).send({ message: err.message })
    }
}

export const recipeControllers = {
    createRecipe
}