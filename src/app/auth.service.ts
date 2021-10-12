import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(username: string, password: string) {
    if (username == 'admin' && password == 'password') {
      localStorage.setItem('currentuser', 'logedin');
      return true;
    }
  }
}
