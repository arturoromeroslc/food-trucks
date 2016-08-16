import _ from 'lodash';

class HomeController {
    constructor($scope, $http, rx, $firebaseArray, $firebaseAuthService, firebase, Instagram) {
        'ngInject';
        this.message = 'The latest from the blog';
        this.$firebaseAuthService = $firebaseAuthService;
        this.Instagram = Instagram;
        // this.intagramUser = this.getInstagramUsers();

        let ref = firebase.database().ref('/vendors');
        this.data = $firebaseArray(ref)
        console.log(this.data);

        this.$scope = $scope;
        this.$http = $http;
        this.rx = rx;
        this.search = '';
        this.results = [];

    }

    getInstagramUsers() {
        this.Instagram.getInstagramUser();
    }

    $onInit() {
        this.$scope.$createObservableFunction('update')
            .debounce(400)
            .map(keyword => keyword.trim())
            .filter(keyword => keyword.length > 0)
            .distinctUntilChanged()
            .map(keyword => this.searchGitHub.call(this, keyword))
            .switch()
            .digest(this.$scope, 'suggestions')
            .subscribe();
        
        this.data.$loaded().then(function() {
            this.foodCategories = _.map(this.data, 'type');
        }.bind(this))
    }

    searchGitHub(term) {
        console.log(this, term);
        var apiUrl = 'https://api.github.com/search/users?q=';

        return this.rx.Observable.create(function(observer) {
                fetch(apiUrl + term)
                    .then(res => res.json())
                    .then(json => {
                        observer.onNext(json);
                        observer.onCompleted();
                    }).catch(observer.onError);
            })
            .map(json => {
                return json.items.map(item => item.login);
            });
    }
}

export default HomeController;