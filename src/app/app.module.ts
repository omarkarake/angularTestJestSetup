import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
