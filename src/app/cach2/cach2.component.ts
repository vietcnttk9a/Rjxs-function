import { Component, OnInit } from '@angular/core';
import { MyServiceService, ChiTietNhomDto } from '../my-service.service';

@Component({
  selector: 'app-cach2',
  templateUrl: './cach2.component.html',
  styleUrls: ['./cach2.component.css']
})
export class Cach2Component implements OnInit {

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