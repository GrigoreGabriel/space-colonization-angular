import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetEditComponent } from './components/planet-edit/planet-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent,
  },
  {
    path: 'planet/:id',
    component: PlanetEditComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
