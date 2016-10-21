angular.module('TshirtSwag', ['ui.router'])
  .controller('AllTshirtsController', AllTshirtsController)
  .controller('SingleTshirtController', SingleTshirtController)
  .config(['$stateProvider', '$urlRouterProvider', router])


function router($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('tshirts', { //all tshirts
      url: '/',
      templateUrl: 'templates/tshirts.html',
      controller: 'AllTshirtsController as atc'
    })
    .state('tshirt', { //single tshirt
      url: '/tshirts/:id',
      templateUrl: 'templates/tshirt.html',
      controller: 'SingleTshirtController as stc'
    })
}

AllTshirtsController.$inject = ['$http']

function AllTshirtsController($http) {
  var vm = this

  var apiUrl = '/api'

  $http.get(apiUrl)
    .success(function(data) {
      console.log(data)
      vm.tshirts = data
    })

    vm.addTshirt = function() {
      console.log(vm.newTshirt)
      $http.post(apiUrl, vm.newTshirt)
        .success(function(data) {
          vm.tshirts.push(data.tshirt)
        })
    }
}

SingleTshirtController.$inject = ['$http', '$stateParams']

function SingleTshirtController($http, $stateParams) {
  var vm = this
  console.log("connected")
  var apiUrl = '/api/'

  $http.get(apiUrl + $stateParams.id)
    .success(function(data) {
      console.log(data)
      vm.tshirt = data
    })
}
