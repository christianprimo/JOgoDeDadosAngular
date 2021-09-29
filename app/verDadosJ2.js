angular.module("componentes")        
    .component("veDadosJ2", {
        template:
            '<label class="lnomeDoJ2">Nome: {{$root.nomeDoJ2}}</label>' +
            '<label class="lnickDoJ2">Nick: {{$root.nickDoJ2}}</label>' +
            '<label class="lidadeDoJ2">Idade: {{$root.idadeDoJ2}}</label>'
    })