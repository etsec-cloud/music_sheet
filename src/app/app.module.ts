import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AuddioComponent } from './auddio/auddio.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MediaCapture } from '@ionic-native/media-capture/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
@NgModule({
  declarations: [AppComponent, SearchComponent, FavoritesComponent, AuddioComponent, ArtistDetailComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MediaCapture
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
