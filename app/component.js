angular.module("meuModulo")
    .controller("indexController", function ($scope, $rootScope) {
        $rootScope.totalJ1 = 10;
        $rootScope.totalJ2 = 10;
        $rootScope.valor = 0;
        $rootScope.sJ1 = 0;
        $rootScope.sJ2 = 0;        
        $scope.controleIf = 1;
        $scope.mc = 1;
        $scope.md = 1;
        $rootScope.controle = true;
        $rootScope.mostraVencedor = false;
        $scope.mostraDados = false;
        $rootScope.taCadastrado = false;
        $rootScope.mostraCadJ1 = false;
        $rootScope.mostraCadJ2 = false;
        $scope.cadOuOk = "Cadastrar jogadores";
        $scope.dadoOuOk = "Ver dados";
        $rootScope.jogOuPara = "Jogar";
        $scope.intervalo = setInterval(function () {
            if ($rootScope.valor > 5)
                $rootScope.valor = 0;

            $rootScope.valor++;
            $scope.$digest();
        }, 1000);

        $rootScope.paraImagem = function () {
            clearInterval($scope.intervalo);
        }

        $scope.mostraCad = function () {
            if ($scope.mc == 1) {
                $scope.mc = 0;
                $scope.mostraCadastro = true;
                $scope.cadOuOk = "Ok";
            }
            else {
                $scope.mostraCadastro = false;
                $rootScope.mostraCadJ1 = false;
                $rootScope.mostraCadJ2 = false;
                $scope.verificaCadastro();
                $scope.cadOuOk = "Cadastrar jogadores";
            }
        }

        $scope.verificaCadastro = function () {
            if ($rootScope.nomeDoJ1 != undefined && $rootScope.nickDoJ1 != undefined && $rootScope.idadeDoJ1 != undefined && $rootScope.nomeDoJ2 != undefined && $rootScope.nickDoJ2 != undefined && $rootScope.idadeDoJ2 != undefined)
                $rootScope.taCadastrado = true;
        }

        $scope.mostraData = function () {
            if ($scope.md == 1) {
                $scope.mostraDados = true;
                $scope.dadoOuOk = "Ok";
                $scope.md = 0;
            }
            else {
                $scope.mostraDados = false;
                $scope.dadoOuOk = "Ver Dados";
                $scope.md = 1;
            }
        }

        $rootScope.sorteio1 = function () {
            $rootScope.valor = 7;
            $rootScope.mostraVencedor = false;
            if ($scope.controleIf == 1) {
                $scope.controleIf = 0;
                $rootScope.jogOuPara = "Parar";
                $scope.sorteioJ1 = setInterval(function () {
                    $rootScope.sJ1 = Math.floor(Math.random() * 6 + 1);
                    $scope.$digest();
                }, 100);
            }
            else {
                $rootScope.controle = false;
                $rootScope.jogOuPara = "Jogar";
                clearInterval($scope.sorteioJ1);
            }
        }

        $rootScope.sorteio2 = function () {
            if ($scope.controleIf == 0) {
                $scope.controleIf = 1;
                $rootScope.jogOuPara = "Parar";
                $scope.sorteioJ2 = setInterval(function () {
                    $rootScope.sJ2 = Math.floor(Math.random() * 6 + 1);
                    $scope.$digest();
                }, 100);
            }
            else {
                $rootScope.controle = true;
                $rootScope.jogOuPara = "Jogar";
                clearInterval($scope.sorteioJ2);
                $scope.veVencedor();
                $rootScope.mostraVencedor = true;
            }
        }

        $scope.veVencedor = function () {
            if ($rootScope.sJ1 > $rootScope.sJ2)
                $rootScope.totalJ2--;

            else if ($rootScope.sJ1 < $rootScope.sJ2)
                $rootScope.totalJ1--;
        }

        $rootScope.reset = function () {
            $rootScope.totalJ1 = 10;
            $rootScope.totalJ2 = 10;
            $rootScope.sJ1 = 0;
            $rootScope.sJ2 = 0;
        }

        $rootScope.limpaCadJ1 = function () {
            $rootScope.nomeDoJ1 = "";
            $rootScope.nickDoJ1 = "";
            $rootScope.idadeDoJ1 = "";
        }

        $rootScope.limpaCadJ2 = function () {
            $rootScope.nomeDoJ2 = "";
            $rootScope.nickDoJ2 = "";
            $rootScope.idadeDoJ2 = "";
        }

    });

angular.module("cadastro1", []).
    component("cadastrarJog1", {
        template:
            '<h4 class="h4j1">Jogador 1</h4>' +
            '<input ng-model="$root.nomeDoJ1" type="text" class="nomej1" placeholder="Digite seu nome">' +
            '<input ng-model="$root.nickDoJ1" type="text" class="nickj1" placeholder="Digite seu nick name">' +
            '<input ng-model="$root.idadeDoJ1" type="number" class="idadej1" placeholder="Digite sua idade">'
    })

angular.module("cadastro2", []).
    component("cadastrarJog2", {
        template:
            '<h4 class="h4j2">Jogador 2</h4>' +
            '<input ng-model="$root.nomeDoJ2" type="text" class="nomej2" placeholder="Digite seu nome">' +
            '<input ng-model="$root.nickDoJ2" type="text" class="nickj2" placeholder="Digite seu nick name">' +
            '<input ng-model="$root.idadeDoJ2" type="number" class="idadej2" placeholder="Digite sua idade">'
    })

