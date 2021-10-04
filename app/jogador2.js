angular.module("componentes")            
    .component("j2", {
        template:
            '<p class="totalj2" style="color: black;">Total:{{$root.totalJ2}}</p>' +
            '<div class="d-flex flex-row justify-content-center align-items-center">' +
            '<img ng-hide="$root.valor > 0" src="pictures/dado0.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.valor == 1 || $root.sJ2 == 1" src="pictures/dado1.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.valor == 2 || $root.sJ2 == 2" src="pictures/dado2.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.valor == 3 || $root.sJ2 == 3" src="pictures/dado3.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.valor == 4 || $root.sJ2 == 4" src="pictures/dado4.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.valor == 5 || $root.sJ2 == 5" src="pictures/dado5.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.valor == 6 || $root.sJ2 == 6" src="pictures/dado6.png" class="imgdado2"><br><br>' +
            '</div>' +
            '<button ng-click="$root.sorteio(2)" ng-disabled="$root.controle"' +
            'class="bj2">{{$root.jogOuPara ? "Parar" : "Jogar"}}</button>'
    })