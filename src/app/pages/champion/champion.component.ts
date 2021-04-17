import { Component, OnInit } from '@angular/core';
import { nombreSkins } from '../../../assets/nombreSkins';
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin

  constructor(private util:FuncionesCompartidasService) { }

  ngOnInit(): void {}

  skinsCampeones (i) {
    return this.util.skinsCampeones(i);
  }

    nombreCampeones(i) {
      return this.util.nombreCampeones(i);
    }
  
  skinCampeon(i) {
    return this.util.skinCampeon(i);
  }
  }
