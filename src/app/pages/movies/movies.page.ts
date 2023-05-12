import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController } from '@ionic/angular';//infinite scroll and loadiing
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',//gets url from api
  styleUrls: ['./movies.page.scss'],//gets style from the style urls
})
export class MoviesPage implements OnInit {

  movies: any[] = [];
  currentPage = 1;
  imageBaseUrl = environment.images;//uses image base url and gets each individual image

  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }// constructs a loading controller and Movie Service to get the movies

  ngOnInit() 
  {
    this.loadMovies();//loads the movies on initialisation
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) //loads the movies from the api and loads more when the loading event happens
  {
    const loading = await this.loadingCtrl.create({
      message: 'Loading.',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {//gets the top rated movies and puts displays the results
      loading.dismiss();
      this.movies.push(...res.results);
      console.log(res);

      event?.target.complete();
    });
  }

  loadMore(event: any)//loads more movies and adds 1 to the current page to get the next page of movie
  {
    this.currentPage++;
    this.loadMovies(event);
  } 
}