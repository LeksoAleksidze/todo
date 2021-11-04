import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHeaderComponent } from './todos/add-header/add-header.component';
import { TodosTasksComponent } from './todos/todos-tasks/todos-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHeaderComponent,
    TodosTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
