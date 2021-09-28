angular.module("meuModulo", [])
    .controller("indexController", function ($scope) {
        $scope.totalJ1 = 10;
        $scope.totalJ2 = 10;
        $scope.valor = 0;
        $scope.sJ1 = 0;
        $scope.sJ2 = 0;      
        $scope.controleIf = 1;
        $scope.mc = 1;
        $scope.md = 1;
        $scope.controle = true;
        $scope.mostraVencedor = false;
        $scope.mostraDados = false;
        $scope.taCadastrado = false;
        $scope.cadOuOk = "Cadastrar jogadores";
        $scope.dadoOuOk = "Ver dados";
        $scope.jogOuPara = "Jogar";
        $scope.intervalo = setInterval(function () {
            if ($scope.valor > 5)
                $scope.valor = 0;

            $scope.valor++;
            $scope.$digest();
        }, 1000);

        $scope.paraImagem = function () {
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
                $scope.mostraCadJ1 = false;
                $scope.mostraCadJ2 = false;
                $scope.verificaCadastro();
                $scope.cadOuOk = "Cadastrar jogadores";
            }
        }

        $scope.verificaCadastro = function () {            
            if($scope.nomeDoJ1 != undefined && $scope.nickDoJ1 != undefined && $scope.idadeDoJ1 != undefined && $scope.nomeDoJ2 != undefined && $scope.nickDoJ2 != undefined && $scope.idadeDoJ2 != undefined)
                $scope.taCadastrado = true;
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

        $scope.sorteio1 = function () {
            $scope.valor = 7;
            $scope.mostraVencedor = false;
            if ($scope.controleIf == 1) {
                $scope.controleIf = 0;
                $scope.jogOuPara = "Parar";
                $scope.sorteioJ1 = setInterval(function () {
                    $scope.sJ1 = Math.floor(Math.random() * 6 + 1);
                    $scope.$digest();
                }, 100);
            }
            else {
                $scope.controle = false;
                $scope.jogOuPara = "Jogar";
                clearInterval($scope.sorteioJ1);
            }
        }

        $scope.sorteio2 = function () {
            if ($scope.controleIf == 0) {
                $scope.controleIf = 1;
                $scope.jogOuPara = "Parar";
                $scope.sorteioJ2 = setInterval(function () {
                    $scope.sJ2 = Math.floor(Math.random() * 6 + 1);
                    $scope.$digest();
                }, 100);
            }
            else {
                $scope.controle = true;
                $scope.jogOuPara = "Jogar";
                clearInterval($scope.sorteioJ2);
                $scope.veVencedor();
                $scope.mostraVencedor = true;
            }
        }

        $scope.veVencedor = function () {
            if ($scope.sJ1 > $scope.sJ2)
                $scope.totalJ2--;

            else if ($scope.sJ1 < $scope.sJ2)
                $scope.totalJ1--;
        }

        $scope.reset = function () {
            $scope.totalJ1 = 10;
            $scope.totalJ2 = 10;
            $scope.sJ1 = 0;
            $scope.sJ2 = 0;
        }

        $scope.limpaCadJ1 = function () {
            $scope.nomeDoJ1 = "";
            $scope.nickDoJ1 = "";
            $scope.idadeDoJ1 = "";
        }

        $scope.limpaCadJ2 = function () {
            $scope.nomeDoJ2 = "";
            $scope.nickDoJ2 = "";
            $scope.idadeDoJ2 = "";
        }

    });