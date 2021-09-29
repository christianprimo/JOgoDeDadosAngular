angular.module("componentes")        
    .component("titulo", {
        template:
            '<h1 class="tjd">Jogo de Dados</h1>' +
            '<h1 ng-if="$root.totalJ2 == 0" class="tv">O {{$root.nickDoJ1}} Venceu o Jogo!</h1>' +
            '<h1 ng-if="$root.totalJ1 == 0" class="tv">O {{$root.nickDoJ2}} Venceu o Jogo!</h1>' +
            '<div ng-show="$root.mostraVencedor && $root.totalJ1 != 0 && $root.totalJ2 != 0" class="ps">' +
            '<span ng-if="$root.sJ1 > $root.sJ2" class="pj1">O {{$root.nickDoJ1}} venceu</span>' +
            '<span ng-if="$root.sJ1 == $root.sJ2" class="pe">Empate</span>' +
            '<span ng-if="$root.sJ1 < $root.sJ2" class="pj2">O {{$root.nickDoJ2}} venceu</span>' +
            '</div>'
    })