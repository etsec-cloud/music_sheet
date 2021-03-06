import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { AuddioComponent } from './auddio/auddio.component';
import { PartitionsComponent } from './partitions/partitions.component';
import { PartitionComponent } from './partition/partition.component';
import { SettingsDetailComponent } from './settings-detail/settings-detail.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'auddio',
    component: AuddioComponent
  },
  {
  path: 'partitions',
  component: PartitionsComponent
  },
  {
    path: 'partition',
    component: PartitionComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
  path: 'preferences',
  component: SettingsDetailComponent
  },
  {
    path: 'artist',
    component: ArtistDetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
