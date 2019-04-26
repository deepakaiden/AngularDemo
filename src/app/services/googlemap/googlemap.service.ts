import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglemapService {

  constructor() { }

  public getPosition(): Observable<Position> {
    return Observable.create((observer) => {
      navigator.geolocation.watchPosition((position: Position) => {
        observer.next(position);
      });
    });
  }

}
