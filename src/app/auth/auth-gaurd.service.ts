import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }

  constructor(private authService: AuthService) { }
}
