import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SystemComponent } from './system/system.component';
import { MeasurementsComponent } from './measurements/measurements.component';


@NgModule({
  declarations: [
    SystemComponent,
    MeasurementsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
