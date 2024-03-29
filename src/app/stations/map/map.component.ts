import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Station } from '../models/station';
import { Title } from '@angular/platform-browser';
declare var ol: any;

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;
  ol: any;
  stations: Station[] = [];
  markers: any;
  loaded: boolean = false;

  constructor(private _title: Title,
    private _station: StationService) {
    this._title.setTitle('Arija - Niđe nebo nije plavo');
  }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([19.267509, 42.748515]),
        zoom: 9
      })
    });
    this.getStations();
  }

  getStations() {
    this._station.getStations().then(async stations => {
      this.stations = stations;
      await new Promise(resolve => setTimeout(resolve, 1));
      this.setStationMarkers(stations);
      await new Promise(resolve => setTimeout(resolve, 1));
      this.setCenter();
      await new Promise(resolve => setTimeout(resolve, 1));
      this.unhideMarkers();
    })
  }

  setStationMarkers(stations: Station[]) {
    stations.forEach(station => {
      const marker = new ol.Overlay({
        position: ol.proj.fromLonLat([station.info.coordinates[1], station.info.coordinates[0]]),
        positioning: 'center-center',
        element: document.getElementById('sm' + station.info.id),
        stopEvent: false,
      });
      this.map.addOverlay(marker);
      console.log('marker', marker);
    });
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([19.267509, 42.748515]));
    view.setZoom(9);
  }

  unhideMarkers() {
    this.stations.forEach(station => {
      document.getElementById('sm' + station.info.id)?.classList.add('loaded');
    });
  }
}
