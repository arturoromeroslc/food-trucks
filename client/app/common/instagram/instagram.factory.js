const InstagramFactory = ($http) => {
    let instagramUsersCalled = {};
    let instagramUsersArray = [];

    const getInstagramUser = (userId) => {
        return $http.jsonp('https://api.instagram.com/v1/users/' + '1160261459w' + '?client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
            .then(function success(res) {
            	console.log(res);
                var instagramUserData = res.data.data;
                instagramUsersCalled.userId = true;
                instagramUsersArray.push(instagramUserData);
                return instagramUsersArray;
            });
    };

    const getInstagramUsersArray = (query) => {
		return 'instagramUsersArray'
    };

    const getInstagramFeed = (userId) => {

    };

    return { getInstagramUser, getInstagramUsersArray, getInstagramFeed };
};

InstagramFactory.$inject = ['$http'];

export default InstagramFactory;