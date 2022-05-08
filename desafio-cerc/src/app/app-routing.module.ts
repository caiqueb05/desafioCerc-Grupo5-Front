import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastrar', pathMatch: 'full'},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'home', component: PainelComponent},
  {path: 'funcionarios', component: FuncionarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
