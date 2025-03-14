import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { PlanetService } from '../../services/planets.service';
import { Planet } from '../../models/planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  constructor(private planetDataService: PlanetService) {}
  result: Planet[] = [];

  ngOnInit(): void {
    this.planetDataService.getPlanets().subscribe((response)=>{
      debugger;
       this.result = response;
    })
  }

}
