import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { PlanetList, Planet, PlanetStatus, PlanetEdit } from "../models/planet.model";


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  readonly baseUrl = 'https://localhost:7077/api/Planet';
  constructor(private http: HttpClient) { }

  getPlanets() : Observable<PlanetList[]>{
     const url = this.baseUrl + "/planets"
    return this.http.get<PlanetList[]>(url);
    }
  getById(id: number): Observable<Planet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Planet>(url);
  }
  getPlanetStatuses() : Observable<PlanetStatus[]>{
    const url = this.baseUrl + "/statuses"
   return this.http.get<PlanetStatus[]>(url);
   }
   updatePlanetDetails(id: number, planet : PlanetEdit): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url,planet);
   }}