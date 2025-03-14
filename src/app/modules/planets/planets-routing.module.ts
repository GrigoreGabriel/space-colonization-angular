import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetListComponent,
  },
  {
    path: 'main',
    redirectTo: '/planets',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
