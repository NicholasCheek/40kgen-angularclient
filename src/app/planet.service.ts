import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'http://localhost:8080/planets';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
  public save(planet: Planet) {
      return this.http.post<Planet>(this.apiUrl, planet);
  }

  getRandomSegmentum(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-segmentum`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomPClass(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-planet-class`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomStarSize(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-star-size`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomPlanetSize(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-planet-size`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }
  
  getRandomAxialTilt(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-axial-tilt`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomTechLevel(pClass: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(`${this.apiUrl}/random-tech-level`, { pClass });
  }

  getRandomDayLength(planetSize: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(`${this.apiUrl}/random-day-length`, { planetSize });
  }

  getRandomYearLength(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-year-length`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomNumSatellites(planetSize: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(`${this.apiUrl}/random-number-satellites`, { planetSize });
  }

  getRandomGravity(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-gravity`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomAtmosphere(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-atmosphere`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomHydrosphere(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-hydrosphere`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomTemperature(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-temperature`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomTerrains(pClass: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(`${this.apiUrl}/random-terrains`, { pClass });
  }

  getRandomPopulation(pClass: string, planetSize: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(`${this.apiUrl}/random-population`, { pClass, planetSize });
  }

  getRandomSociety(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-society`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
    );
  }

  getRandomDefences(pClass: string, techLevel: string): Observable<{ result: string }> {
    return this.http.post<{ result: string }>(`${this.apiUrl}/random-defences`, { pClass, techLevel });
  }
}
