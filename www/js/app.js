// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'there' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'there.controllers' is found in controllers.js
angular.module('there', ['ionic', 'firebase', 'ti-segmented-control', 'there.factories', 'there.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

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
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.chat', {
    url: '/chat',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html'
      }
    }
  })

  .state('app.people', {
    url: '/people',
    views: {
      'menuContent': {
        templateUrl: 'templates/people.html'
      }
    }
  })

    .state('app.appointments', {
      url: '/appointments',
      views: {
        'menuContent': {
          templateUrl: 'templates/appointments.html',
          controller: 'AppointmentsCtrl'
        }
      }
    })

  .state('app.appointment', {
    url: '/appointments/:appointmentId',
    views: {
      'menuContent': {
        templateUrl: 'templates/appointment.html',
        controller: 'AppointmentCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/appointments');
})

.constant('_', _)
.constant('moment', moment)

;
