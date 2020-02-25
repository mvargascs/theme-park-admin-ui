import { Component } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
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
