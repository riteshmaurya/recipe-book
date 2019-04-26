import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService){}


    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipie1', 
          'This is simply a Test1', 
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', 
          [
            new Ingredient('Meat', 140),
            new Ingredient('Potato', 2),
            new Ingredient('Onion', 34),
          ]),
        new Recipe(
          'A Test Recipie2', 
          'This is simply a Test2', 
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', 
          [
            new Ingredient('Chicken', 432),
            new Ingredient('Potato', 22),
            new Ingredient('Onion', 314),
          ]),
        new Recipe('A Test Recipie3', 
        'This is simply a Test3', 
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
        [
          new Ingredient('Chikpeas', 223),
          new Ingredient('Potato', 3),
          new Ingredient('Onion', 87),
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredeintsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipeById(id: number){
        return this.recipes[id];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      delectRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}