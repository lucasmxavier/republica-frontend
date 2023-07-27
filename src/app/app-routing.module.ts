import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepublicaFormComponent } from './pages/republica-form/republica-form.component';
import { RepublicadisponivelListComponent } from './pages/republica-disponivel-list/republica-disponivel-list.component';
import { MoradorFormComponent } from './pages/morador-form/morador-form.component';
import { RepublicaFinancasComponent } from './pages/republica-financas/republica-financas.component';
import { MoradorFinancasComponent } from './pages/morador-financas/morador-financas.component';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form.component';
import { FeedbackListComponent } from './pages/feedback-list/feedback-list.component';
import { MoradorListComponent } from './pages/morador-list/morador-list.component';
import { TarefaFormComponent } from './pages/tarefa-form/tarefa-form.component';
import { RepublicaGerenciaComponent } from './pages/republica-gerencia/republica-gerencia.component';
import { RepublicaFinancasGraficoComponent } from './pages/republica-financas-grafico/republica-financas-grafico.component';
import { MoradorGerenciaComponent } from './pages/morador-gerencia/morador-gerencia.component';
import { RepublicaTarefaComponent } from './pages/republica-tarefa/republica-tarefa.component';
import { MoradorTarefaComponent } from './pages/morador-tarefa/morador-tarefa.component';
import { ReceitaDespesaFormComponent } from './pages/receita-despesa-form/receita-despesa-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'addrepublica', component: RepublicaFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'republicas/disponiveis', component: RepublicadisponivelListComponent },
  { path: 'republicas/addreceitasdespesas', component: ReceitaDespesaFormComponent },
  { path: 'republica/financas', component: RepublicaFinancasComponent },
  { path: 'republica/financas/grafico', component: RepublicaFinancasGraficoComponent },
  { path: 'morador/financas', component: MoradorFinancasComponent },
  { path: 'addmorador', component: MoradorFormComponent },
  { path: 'morador/perfil', component: MoradorGerenciaComponent },
  { path: 'feedback', component: FeedbackListComponent },
  { path: 'addfeedback', component: FeedbackFormComponent },
  { path: 'moradores', component: MoradorListComponent },
  { path: 'republica/tarefas', component: RepublicaTarefaComponent },
  { path: 'morador/tarefas', component: MoradorTarefaComponent },
  { path: 'addtarefa', component: TarefaFormComponent },
  { path: 'republica/gerencia', component: RepublicaGerenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
