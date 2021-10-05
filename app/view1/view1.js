'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    template:
  '<titles></titles>'+
  '<div class="imgdiv1" ng-show="totalP1 != 0 && totalP2 != 0"'+
      'ng-style="{\'background-color\' : value == 1 ? \'orange\' : (value == 2 ? \'orangered\' : value == 3 ? \'yellow\' : value == 4 ? \'yellowgreen\' : value == 5 ? \'salmon\' : value == 6 ? \'tomato\' : playerSort1 > playerSort2 ? \'green\' : playerSort1 < playerSort2 ? \'red\' : \'gray\')}">'+
      '<div ng-show="showData" class="dadosj1">'+
          '<see-data-player1></see-data-player1>'+
      '</div>'+
      '<div class="j1">'+
          '<p1></p1>'+
      '</div>'+
      '<button ng-click="shoData()" ng-hide="!isRegistered" class="jogar">{{ showData ? "Ok" : "Ver dados" }}</button>'+
      '<div ng-show="showRegistration || $root.showRegistrationP1" class="cadjog1">'+
          '<register-player1></register-player1>'+
      '</div>'+
  '</div>'+
  '<btn-restart></btn-restart>'+
  '<div class="imgdiv2" ng-show="totalP1 != 0 && totalP2 != 0"'+
      'ng-style="{\'background-color\' : value == 1 ? \'aqua\' : (value == 2 ? \'aquamarine\' : value == 3 ? \'cyan\' : value == 4 ? \'lightskyblue\' : value == 5 ? \'slateblue\' : value == 6 ? \'steelblue\': playerSort1 < playerSort2 ? \'green\' : playerSort1 > playerSort2 ? \'red\' : \'gray\')}">'+
      '<div class="j2">'+
          '<p2></p2>'+
      '</div>'+

      '<div ng-show="showData" class="dadosj2">'+
          '<see-data-player2></see-data-player2>'+
      '</div>'+
      '<div class="botoes">'+
          '<button ng-click="showRegis(); checkRegistration()" ng-disabled="isRegistered"'+
              'class="cadastro">{{showRegistration ? "Ok" : "Cadastrar Jogadores"}}</button>'+
      '</div>'+
      '<div ng-show="showRegistration || $root.showRegistrationP2" class="cadjog2">'+
          '<register-player2></register-player2>'+
      '</div>'+
  '</div>'
  });
}])

.controller('View1Ctrl', [function() {

}])

