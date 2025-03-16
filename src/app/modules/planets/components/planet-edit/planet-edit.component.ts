import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlanetService } from '../../services/planets.service';
import { Planet, PlanetEdit, PlanetStatus } from '../../models/planet.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planet-edit',
  templateUrl: './planet-edit.component.html',
  styleUrls: ['./planet-edit.component.css']
})
export class PlanetEditComponent implements OnInit {
  
  private subscription!: Subscription
  planet! : Planet 
  planetId! : number
  planetForm! : FormGroup;
  statusOptions! : PlanetStatus[];
  constructor(
    private route: ActivatedRoute,
    private planetDataService: PlanetService,
    private fb: FormBuilder,
    private router: Router) {

    this.planetForm = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
    
   }
  
  ngOnInit(): void {
    this.getPlanetFromRoute();
    this.getPlanetStatuses();
  }

  onSubmit(): void {
    //not very proud of this implementation but time has been a very big factor 
    debugger
    if (this.planetForm.valid) {
      const body = this.planetForm.value
      const updatedPlanet : PlanetEdit = {
        description : body.description,
        statusId : body.status
      };
      this.planetDataService.updatePlanetDetails(this.planetId,updatedPlanet).subscribe(()=>{
        //pretend im doing validation and adding some client feedback
        this.router.navigate([`main`]);
      });

    }
  }

  getPlanetFromRoute(){
    this.subscription = this.route.params.subscribe(params => {
        this.planetId = params['id']
      this.getPlanetById(this.planetId)
  })
}

  getPlanetById(planetId : number){
    this.planetDataService.getById(planetId).subscribe((result)=>{
      this.planet = result;
      this.planetForm.get('status')?.setValue(this.planet?.statusId);
      this.planetForm.get('description')?.setValue(this.planet?.description);
    })
  }
  getPlanetStatuses(){
    this.planetDataService.getPlanetStatuses().subscribe((result)=>{
      this.statusOptions = result;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }
}

