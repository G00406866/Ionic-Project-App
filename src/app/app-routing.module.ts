import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',//starting page
    pathMatch: 'full'
  },
  {
    path: 'movies',//movies page whch contains trending movies
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',//each indiviudal movie on the movies page 
    loadChildren: () => import('./pages/moviedetails/moviedetails.module').then( m => m.MoviedetailsPageModule)
  },
  {
    path: 'homepage',//the homepage
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'cinemas',// the cinemas page 
    loadChildren: () => import('./pages/cinemas/cinemas.module').then( m => m.CinemasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
