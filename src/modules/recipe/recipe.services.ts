import { createCollection } from "../../utils/createCollection.js"
import { RecipeInterface } from "./recipe.types.js"

const sendRecipeToDB = async (payload: RecipeInterface) => {

    const recipeCollection = createCollection.recipeCollection()

    const result = await recipeCollection.insertOne(payload)

    return result
}


export const recipeServices = {
    sendRecipeToDB
}