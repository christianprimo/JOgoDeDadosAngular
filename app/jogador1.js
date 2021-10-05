angular.module("components")        
     .component("p1", {
        template:
            '<p class="totalP1" style="color: black;">Total:{{$root.totalP1}}</p>' +
            '<div>' +
            '<img ng-if="$root.value == 0" src="pictures/dado0.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.value == 1 || $root.playerSort1 == 1" src="pictures/dado1.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.value == 2 || $root.playerSort1 == 2" src="pictures/dado2.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.value == 3 || $root.playerSort1 == 3" src="pictures/dado3.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.value == 4 || $root.playerSort1 == 4" src="pictures/dado4.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.value == 5 || $root.playerSort1 == 5" src="pictures/dado5.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.value == 6 || $root.playerSort1 == 6" src="pictures/dado6.png" class="imgdado1"><br><br>' +
            '</div>' +                        
            '<button ng-click="$root.stopImage(); $root.sort(1)" ng-disabled="!$root.isRegistered || !$root.controlPlayer"' +
            'class="bj1">{{$root.rollDice ? "Parar" : "Jogar"}}</button>',
            
    })