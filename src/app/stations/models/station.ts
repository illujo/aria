export interface Station {
  info: StationInfo;
  meteo: Meteo;
  airQuality: AirQuality;
  level?: any; //added in webapp
}
export interface StationInfo {
  id: string;
  location: string;
  preciseLocation: string;
  coordinates: number[];
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



