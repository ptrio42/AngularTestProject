import { Injectable } from '@angular/core';
import { isNil, has } from 'lodash';
import { User } from '../models/user';
import { Credentials } from '../models/credentials';
import { Observable, of } from 'rxjs';

const USER_SESSION_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials): void {
    if (this.isUserLoggedIn()) {
      return;
    }

    this.findUserByUsername(credentials.username).subscribe((user: User) => {
      sessionStorage.setItem(USER_SESSION_STORAGE_KEY, JSON.stringify(user));
    });
  }

  logout(): void {
    sessionStorage.removeItem(USER_SESSION_STORAGE_KEY);
  }

  isUserLoggedIn(): boolean {
    const userString: string | null = sessionStorage.getItem(USER_SESSION_STORAGE_KEY);
    return !isNil(userString) && has(JSON.parse(userString), 'username');
  }

  findUserByUsername(username: string): Observable<User> {
    return of({username: username});
  }
}