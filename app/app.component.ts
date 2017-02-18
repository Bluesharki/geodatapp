import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
declare var google: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  googleMapCoordinates = {};
  coordinateCollection = [];
  
  constructor(af: AngularFire) {
    this.items = af.database.list("coordinates");
    this.items.subscribe(val => this.updateMap(this.latestCoordinate(val), this.allCoordinates(val)));
  }
  
  ngOnInit() {
  }
  
  latestCoordinate(val) {
    return {lat: Number(val[val.length-1].latitude), lng: Number(val[val.length-1].longitude)};
  }
  
  allCoordinates(val) {
    val.forEach(element => this.coordinateCollection.push({lat: Number(element.latitude), lng: Number(element.longitude)}));
    return this.coordinateCollection;
  }

  updateMap(googleMapCoordinates, polylineCoordinates) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: googleMapCoordinates
    });
    var marker = new google.maps.Marker({
      position: googleMapCoordinates,
      map: map
    });
    var flightPath = new google.maps.Polyline({
      path: polylineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    flightPath.setMap(map);
  }
}