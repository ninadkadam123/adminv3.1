import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewfeedbackComponent } from './components/newfeedback/newfeedback.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BinfeedbackComponent } from './components/binfeedback/binfeedback.component';
import { TodofeedbackComponent } from './components/todofeedback/todofeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    ListComponent,
    NavbarComponent,
    NewfeedbackComponent,
    FeedbackComponent,
    BinfeedbackComponent,
    TodofeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
