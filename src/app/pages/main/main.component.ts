import { Component, OnInit } from '@angular/core';

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
