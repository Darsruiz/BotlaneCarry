import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { nombreSkins } from '../assets/nombreSkins';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'BotlaneCarry';
  nombresLineas = nombreSkins.Lineas;
  Top = nombreSkins.Top
  Jungle = nombreSkins.Jungle
  Mid = nombreSkins.Mid
  Adc = nombreSkins.Adc
  Support = nombreSkins.Support
  i;
  width: number;
  height: number;

  constructor(private router: Router) { }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }

  seleccionarTop(i: number) {
    console.log(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_0.jpg`)
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_0.jpg`
  }

  navegarLineas(i) {
    console.log('navegar',this.nombresLineas[i]);
    this.router.navigate(['main',this.nombresLineas[i]]);
  }

}
