import { AuthGaurdService } from './auth/auth-gaurd.service';
import { DataStorageService } from './shared/data-storage.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoggingInterceptor } from './shared/logging-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    HomeComponent

    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [
    RecipeService, 
    ShoppingListService, 
    DataStorageService, 
    AuthService, 
    AuthGaurdService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
