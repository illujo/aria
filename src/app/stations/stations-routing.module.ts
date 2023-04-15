import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { StationComponent } from './station-details/station-details.component';

const routes: Routes =
  [
    { path: '', component: ListComponent },
    { path: 'spisak', component: ListComponent },
    { path: 'karta', component: MapComponent },
    { path: 'detaljno/:id', component: StationComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
