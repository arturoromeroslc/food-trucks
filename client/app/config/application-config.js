export function ApplicationConfig($firebaseRefProvider, FirebaseUrl, $stateProvider) {
  $firebaseRefProvider.registerUrl({
    default: FirebaseUrl
  });
  
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home user="$resolve.user"></home>',
      controller: ($scope, user) => {
          'ngInject';
          $scope.$resolve = {user};
      },
      resolve: {
        user : $firebaseAuthService => $firebaseAuthService.$waitForSignIn()
      }
    });
}
ApplicationConfig.$inject = ['$firebaseRefProvider', 'FirebaseUrl', '$stateProvider'];