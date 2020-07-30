import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyServiceService } from './my-service.service';
import {RouterModule, Routes} from '@angular/router';
import { Cach1Component } from './cach1/cach1.component';
import { Cach3Component } from './cach3/cach3.component';
import { Cach2Component } from './cach2/cach2.component';

const router : Routes = [
  {path:'', pathMatch:'full', redirectTo:'cach1'},
   {path: 'cach1', component: Cach1Component},
   {path: 'cach2', component: Cach2Component},
   {path: 'cach3', component: Cach3Component}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  RouterModule.forRoot(router)
  ],
  declarations: [ AppComponent, HelloComponent, Cach1Component, Cach3Component, Cach2Component ],
  bootstrap:    [ AppComponent ],
  providers: [MyServiceService]
})
export class AppModule { }
