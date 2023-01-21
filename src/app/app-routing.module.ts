import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './core/customer-care/customer-care.component';
import { NotificationComponent } from './core/notification/notification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { SigninPageComponent } from './core/signin-page/signin-page.component';
import { SignupPage2Component } from './core/signup-page2/signup-page2.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'customer-care', component: CustomerCareComponent },
	{ path: 'signin', component: SigninPageComponent },
	{ path: 'signup', component: SignupPage2Component },
	{
		path: 'cart', loadChildren: () =>
			import('./cart/cart.module').then(m => m.CartModule)
	},
	{
		path: 'new-arival', loadChildren: () =>
			import('./new-arival/new-arival.module').then(m => m.NewArivalModule)
	},
	{
		path: 'order', loadChildren: () =>
			import('./order/order.module').then(m => m.OrderModule)
	},
	{
		path: 'about', loadChildren: () =>
			import('./about/about.module').then(m => m.AboutModule)
	},
	{
		path: 'career', loadChildren: () =>
			import('./career/career.module').then(m => m.CareerModule)
	},
	{
		path: 'work-with-us', loadChildren: () =>
			import('./work-with-us/work-with-us.module').then(m => m.WorkWithUsModule)
	},
	{
		path: 'select-product/:sku', loadChildren: () =>
			import('./select-product/select-product.module').then(m => m.SelectProductModule)
	},
	{
		path: 'product-detail', loadChildren: () =>
			import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
	},
	{
		path: 'men-wear', loadChildren: () =>
			import('./men-wear/men-wear.module').then(m => m.MenWearModule)
	},
	{
		path: 'men-footwear', loadChildren: () =>
			import('./men-footwear/men-footwear.module').then(m => m.MenFootwearModule)
	},
	{
		path: 'watch-accessories', loadChildren: () =>
			import('./watch-accessories/watch-accessories.module').then(m => m.WatchAccessoriesModule)
	},
	{
		path: 'women-wear', loadChildren: () =>
			import('./women-wear/women-wear.module').then(m => m.WomenWearModule)
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

