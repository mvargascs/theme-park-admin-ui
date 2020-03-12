import { of } from 'rxjs';

export const user = {
    email: 'testemail@email.com',
    password: 'password123',
    uid: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuu'
};

export const authStateSignedIn = {
    uid: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuu',
    displayName: null,
    photoUrl: null,
    email: 'testemail@email.com',
    emailVerified: false,
    isAnonymous: false
};

export const angularFireAuthStub = {
    auth: {
        currentUser: user
    },
    authState: of(authStateSignedIn)
};
