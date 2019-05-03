import * as ShoppingListActions from './shopping-list.actions'
import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
const initialState = {
    ingredients: [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 2)
    ]
};
export function shoppingListReducer(state = initialState, 
                    action: ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredient: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
    
}