angular.module("verDadosJ1", []).
    component("veDadosJ1", {
        template:
            '<label class="lnomeDoJ1">Nome: {{$root.nomeDoJ1}}</label>' +
            '<label class="lnickDoJ1">Nick: {{$root.nickDoJ1}}</label>' +
            '<label class="lidadeDoJ1">Idade: {{$root.idadeDoJ1}}</label>'
    })

angular.module("verDadosJ2", []).
    component("veDadosJ2", {
        template:
            '<label class="lnomeDoJ2">Nome: {{$root.nomeDoJ2}}</label>' +
            '<label class="lnickDoJ2">Nick: {{$root.nickDoJ2}}</label>' +
            '<label class="lidadeDoJ2">Idade: {{$root.idadeDoJ2}}</label>'
    })

angular.module("titulos", []).
    component("titulo", {
        template:
        '<h1 class="tjd">Jogo de Dados</h1>'+
        '<h1 ng-if="$root.totalJ2 == 0" class="tv">O {{$root.nickDoJ1}} Venceu o Jogo!</h1>'+
        '<h1 ng-if="$root.totalJ1 == 0" class="tv">O {{$root.nickDoJ2}} Venceu o Jogo!</h1>'+
        '<div ng-show="$root.mostraVencedor && $root.totalJ1 != 0 && $root.totalJ2 != 0" class="ps">'+
            '<span ng-if="$root.sJ1 > $root.sJ2" class="pj1">O {{$root.nickDoJ1}} venceu</span>'+
            '<span ng-if="$root.sJ1 == $root.sJ2" class="pe">Empate</span>'+
            '<span ng-if="$root.sJ1 < $root.sJ2" class="pj2">O {{$root.nickDoJ2}} venceu</span>'+
        '</div>'
    })

angular.module("jogador1", []).
    component("j1", {
        template:
        '<p class="totalj1" style="color: black;">Total:{{$root.totalJ1}}</p>'+
        '<div class="d-flex flex-row justify-content-center align-items-center">'+
            '<img ng-hide="$root.valor > 0" src="../pictures/dado0.png" class="imgdado1"><br><br>'+
            '<img ng-if="$root.valor == 1 || $root.sJ1 == 1" src="../pictures/dado1.png" class="imgdado1"><br><br>'+
            '<img ng-if="$root.valor == 2 || $root.sJ1 == 2" src="../pictures/dado2.png" class="imgdado1"><br><br>'+
            '<img ng-if="$root.valor == 3 || $root.sJ1 == 3" src="../pictures/dado3.png" class="imgdado1"><br><br>'+
            '<img ng-if="$root.valor == 4 || $root.sJ1 == 4" src="../pictures/dado4.png" class="imgdado1"><br><br>'+
            '<img ng-if="$root.valor == 5 || $root.sJ1 == 5" src="../pictures/dado5.png" class="imgdado1"><br><br>'+
            '<img ng-if="$root.valor == 6 || $root.sJ1 == 6" src="../pictures/dado6.png" class="imgdado1"><br><br>'+
        '</div>'+
        '<button ng-click="$root.paraImagem(); $root.sorteio1()" ng-disabled="$root.taCadastrado == false || $root.controle == false"'+
'class="bj1">{{$root.jogOuPara}}</button>'
    })

    angular.module("jogador2", []).
    component("j2", {
        template:
        '<p class="totalj2" style="color: black;">Total:{{$root.totalJ2}}</p>'+
        '<div class="d-flex flex-row justify-content-center align-items-center">'+
            '<img ng-hide="$root.valor > 0" src="../pictures/dado0.png" class="imgdado2"><br><br>'+
            '<img ng-if="$root.valor == 1 || $root.sJ2 == 1" src="../pictures/dado1.png" class="imgdado2"><br><br>'+
            '<img ng-if="$root.valor == 2 || $root.sJ2 == 2" src="../pictures/dado2.png" class="imgdado2"><br><br>'+
            '<img ng-if="$root.valor == 3 || $root.sJ2 == 3" src="../pictures/dado3.png" class="imgdado2"><br><br>'+
            '<img ng-if="$root.valor == 4 || $root.sJ2 == 4" src="../pictures/dado4.png" class="imgdado2"><br><br>'+
            '<img ng-if="$root.valor == 5 || $root.sJ2 == 5" src="../pictures/dado5.png" class="imgdado2"><br><br>'+
            '<img ng-if="$root.valor == 6 || $root.sJ2 == 6" src="../pictures/dado6.png" class="imgdado2"><br><br>'+
        '</div>'+
        '<button ng-click="$root.sorteio2()" ng-disabled="$root.controle"'+
'class="bj2">{{$root.jogOuPara}}</button>'
    })  
    
angular.module("botoesRecomecar", []).
    component("btnRecomeca", {
        template:
        '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0" ng-click="$root.reset()" class="recomecar">Recomeçar</button>'+
        '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0"'+
            'ng-click="$root.mostraCadJ1 = true; $root.taCadastrado = false; $root.limpaCadJ1(); $root.reset()" class="mudaCJ1">Mudar {{$root.nickDoJ1}}</button>'+
        '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0"'+
            'ng-click="$root.mostraCadJ2 = true; $root.taCadastrado = false; $root.limpaCadJ2(); $root.reset()" class="mudaCJ2">Mudar {{$root.nickDoJ2}}</button>'+
        '<button ng-show="$root.totalJ1 == 0 || $root.totalJ2 == 0"'+
            'ng-click="$root.mostraCadJ1 = true; $root.mostraCadJ2 = true; $root.taCadastrado = false; $root.limpaCadJ1(); $root.limpaCadJ2(); $root.reset()" class="mudaCTds">Mudar Todos</button>'
    })    