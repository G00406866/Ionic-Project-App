import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToRandomMovie() {// Generate a random movie ID between 0 and 764906 to get a random movie page
    //gives error sometimes as the api doesnt store all detials or images for every movie, clicka gain for another movie
    const randomId = Math.floor(Math.random() * 764907);
  
    this.router.navigate(['/movies', randomId.toString()]);// Navigate to the random movie route
  }

  goToCinemas() { //for the Book Tickets button takes you to cinemas page
    this.router.navigate(['/cinemas']);
  }

  goToMovies() { //for the Trending Movies button take you to movies page
    this.router.navigate(['/movies']);
  }
  
}
