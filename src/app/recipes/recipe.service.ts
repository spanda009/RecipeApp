import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model'
export class RecipeService {
    recipeSelected=new EventEmitter<Recipe>();
   private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is for test',
        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg?resize=768:*'),
        new Recipe('Another Test Recipe','This is simply a test',
        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg?resize=768:*')
      ];

      getRecipes(){
          return this.recipes.slice();
      }

}