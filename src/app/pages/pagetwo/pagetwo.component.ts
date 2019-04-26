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

  constructor(public googleMapService: GooglemapService) {
  }

  ngOnInit() {
    this.getCurrentPosition();
  }

  getCurrentPosition () {
    this.googleMapService.getPosition().subscribe((position: Position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log();
    }, error => {
      console.log('Unable to get position....', error);
    });
  }



}
