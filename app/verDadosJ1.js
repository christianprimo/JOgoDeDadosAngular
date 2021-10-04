angular.module("components")        
    .component("seeDataPlayer1", {
        template:
            '<label class="lnomeDoJ1">Nome: {{$root.nameOfP1}}</label>' +
            '<label class="lnickDoJ1">Nick: {{$root.nickOfP1}}</label>' +
            '<label class="lidadeDoJ1">Idade: {{$root.ageOfP1}}</label>'
    })