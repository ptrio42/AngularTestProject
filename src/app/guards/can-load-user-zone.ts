import { Injectable } from '@angular/core';
import { Route, UrlSegment, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { isNil, head, isEmpty } from 'lodash';
import { RouteMap } from '../route-map';

@Injectable({
  providedIn: 'root'
})
export class CanLoadUserZone implements CanLoad {
  
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isUserLoggedIn()) {
        if (isNil(head(segments)) || head(segments).path === '') {
          this.router.navigate([`/${RouteMap.userZone}/${RouteMap.features}`]);
        }
        return true;
      }
      if (isEmpty(segments) || (!isNil(head(segments)) && head(segments).path !== RouteMap.login)) {
        this.router.navigate([`/${RouteMap.login}`]);
      }
      return false;
  }
}
