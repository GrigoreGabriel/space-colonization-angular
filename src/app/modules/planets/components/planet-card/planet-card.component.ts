import { Component, Input, OnInit } from '@angular/core';
import { PlanetList } from '../../models/planet.model';
import { PlanetStatusEnum } from '../../models/planetStatus.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
  PlanetStatus = PlanetStatusEnum;
 @Input() planet!: PlanetList;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  redirectToPlanetRoute(planetId : number){
    this.router.navigate([`main/planet/${planetId}`]);
  }
} 