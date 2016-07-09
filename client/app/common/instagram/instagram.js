import angular from 'angular';
import InstagramFactory from './instagram.factory';

let instagramModule = angular.module('instagram', [])

.factory('Instagram', InstagramFactory)
  
.name;

export default instagramModule;
