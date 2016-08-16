import angular from 'angular';
import firebase from 'firebase';
import homeComponent from './home.component';
import rx from 'rx-angular';

let homeModule = angular.module('home', [
    'firebase',
    'rx'
])

.component('home', homeComponent)
  
.name;

export default homeModule;
