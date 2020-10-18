import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurants/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule),

  },
  {
    path: 'auth',
    loadChildren: () => import('./login/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'adminpanel',
    loadChildren: () => import('./adminpanel/adminpanel.module').then( m => m.AdminpanelPageModule),

  },
  {
    path: 'merchantpanel',
    loadChildren: () => import('./merchantpanel/merchantpanel.module').then( m => m.MerchantpanelPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
