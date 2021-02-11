import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { HelloFrenComponent } from './hello-fren/hello-fren.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './_core/guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'user/register', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'feed',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  {
    path:"hello-fren",
    component: HelloFrenComponent,
  },
  {
    path:"followers",
    canActivate: [AuthGuardService],
    component:FollowerListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
