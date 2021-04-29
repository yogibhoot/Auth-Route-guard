import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  User: any = [];

  constructor(private service:MyserviceService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    // return this.service.getUserlist().subscribe((data : {}) => {
    //   this.User = data;
    // })
    this.User = this.activatedrouter.snapshot.data['data'];
  }

}
