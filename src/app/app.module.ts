import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDUq7iXyyK_oXSVyeftb5hj5rplz8o3a3M",
    authDomain: "contacts-ad20d.firebaseapp.com",
    databaseURL: "https://contacts-ad20d.firebaseio.com",
    storageBucket: "contacts-ad20d.appspot.com",
    messagingSenderId: "414241529872"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
