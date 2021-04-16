import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material/grid-list';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  skinscampeones() {

    let nombres = ['Ezreal','Vayne','Ashe'];
    let skin = [1,2,3];

    //https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg
    //console.log('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+nombres[1]+'_'+skin[1]+'.jpg');
    console.log(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nombres[1]}_${skin[1]}.jpg`);
  }


  ngOnInit(): void {
  }

}

export class GridComponent implements AfterContentInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }

  constructor(private observableMedia: ObservableMedia) {}

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
}
