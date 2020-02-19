import { Component } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-park-admin-ui';
  user$: Observable<User>;

  constructor(
    private auth: AuthService,
  ) {
    this.user$ = this.auth.user$;
  }

  signOut() {
    this.auth.signOut();
  }
}
