import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditComponent } from '../admin/adminlist/edit/edit.component';

export interface canLeavecomponent
{
  CanLeave : () => boolean;
}


@Injectable({
  providedIn: 'root'
})
// export class DeauthGuard implements CanDeactivate<EditComponent> {
  
//   canDeactivate(component:EditComponent ){
//     if(component.userName.dirty){
//       return window.confirm('you have some unsaved changes. Are you sure want to navigate?')
//     }
//     return true;
//   }
  
// }

export class DeauthGuard implements CanDeactivate<canLeavecomponent>{
  canDeactivate(component: canLeavecomponent){
    if(component.CanLeave){
      return component.CanLeave();
    }
    return true;
  }
}