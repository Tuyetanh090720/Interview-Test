import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './components/thanks/thanks.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionComponent } from './shared/global-components/question/question.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },

  { path: 'welcome', component: WelcomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'thanks', component: ThanksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
