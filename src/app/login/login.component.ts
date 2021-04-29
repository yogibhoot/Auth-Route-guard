import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../myservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : MyserviceService, private router : Router) { }

  ngOnInit(): void {
  }

  check(umane : any, p : any)
  {
    var output = this.service.checkusernameandpassword(umane,p);
    if(output == true)
    {
      this.router.navigate(['admin']);
    }
  }

}
