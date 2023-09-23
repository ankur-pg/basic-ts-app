export interface CustomLocation {
  location: {
    lat: number;
    lng: number;
  }
  showInfo(): string;
}
