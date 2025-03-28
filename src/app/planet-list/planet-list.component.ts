import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {
  }

  ngOnInit() {
    this.planetService.findAll().subscribe(data => {
      this.planets = data;
    });
  }
}