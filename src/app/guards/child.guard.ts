import { Injectable } from '@angular/core';
import { CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  
  constructor(private service : MyserviceService){}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.service.islogin){
        return true;
      }
      else{
        return false;
      }
    
  }
  
}
