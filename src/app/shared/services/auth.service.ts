import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '@shared/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authError$: Observable<string>;
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.authError$ = this.setAuthError(null);

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  registerUser(email: string, password: string): Promise<void> {
    this.authError$ = this.setAuthError(null);

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/', 'login']);
      });
  }

  emailSignIn(email: string, password: string): Promise<void> {
    this.authError$ = this.setAuthError(null);

    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res: firebase.auth.UserCredential) => {
        this.updateUserData(res.user);
        this.router.navigate(['/', 'dashboard']);
      })
      .catch((err: firebase.auth.Error) => {
        this.authError$ = this.setAuthError(err);
      });
  }

  private updateUserData(user: firebase.User): Promise<void> {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  signOut(): Promise<void> {
    this.authError$ = this.setAuthError(null);

    return this.afAuth.auth.signOut().finally(() => { this.router.navigate(['/']); });
  }

  private setAuthError(err: firebase.auth.Error): Observable<string> {
    if (err == null) {
      return of('');
    }

    switch (err.code) {
      case 'auth/wrong-password':
        return of('Invalid Credentials');
    }
  }
}
