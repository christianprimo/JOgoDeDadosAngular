angular.module("componentes")
    .component("cadastrarJog1", {
        template:
            '<h4 class="h4j1">Jogador 1</h4>' +
            '<input ng-model="$root.nomeDoJ1" type="text" class="nomej1" placeholder="Digite seu nome">' +
            '<input ng-model="$root.nickDoJ1" type="text" class="nickj1" placeholder="Digite seu nick name">' +
            '<input ng-model="$root.idadeDoJ1" type="number" class="idadej1" placeholder="Digite sua idade">'
    })