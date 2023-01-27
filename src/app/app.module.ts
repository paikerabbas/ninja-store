import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { NotificationComponent } from './core/notification/notification.component';
import { HeaderComponent } from './core/header/header.component';
import { SigninPageComponent } from './core/signin-page/signin-page.component';
import { SignupPage2Component } from './core/signup-page2/signup-page2.component';
import { SignupPageComponent } from './core/signup-page/signup-page.component';
import { MenLinkAccordionComponent } from './core/header/men-link-accordion/men-link-accordion.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

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
    SignupPage2Component,
    SignupPageComponent,
    MenLinkAccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
