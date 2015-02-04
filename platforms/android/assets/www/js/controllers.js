angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.browse = function(v) {
	   
	   window.open(v, '_blank', 'location=yes');
	  // window.open(v, "_system", "location=yes");
	}

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

	
		.controller("sport_News", ['$scope','FeedService', function ($scope,Feed) {    
			 window.plugins.AdMob.createInterstitialView();
			   window.plugins.AdMob.showInterstitialAd();
			   $scope.feedSrc='http://www.uefa.com/rssfeed/trainingground/grassroots/news.xml';
		       Feed.parseFeed($scope.feedSrc).then(function(res){
		           
		           $scope.feeds=res.data.responseData.feed.entries;
		       });
		   
		}])
		.controller("League_News", ['$scope','FeedService', function ($scope,Feed) {    
	    $scope.feedSrc='http://www.uefa.com/rssfeed/uefachampionsleague/rss.xml';
	    window.plugins.AdMob.createInterstitialView();
		   window.plugins.AdMob.showInterstitialAd();
		   Feed.parseFeed($scope.feedSrc).then(function(res){
	           
	           $scope.feeds=res.data.responseData.feed.entries;
	       });
	   
	}])
	.controller("AppsNews", ['$scope','FeedService', function ($scope,Feed) {    
	    $scope.feedSrc='http://feeds.hindustantimes.com/HT-Apps-updates';
	       Feed.parseFeed($scope.feedSrc).then(function(res){
	           
	           $scope.feeds=res.data.responseData.feed.entries;
	       });
	   
	}])
.controller("Hackerews", ['$scope','FeedService', function ($scope,Feed) {    
    $scope.feedSrc='http://news.ycombinator.com/rss';
    window.plugins.AdMob.createInterstitialView();
	   window.plugins.AdMob.showInterstitialAd();
	   Feed.parseFeed($scope.feedSrc).then(function(res){
           
           $scope.feeds=res.data.responseData.feed.entries;
       });
   
}])

.controller("CNNNews", ['$scope','FeedService', function ($scope,Feed) {    
    $scope.feedSrc='http://rss.cnn.com/rss/cnn_topstories.rss';
    window.plugins.AdMob.createInterstitialView();
	   window.plugins.AdMob.showInterstitialAd();
 
	   Feed.parseFeed($scope.feedSrc).then(function(res){
           
           $scope.feeds=res.data.responseData.feed.entries;
       });
   
}])

.controller("homeNews", ['$scope','FeedService', function ($scope,Feed) {    
	navigator.globalization.getPreferredLanguage(
			  function (language) {
				  $scope.feedSrc= 'http://news.google.com/?output=rss&hl='+(language.value).split("-")[0] ;
			        Feed.parseFeed($scope.feedSrc).then(function(res){
			            
			            $scope.feeds=res.data.responseData.feed.entries;
			        });
			
			 }); 
}])
.controller("latestNews", ['$scope','FeedService', function ($scope,Feed) {    
     $scope.feedSrc='http://feeds2.feedburner.com/Mashable';
        Feed.parseFeed($scope.feedSrc).then(function(res){
            
            $scope.feeds=res.data.responseData.feed.entries;
        });
    
}])
.controller("share", ['$scope','FeedService', function ($scope,Feed) {    
window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint('WhatsNews make me always updated', 
			null /* img */,
			'https://play.google.com/store/apps/details?id=com.kaaboura.news'
			, 'WhatsNews make me always updated!', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
	/*window.plugins.socialsharing.share('I am playing CandyMonster',
			'WhatsNews make me always updated',
			'https://dl.dropboxusercontent.com/u/53278787/WhatsNews/icon.png',
			'https://play.google.com/store/apps/details?id=com.chokri.WhatsNews');*/
    
}])




.factory('FeedService',['$http',function($http){
 
    return {
        parseFeed : function(url){
         return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}])

 
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
