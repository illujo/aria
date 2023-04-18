import { Component, OnInit } from '@angular/core';
declare var ol: any;

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;
  ol: any;

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

  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([19.267509, 42.748515]));
    view.setZoom(8.6);
    ol.Marker([19.238353336103224, 42.45389507634392]).addTo(this.map);
  }
}
