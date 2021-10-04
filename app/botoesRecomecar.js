angular.module("components")               
    .component("btnRestart", {
        template:
            '<button ng-show="$root.totalP1 == 0 || $root.totalP2 == 0" ng-click="$root.reset()" class="recomecar">Recomeçar</button>' +
            '<button ng-show="$root.totalP1 == 0 || $root.totalP2 == 0"' +
            'ng-click="$root.showRegistrationP1 = true; $root.isRegistered = false; $root.limpaCadJ1(); $root.reset()" class="mudaCJ1">Mudar {{$root.nickOfP1}}</button>' +
            '<button ng-show="$root.totalP1 == 0 || $root.totalP2 == 0"' +
            'ng-click="$root.showRegistrationP2 = true; $root.isRegistered = false; $root.limpaCadJ2(); $root.reset()" class="mudaCJ2">Mudar {{$root.nickOfP2}}</button>' +
            '<button ng-show="$root.totalP1 == 0 || $root.totalP2 == 0"' +
            'ng-click="$root.showRegistrationP1 = true; $root.showRegistrationP2 = true; $root.isRegistered = false; $root.limpaCadJ1(); $root.limpaCadJ2(); $root.reset()" class="mudaCTds">Mudar Todos</button>'
    })