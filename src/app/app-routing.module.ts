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
		path: 'mens-tshirt', loadChildren: () =>
			import('./men-topwear/men-tshirt/men-tshirt.module').then(m => m.MenTshirtModule)
	},
	{
		path: 'mens-casual-shirt', loadChildren: () =>
			import('./men-topwear/men-casual-shirt/men-casual-shirt.module').then(m => m.MenCasualShirtModule)
	},
	{
		path: 'mens-formal-shirt', loadChildren: () =>
			import('./men-topwear/men-formal-shirt/men-formal-shirt.module').then(m => m.MenFormalShirtModule)
	},
	{
		path: 'men-sweatshirts', loadChildren: () =>
			import('./men-topwear/men-sweatshirt/men-sweatshirt.module').then(m => m.MenSweatshirtModule)
	},
	{
		path: 'men-sweaters', loadChildren: () =>
			import('./men-topwear/men-sweaters/men-sweaters.module').then(m => m.MenSweatersModule)
	},
	{
		path: 'men-jackets', loadChildren: () =>
			import('./men-topwear/men-jackets/men-jackets.module').then(m => m.MenJacketsModule)
	},
	{
		path: 'men-blazer', loadChildren: () =>
			import('./men-topwear/men-blazer/men-blazer.module').then(m => m.MenBlazerModule)
	},
	{
		path: 'men-suits', loadChildren: () =>
			import('./men-topwear/men-suits/men-suits.module').then(m => m.MenSuitsModule)
	},
	{
		path: 'men-rainjackets', loadChildren: () =>
			import('./men-topwear/men-rainjackets/men-rainjackets.module').then(m => m.MenRainjacketsModule)
	},

	// Men Indian & Festive wear
	{
		path: 'men-kurtas', loadChildren: () =>
			import('./men-festivewear/men-kurtas/men-kurtas.module').then(m => m.MenKurtasModule)
	},
	{
		path: 'men-sherwanis', loadChildren: () =>
			import('./men-festivewear/men-sherwanis/men-sherwanis.module').then(m => m.MenSherwanisModule)
	},
	{
		path: 'men-dhotis', loadChildren: () =>
			import('./men-festivewear/men-dhotis/men-dhotis.module').then(m => m.MenDhotisModule)
	},

	// Men Bottom Wear links
	{
		path: 'men-jeans', loadChildren: () =>
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
			import('./men-footwear/men-casualshoes/men-casualshoes.module').then(m => m.MenCasualshoesModule)
	},
	{
		path: 'men-formal-shoes', loadChildren: () =>
			import('./men-footwear/men-formalshoes/men-formalshoes.module').then(m => m.MenFormalshoesModule)
	},
	{
		path: 'men-sports-shoes', loadChildren: () =>
			import('./men-footwear/men-sportsshoes/men-sportsshoes.module').then(m => m.MenSportsshoesModule)
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

