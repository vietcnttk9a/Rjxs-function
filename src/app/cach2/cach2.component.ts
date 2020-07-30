import { Component, OnInit } from '@angular/core';
import { MyServiceService, ChiTietNhomDto } from '../my-service.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-cach2',
  templateUrl: './cach2.component.html',
  styleUrls: ['./cach2.component.css']
})
export class Cach2Component implements OnInit {

  myData: ChiTietNhomDto ;
  constructor( private myService: MyServiceService) {}

  async ngOnInit() {
    const nhom = await this.myService.getNhomById().toPromise()
    this.myData =  await this.myService.getChiTietByNhomId(nhom.id).toPromise()
  }

}