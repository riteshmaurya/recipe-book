import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    //throw new Error("Method not implemented.");
  }

  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, 
      private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    //this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingListService.ingredientChanged
    //   .subscribe(
    //     (ingredients: Ingredient[])=>{
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onIngredientAdded(ingredient: Ingredient){
    this.shoppingListService.addIngredient(ingredient);
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

}