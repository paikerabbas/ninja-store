import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{
  path: 'new-arival' ,loadChildren: ()=>
    import ('./new-arival/new-arival.module').then(m => m.NewArivalModule)
},
  { path: 'order', loadChildren: () => 
      import('./order/order.module').then(m => m.OrderModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

