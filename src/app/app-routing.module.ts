import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './pages/champion/champion.component';
import { MainComponent } from './pages/main/main.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
    //canActivate: [AmILoggedGuard]
    //pathMatch: 'full',
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'main/:id',
    component: MainComponent
  },
  {
    path: 'champion/:id',
    component: ChampionComponent
  },
  //{ //si el path es cualquier cosa que no esta listado arriba ^ llevara a listado
     //path: "**",
     //redirectTo: "MainComponent",
     //pathMatch: "full"
   //}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
