import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingRouting: Routes = [
      {
        path: 'shopping-list',
        component: ShoppingListComponent
      },
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingRouting)
    ],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {

}