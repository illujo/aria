import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {
  constructor(private _title: Title) {
    this._title.setTitle('Arija - Šta mjerenja znače');
  }
}

