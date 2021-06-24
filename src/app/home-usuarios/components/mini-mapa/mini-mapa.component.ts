import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [],
})
export class MiniMapaComponent implements AfterViewInit {
  @Input() longitud: number = 0;
  @Input() latitud: number = 0;
  @ViewChild('mapa') divMapa!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    var mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitud, this.latitud],
      zoom: 18,
      interactive: false,
    });

    new mapboxgl.Marker().setLngLat([this.longitud, this.latitud]).addTo(mapa);
  }
}
