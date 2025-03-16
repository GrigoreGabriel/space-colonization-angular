import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { PlanetEditComponent } from './components/planet-edit/planet-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlanetListComponent,
    PlanetCardComponent,
    PlanetEditComponent,
  ],
  exports:[
    PlanetListComponent,
    PlanetCardComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlanetsModule { }
