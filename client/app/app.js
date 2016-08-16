import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiGmapgoogleMaps from 'angular-google-maps';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import firebase from 'firebase';
import { initializeFirebaseApp, ApplicationConfig } from './config';
import 'normalize.css';

console.log(uiGmapgoogleMaps);

const config = initializeFirebaseApp();

angular.module('app', [
    uiRouter,
    Common,
    Components,
    // uiGmapgoogleMaps,
    'firebase'
  ])
  .constant('firebase', firebase)
  .constant('FirebaseUrl', config.databaseURL)
  .component('app', AppComponent)
  .config(ApplicationConfig)
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  });