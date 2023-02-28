export interface StationInfo {
  id: number;
  location: string;
  preciseLocation: string;
}

export interface Meteo {
  temperature: number;
  humidity: number;
  report: string;
}

export interface AirQuality {
  aqi: number;
  pm2point5: number;
  pm10: number;
  tvoc: number;
}

export interface Station {
  info: StationInfo;
  meteo: Meteo;
  airQuality: AirQuality
}

