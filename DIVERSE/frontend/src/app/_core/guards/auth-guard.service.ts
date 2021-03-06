import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    const token=window.localStorage.getItem('token');
    return token ? true : false;
    
  }


}
