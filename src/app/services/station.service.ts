import { Injectable } from '@angular/core';
import { Station } from '../stations/models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  stations: Station[] = [
    {
      info: {
        id: 1,
        location: 'Podgorica',
        preciseLocation: 'Centar'
      },
      meteo: {
        temperature: 14.2,
        humidity: 32.5,
        report: 'Vedro'
      },
      airQuality: {
        aqi: 45,
        pm2point5: 32.4,
        pm10: 24.2,
        tvoc: 44.7
      }
    },
    {
      info: {
        id: 2,
        location: 'Podgorica',
        preciseLocation: 'Tološi'
      },
      meteo: {
        temperature: 12.1,
        humidity: 47.2,
        report: 'Vedro'
      },
      airQuality: {
        aqi: 86,
        pm2point5: 65.4,
        pm10: 55.2,
        tvoc: 74.7
      }
    },
    {
      info: {
        id: 3,
        location: 'Podgorica',
        preciseLocation: 'Masline'
      },
      meteo: {
        temperature: 13.1,
        humidity: 52.5,
        report: 'Vedro'
      },
      airQuality: {
        aqi: 65,
        pm2point5: 53.3,
        pm10: 43.6,
        tvoc: 63.2
      }
    }
  ];

  constructor() { }

  getStations(): Station[] {
    return this.stations;
  }

  getStation(id: number) {
    return this.stations.find((station) => station.info.id === id);
  }
}
