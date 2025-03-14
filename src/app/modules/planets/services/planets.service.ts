import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Planet } from "../models/planet.model";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  readonly url = 'https://localhost:7077/api/Planet/planets';
  constructor(private http: HttpClient) { }

  getPlanets() : Observable<Planet[]>{
    return this.http.get<Planet[]>(this.url);
    }
}   