angular.module("components")        
    .component("veDadosJ2", {
        template:
            '<label class="lnomeDoJ2">Nome: {{$root.nameOfP2}}</label>' +
            '<label class="lnickDoJ2">Nick: {{$root.nickOfP2}}</label>' +
            '<label class="lidadeDoJ2">Idade: {{$root.ageOfP2}}</label>'
    })