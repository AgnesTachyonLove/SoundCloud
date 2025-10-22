import { Component } from '@angular/core';
import { Router
 } from '@angular/router';
import { AuthServices } from './servicios/auth-services';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router : Router, private auth : AuthServices) {
    this.checkSession();
  }

  checkSession = () => {
    const loggedIn = this.auth.getStatus();
    this.router.navigate([loggedIn ? '/home' : '/pagelogin']);
  };
}
