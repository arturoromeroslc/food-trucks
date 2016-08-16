import template from './truck.html';
import controller from './truck.controller';
import './truck.styl';

let truckComponent = {
  restrict: 'E',
  bindings: {
  	truck: '<'
  },
  template,
  controller
};

export default truckComponent;
