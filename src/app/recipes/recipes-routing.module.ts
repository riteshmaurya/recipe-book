import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGaurdService } from '../auth/auth-gaurd.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRouting: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
          {
            path: '',
            component: RecipeStartComponent
          },
          {
            path: 'new',
            component: RecipeEditComponent, canActivate: [AuthGaurdService]
          },
          {
            path: ':id',
            component: RecipeDetailComponent 
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent, canActivate: [AuthGaurdService]
          }    
        ]
      }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRouting)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}