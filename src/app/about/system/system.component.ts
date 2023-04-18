import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  constructor(private _title: Title) {
    this._title.setTitle('Arija - O sistemu');
  }
}
