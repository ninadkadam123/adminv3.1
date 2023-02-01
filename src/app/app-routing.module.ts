import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'list',component:ListComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
