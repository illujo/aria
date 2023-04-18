import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path: '', loadChildren: () => import('./stations/stations.module').then(m => m.StationsModule) },
    { path: 'stanice', loadChildren: () => import('./stations/stations.module').then(m => m.StationsModule) },
    { path: 'o', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
