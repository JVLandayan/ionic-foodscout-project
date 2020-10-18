import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[
      {
        path:'auth',
        loadChildren: () => import('../login/auth/auth.module').then(m=>m.AuthPageModule),
        children: [
          {
            path: 'signup',
            loadChildren: ()=> import ('../login/auth/signup/signup.module').then(m=>m.SignupPageModule)
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
export class LoginPageRoutingModule {}
