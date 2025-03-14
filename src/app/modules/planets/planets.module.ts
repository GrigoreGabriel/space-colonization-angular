import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlanetListComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
  ]
})
export class PlanetsModule { }
