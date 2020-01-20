import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RuteoModule } from './sharedModules/ruteo.module';


// RoutingModule

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    RuteoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
