import { Component, OnInit } from '@angular/core';
import { ChiTietNhomDto, MyServiceService, NhomDto } from '../my-service.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cach3',
  templateUrl: './cach3.component.html',
  styleUrls: ['./cach3.component.css']
})
export class Cach3Component implements OnInit {
myData$: Observable<ChiTietNhomDto> ;
 myData0: NhomDto ;
  constructor( private myService: MyServiceService) {}

  ngOnInit() {
    this.myData$ = this.myService.getNhomById().pipe(switchMap((data) =>{
    this.myData0 = data;
      return this.myService.getChiTietByNhomId(data.id)
    }))
  }
}