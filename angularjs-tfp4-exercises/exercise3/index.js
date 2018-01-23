angular.module('myApp', []);

angular
    .module('myApp')
    .component('avengers', {
        templateUrl: 'avengers.html',
        controllerAs: 'AvengersCtrl',
        controller: [AvengersController]
    });

/* TODO: Implement Avengers either as a factory or service (only uncomment and implement one of options listed below)
*  For both options, use the $http.get() function to read in the data.json file. Make sure to inject the $http service into Avengers, and note that $http.get() will have a .then() function with a callback
*/

//Option 1 - Implement Avengers as a factory
/*angular.module('myApp').factory('Avengers', function() {
  
});*/

//Option 2 - Implement Avengers as a service
angular
    .module('myApp')
    .service('Avengers',Avengers);

function Avengers ($http){
    const self = this;
    $http.get('/data.json')
    .then(function(response){
        this.cast = response.data ;
    })
}
function AvengersController(){
    this.avengers = Avengers;

}
