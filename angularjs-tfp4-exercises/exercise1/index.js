
'use strict';

angular.module('myApp', []);

/*
* The mainView component needs no changes for this exercise
*/
angular.module('myApp')
  .component('mainView', {
    templateUrl: 'mainView.html',
    controllerAs: 'MainViewCtrl', 
    controller: [function () {
      this.details = [
          {
            'name': "Harvey Dent",
            'dob': '1975'
          }, {
            'name': 'Commisioner Gordon',
            'dob': '1970'
          }
      ];
  }]
});


