import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import { UpdateHospedeComponent } from './update-hospede/update-hospede.component';
import { HospedeDetailsComponent } from './hospede-details/hospede-details.component'
import { HospedeListComponent } from './hospede-list/hospede-list.component';
import { CreateHospedeComponent } from './create-hospede/create-hospede.component';
import { HospedesAtivosComponent } from './hospedes-ativos/hospedes-ativos.component';
import { ExHospedesComponent } from './ex-hospedes/ex-hospedes.component';
import { CheckInComponent } from './check-in/check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HospedeListComponent,
    CreateHospedeComponent,
    UpdateHospedeComponent,
    HospedeDetailsComponent,
    HospedesAtivosComponent,
    ExHospedesComponent,
    CheckInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
