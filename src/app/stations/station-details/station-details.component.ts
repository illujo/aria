import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { StationService } from 'src/app/services/station.service';
import { Station } from '../models/station';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss']
})
export class StationComponent implements OnInit {
  id: string = '';
  loadingStation: boolean = true;
  station: Station | undefined;
  backgroundColor: string = 'gray';

  constructor(
    private _route: ActivatedRoute,
    private _station: StationService
  ) {
    let id = this._route.snapshot.paramMap.get('id');
    if (id)
      this.id = id;
  }

  ngOnInit(): void {
    if (this.id)
      this._station.getStation(this.id).then((result) => this.loadStation(<Station>result));
  }

  loadStation(station: Station) {
    console.log('loading', station);
    this.loadingStation = false;
    this.station = station;
    this.backgroundColor = station.level.color;
  }
}
