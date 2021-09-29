angular.module("componentes")               
    .component("btnRecomeca", {
        template:
            '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0" ng-click="$root.reset()" class="recomecar">Recomeçar</button>' +
            '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0"' +
            'ng-click="$root.mostraCadJ1 = true; $root.taCadastrado = false; $root.limpaCadJ1(); $root.reset()" class="mudaCJ1">Mudar {{$root.nickDoJ1}}</button>' +
            '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0"' +
            'ng-click="$root.mostraCadJ2 = true; $root.taCadastrado = false; $root.limpaCadJ2(); $root.reset()" class="mudaCJ2">Mudar {{$root.nickDoJ2}}</button>' +
            '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0"' +
            'ng-click="$root.mostraCadJ1 = true; $root.mostraCadJ2 = true; $root.taCadastrado = false; $root.limpaCadJ1(); $root.limpaCadJ2(); $root.reset()" class="mudaCTds">Mudar Todos</button>'
    })