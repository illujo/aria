import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementsComponent } from './measurements/measurements.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: 'sistemu', component: SystemComponent },
  { path: 'mjerenjima', component: MeasurementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
