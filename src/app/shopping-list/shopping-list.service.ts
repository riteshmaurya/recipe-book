import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
  })
export class ShoppingListService implements OnInit{
 
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 2),
      ];

    ngOnInit(){

    }

    getIngredients(){
        return this.ingredients.slice();
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
}