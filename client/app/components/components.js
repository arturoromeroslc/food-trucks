import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import truck from './truck/truck';

let componentModule = angular.module('app.components', [
  Home,
  About,
  truck
])
  
.name;

export default componentModule;
