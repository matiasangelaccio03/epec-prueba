import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParqueDeLasEnergiasComponent } from './components/parque-de-las-energias/parque-de-las-energias.component';
import { NotaComunidadComponent } from './components/nota-comunidad/nota-comunidad.component';
import { EscuelasVerdesComponent } from './components/escuelas-verdes/escuelas-verdes.component';

//rutas

import { APP_ROUTING } from "./app-routes";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParqueDeLasEnergiasComponent,
    NotaComunidadComponent,
    EscuelasVerdesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
