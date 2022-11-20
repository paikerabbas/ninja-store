import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

