import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AuthService } from "../app/shared/services/authentication.service";

import { LoginComponent } from '../app/auth/login/login.component';
import { RegisterComponent } from '../app/auth/register/register.component';
import { ResetAccountComponent } from '../app/auth//reset-account/reset-account.component';
import { HomeComponent } from '../app/shared/pages/home/home.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { HeaderComponent } from './shared/pages/header/header.component';
import { CreateQuestionComponent } from './shared/pages/create-question/create-question.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './shared/pages/question/question.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CreateAnswerComponent } from './shared/pages/create-answer/create-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResetAccountComponent,
    FooterComponent,
    HeaderComponent,
    CreateQuestionComponent,
    QuestionComponent,
    CreateAnswerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
