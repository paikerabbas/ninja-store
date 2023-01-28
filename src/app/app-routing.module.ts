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
	//Men Topwear links
	{
		path: 'men-tshirt', loadChildren: () =>
			import('./men-topwear/men-tshirt/men-tshirt.module').then(m => m.MenTshirtModule)
	},
	{
		path: 'men-casual-shirt', loadChildren: () =>
			import('./men-topwear/men-casual-shirt/men-casual-shirt.module').then(m => m.MenCasualShirtModule)
	},
	{
		path: 'mens-formal-shirt', loadChildren: () =>
			import('./men-topwear/men-formal-shirt/men-formal-shirt.module').then(m => m.MenFormalShirtModule)
	},
	{
		path: 'men-sweatshirt', loadChildren: () =>
			import('./men-topwear/men-sweatshirt/men-sweatshirt.module').then(m => m.MenSweatshirtModule)
	},
	{
		path: 'men-sweater', loadChildren: () =>
			import('./men-topwear/men-sweater/men-sweater.module').then(m => m.MenSweaterModule)
	},
	{
		path: 'men-jacket', loadChildren: () =>
			import('./men-topwear/men-jacket/men-jacket.module').then(m => m.MenJacketModule)
	},
	{
		path: 'men-blazer', loadChildren: () =>
			import('./men-topwear/men-blazer/men-blazer.module').then(m => m.MenBlazerModule)
	},
	{
		path: 'men-suit', loadChildren: () =>
			import('./men-topwear/men-suit/men-suit.module').then(m => m.MenSuitModule)
	},
	{
		path: 'men-rainjacket', loadChildren: () =>
			import('./men-topwear/men-rainjacket/men-rainjacket.module').then(m => m.MenRainjacketModule)
	},

	// Men Indian & Festive wear
	{
		path: 'men-kurta', loadChildren: () =>
			import('./men-festivewear/men-kurta/men-kurta.module').then(m => m.MenKurtaModule)
	},
	{
		path: 'men-sherwani', loadChildren: () =>
			import('./men-festivewear/men-sherwani/men-sherwani.module').then(m => m.MenSherwaniModule)
	},
	{
		path: 'men-dhoti', loadChildren: () =>
			import('./men-festivewear/men-dhoti/men-dhoti.module').then(m => m.MenDhotiModule)
	},

	// Men Bottom Wear links
	{
		path: 'men-jean', loadChildren: () =>
			import('./men-bottomwear/men-jeans/men-jeans.module').then(m => m.MenJeansModule)
	},
	{
		path: 'men-casual-trouser', loadChildren: () =>
			import('./men-bottomwear/men-casual-trouser/men-casual-trouser.module').then(m => m.MenCasualTrouserModule)
	},
	{
		path: 'men-formal-trouser', loadChildren: () =>
			import('./men-bottomwear/men-formal-trouser/men-formal-trouser.module').then(m => m.MenFormalTrouserModule)
	},

	// Men Footwear links
	{
		path: 'men-casual-shoes', loadChildren: () =>
			import('./men-footwear/men-casual-shoes/men-casual-shoes.module').then(m => m.MenCasualShoesModule)
	},
	{
		path: 'men-formal-shoes', loadChildren: () =>
			import('./men-footwear/men-formal-shoes/men-formal-shoes.module').then(m => m.MenFormalShoesModule)
	},
	{
		path: 'men-sports-shoes', loadChildren: () =>
			import('./men-footwear/men-sport-shoes/men-sport-shoes.module').then(m => m.MenSportShoesModule)
	},

	// Men watches link
	{
		path: 'men-watch', loadChildren: () =>
			import('./men-watch/men-watch.module').then(m => m.MenWatchModule)
	},

	//sub category links
	{
		path: 'cart', loadChildren: () =>
			import('./cart/cart.module').then(m => m.CartModule)
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
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

