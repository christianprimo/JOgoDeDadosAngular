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
