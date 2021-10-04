angular.module("myApp")
    .controller("indexController", function ($scope, $rootScope) {
        $rootScope.totalJ1 = 10;
        $rootScope.totalJ2 = 10;
        $rootScope.valor = 0;
        $rootScope.sJ1 = 0;
        $rootScope.sJ2 = 0;
        $scope.controleIf = true;
        $rootScope.controle = true;
        $rootScope.mostraVencedor = false;
        $scope.mostraDados = false;
        $rootScope.taCadastrado = false;
        $rootScope.mostraCadJ1 = false;
        $rootScope.mostraCadJ2 = false;
        $rootScope.jogOuPara = false;

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
            $scope.mostraCadastro = !$scope.mostraCadastro;
        }

        $scope.verificaCadastro = function () {
            if ($rootScope.nomeDoJ1 != undefined && $rootScope.nickDoJ1 != undefined && $rootScope.idadeDoJ1 != undefined && $rootScope.nomeDoJ2 != undefined && $rootScope.nickDoJ2 != undefined && $rootScope.idadeDoJ2 != undefined)
                $rootScope.taCadastrado = true;
        }

        $scope.mostraData = function () {
            $scope.mostraDados = !$scope.mostraDados;
        }

        $rootScope.sorteio = function (jogador) {
            $rootScope.valor = 7;
            $rootScope.mostraVencedor = false;
            if (!$rootScope.jogOuPara) {

                $scope.sorteioJ = setInterval(function () {
                    if (jogador == 1) {
                        $rootScope.sJ1 = Math.floor(Math.random() * 6 + 1);
                        console.log(jogador);
                        console.log($rootScope.sJ1);
                        console.log($rootScope.sJ2);
                        $scope.$digest();
                    }
                    else {
                        $rootScope.sJ2 = Math.floor(Math.random() * 6 + 1);
                        console.log(jogador);
                        console.log($rootScope.sJ1);
                        console.log($rootScope.sJ2);
                        $scope.$digest();

                    }
                }, 100);
            }
            else {
                $rootScope.controle = !$rootScope.controle;
                clearInterval($scope.sorteioJ);
            }
            $rootScope.jogOuPara = !$rootScope.jogOuPara;
            if(jogador == 2 && !$rootScope.jogOuPara){ 
                $scope.calcWinner();
                $rootScope.mostraVencedor = true;
            }
        }       

        $scope.calcWinner = function () {
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