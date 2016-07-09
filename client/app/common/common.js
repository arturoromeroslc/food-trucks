import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import instagram from './instagram/instagram';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  instagram
])
.name

export default commonModule;
