angular.module("componentes")        
     .component("j1", {
        template:
            '<p class="totalj1" style="color: black;">Total:{{$root.totalJ1}}</p>' +
            '<div>' +
            '<img ng-if="$root.valor == 0" src="pictures/dado0.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.valor == 1 || $root.sJ1 == 1" src="pictures/dado1.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.valor == 2 || $root.sJ1 == 2" src="pictures/dado2.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.valor == 3 || $root.sJ1 == 3" src="pictures/dado3.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.valor == 4 || $root.sJ1 == 4" src="pictures/dado4.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.valor == 5 || $root.sJ1 == 5" src="pictures/dado5.png" class="imgdado1"><br><br>' +
            '<img ng-if="$root.valor == 6 || $root.sJ1 == 6" src="pictures/dado6.png" class="imgdado1"><br><br>' +
            '</div>' +
            '<button ng-click="$root.paraImagem(); $root.sorteio1()" ng-disabled="$root.taCadastrado == false || $root.controle == false"' +
            'class="bj1">{{$root.jogOuPara}}</button>'
    })