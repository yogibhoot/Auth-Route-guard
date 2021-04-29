import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-udetail',
  templateUrl: './udetail.component.html',
  styleUrls: ['./udetail.component.css']
})
export class UdetailComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  uData: any = {};

  constructor(private service : MyserviceService,
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserdata();
  }

  getUserdata(){
    this.service.getUser(this.id).subscribe((data: {}) => {
      this.uData = data;
    })
  }

}