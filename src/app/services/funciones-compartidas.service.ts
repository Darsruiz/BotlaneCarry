import { Injectable } from '@angular/core';
import { nombreSkins } from '../../assets/nombreSkins';

@Injectable({
  providedIn: 'root'
})
export class FuncionesCompartidasService {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin

  constructor() { }

  skinsCampeones(i) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[i]}_${this.skin[0]}.jpg`
  }

  nombreCampeones(i) {
    return this.nombres[i]
  }
}
