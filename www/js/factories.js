angular.module('there.factories', [])

.factory("Appointments", function($firebaseArray) {
  var appointmentsRef = new Firebase("https://there4you.firebaseio.com/appointments");
  return $firebaseArray(appointmentsRef);
})
