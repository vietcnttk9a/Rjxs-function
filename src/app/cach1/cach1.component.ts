import { Component, OnInit } from '@angular/core';
import { MyServiceService, ChiTietNhomDto } from '../my-service.service';

@Component({
  selector: 'app-cach1',
  templateUrl: './cach1.component.html',
  styleUrls: ['./cach1.component.css']
})
export class Cach1Component implements OnInit {

  myData: ChiTietNhomDto ;
  constructor( private myService: MyServiceService) {}

  ngOnInit() {
    this.myService.getNhomById().subscribe(result=>{
      this.myService.getChiTietByNhomId(result.id).subscribe(result=>{
        this.myData = result;
      })
    })
  }

}