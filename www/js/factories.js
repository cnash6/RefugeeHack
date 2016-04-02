angular.module('there.factories', [])

.factory("Appointments", function($firebaseArray) {
  var appointmentsRef = new Firebase("https://there4you.firebaseio.com/appointments");
  return $firebaseArray(appointmentsRef);
})

.factory("Clients", function($firebaseArray) {
  var clientsRef = new Firebase("https://there4you.firebaseio.com/clients");
  return $firebaseArray(clientsRef);
})

.factory("Therapists", function($firebaseArray) {
  var therapists = new Firebase("https://there4you.firebaseio.com/therapists");
  return $firebaseArray(therapists);
})

.factory("Interpretters", function($firebaseArray) {
  var interprettersRef = new Firebase("https://there4you.firebaseio.com/interpretters");
  return $firebaseArray(interprettersRef);
})

.factory("Observers", function($firebaseArray) {
  var observersRef = new Firebase("https://there4you.firebaseio.com/observers");
  return $firebaseArray(observersRef);
})

;
