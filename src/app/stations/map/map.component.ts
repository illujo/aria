import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Station } from '../models/station';
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

  constructor(private _station: StationService) {

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
        zoom: 8.6
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
    view.setZoom(8.6);
  }
}
