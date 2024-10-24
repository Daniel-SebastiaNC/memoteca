import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThinkComponent } from './components/thinking/create-think/create-think.component';
import { ListThinkingComponent } from './components/thinking/list-thinking/list-thinking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mural',
    pathMatch: 'full' 
  },
  {
    path: 'criarPensamento',
    component: CreateThinkComponent
  },
  {
    path: 'mural',
    component: ListThinkingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
