import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

if (environment.production) {
  enableProdMode();
}

firebase.initializeApp(environment.firebase);

// initialize firebase before app is initialized in order to make sure the
// firebase is initialized before app and render the correct
// auth pipe and check if te user is authenticated already

let appIbnit = false;
firebase.auth().onAuthStateChanged(() => {
  if (!appIbnit) {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }

  appIbnit = true;
});
