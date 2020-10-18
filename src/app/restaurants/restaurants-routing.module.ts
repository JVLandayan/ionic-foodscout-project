import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsPage } from './restaurants.page';

const routes: Routes = [  
  {
    path: 'tabs',
    component: RestaurantsPage,
    children: [
      {
        path: 'discover',
        children:[
          {
            path:'',
            loadChildren: () => import('./discover/discover.module').then (m=>m.DiscoverPageModule)
          },
          {
            path:':restaurantId',
            loadChildren: () => import('./details/details.module').then(m=>m.DetailsPageModule)
          }
        ]
      },
      {
        path: 'home',
        children:[
          {
            path:'',
            loadChildren: () => import('./home/home.module').then(m=>m.HomePageModule)
          },
          {
            path:':restaurantId',
            loadChildren: () => import('./details/details.module').then(m=>m.DetailsPageModule)
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path:'',
            loadChildren: () => import('./favorites/favorites.module').then( m =>m.FavoritesPageModule),
          },
          {
            path:':restaurantId',
            loadChildren: () => import('./favorites/details/details.module').then(m=>m.DetailsPageModule)
          }
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
