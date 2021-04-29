import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { canLeavecomponent } from '../../../guards/deauth.guard'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements canLeavecomponent {

  userName: FormControl = new FormControl();

  CanLeave() : boolean{
    if(this.userName.dirty){
      return window.confirm('Save it before leaving');
    }
    return true;
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
