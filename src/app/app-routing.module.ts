import { CheckInComponent } from './check-in/check-in.component';
import { ExHospedesComponent } from './ex-hospedes/ex-hospedes.component';
import { HospedeListComponent } from './hospede-list/hospede-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateHospedeComponent } from './update-hospede/update-hospede.component';
import { HospedeDetailsComponent } from './hospede-details/hospede-details.component';
import { CreateHospedeComponent } from './create-hospede/create-hospede.component';
import { HospedesAtivosComponent } from './hospedes-ativos/hospedes-ativos.component';

const routes: Routes = [
  {path: 'hospedes', component: HospedeListComponent},
  {path: 'inserir-hospede', component: CreateHospedeComponent},
  {path: '', redirectTo: 'hospedes', pathMatch: 'full'},
  {path: 'alterar-hospede/:id', component: UpdateHospedeComponent},
  {path: 'hospede-info/:id', component: HospedeDetailsComponent},
  {path: 'hospedes-ativos', component: HospedesAtivosComponent},
  {path: 'ex-hospedes', component: ExHospedesComponent},
  {path: 'check-in', component: CheckInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
