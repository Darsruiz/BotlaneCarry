import { Component, OnInit} from '@angular/core';
import { nombreSkins } from "../../../assets/nombreSkins";
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin


  constructor(private util:FuncionesCompartidasService, private router: Router) { }

  ngOnInit(): void {
    // obtenes la ruta.
    //console.log('ruta,', this.router.url);
    // partimos la ruta y obtenemos la id del producto
    // el split lo parte por donde esta la / y buscamos la parte "2" seria 3
    //this.idProducto = this.router.url.split('/')[2];
  }

  skinsCampeones (i) {
    return this.util.skinsCampeones(i);
  }

  nombreCampeones(i) {
      return this.util.nombreCampeones(i);
    }

  navegar(i) {
      console.log('navegar',i);
      this.router.navigate(['champion', i])
    }

  seleccionCampeones (i) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[i]}_${this.skin[0]}.jpg`
  }
  }
