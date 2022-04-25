import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuLatEsqComponent } from './menu-lat-esq/menu-lat-esq.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    EntrarComponent,
    MenuLatEsqComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
