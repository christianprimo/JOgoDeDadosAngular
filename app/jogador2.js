angular.module("components")            
    .component("j2", {
        template:
            '<p class="totalP2" style="color: black;">Total:{{$root.totalP2}}</p>' +
            '<div class="d-flex flex-row justify-content-center align-items-center">' +
            '<img ng-hide="$root.value > 0" src="pictures/dado0.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.value == 1 || $root.playerSort2 == 1" src="pictures/dado1.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.value == 2 || $root.playerSort2 == 2" src="pictures/dado2.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.value == 3 || $root.playerSort2 == 3" src="pictures/dado3.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.value == 4 || $root.playerSort2 == 4" src="pictures/dado4.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.value == 5 || $root.playerSort2 == 5" src="pictures/dado5.png" class="imgdado2"><br><br>' +
            '<img ng-if="$root.value == 6 || $root.playerSort2 == 6" src="pictures/dado6.png" class="imgdado2"><br><br>' +
            '</div>' +
            '<button ng-click="$root.sort(2)" ng-disabled="$root.control"' +
            'class="bj2">{{$root.rollDice ? "Parar" : "Jogar"}}</button>'
    })