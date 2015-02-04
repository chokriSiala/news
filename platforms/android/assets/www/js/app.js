


angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	document.addEventListener("deviceready", function() {
		  initAd();
		  window.plugins.AdMob.createBannerView();
		  window.plugins.AdMob.createInterstitialView();
		   window.plugins.AdMob.showInterstitialAd();
		  
	  });
	$ionicPlatform.ready(function() {
	  
  
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

   .state('app.latest_News', {
      url: "/latest_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/latest_News.html",
          controller:'latestNews'
        }
      }
    })
    
    .state('app.home_News', {
      url: "/home_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/home_News.html",
          controller:'homeNews'
        }
      }
    })

 
    .state('app.CNN_News', {
      url: "/CNN_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/CNN_News.html",
          controller: 'CNNNews'
        }
      }
    })
.state('app.Hacker_News', {
      url: "/Hacker_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/Hacker_News.html",
          controller: 'Hackerews'
        }
      }
    })
    .state('app.AppsNews', {
      url: "/Apps_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/Apps_News.html",
          controller: 'AppsNews'
        }
      }
    })
     
    .state('app.League_News', {
      url: "/League_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/League_News.html",
          controller: 'League_News'
        }
      }
    })
    .state('app.sport_News', {
      url: "/sport_News",
      views: {
        'menuContent' :{
          templateUrl: "templates/sport_News.html",
          controller: 'sport_News'
        }
      }
    })
.state('app.share', {
      url: "/share",
      views: {
        'menuContent' :{
          templateUrl: "templates/League_News.html",
          controller: 'share'
        }
      }
    })
    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/latest_News');
});

