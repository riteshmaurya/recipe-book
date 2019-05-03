import { AuthService } from '../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { HttpEvent } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe(
      (response: HttpEvent<Recipe>) => {
        console.log(response);
      }
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
    
  }

  onLogout(){
    this.authService.logout();
  }

}
