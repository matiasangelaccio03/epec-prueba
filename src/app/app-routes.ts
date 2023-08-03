import { Routes, RouterModule } from '@angular/router';




import { ParqueDeLasEnergiasComponent } from './components/parque-de-las-energias/parque-de-las-energias.component';
import { NotaComunidadComponent } from './components/nota-comunidad/nota-comunidad.component';
import { EscuelasVerdesComponent } from './components/escuelas-verdes/escuelas-verdes.component';
import { NavbarComponent } from './components/navbar/navbar.component';

 const APP_ROUTES: Routes = [
   { path: 'parque-de-las-energias', component: ParqueDeLasEnergiasComponent },
   { path: 'nota-parque', component: NotaComunidadComponent },
   { path: 'escuelas-verdes', component: EscuelasVerdesComponent },
   { path: 'inicio', component: NavbarComponent },

   
   
   {path:'**', pathMatch:'full', redirectTo:'parque-de-las-energias' }
 ];
 export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);