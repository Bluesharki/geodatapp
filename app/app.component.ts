import { Component, OnInit } from '@angular/core';
import * as locResults from "./database";
declare var google: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    var uluru = {lat: 47.4808722, lng: 18.8501225};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
  }
}