import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';

//Translate module
import {TranslateLoader, TranslateModule} from "@ngx-translate/core"
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './pages/home/home.component';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/lang/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
