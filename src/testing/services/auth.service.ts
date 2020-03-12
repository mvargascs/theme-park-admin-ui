import { Observable, of } from 'rxjs';

import { User } from '@shared/models/user';

import { authStateSignedIn } from '@testing/data/auth';

export class MockAuthService {
  authError$: Observable<string>;
  user$: Observable<User>;

  constructor() {
    this.authError$ = of('');

    this.user$ = of(authStateSignedIn);
  }

  registerUser(email: string, password: string): Promise<void> {
    return Promise.resolve();
  }

  emailSignIn(email: string, password: string): Promise<void> {
    return Promise.resolve();
  }

  signOut(): Promise<void> {
    return Promise.resolve();
  }
}
