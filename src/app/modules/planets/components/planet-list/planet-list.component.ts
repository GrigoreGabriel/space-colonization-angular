import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { PlanetService } from '../../services/planets.service';
import { PlanetList } from '../../models/planet.model';

@Component({
  selector: 'planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  constructor(private planetDataService: PlanetService) {}
  planets: PlanetList[] = [];

  ngOnInit(): void {
    this.planetDataService.getPlanets().subscribe((response)=>{
       this.planets = response;
    })
  }

}
