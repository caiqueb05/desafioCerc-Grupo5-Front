import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuLatEsqComponent } from './menu-lat-esq/menu-lat-esq.component';
import { PainelComponent } from './painel/painel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderModule } from 'ngx-order-pipe';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    EntrarComponent,
    MenuLatEsqComponent,
    PainelComponent,
    NavbarComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
