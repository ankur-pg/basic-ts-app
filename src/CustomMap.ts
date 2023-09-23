import { CustomLocation } from "./Location"

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById("custommap") as HTMLElement, {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 1
    })
  }

  addMarker(location: CustomLocation) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: 28.459497,
        lng: 77.026634
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: location.showInfo()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}