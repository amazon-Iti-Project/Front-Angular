// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_BASE_URL:'https://fierce-mountain-42224.herokuapp.com',
  brands:'brands',
  categories:'categories',
  products:'products',
  shipping:'shippings',
  fees:'fees',
  payment:'payments',
  orders:'orders',
  users:'users',
  admins:'admins',
  // API_URL:"http://localhost:3000"
   firebaseConfig : {
    apiKey: "AIzaSyA1tktEttdFlfRb5A6FBz-tzVd1NIm5rvw",
    authDomain: "data-837bd.firebaseapp.com",
    projectId: "data-837bd",
    storageBucket: "data-837bd.appspot.com",
    messagingSenderId: "62632532680",
    appId: "1:62632532680:web:5626b8f3eb3569639c23fd",
    measurementId: "G-6MK9FP6C01"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
