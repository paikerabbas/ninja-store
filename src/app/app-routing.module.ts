import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './core/customer-care/customer-care.component';
import { NotificationComponent } from './core/notification/notification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { SigninPageComponent } from './core/signin-page/signin-page.component';
import { SignupPageComponent } from './core/signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'customer-care', component: CustomerCareComponent },
	{ path: 'signin', component: SigninPageComponent },
	{ path: 'signup', component: SignupPageComponent },
	// Main category links
	{
		path: 'men', loadChildren: () =>
			import('./men/men.module').then(m => m.MenModule)
	},
	{
		path: 'women', loadChildren: () =>
			import('./women/women.module').then(m => m.WomenModule)
	},
	{
		path: 'kids', loadChildren: () =>
			import('./kids/kids.module').then(m => m.KidsModule)
	},
	{
		path: 'home-and-living', loadChildren: () =>
			import('./home-living/home-living.module').then(m => m.HomeLivingModule)
	},
	{
		path: 'beauty', loadChildren: () =>
			import('./beauty/beauty.module').then(m => m.BeautyModule)
	},
	//Men Sub Item links
	{
		path: 'mens-tshirt', loadChildren: () =>
			import('./men-subitem/men-tshirt/men-tshirt.module').then(m => m.MenTshirtModule)
	},
	{
		path: 'mens-casual-shirt', loadChildren: () =>
			import('./men-subitem/men-casual-shirt/men-casual-shirt.module').then(m => m.MenCasualShirtModule)
	},
	{
		path: 'mens-formal-shirt', loadChildren: () =>
			import('./men-subitem/men-formal-shirt/men-formal-shirt.module').then(m => m.MenFormalShirtModule)
	},
	{
		path: 'men-sweetshirts', loadChildren: () =>
			import('./men-subitem/men-sweetshirts/men-sweetshirts.module').then(m => m.MenSweetshirtsModule)
	},
	{
		path: 'men-sweaters', loadChildren: () =>
			import('./men-subitem/men-sweaters/men-sweaters.module').then(m => m.MenSweatersModule)
	},
	{
		path: 'men-jackets', loadChildren: () =>
			import('./men-subitem/men-jackets/men-jackets.module').then(m => m.MenJacketsModule)
	},
	{
		path: 'men-blazer', loadChildren: () =>
			import('./men-subitem/men-blazer/men-blazer.module').then(m => m.MenBlazerModule)
	},
	{
		path: 'men-suits', loadChildren: () =>
			import('./men-subitem/men-suits/men-suits.module').then(m => m.MenSuitsModule)
	},
	{
		path: 'men-kurtas', loadChildren: () =>
			import('./men-subitem/men-kurtas/men-kurtas.module').then(m => m.MenKurtasModule)
	},
	
	
	{
		path: 'men-rainjackets', loadChildren: () =>
			import('./men-subitem/men-rainjackets/men-rainjackets.module').then(m => m.MenRainjacketsModule)
	},
	
	{
		path: 'men-sherwanis', loadChildren: () =>
			import('./men-subitem/men-sherwanis/men-sherwanis.module').then(m => m.MenSherwanisModule)
	},
	{
		path: 'men-dhotis', loadChildren: () =>
			import('./men-subitem/men-dhotis/men-dhotis.module').then(m => m. MenDhotisModule)
	},
	
	
	//sub category links
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

