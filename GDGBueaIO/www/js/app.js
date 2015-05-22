// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
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

  .state('app.speaker', {
    url: "/speaker",
    views: {
      'menuContent': {
        templateUrl: "templates/speaker.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.speakerdetail', {
    url: "/speaker/:speakerId",
    views: {
      'menuContent': {
        templateUrl: "templates/speakerdetail.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.organizer', {
    url: "/organizer",
    views: {
      'menuContent': {
        templateUrl: "templates/organizer.html"
      }
    }
  })
    
  .state('app.wnh', {
    url: "/wnh",
    views: {
      'menuContent': {
        templateUrl: "templates/wnh.html"
      }
    }
  })
    .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
      }
    }
  })

    .state('app.venue', {
    url: "/venue",
    views: {
      'menuContent': {
        templateUrl: "templates/venue.html",
      }
    }
  })

    .state('app.schedule', {
      url: "/schedule",
      views: {
        'menuContent': {
          templateUrl: "templates/schedule.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule');
});
