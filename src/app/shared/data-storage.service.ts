import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    
    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService, 
                private authService: AuthService){}

    storeRecipes(){
        let tk= "";
        //const token = this.authService.getToken();
        //const headers = new HttpHeaders().set('Authorization', 'Bearer '+ token);
       // const httpParams = new HttpParams().set('auth', token);
        const httpRequest = new HttpRequest('PUT', 
                        'https://ng-recipe-book-310e5.firebaseio.com/recipes.json',
                        this.recipeService.getRecipes(), {reportProgress: true});
        
        
        return this.httpClient.request(httpRequest);                
        
        // return this.httpClient.put('https://ng-recipe-book-310e5.firebaseio.com/recipes.json', 
        //     this.recipeService.getRecipes(), {
        //         observe: 'body',
        //      //   headers: headers,
        //         params: params
        //     });
    }

    getRecipes(){
        let tk= "";
        //const token = this.authService.getToken();
        // return this.httpClient.get<Recipe[]>('https://ng-recipe-book-310e5.firebaseio.com/recipes.json?auth=' + token)
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-310e5.firebaseio.com/recipes.json?', {
            observe: 'body',
            responseType: 'json'
            
        })
        .pipe(
            map(
                
           (recipes) => {
            console.log(recipes);
            for(let recipe of recipes){
                if(!recipe['ingredients']){
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
           }
       ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}