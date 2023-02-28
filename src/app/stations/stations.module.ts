import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { StationComponent } from './station-details/station-details.component';
import { CardComponent } from './list/card/card.component';


@NgModule({
  declarations: [
    ListComponent,
    MapComponent,
    StationComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    StationsRoutingModule
  ]
})
export class StationsModule { }
