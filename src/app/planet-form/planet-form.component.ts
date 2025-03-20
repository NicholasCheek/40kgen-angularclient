import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent implements OnInit {
  planet: any = {
    name: '',
    segmentum: '',
    pClass: '',
    techLevel: '',
    starSize: '',
    planetSize: '',
    axialTilt: '',
    dayLength: '',
    yearLength: '',
    numSatellites: '',
    gravity: '',
    atmosphere: '',
    hydrosphere: '',
    temperature: '',
    terrains: '',
    population: '',
    society: '',
    defences: ''
  };

  lockedFields: { [key: string]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planetService: PlanetService
  ) {
    this.planet = new Planet();
  }

  ngOnInit(): void {}

  toggleLock(field: string): void {
    this.lockedFields[field] = !this.lockedFields[field];
  }

  fetchRandomValue(field: string, serviceMethod: () => any): void {
    if (this.lockedFields[field]) {
      console.log(`Field ${field} is locked, skipping...`);
      return;
    }

    console.log(`Fetching random value for ${field}...`);
    serviceMethod().subscribe({
      next: (response: { result: any }) => {
        console.log(`API Response for ${field}:`, response);
        this.planet[field] = response.result ?? response;
      },
      error: (err: any) => {
        console.error(`Error fetching ${field}:`, err);
      }
    });
  }

  generateAllRandomFields(): void {
    console.log('Generating random planet attributes...');
    
    this.fetchRandomValue('segmentum', () => this.planetService.getRandomSegmentum());
    this.fetchRandomValue('starSize', () => this.planetService.getRandomStarSize());
    this.fetchRandomValue('axialTilt', () => this.planetService.getRandomAxialTilt());
    this.fetchRandomValue('yearLength', () => this.planetService.getRandomYearLength());
    this.fetchRandomValue('gravity', () => this.planetService.getRandomGravity());
    this.fetchRandomValue('atmosphere', () => this.planetService.getRandomAtmosphere());
    this.fetchRandomValue('hydrosphere', () => this.planetService.getRandomHydrosphere());
    this.fetchRandomValue('temperature', () => this.planetService.getRandomTemperature());
    this.fetchRandomValue('society', () => this.planetService.getRandomSociety());

    console.log('Fetching pClass...');
    this.planetService.getRandomPClass().subscribe({
      next: (pClass: string) => {
        console.log(`pClass received: ${pClass}`);
        this.planet.pClass = pClass;

        console.log('Fetching Tech Level...');
        this.planetService.getRandomTechLevel(this.planet.pClass).subscribe({
          next: (response: { result: string }) => {
            console.log('Tech Level API Response:', response);
            this.planet.techLevel = response.result;

            if (this.planet.pClass && this.planet.techLevel) {
              console.log(`Fetching Defences with pClass=${this.planet.pClass}, techLevel=${this.planet.techLevel}`);
              this.fetchRandomValue('defences', () => this.planetService.getRandomDefences(this.planet.pClass, this.planet.techLevel));
            }
          },
          error: (err) => console.error('Error fetching tech level:', err)
        });

        this.fetchRandomValue('terrains', () => this.planetService.getRandomTerrains(this.planet.pClass));

        if (this.planet.planetSize) {
          this.fetchRandomValue('population', () => this.planetService.getRandomPopulation(this.planet.pClass, this.planet.planetSize));
        }
      },
      error: (err) => console.error('Error fetching pClass:', err)
    });

    console.log('Fetching planetSize...');
    this.planetService.getRandomPlanetSize().subscribe({
      next: (planetSize: string) => {
        console.log(`Planet Size received: ${planetSize}`);
        this.planet.planetSize = planetSize;

        this.fetchRandomValue('dayLength', () => this.planetService.getRandomDayLength(this.planet.planetSize));
        this.fetchRandomValue('numSatellites', () => this.planetService.getRandomNumSatellites(this.planet.planetSize));

        if (this.planet.pClass) {
          this.fetchRandomValue('population', () => this.planetService.getRandomPopulation(this.planet.pClass, this.planet.planetSize));
        }
      },
      error: (err) => console.error('Error fetching planet size:', err)
    });
  }

  onSubmit() {
    this.planetService.save(this.planet).subscribe({
      next: () => this.gotoPlanetList(),
      error: (err) => console.error('Error saving planet:', err)
    });
  }

  gotoPlanetList() {
    this.router.navigate(['/planets']);
  }
}
