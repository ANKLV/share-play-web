import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from "../../providers"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  constructor(public auth: Auth, private router: Router) { }

  logOut() {
    this.auth.signOut();
    this.router.navigate(['/tracks']);
  }
}
