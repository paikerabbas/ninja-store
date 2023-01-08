import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { NotificationComponent } from './core/notification/notification.component';
import { HeaderComponent } from './core/header/header.component';
import { SigninPageComponent } from './core/signin-page/signin-page.component';
import { SignupPageComponent } from './core/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    NotificationComponent,
    SigninPageComponent,
    SignupPageComponent,
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
