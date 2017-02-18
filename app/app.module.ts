import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyB3SSMjBC3jgYxuefzX3I56cI5xa4s1kF0",
  authDomain: "geodatapp.firebaseapp.com",
  databaseURL: "https://geodatapp.firebaseio.com",
  storageBucket: "geodatapp.appsopt.com"
}

@NgModule({
  imports:      [ BrowserModule,
  AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }