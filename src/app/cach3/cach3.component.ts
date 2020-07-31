import { Component, OnInit } from '@angular/core';
import { ChiTietNhomDto, MyServiceService, NhomDto } from '../my-service.service';
import { switchMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-cach3',
  templateUrl: './cach3.component.html',
  styleUrls: ['./cach3.component.css']
})
export class Cach3Component implements OnInit {
myData$: Observable<ChiTietNhomDto> ;
 myData0: NhomDto ;
 allData$: Observable<{nhom :NhomDto, chiTietNhom:ChiTietNhomDto }>;
 
 allData: {nhom :NhomDto, chiTietNhom:ChiTietNhomDto };
  constructor( private myService: MyServiceService) {}

  ngOnInit() {
    this.myData$ = this.myService.getNhomById().pipe(switchMap((data) =>{
    this.myData0 = data;
      return this.myService.getChiTietByNhomId(data.id)
    }))


  //BEGIN Châu Trần 
    this.allData$ = this.myService.getNhomById().pipe(
      switchMap((data) => forkJoin(
        {
          nhom: of(data),
          chiTietNhom : this.myService.getChiTietByNhomId(data.id)
        }
      )
    ))
  //END Châu Trần 

    this.myService.getNhomById().pipe(
      switchMap((data) => forkJoin(
        {
          nhom: of(data),
          chiTietNhom : this.myService.getChiTietByNhomId(data.id)
        }
      )
    )).subscribe(result=>{
      this.allData = result
    })
  }
}