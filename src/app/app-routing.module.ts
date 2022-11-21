import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'about', loadChildren: () => 
      import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => 
      import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
