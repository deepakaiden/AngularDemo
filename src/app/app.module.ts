import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeLuNuFL8AJ3xOUHpH2dERkO3H6q8DxCY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
