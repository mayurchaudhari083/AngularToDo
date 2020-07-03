import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    HelloComponent
  ],
  imports: [ BrowserModule , FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
