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

  myFunction() {
    var escondido = document.getElementById("escondido");
    var skins=document.getElementById('skins');
    var historia=document.getElementById('historia');

    if (escondido.style.display === "block") {
      escondido.style.display = "none";

    } else {
      escondido.style.display = "block";
      skins.style.display='none';
      historia.style.display='none';
    }
  }

  myFunction2() {
    var escondido = document.getElementById("escondido");
    var skins=document.getElementById('skins');
    var historia=document.getElementById('historia');

    if (skins.style.display === "block") {
      skins.style.display = "none";

    } else {
      skins.style.display = "block";
      escondido.style.display='none';
      historia.style.display='none';
    }
  }

  myFunction3() {
    var escondido = document.getElementById("escondido");
    var skins=document.getElementById('skins');
    var historia=document.getElementById('historia');

    if (historia.style.display === "block") {
      historia.style.display = "none";

    } else {
      historia.style.display = "block";
      escondido.style.display='none';
      skins.style.display='none';
    }
  }
}
