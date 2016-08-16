import TruckModule from './truck'
import TruckController from './truck.controller';
import TruckComponent from './truck.component';
import TruckTemplate from './truck.html';

describe('Truck', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TruckModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TruckController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TruckTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TruckComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TruckTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TruckController);
      });
  });
});
