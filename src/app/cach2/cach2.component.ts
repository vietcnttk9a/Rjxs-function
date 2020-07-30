import { Component, OnInit } from '@angular/core';
import { MyServiceService, ChiTietNhomDto, NhomDto } from '../my-service.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-cach2',
  templateUrl: './cach2.component.html',
  styleUrls: ['./cach2.component.css']
})
export class Cach2Component implements OnInit {
 myData0: NhomDto ;
  myData: ChiTietNhomDto ;
  constructor( private myService: MyServiceService) {}

  async ngOnInit() {
    this.myData0 = await this.myService.getNhomById().toPromise()
    
    this.myData =  await this.myService.getChiTietByNhomId(this.myData0.id).toPromise()
  }

}