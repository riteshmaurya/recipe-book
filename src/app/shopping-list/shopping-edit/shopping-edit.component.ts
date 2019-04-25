import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value);
      this.shoppingListService.addIngredient(newIngredient);
  }

}
