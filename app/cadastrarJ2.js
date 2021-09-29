angular.module("componentes")    
    .component("cadastrarJog2", {
        template:
            '<h4 class="h4j2">Jogador 2</h4>' +
            '<input ng-model="$root.nomeDoJ2" type="text" class="nomej2" placeholder="Digite seu nome">' +
            '<input ng-model="$root.nickDoJ2" type="text" class="nickj2" placeholder="Digite seu nick name">' +
            '<input ng-model="$root.idadeDoJ2" type="number" class="idadej2" placeholder="Digite sua idade">'
    })