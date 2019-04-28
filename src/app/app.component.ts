import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDlYEEPwKkr2JgEJUvJ9rHZDCts0QDGiL8",
      authDomain: "ng-recipe-book-310e5.firebaseapp.com",
    });
  }

  title = 'my-first-app';
  loadedFeature: String = 'recipe';
  onNavigate(feature: String){
    this.loadedFeature = feature;
  }
}
