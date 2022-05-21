import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetAccountComponent } from './auth/reset-account/reset-account.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateQuestionComponent } from './shared/pages/create-question/create-question.component';
import { QuestionComponent } from './shared/pages/question/question.component';
import { CreateAnswerComponent } from './shared/pages/create-answer/create-answer.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'restAccount', component: ResetAccountComponent},
  {path: 'createQuestion', component: CreateQuestionComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'heater', component: HttpErrorResponse},
  {path: 'question/:id', component: QuestionComponent},
  {path: 'createAnswer', component: CreateAnswerComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
