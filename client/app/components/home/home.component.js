import template from './home.html';
import controller from './home.controller'
import {$firebaseAuthService} from 'angularfire';
import './home.styl'

let homeComponent = {
  restrict: 'E',
  bindings: {user: '<'},
  template,
  controller
};

export default homeComponent;
