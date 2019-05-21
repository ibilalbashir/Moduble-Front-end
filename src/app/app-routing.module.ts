import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'earlyaccess',
    loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: 'invite',
    loadChildren: './subscription/subscription.module#SubscriptionModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'upload',
    loadChildren: './upload-now/upload-now.module#UploadNowModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'assets',
    loadChildren: './asset-details/asset-details.module#AssetDetailsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'assetupload',
    loadChildren: './asset-upload/asset-upload.module#AssetUploadModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
