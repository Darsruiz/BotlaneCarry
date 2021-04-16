import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';

import { FlexLayoutModule } from '@angular/flex-layout';

// Material

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ChampionComponent } from './pages/champion/champion.component';
import { FuncionesCompartidasService } from './services/funciones-compartidas.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChampionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, // Material
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [FuncionesCompartidasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
