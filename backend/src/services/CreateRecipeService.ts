import { getCustomRepository } from 'typeorm';

import Recipe from '../models/Recipe';
import RecipesRepository from '../repositories/RecipesRepository';

interface Request {
    title: string;
    picture: string;
    description: string;
    ingredients: string;
    steps: string;
}

class CreateRecipeService {
    public async execute({ 
        title, 
        picture, 
        description, 
        ingredients, 
        steps 
    }: Request): Promise<Recipe> {
        const recipesRepository = getCustomRepository(RecipesRepository);
        
        const recipe = recipesRepository.create({
            title,
            picture,
            description,
            ingredients,
            steps
        });

        await recipesRepository.save(recipe);

        return recipe;
    }
} 

export default CreateRecipeService;