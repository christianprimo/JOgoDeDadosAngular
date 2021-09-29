angular.module("componentes")        
    .component("veDadosJ1", {
        template:
            '<label class="lnomeDoJ1">Nome: {{$root.nomeDoJ1}}</label>' +
            '<label class="lnickDoJ1">Nick: {{$root.nickDoJ1}}</label>' +
            '<label class="lidadeDoJ1">Idade: {{$root.idadeDoJ1}}</label>'
    })