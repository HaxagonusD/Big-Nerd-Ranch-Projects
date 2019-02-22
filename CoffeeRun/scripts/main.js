(function (window){
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var datastore = App.DataStore;
  var mytruck = new Truck('ncc-171', new DataStore());
  window.myTruck = myTruck;
})(window);
