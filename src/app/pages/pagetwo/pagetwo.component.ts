import { Component, OnInit } from '@angular/core';
import { GooglemapService } from 'src/app/services/googlemap/googlemap.service';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent implements OnInit {

  latitude: number;
  longitude: number;
  places: any = [];

  constructor(public googleMapService: GooglemapService) {
  }

  ngOnInit() {
    // this.getCurrentPosition();
    // this.places = this.googleMapService.getPlaces();
    // console.log(this.places);
    console.log(this.latitude, this.longitude)
  }

  // getCurrentPosition () {
  //   this.googleMapService.getPosition().subscribe((position: Position) => {
  //     this.latitude = position.coords.latitude;
  //     this.longitude = position.coords.longitude;
  //   }, error => {
  //     console.log('Unable to get position....', error);
  //   });
  // }

  mapOnClickListener (event) {
    this.places = this.googleMapService.addPlaceOnMapClick(event);
  }

  markerOnClickListener (place, index) {
    alert('Lat and Lng::::' + JSON.stringify(place) + 'Index:::::' + index);
  }


}
