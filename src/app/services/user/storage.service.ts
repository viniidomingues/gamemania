import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public saveUser(user: any): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  clean(): void {
    sessionStorage.clear();
  }

  public isLoggedIn(): boolean {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }
}