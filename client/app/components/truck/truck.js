import angular from 'angular';
import uiRouter from 'angular-ui-router';
import truckComponent from './truck.component';

let truckModule = angular.module('truck', [
    uiRouter
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('truck', {
            url: '/truck/{truckId}',
            template: '<truck truck="truck"></truck>',
            controller: function($scope, truck) {
                'ngInject';
                $scope.truck = truck;
            },
            resolve: {
	            truck: function(firebase, $firebaseObject, $stateParams) {
	                'ngInject';
                    let ref = firebase.database().ref(`/vendors/${$stateParams.truckId}`);
	                return $firebaseObject(ref);
	            }
            }
        });
})

.component('truck', truckComponent)

.name;

export default truckModule;