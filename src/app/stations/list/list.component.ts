import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Station } from '../models/station';


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  stations: Station[] = [];
  sortDirection: string = 'desc';
  constructor(
    private _stationService: StationService
  ) {

  }

  ngOnInit() {
    this._stationService.getStations().then(stations => {
      this.stations = stations;
    });
    console.log('this.stations', this.stations);
  }

}
