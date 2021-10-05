angular.module("components")               
    .component("main", {
    template:
    '<titles></titles>'+
    '<div class="imgdiv1" ng-show="$root.totalP1 != 0 && $root.totalP2 != 0"'+
        'ng-style="{\'background-color\' : $root.value == 1 ? \'orange\' : $root.value == 2 ? \'orangered\' : $root.value == 3 ? \'yellow\' : $root.value == 4 ? \'yellowgreen\' : $root.value == 5 ? \'salmon\' : $root.value == 6 ? \'tomato\' : $root.playerSort1 > $root.playerSort2 ? \'green\' : $root.playerSort1 < $root.playerSort2 ? \'red\' : \'gray\'}">'+
        '<div ng-show="$root.showData" class="dadosj1">'+
            '<see-data-player1></see-data-player1>'+
        '</div>'+
        '<div class="j1">'+
            '<p1></p1>'+
        '</div>'+
        '<button ng-click="$root.shoData()" ng-hide="!$root.isRegistered" class="jogar">{{ $root.showData ? "Ok" : "Ver dados" }}</button>'+
        '<div ng-show="$root.showRegistration || $root.showRegistrationP1" class="cadjog1">'+
            '<register-player1></register-player1>'+
        '</div>'+
    '</div>'+
    '<btn-restart></btn-restart>'+
    '<div class="imgdiv2" ng-show="$root.totalP1 != 0 && $root.totalP2 != 0"'+
        'ng-style="{\'background-color\' : $root.value == 1 ? \'aqua\' : $root.value == 2 ? \'aquamarine\' : $root.value == 3 ? \'cyan\' : $root.value == 4 ? \'lightskyblue\' : $root.value == 5 ? \'slateblue\' : $root.value == 6 ? \'steelblue\': $root.playerSort1 < $root.playerSort2 ? \'green\' : $root.playerSort1 > $root.playerSort2 ? \'red\' : \'gray\'}">'+
        '<div class="j2">'+
            '<p2></p2>'+
        '</div>'+

        '<div ng-show="$root.showData" class="dadosj2">'+
            '<see-data-player2></see-data-player2>'+
        '</div>'+
        '<div class="botoes">'+
            '<button ng-click="$root.showRegis(); $root.checkRegistration()" ng-disabled="$root.isRegistered"'+
                'class="cadastro">{{$root.showRegistration ? "Ok" : "Cadastrar Jogadores"}}</button>'+
        '</div>'+
        '<div ng-show="$root.showRegistration || $root.showRegistrationP2" class="cadjog2">'+
            '<register-player2></register-player2>'+
        '</div>'+
    '</div>'
    })