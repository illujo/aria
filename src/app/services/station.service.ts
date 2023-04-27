import { Injectable } from '@angular/core';
import { Station } from '../stations/models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  levels = [
    { desc: 'odličan', color: "#00ccda", min: 0, max: 25 },
    { desc: 'dobar', color: "#85d348", min: 26, max: 50 },
    { desc: 'prihvatljiv', color: "#e1d91c", min: 51, max: 100 },
    { desc: 'loš', color: "#e46d17", min: 101, max: 200 },
    { desc: 'jako loš', color: "#ce0505", min: 201, max: 300 },
    { desc: 'užasno loš', color: "#ab065f", min: 301, max: 400 },
    { desc: 'opasan', color: "#500039", min: 401, max: 500 }
  ];
  stations: Station[] = [
    {
      info: {
        id: '4',
        location: 'Kolašin',
        preciseLocation: 'Centar',
        coordinates: [42.8256935303433, 19.518345000541036]
      },
      meteo: {
        temperature: 9.1,
        humidity: 49.5,
        report: 'Oblačno'
      },
      airQuality: {
        aqi: 23,
        pm2point5: 11.3,
        pm10: 21.6,
        tvoc: 20.2
      }
    },
    {
      info: {
        id: '1',
        location: 'Podgorica',
        preciseLocation: 'Centar',
        coordinates: [42.44065949386012, 19.264541538549025]

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
        id: '3',
        location: 'Podgorica',
        preciseLocation: 'Masline',
        coordinates: [42.44919924086844, 19.286010520844773]
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
    },
    {
      info: {
        id: '2',
        location: 'Podgorica',
        preciseLocation: 'Tološi',
        coordinates: [42.451948143457955, 19.231246025063253]

      },
      meteo: {
        temperature: 12.1,
        humidity: 47.2,
        report: 'Vedro'
      },
      airQuality: {
        aqi: 150,
        pm2point5: 65.4,
        pm10: 55.2,
        tvoc: 74.7
      }
    },
    {
      info: {
        id: '7',
        location: 'Berane',
        preciseLocation: 'Centar',
        coordinates: [42.84454096626121, 19.874198894051396]

      },
      meteo: {
        temperature: 11.2,
        humidity: 51.5,
        report: 'Oblačno'
      },
      airQuality: {
        aqi: 276,
        pm2point5: 67.3,
        pm10: 48.6,
        tvoc: 211.5
      }
    },
    {
      info: {
        id: '6',
        location: 'Bijelo Polje',
        preciseLocation: 'Centar',
        coordinates: [43.03434879298405, 19.747555164185165]

      },
      meteo: {
        temperature: 10.2,
        humidity: 57.5,
        report: 'Magla'
      },
      airQuality: {
        aqi: 327,
        pm2point5: 89.3,
        pm10: 76.6,
        tvoc: 230.2
      }
    },
    {
      info: {
        id: '5',
        location: 'Pljevlja',
        preciseLocation: 'Centar',
        coordinates: [43.35688776870061, 19.357131911678763]

      },
      meteo: {
        temperature: 8.2,
        humidity: 68.5,
        report: 'Magla'
      },
      airQuality: {
        aqi: 432,
        pm2point5: 102.3,
        pm10: 78.6,
        tvoc: 384.2
      }
    }
  ];

  constructor() { }

  getStations(): Promise<Station[]> {
    return new Promise(resolve => setTimeout(() => { resolve(this.addColors(this.stations)) }, 1000));
  }

  getStation(id: string) {
    let station = this.addColor(this.stations.find((station) => station.info.id === id));
    return new Promise(resolve => setTimeout(() => { resolve(station) }, 1000));
  }

  private addColor(station: any) {
    station.level = this.findLevel(station.airQuality.aqi);
    return station;
  }

  private addColors(stations: any[]) {
    stations.forEach(station => {
      station.level = this.findLevel(station.airQuality.aqi);
    });
    return stations;
  }

  private findLevel(value: number) {
    return this.levels.find(function (range) {
      return value >= range.min && value <= range.max;
    });
  }

}
