import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {//any movie and image from base url and image name
  movie: any = {};
  imageBaseUrl = environment.images;
  
  constructor(
    private route: ActivatedRoute,//used to route
    private movieService: MovieService,//constructs movie service (api)
    ) {}

  ngOnInit() {//on initilize retireves value of id parameter from the current route,snapshot captures the stae of the route
    //paramMap contains the parametres extracted from the url
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe(res => {//gets the movies details from the specific movie id
      console.log(res);
      this.movie = res;
    })
  }

  openHomepage() {//take to the homepage of the movie given by api if it has one
    window.open(this.movie.homepage)
  }
}
