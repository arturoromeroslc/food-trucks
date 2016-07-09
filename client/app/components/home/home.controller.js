class HomeController {
  constructor($firebaseAuthService, Instagram) {
  	'ngInject';
    this.message = 'The latest from the blog';
    this.$firebaseAuthService = $firebaseAuthService;
    this.Instagram = Instagram;
    this.getInstagramUsers();

  }

  getInstagramUsers() {
  	console.log(this.$firebaseAuthService);
    this.Instagram.getInstagramUser();
  }
}

HomeController.$inject = ['$firebaseAuthService', 'Instagram'];

export default HomeController;