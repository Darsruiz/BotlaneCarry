import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { nombreSkins } from '../assets/nombreSkins';

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

  constructor(private router: Router) { }


  seleccionarTop(i: number) {
    console.log(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_0.jpg`)
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_0.jpg`
  }

  navegarLineas(i) {
    console.log('navegar',this.nombresLineas[i]);
    this.router.navigate(['main',this.nombresLineas[i]]);
  }

}
