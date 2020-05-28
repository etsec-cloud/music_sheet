import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { AuddioComponent } from './auddio/auddio.component';
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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
