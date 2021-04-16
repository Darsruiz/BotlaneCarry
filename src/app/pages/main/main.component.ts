import { Component, OnInit, AfterContentInit, ViewChild} from '@angular/core';
import { nombreSkins } from "../../../assets/nombreSkins";
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
  }
