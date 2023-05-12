import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';//import browser plugin

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.page.html',
  styleUrls: ['./cinemas.page.scss'],
})
export class CinemasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async openBrowser1() { //opens browser to salthill omniplex
    await Browser.open({url: 'https://www.omniplex.ie/cinema/galway'})
  }

  async openBrowser2() { //opens browser to eyecinema 
    await Browser.open({url: 'https://www.eyecinema.ie'})
  }

  async openBrowser3() { //opens browser to imc cinema
    await Browser.open({url: 'https://imccinemas.ie/Whats-On/Galway/'})
  }
}
