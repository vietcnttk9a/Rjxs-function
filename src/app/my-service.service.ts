import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable()
export class MyServiceService {

  constructor(
  ) { }

  getNhomById(): Observable<NhomDto>{
    return of({
      tenNhom: "Tên nhóm",
      id: 1
    }).pipe(delay(500))
  }
  getChiTietByNhomId(nhomId:number): Observable<ChiTietNhomDto>{
    if(nhomId===1){
      return of({
        chiTiet1: "Nội dung CT 1",
        chiTiet2: "Nội dung CT 2",
        chiTiet3: "Nội dung CT 3",
      }).pipe(delay(100))
    }else {
      return of(null).pipe(delay(100))
    }
  }

}
export class ChiTietNhomDto{
  chiTiet1: string;
  chiTiet2: string;
  chiTiet3: string;
}

export class NhomDto{
  tenNhom:string;
  id: number;
}