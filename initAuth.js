import {init} from 'next-fireba'

const initAuth = ()=> {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'freeqr-1e734',
        clientEmail: 'firebase-adminsdk-gjzsa@freeqr-1e734.iam.gserviceaccount.com',
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://my-example-app.firebaseio.com',
      storageBucket: "freeqr-1e734.appspot.com",
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyBFZWWs4Hc2FAj-AtF4s4gESbE7Ef7gKFg",
      authDomain: "freeqr-1e734.firebaseapp.com",
      projectId: "freeqr-1e734",
      storageBucket: "freeqr-1e734.appspot.com",
      messagingSenderId: "858040272157",
      appId: "1:858040272157:web:9132bdd651257184e84df4",
      measurementId: "G-SNMKPJFWXT"
    },
    cookies: {
      name: 'freeqr-app', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: false,
    },
  })
}

export default initAuth