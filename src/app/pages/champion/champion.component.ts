import { Component, OnInit} from '@angular/core';
import { nombreSkins } from '../../../assets/nombreSkins';
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})

export class ChampionComponent implements OnInit {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin
  campeon;
  i;


  constructor(private util:FuncionesCompartidasService, private router: Router) { }

  ngOnInit(): void {
    this.campeon = this.router.url.split('/')[2];
    console.log((this.campeon));
  }

  imagenPrincipal (campeon) {
    return this.util.imagenPrincipal(campeon)
  }

  skins(i, campeon) {
    return this.util.skins(i, campeon);
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
function i(i: any) {
  throw new Error('Function not implemented.');
}

