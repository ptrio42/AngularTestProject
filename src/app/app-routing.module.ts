import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UserZoneModule } from './user-zone/user-zone.module';
import { CanLoadUserZone } from './guards/can-load-user-zone';
import { RouteMap } from './route-map';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-zone',
    pathMatch: 'full'
  },
  {
    path: RouteMap.userZone,
    loadChildren: () => UserZoneModule,
    canLoad: [CanLoadUserZone]
  },
  {
    path: RouteMap.notFound,
    component: NotFoundComponent
  },
  {
    path: RouteMap.login,
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
