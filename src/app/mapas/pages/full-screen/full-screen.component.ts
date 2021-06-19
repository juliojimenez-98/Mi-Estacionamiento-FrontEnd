import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.660678, -33.445971],
      zoom: 14,
    });
  }
}
