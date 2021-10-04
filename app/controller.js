angular.module("myApp")
    .controller("indexController", function ($scope, $rootScope) {
        $rootScope.totalP1 = 10;
        $rootScope.totalP2 = 10;
        $rootScope.value = 0;
        $rootScope.playerSort1 = 0;
        $rootScope.playerSort2 = 0;
        $rootScope.control = true;
        $rootScope.showWinner = false;
        $scope.showData = false;
        $rootScope.isRegistered = false;
        $rootScope.showRegistrationP1 = false;
        $rootScope.showRegistrationP2 = false;
        $rootScope.rollDice = false;

        $scope.interval = setInterval(function () {
            if ($rootScope.value > 5)
                $rootScope.value = 0;

            $rootScope.value++;
            $scope.$digest();
        }, 1000);

        $rootScope.stopImage = function () {
            clearInterval($scope.interval);
        }

        $scope.showRegis = function () {
            $scope.showRegistration = !$scope.showRegistration;
        }

        $scope.checkRegistration = function () {
            if ($rootScope.nameOfP1 != undefined && $rootScope.nickOfP1 != undefined && $rootScope.ageOfP1 != undefined && $rootScope.nameOfP2 != undefined && $rootScope.nickOfP2 != undefined && $rootScope.ageOfP2 != undefined)
                $rootScope.isRegistered = true;
        }

        $scope.shoData = function () {
            $scope.showData = !$scope.showData;
        }

        $rootScope.sort = function (player) {
            $rootScope.value = 7;
            $rootScope.showWinner = false;
            if (!$rootScope.rollDice) {

                $scope.sortsPlayer = setInterval(function () {
                    if (player == 1) {
                        $rootScope.playerSort1 = Math.floor(Math.random() * 6 + 1);
                        $scope.$digest();
                    }
                    else {
                        $rootScope.playerSort2 = Math.floor(Math.random() * 6 + 1);
                        $scope.$digest();

                    }
                }, 100);
            }
            else {
                $rootScope.control = !$rootScope.control;
                clearInterval($scope.sortsPlayer);
            }
            $rootScope.rollDice = !$rootScope.rollDice;
            if (player == 2 && !$rootScope.rollDice) {
                $scope.calcWinner();
                $rootScope.showWinner = true;
            }
        }

        $scope.calcWinner = function () {
            if ($rootScope.playerSort1 > $rootScope.playerSort2)
                $rootScope.totalP2--;

            else if ($rootScope.playerSort1 < $rootScope.playerSort2)
                $rootScope.totalP1--;
        }

        $rootScope.reset = function () {
            $rootScope.totalP1 = 10;
            $rootScope.totalP2 = 10;
            $rootScope.playerSort1 = 0;
            $rootScope.playerSort2 = 0;
        }

        $rootScope.limpaCadJ1 = function () {
            $rootScope.nameOfP1 = "";
            $rootScope.nickOfP1 = "";
            $rootScope.ageOfP1 = "";
        }

        $rootScope.limpaCadJ2 = function () {
            $rootScope.nameOfP2 = "";
            $rootScope.nickOfP2 = "";
            $rootScope.ageOfP2 = "";
        }

    });