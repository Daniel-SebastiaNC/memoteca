import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThinkComponent } from './components/thinking/create-think/create-think.component';
import { ListThinkingComponent } from './components/thinking/list-thinking/list-thinking.component';
import { DeleteThinkingComponent } from './components/thinking/delete-thinking/delete-thinking.component';
import { EditThinkComponent } from './components/thinking/edit-think/edit-think.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mural',
    pathMatch: 'full'
  },
  {
    path: 'thinking/delete-thinking/:id',
    component: DeleteThinkingComponent
  },
  {
    path: 'thinking/edit-think/:id',
    component: EditThinkComponent
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
