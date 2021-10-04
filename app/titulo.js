angular.module("components")        
    .component("titles", {
        template:
            '<h1 class="tjd">Jogo de Dados</h1>' +
            '<h1 ng-if="$root.totalP2 == 0" class="tv">O {{$root.nickOfP1}} Venceu o Jogo!</h1>' +
            '<h1 ng-if="$root.totalP1 == 0" class="tv">O {{$root.nickOfP2}} Venceu o Jogo!</h1>' +
            '<div ng-show="$root.showWinner && $root.totalP1 != 0 && $root.totalP2 != 0" class="ps">' +
            '<span ng-if="$root.playerSort1 > $root.playerSort2" class="pj1">O {{$root.nickOfP1}} venceu</span>' +
            '<span ng-if="$root.playerSort1 == $root.playerSort2" class="pe">Empate</span>' +
            '<span ng-if="$root.playerSort1 < $root.playerSort2" class="pj2">O {{$root.nickOfP2}} venceu</span>' +
            '</div>'
    })