import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
  })
export class ShoppingListService implements OnInit{
 
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 2),
      ];

    ngOnInit(){

    }

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
      return this.ingredients[index];
  }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
      //this.ingredients.concat(ingredient);
      this.ingredients.push(...ingredients);
      this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index);
      this.ingredientChanged.next(this.ingredients.slice());
    }
    
}