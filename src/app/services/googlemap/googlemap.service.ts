import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglemapService {

  currentPosition: any;
  places: any = [];
  place: any;

  constructor() { }

  public getPosition () {
    return Observable.create((observer) => {
      navigator.geolocation.watchPosition((position: Position) => {
        this.place = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.places.push(this.place);
        observer.next(position);
      });
    });
  }

  addPlaceOnMapClick (event) {
    this.place = { lat: event.coords.lat, lng: event.coords.lng };
    this.places.push(this.place);
    return this.places;
  }

  getPlaces () {
    return this.places;
  }

}
